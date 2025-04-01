const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const locais = [
    {
        nome: "Fernando de Noronha",
        descricao: "Ilha paradisíaca com praias incríveis e águas cristalinas.",
        etiquetas: ["Natureza", "Ilha"],
        imagem: "https://i.pinimg.com/564x/08/e3/ff/08e3ff458d173fa0753252f8fff521d3.jpg"
    },
    {
        nome: "Dalian",
        descricao: " Dalian é um refúgio encantador para quem quer fugir das grandes metrópoles chinesas, com ar puro, paisagens deslumbrantes e uma atmosfera tranquila.",
        etiquetas: ["Cidade", "China"],
        imagem: "https://rare-gallery.com/thumbnail/412908-China-city-lights-chinese-city-Dalian.jpg"
    },
    {
        nome: "João Pessoa",
        descricao: "Conhecida pelas praias paradisíacas e pelo ponto mais oriental das Américas.",
        etiquetas: ["Praia", "Nordeste"],
        imagem: "https://i.pinimg.com/736x/df/59/c7/df59c7d088f71152a771350455207dcd.jpg"
    },
    {
        nome: "Chapada Diamantina",
        descricao: "Trilhas, cachoeiras e vales imponentes atraem amantes de ecoturismo e aventura.",
        etiquetas: ["Montanha", "Trilha"],
        imagem: "https://i.pinimg.com/736x/a8/09/e6/a809e6c9ae8f12486532c6ecba75d5cd.jpg"
    },
    {
        nome: "Bonito",
        descricao: "Cavernas, rios de águas cristalinas e cachoeiras incríveis.",
        etiquetas: ["Natureza", "Cachoeira"],
        imagem: "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/03/Gruta-do-Lago-Azul-Hudson-Garcia-11-1_Easy-Resize.com_.jpg"
    },
    {
        nome: "Gramado",
        descricao: "Cidade charmosa com influência europeia, ideal para curtir o frio e festivais.",
        etiquetas: ["Serra", "Turismo"],
        imagem: "https://th.bing.com/th/id/OIP.BJK0_Vm95KkKCfe4abK3LQAAAA?rs=1&pid=ImgDetMain"
    }
            

];

app.get('/locais', (req, res) => {
    res.json(locais);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
