# TravelCard

<div>
   <img src="https://i.imgur.com/NEwn9MY.png">
</div>


O **TravelCard** é uma aplicação web interativa que apresenta uma galeria de cartões de destinos de viagem. O projeto foi desenvolvido para demonstrar habilidades full-stack, integrando um front-end dinâmico e responsivo com um backend Node.js e serviços do Firebase para funcionalidades como autenticação.

-----

## ✨ Funcionalidades Implementadas

  * **Galeria de Destinos:** Exibição de múltiplos cartões de viagem, cada um com uma imagem, tags de categoria, título e uma breve descrição.
  * **Design Responsivo:** A interface se adapta de forma fluida a diferentes tamanhos de tela, de desktops a dispositivos móveis.
  * **Carregamento Dinâmico de Dados:** As informações dos cartões são carregadas dinamicamente, permitindo fácil escalabilidade para adicionar novos destinos (via Node.js/Firebase).
  * **Sistema de Autenticação:** Funcionalidades de **Login** e **Cadastro** de usuários implementadas com o **Firebase Authentication**.
  * **Componentes Interativos:** Efeitos de `hover` nos cartões e botões para uma melhor experiência do usuário.
  * **Identidade Visual:** O projeto conta com um logo customizado, "TravelCard", para reforçar a identidade da aplicação.

-----

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando uma stack moderna, separando as responsabilidades entre front-end e back-end.

| Área | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Front-End** | `HTML5` | Estruturação semântica do conteúdo. |
| | `CSS3` | Estilização avançada, layout Flexbox/Grid e responsividade. |
| | `JavaScript` | Manipulação do DOM, interatividade e comunicação com a API. |
| **Back-End** | `Node.js` | Ambiente de execução para o servidor. *(Se usar Express, adicione aqui)* |
| **Serviços** | `Firebase` | Utilizado para **autenticação de usuários** e como banco de dados. |
| **Fontes** | `Google Fonts` | Fonte "Raleway" para uma tipografia elegante. |
| **Design** | `Canva` | Utilizado para a criação do logo "TravelCard". |

-----

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

  * **Node.js** (versão 18 ou superior)
  * **Git**
  * Um editor de código como **VS Code** com a extensão **Live Server**.

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Boudenzin/TravelCard.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd TravelCard
    ```

3.  **Instale as dependências do Back-end:**

    ```bash
    cd backend
    npm install
    ```
    
4.  **Inicie o servidor Back-end:**

    ```bash
    npm start
    ```

    O servidor estará rodando em `http://localhost:3000`.

5.  **Execute o Front-end:**

      * Abra a pasta `TravelCard` no VS Code.
      * Navegue até o arquivo `front-end/index.html`.
      * Clique com o botão direito e selecione **"Open with Live Server"**. Isso garantirá que as requisições para o backend funcionem corretamente.

-----

## 📂 Estrutura do Projeto

O projeto está organizado com uma clara separação entre o código do cliente (front-end) и o servidor (back-end).

```
TravelCard/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   └── server.js       # Lógica do servidor e endpoints da API
├── front-end/
│   ├── index.html      # Estrutura principal da página
│   ├── script.js       # Lógica do lado do cliente
│   └── style.css       # Estilos da aplicação
├── .gitignore
├── LICENSE
└── README.md
```

-----

## 🎯 Próximos Passos (Roadmap)

Apesar das funcionalidades já implementadas, existem planos para evoluir o projeto:

  * [ ] **Feedback de Login:** Assim que o usuário logar ou se cadastrar, o sistema deve emitir um pop-up com a ação realizada
  * [ ] **Sistema de Favoritos:** Permitir que usuários logados salvem seus destinos preferidos.
  * [ ] **Filtros e Pesquisa:** Adicionar uma barra de busca e filtros para encontrar destinos por nome, categoria ou país.
  * [ ] **Modo Escuro (Dark Mode):** Implementar um seletor de tema para melhorar a acessibilidade e preferência do usuário.
  * [ ] **Páginas de Detalhes:** Criar uma página dedicada para cada destino ao clicar em "Leia Mais".
  * [ ] **Deploy:** Publicar a aplicação em uma plataforma como Vercel ou Netlify para acesso público.
  * [ ] **Testes:** Escrever testes unitários e de integração para garantir a qualidade e estabilidade do código.

-----

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

-----
