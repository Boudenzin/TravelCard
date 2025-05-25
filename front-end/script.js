// Importando o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCC22Aw8U2DLLR8fp97uAv04ME7YtCs7II",
    authDomain: "travelcardapp-39644.firebaseapp.com",
    projectId: "travelcardapp-39644",
    storageBucket: "travelcardapp-39644.firebasestorage.app",
    messagingSenderId: "891066049296",
    appId: "1:891066049296:web:f0d87274b021cf5c3ebb95",
    measurementId: "G-0NMGCQK95F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // db continua declarado, caso use no futuro

// --- SELEÇÃO DE ELEMENTOS DOM ---
// Modal de Detalhes dos Locais
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalImagem = document.getElementById("modal-imagem");
const modalEtiquetas = document.getElementById("modal-etiquetas");
const modalDescricao = document.getElementById("modal-descricao");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close"); // Para o modal de detalhes

// Modal de Autenticação e Formulários
const authModal = document.getElementById("auth-modal");
const modalContent = document.querySelector('.auth-modal-conteudo'); // Usado para fechar ao clicar fora
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const closeAuth = document.querySelector(".close-auth"); // Para o modal de auth

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const showSignupLink = document.getElementById("show-signup");
const showLoginLink = document.getElementById("show-login");

// Campos de formulário (opcional, mas bom para clareza se precisar validar ou limpar)
const loginEmailInput = document.getElementById("login-email");
const loginPasswordInput = document.getElementById("login-password");
const signupEmailInput = document.getElementById("signup-email");
const signupPasswordInput = document.getElementById("signup-password");

// Sidebar
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');

// Container dos cartões
const cartoesContainer = document.getElementById('cartoes-container');


// --- FUNÇÕES AUXILIARES ---

// Funções para o Modal de Detalhes dos Locais
function abrirModalDetalhes(dados) {
    modalTitulo.textContent = dados.nome;
    modalImagem.src = dados.imagem; // Certifique-se que dados.imagem existe
    modalImagem.alt = dados.nome; // Adicionar alt text dinâmico
    modalDescricao.textContent = dados.descricaoDetalhada;
    modalEtiquetas.innerHTML = dados.etiquetas.map(etiqueta =>
        `<span class="etiqueta">${etiqueta}</span>`
    ).join('');
    modalLink.href = dados.link;
    modalLink.textContent = 'Saiba Mais';

    modal.classList.remove("d-none");
    modal.classList.add("d-flex");
    document.body.classList.add("body-no-scroll");
}

function fecharModalDetalhes() {
    modal.classList.add("d-none");
    modal.classList.remove("d-flex");
    document.body.classList.remove("body-no-scroll");
}

// Funções para o Modal de Autenticação
function abrirAuthModal(modo = 'login') { // modo padrão é 'login'
    authModal.classList.remove("d-none");
    authModal.classList.add("d-flex");
    document.body.classList.add("body-no-scroll");

    if (modo === 'login') {
        loginForm.classList.remove("d-none");
        loginForm.classList.add("d-block");
        signupForm.classList.add("d-none");
        signupForm.classList.remove("d-block");
    } else if (modo === 'cadastro') {
        signupForm.classList.remove("d-none");
        signupForm.classList.add("d-block");
        loginForm.classList.add("d-none");
        loginForm.classList.remove("d-block");
    }
}

function fecharAuthModal() {
    authModal.classList.add("d-none");
    authModal.classList.remove("d-flex");
    document.body.classList.remove("body-no-scroll");
    // Opcional: Esconder explicitamente os formulários internos também
    // loginForm.classList.add("d-none");
    // loginForm.classList.remove("d-block");
    // signupForm.classList.add("d-none");
    // signupForm.classList.remove("d-block");
}


// --- EVENT LISTENERS E LÓGICA PRINCIPAL ---

// Modal de Detalhes dos Locais
closeBtn.addEventListener("click", fecharModalDetalhes);
modal.addEventListener("click", (e) => {
    if (e.target === modal) { // Verifica se o clique foi no backdrop do modal
        fecharModalDetalhes();
    }
});

// Modal de Autenticação
loginBtn.addEventListener("click", () => abrirAuthModal('login'));
signupBtn.addEventListener("click", () => abrirAuthModal('cadastro'));
closeAuth.addEventListener("click", fecharAuthModal);

showSignupLink.addEventListener("click", (e) => {
    e.preventDefault();
    abrirAuthModal('cadastro');
});

showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    abrirAuthModal('login');
});

authModal.addEventListener('click', function (event) {
    // Se clicou fora do conteúdo do modal (no backdrop)
    if (event.target === authModal && !modalContent.contains(event.target)) {
        fecharAuthModal();
    }
});

// Sidebar
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('open'); // Assume que a classe 'open' já existe e controla a visibilidade
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

document.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});


// --- LÓGICA DE AUTENTICAÇÃO ---
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupEmailInput.value;
    const senha = signupPasswordInput.value;

    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuário cadastrado:", user);
            fecharAuthModal();
            // TODO: Adicionar feedback visual para o usuário (ex: "Cadastro realizado com sucesso!")
            signupForm.reset(); // Limpa o formulário
        })
        .catch((error) => {
            console.error("Erro ao cadastrar:", error.code, error.message);
            // TODO: Adicionar feedback visual de erro para o usuário (ex: exibir error.message no formulário)
        });
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginEmailInput.value;
    const senha = loginPasswordInput.value;

    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuário logado:", user);
            fecharAuthModal();
            // TODO: Adicionar feedback visual para o usuário (ex: "Login bem-sucedido!")
            // TODO: Atualizar a UI para refletir o estado de login (ex: mostrar nome do usuário, botão de logout)
            loginForm.reset(); // Limpa o formulário
        })
        .catch((error) => {
            console.error("Erro ao fazer login:", error.code, error.message);
            // TODO: Adicionar feedback visual de erro para o usuário (ex: exibir error.message no formulário)
        });
});


// --- CARREGAMENTO E EXIBIÇÃO DOS CARDS DE LOCAIS ---
fetch('http://localhost:3000/locais')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(locais => {
        if (!cartoesContainer) {
            console.error("Elemento 'cartoes-container' não encontrado no DOM.");
            return;
        }
        cartoesContainer.innerHTML = ''; // Limpa o container antes de adicionar novos cartões

        locais.forEach(local => {
            const card = document.createElement('div');
            card.classList.add('cartão'); // Sua classe CSS para o card
            // Use as classes .btn e .btn-secondary (ou .btn-primary) refatoradas aqui
            card.innerHTML = `
                <img src="${local.imagem || 'placeholder.jpg'}" alt="${local.nome || 'Local turístico'}">
                <div class="detalhes">
                    ${(local.etiquetas || []).map(etiqueta =>
                `<span class="etiqueta">${etiqueta}</span>`
            ).join('')}
                    <div class="name">${local.nome || 'Nome Indisponível'}</div>
                    <p>${local.descricao || 'Descrição indisponível.'}</p>
                    <button class="leia-mais btn btn-secondary">Leia Mais</button>
                </div>
            `;

            const botaoLeiaMais = card.querySelector('.leia-mais');
            if (botaoLeiaMais) {
                botaoLeiaMais.addEventListener('click', () => abrirModalDetalhes(local));
            }
            cartoesContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar ou processar locais:', error);
        if (cartoesContainer) {
            cartoesContainer.innerHTML = '<p class="error-message">Não foi possível carregar os locais. Tente novamente mais tarde.</p>';
        }
    });