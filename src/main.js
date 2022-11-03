//Crear una instancia de axios para utilizarla cuando sea necesario en el codigo
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'aplication/json;charset=utf-8'
    },
    params:{
        'api_key': API_KEY,
    },
});

const showMovie = (section, movie) => {
    const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w220_and_h330_face' + movie.poster_path,);
        movieContainer.appendChild(movieImg);
        section.appendChild(movieContainer);
}
async function getTrendingPreview() {
    const {data} = await api('/trending/movie/day');
    const movies = data.results;

    trendingMoviesPreviewList.innerHTML = "";

    movies.forEach(movie => {
        showMovie(trendingMoviesPreviewList, movie);
    });
    console.log({data, movies});
}

async function getCategoriesPreview() {
    const {data} = await api('/genre/movie/list');
    const categories = data.genres;

    categoriesPreviewList.innerHTML = "";

    categories.forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        categoryTitle.addEventListener('click', () =>{
            location.hash =`#category=${category.id}-${category.name}` ;
        })
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
    });
    console.log({data, categories});
}

async function getMoviesByCategory(id) {
    const {data} = await api('/discover/movie', {
        params:{
            with_genres: id,
        },
    });
    const movies = data.results;

    genericSection.innerHTML = "";

    movies.forEach(movie => {
        showMovie(genericSection, movie);
    });
    console.log({data, movies});
}
