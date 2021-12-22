window.onload = function () {
 
 const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = 'api_key=2b22702bf9dc45986d22dd21add08ec7';
    const language = "language=pt-BR&";
    const apiURL = baseUrl + '/discover/movie?sort_by=popularity.desc&' + language + apiKey

    const searchURL = baseUrl + "/search/movie?" + apiKey

    const imgLink = 'https://image.tmdb.org/t/p/w500'

    const main = document.getElementById("main")
    const form = document.getElementById("form")
    const search = document.getElementById("pesquisar") 

getMovies(apiURL)

function getMovies(url){

    fetch(url)
        .then((resp) => resp.json()).then(function(data) {
            showMovies(data.results)
            console.log("movie");
        })
        
    }
    
    
function showMovies(data){
    main.innerHTML = " ";
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie")
        console.log(title);
        movieEl.innerHTML = `
            <img src="${imgLink + poster_path}" alt="${title}">
            <h1>${title}</h1>
            <small>${overview}</small>
            `;
        main.appendChild(movieEl)
        });

}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm +'&'+language);
    }
})
}