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
        

        // Adiciona eventos aos botões
        document.querySelectorAll('.leia-mais').forEach(botao => {
            botao.addEventListener('click', function() {
                const dados = {
                    nome: this.dataset.nome,
                    descricaoDetalhada: this.dataset.descricaoDetalhada,
                    imagem: this.dataset.imagem,
                    etiquetas: JSON.parse(this.dataset.etiquetas),
                    link: this.dataset.link
                };
                abrirModal(dados);
            });
        });
    })
    .catch(error => console.error('Erro:', error));

