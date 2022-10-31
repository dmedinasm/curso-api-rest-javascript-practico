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

async function getTrendingPreview() {
    const {data} = await api('/trending/movie/day');
    const movies = data.results;
    movies.forEach(movie => {
        const trendingMoviesPreviewList = document.querySelector('#trendingPreview .trendingPreview-movieList');
        console.log(trendingMoviesPreviewList);
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w220_and_h330_face' + movie.poster_path,);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
    console.log({data, movies});
}

async function getCategoriesPreview() {
    const {data} = await api('/genre/movie/list');
    const categories = data.genres;
    categories.forEach(category => {
        const categoriesPreviewList = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
    });
    console.log({data, categories});
}

