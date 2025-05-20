// Importando o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCx89vd7ghLv1XNy3Yq_vjjAbYTFLB4qHo",
authDomain: "travelcardapp-39644.firebaseapp.com",
projectId: "travelcardapp-39644",
storageBucket: "travelcardapp-39644.appspot.com",
messagingSenderId: "891066049296",
appId: "1:891066049296:web:f0d87274b021cf5c3ebb95"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Elementos do modal
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalImagem = document.getElementById("modal-imagem");
const modalEtiquetas = document.getElementById("modal-etiquetas");
const modalDescricao = document.getElementById("modal-descricao");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close");

// Função para abrir o modal
function abrirModal(dados) {
    modalTitulo.textContent = dados.nome;
    modalImagem.src = dados.imagem;
    modalDescricao.textContent = dados.descricaoDetalhada;
    modalEtiquetas.innerHTML = dados.etiquetas.map(etiqueta => 
        `<span class="etiqueta">${etiqueta}</span>`
    ).join('');
    modalLink.href = dados.link;
    modalLink.textContent = 'Saiba Mais';
    
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Impede scroll da página
}

// Fechar modal
function fecharModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Event listeners
closeBtn.addEventListener("click", fecharModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
});

// Modifique a parte do fetch para usar a nova função
fetch('http://localhost:3000/locais')
    .then(response => response.json())
    .then(locais => {
        const container = document.getElementById('cartoes-container');
        
        locais.forEach(local => {
            const card = document.createElement('div');
            card.classList.add('cartão');
            card.innerHTML = `
                <img src="${local.imagem}" alt="${local.nome}">
                <div class="detalhes">
                    ${local.etiquetas.map(etiqueta => 
                        `<span class="etiqueta">${etiqueta}</span>`
                    ).join('')}
                    <div class="name">${local.nome}</div>
                    <p>${local.descricao}</p>
                    <button class="leia-mais">Leia Mais</button>
                </div>
            `;
            
            const botao = card.querySelector('.leia-mais');
            botao.addEventListener('click', () => abrirModal(local));
        
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Erro:', error));


// Abrir e fechar o modal da autenticação
const authModal = document.getElementById("auth-modal");
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const closeAuth = document.querySelector(".close-auth");

loginBtn.addEventListener("click", () => {
    authModal.style.display = "flex";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
})

signupBtn.addEventListener("click", () => {
    authModal.style.display = "flex";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
});

closeAuth.addEventListener("click", () => {
    authModal.style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
});

// Alternar entre login e signup
document.getElementById("show-signup").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", (e) => {    
    e.preventDefault();
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

//Cadastro de usuário
document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const senha = document.getElementById("signup-senha").value;

    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Usuário cadastrado com sucesso
            const user = userCredential.user;
            console.log("Usuário cadastrado:", user);
            authModal.style.display = "none";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Erro ao cadastrar:", errorCode, errorMessage);
        });
});

// Login de usuário
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;

    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Usuário logado com sucesso
            const user = userCredential.user;
            console.log("Usuário logado:", user);
            authModal.style.display = "none";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Erro ao fazer login:", errorCode, errorMessage);
        });
});