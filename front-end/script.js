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
                <button>Leia Mais</button>
            </div>
        </div>
      `;

      // Adiciona o cartão ao container
      container.innerHTML += cardHTML;
    });
  })
  .catch(error => console.error('Erro ao carregar os dados da API:', error));
