window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false);

function navigator (){
    console.log({location});

    if (location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();
    }else if(location.hash.startsWith('#movie')){
        movieDetailsPage();
    }else if (location.hash.startsWith('#category')){
        categoriesPage();
    }else{
        homePage();
    }
};

function homePage() {
    console.log('Home !!!');

    getTrendingPreview();
    getCategoriesPreview();
};

function trendsPage() {
    console.log('TRENDS !!!');
};

function movieDetailsPage() {
    console.log('Movie !!!');
};
function categoriesPage() {
    console.log('Categories !!!');
};

function searchPage() {
    console.log('Search !!!');
}
