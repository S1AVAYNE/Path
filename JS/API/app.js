const url = "https://imdb-top-100-movies.p.rapidapi.com/";
const host = "imdb-top-100-movies.p.rapidapi.com";
const key = "7d46314d1emsh0466bd5c8e9bc93p125aeajsn4beeb80a7633";

const movies = document.getElementById("content");

fetch(url, {
    method: 'GET',
    headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": host
    }
})
.then(res => res.json())
.then(data => {
    data.forEach(movie => {
        movies.innerHTML += `
            <div class="movie">
                <img src="${movie.image}" class="movie-image">
                <div class="movie-details">
                    <p class="movie-rank">#${movie.rank}</p>
                    <h2 class="movie-title">${movie.title}</h2>
                    <p class="movie-rating">★ ${movie.rating}</p>
                </div>
            </div>
        `;
    });
})