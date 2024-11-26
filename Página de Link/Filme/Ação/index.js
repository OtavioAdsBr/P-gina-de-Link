const movies = [
    {
    title: "Mad Max: Estrada da Fúria",
    description: "Um espetáculo visual cheio de perseguições frenéticas no deserto.",
    imgSrc: "img/Mad Max.jpg",
    link: "https://www.adorocinema.com/filmes/filme-125054/"
    },
    {
    title: "John Wick 3 - Parabellum",
    description: "Ação coreografada de forma impecável e um dos anti-heróis mais icônicos.",
    imgSrc: "img/John Wick.jpg",
    link: "https://www.adorocinema.com/filmes/filme-250861/"
    },
    {
    title: "Missão: Impossível - Efeito Fallout",
    description: "Ethan Hunt enfrenta um vilão imprevisível em cenas de tirar o fôlego.",
    imgSrc: "img/Missão Impossível.jpg",
    link: "https://www.adorocinema.com/filmes/filme-238132/"
    },
    {
    title: "Gladiador",
    description: "Uma jornada épica de vingança e honra em Roma.",
    imgSrc: "img/gladiador.jpg",
    link: "https://www.adorocinema.com/filmes/filme-24944/"
    }
];

    const moviesGrid = document.getElementById('moviesGrid');
    
  // Função para criar os cards dos filmes
    function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <img src="${movie.imgSrc}" alt="${movie.title}">
    <div class="card-content">
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
        <a href="${movie.link}" target="_blank">Saiba mais</a>
    </div>
    `;

    return card;
}

  // Adiciona os filmes ao grid
    movies.forEach(movie => {
    const movieCard = createMovieCard(movie);
    moviesGrid.appendChild(movieCard);
});
