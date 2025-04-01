// Função para buscar os dados da API
fetch('http://localhost:3000/locais')
  .then(response => response.json()) // Converte a resposta em JSON
  .then(locais => {
    const container = document.querySelector('#cartoes-container'); // Seleciona o container dos cartões

    // Loop para criar os cartões
    locais.forEach(local => {
      // Criação do HTML para cada cartão
      const cardHTML = `
        <div class="cartão">
            <img src="${local.imagem}" alt="${local.nome}">
            <div class="detalhes">
                ${local.etiquetas.map(etiqueta => `<span class="etiqueta">${etiqueta}</span>`).join('')}
                <div class="name">${local.nome}</div>
                <p>${local.descricao}</p>
                <button class="leia-mais" data-nome="${local.nome}" data-descricao="${local.descricao}">Leia Mais</button>
            </div>
        </div>
      `;

      // Adiciona o cartão ao container
      container.innerHTML += cardHTML;
    });

    adicionarEventosModal(); // Chama a função para adicionar eventos aos botões "Leia Mais"  
  })
  .catch(error => console.error('Erro ao carregar os dados da API:', error));

// -------------------------
// Modal (Janela Popup)
// -------------------------

// Seleciona os elementos do modal corretamente
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-title"); // Corrigido
const modalDescricao = document.getElementById("modal-description"); // Corrigido
const modalFechar = document.getElementById("modal-fechar"); // Corrigido

function adicionarEventosModal() {
  document.querySelectorAll('.leia-mais').forEach((botao) => {
    botao.addEventListener("click", function () {
      // Define o conteúdo do modal
      modalTitulo.textContent = this.dataset.nome;
      modalDescricao.textContent = this.dataset.descricao;

      // Exibe o modal
      modal.style.display = "flex";
    });
  });
}

// Fecha o modal ao clicar no "X"
modalFechar.addEventListener("click", function () {
  modal.style.display = "none";
});

// Fecha o modal ao clicar fora dele
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
