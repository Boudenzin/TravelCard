const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const locais = [
    {
        nome: "Fernando de Noronha",
        descricao: "Ilha paradisíaca com praias incríveis e águas cristalinas.",
        etiquetas: ["Natureza", "Ilha"],
        imagem: "https://i.pinimg.com/564x/08/e3/ff/08e3ff458d173fa0753252f8fff521d3.jpg",
        link: "https://www.noronha.pe.gov.br/",
        descricaoDetalhada: "Fernando de Noronha é um paraíso ecológico no Nordeste brasileiro, conhecido por suas praias de águas cristalinas, vida marinha abundante e paisagens intocadas. Destacam-se a Praia do Sancho, eleita uma das mais bonitas do mundo, e a Baía dos Golfinhos, onde é possível avistar golfinhos saltadores. O mergulho é imperdível, seja no Navio Porto de Santo Antônio ou nas piscinas naturais da Praia da Atalaia. Com acesso controlado para preservação, Noronha é um destino exclusivo e inesquecível para amantes da natureza."
    },
    {
        nome: "Dalian",
        descricao: " Dalian é um refúgio encantador para quem quer fugir das grandes metrópoles chinesas, com ar puro, paisagens deslumbrantes e uma atmosfera tranquila.",
        etiquetas: ["Cidade", "China"],
        imagem: "https://rare-gallery.com/thumbnail/412908-China-city-lights-chinese-city-Dalian.jpg",
        link: "https://www.tripadvisor.pt/Attractions-g297452-Activities-Dalian_Liaoning.html",
        descricaoDetalhada: "Dalian, uma cidade portuária na China, combina modernidade com belezas naturais. Suas praias, como Bangchuidao e Jinshitan, atraem visitantes no verão, enquanto os parques montanhosos, como Laohutan Ocean Park, oferecem vistas deslumbrantes. A região também possui fontes termais e a famosa Ponte Xinghai, uma das maiores do mundo. Com clima agradável e arquitetura única, Dalian é um destino perfeito para quem busca cultura e natureza no litoral chinês."
    },
    {
        nome: "João Pessoa",
        descricao: "Conhecida pelas praias paradisíacas e pelo ponto mais oriental das Américas.",
        etiquetas: ["Praia", "Nordeste"],
        imagem: "https://i.pinimg.com/736x/df/59/c7/df59c7d088f71152a771350455207dcd.jpg",
        link: "https://turismo.joaopessoa.pb.gov.br/",
        descricaoDetalhada: "João Pessoa, a capital mais oriental das Américas, encanta com suas praias de areias douradas e coqueirais. A Praia de Tambaú e o Picãozinho (com suas piscinas naturais) são paradas obrigatórias. O Parque Estadual da Jacarapé oferece trilhas e manguezais preservados, enquanto o Farol do Cabo Branco marca o ponto onde o sol nasce primeiro no continente. Com um centro histórico rico e uma culinária deliciosa, João Pessoa é um destino acolhedor e cheio de belezas naturais."
    },
    {
        nome: "Chapada Diamantina",
        descricao: "Trilhas, cachoeiras e vales imponentes atraem amantes de ecoturismo e aventura.",
        etiquetas: ["Montanha", "Trilha"],
        imagem: "https://i.pinimg.com/736x/a8/09/e6/a809e6c9ae8f12486532c6ecba75d5cd.jpg",
        link: "https://www.guiachapadadiamantina.com.br/",
        descricaoDetalhada: "Localizada no coração da Bahia, a Chapada Diamantina é um paraíso para ecoturismo, com cânions, cachoeiras e trilhas deslumbrantes. Destaques incluem o Poço Encantado, com águas azuis cristalinas, e o Morro do Pai Inácio, que oferece vistas panorâmicas. A Cachoeira da Fumaça, uma das mais altas do Brasil, e o Vale do Pati, uma das melhores trilhas do país, atraem aventureiros do mundo todo. A região também guarda história, com antigas cidades coloniais como Lençóis."
    },
    {
        nome: "Bonito",
        descricao: "Cavernas, rios de águas cristalinas e cachoeiras incríveis.",
        etiquetas: ["Natureza", "Cachoeira"],
        imagem: "https://www.vivabonito.com.br/wp-content/uploads/2021/06/Gruta-do-lago-azul-6.jpg",
        link: "https://www.turismo.bonito.ms.gov.br/",
        descricaoDetalhada: "Bonito, no Mato Grosso do Sul, é famoso por suas águas transparentes e ecossistema preservado. O Rio da Prata oferece flutuação entre peixes coloridos, enquanto o Abismo Anhumas atrai mergulhadores em suas cavernas submersas. A Gruta do Lago Azul, com seu lago intensamente azul, e o Buraco das Araras, um enorme sumidouro com aves, são imperdíveis. Com estrutura turística organizada, Bonito é um dos melhores destinos de ecoturismo do Brasil."
    },
    {
        nome: "Gramado",
        descricao: "Cidade charmosa com influência europeia, ideal para curtir o frio e festivais.",
        etiquetas: ["Serra", "Turismo"],
        imagem: "https://th.bing.com/th/id/OIP.BJK0_Vm95KkKCfe4abK3LQAAAA?rs=1&pid=ImgDetMain",
        link: "https://www.gramadooficial.com.br/",
        descricaoDetalhada: "Gramado, na Serra Gaúcha, é conhecida por seu clima frio, arquitetura europeia e paisagens encantadoras. No inverno, o Natal Luz atrai milhares de turistas, enquanto o Lago Negro oferece um cenário romântico com araucárias e flores. A Cascata do Caracol, uma queda d’água de 131 metros, e o Parque Knorr são ótimos para contato com a natureza. Com chocolates artesanais e vinícolas próximas, Gramado é um destino charmoso em qualquer época do ano."
    }
            

];

app.get('/locais', (req, res) => {
    res.json(locais);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
