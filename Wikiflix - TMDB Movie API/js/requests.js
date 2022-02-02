//PEGAR URLs

    function getURL(dado){
        const baseUrl = "https://api.themoviedb.org/3";
        const apiKey = 'api_key=2b22702bf9dc45986d22dd21add08ec7';
        const language = "language=pt-BR&";
        if(dado == 1){
            const apiURL = baseUrl + '/discover/movie?sort_by=popularity.desc&' + language + apiKey;
            return apiURL;
        }
        else if(dado == 2){
            const imgLink = 'https://image.tmdb.org/t/p/w500';
            return imgLink;
        }
        else if(dado == 3){
            const getUrl = window.location.href;
            const idMovie = getUrl.split("id=");
            let detailsMovieURL = baseUrl + "/movie/"+ idMovie[1] + "?" + language + apiKey;
            return detailsMovieURL;
        }
        else if(dado = 4){
            const search = document.getElementById("pesquisar");
            const searchTerm = search.value;
            if (searchTerm){
                const searchURL = baseUrl + "/search/movie?" + apiKey;
                return searchURL +'&query='+searchTerm +'&'+language;
            }else{
                return false;
            }   
        }
        
    }
    
    const main = document.getElementById("main")
    const form = document.getElementById("form")
    let idcompany = 0;
// LISTAR FILMES

getMovies(getURL(1))
getMoviesPopularesBR(getURL(1))
getMoviesAcao(getURL(1))
getMoviesTerror(getURL(1))
getMoviesAnim(getURL(1))
getMoviesDrama(getURL(1))
getMoviesSuspense(getURL(1))

function getMovies(url){
    fetch(url)
        .then((resp) => resp.json()).then(function(data) {
            showMovies(data.results,"Filmes Populares No Mundo")
            console.log(url);
            console.log(data);
            
        }) 
    }
    



function getMoviesPopularesBR(url){
    fetch(url + "&region=BR")
        .then((resp) => resp.json()).then(function(data) {
            showMovies(data.results,"Filmes Populares No Brasil")
            console.log(url);
            console.log(data);
        }) 
    }
    
function getMoviesAcao(url){
    fetch(url + "&with_genres=28")
        .then((resp) => resp.json()).then(function(data) {
            showMovies(data.results,"Filmes Populares de Ação")
            console.log(url);
            console.log(data);
        }) 
    }
function getMoviesTerror(url){
    fetch(url + "&with_genres=27")
        .then((resp) => resp.json()).then(function(data) {
            showMovies(data.results,"Filmes Populares de Terror")
            console.log(url);
            console.log(data);
        }) 
    }
function getMoviesAnim(url){
    fetch(url + "&with_genres=16")
        .then((resp) => resp.json()).then(function(data) {
            showMovies(data.results,"Filmes Populares de Animação")
            console.log(url);
            console.log(data);
        }) 
    }
function getMoviesDrama(url){
    fetch(url + "&with_genres=18")
        .then((resp) => resp.json()).then(function(data) {
            showMovies(data.results,"Filmes Populares de Drama")
            console.log(url);
            console.log(data);
        }) 
    }
function getMoviesSuspense(url){
    fetch(url + "&with_genres=53")
        .then((resp) => resp.json()).then(function(data) {
            showMovies(data.results,"Filmes Populares de Suspense")
            console.log(url);
            console.log(data);
        }) 
    }
    
    
function showMovies(data, tituloData){
    // main.innerHTML = " ";
    const tituloLista = document.createElement("h3");
    tituloLista.innerHTML = tituloData;
    main.appendChild(tituloLista)
    const div =  document.createElement("div");
    div.classList.add("movie-list");
    main.appendChild(div)
    data.slice(0,6).forEach(movie => {
        const {title, poster_path, vote_average, overview,id} = movie;
        const movieEl = document.createElement("div");
        const imgLink = getURL(2);
        console.log(imgLink);
        movieEl.classList.add("movie")
        console.log(title);
        movieEl.innerHTML = `
        <a href="movie.html?id=${id}">
            <img src="${imgLink + poster_path}" alt="${title}">
            <h5>${title}</h5>
        </a>
            `;
        
        div.appendChild(movieEl)
        });

}

// BOTÃO PESQUISAR

window.onload = function () {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(getURL(4)) {
            main.innerHTML = " ";
            getMovies(getURL(4));
        }else{
            main.innerHTML = " ";
            getMovies(getURL(1))
            getMoviesPopularesBR(getURL(1))
            getMovies2012(getURL(1))
        }
    })
}

//SEGUNDA PÁGINA

    
getDetailsMovie(getURL(3));

function getDetailsMovie(MovieURL){
    fetch(MovieURL)
        .then((resp) => resp.json()).then(function(data) {
            console.log(data);
            showData(data);
            const { production_companies } = data;
            gabiarralouca(production_companies[0].id);
        })   
}

function gabiarralouca(id){
    montarURL(id);
}

function montarURL(id){
    console.log(id)
}


function showData(data){
    const main = document.getElementById("movie-main");
    const {title,tagline, poster_path,release_date,production_companies,production_countries,genres, runtime,vote_average, backdrop_path, overview, original_language, original_title,homepage} = data;
    document.getElementById("page-name").innerHTML = `${title} - WikiFlix`
    const movieEl = document.createElement("div");
    const imgLink = getURL(2);
    let testejack = 2;
    movieEl.classList.add("movie-details")
    main.innerHTML = `<img class="poster-filme" src="${imgLink + backdrop_path}" alt="${title}">`;
    movieEl.innerHTML = `
    <img class="capa-filme" src="${imgLink + poster_path}" alt="${title}">
    
    <div class="info-movie">
        <div>
            <div>
                <h1>${title}</h1>
                <h5>${tagline}</h5>
            </div>
            <div class="info-line">
                <small>${runtime}m</small>
                <small>${production_companies[0].name}</small>
                <small>${genres[0].name}</small>
                <small>${release_date}</small>
            </div>
                <small>${overview}</small>
            </div>
            <div class="vote-average">
                <h5><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"/></svg>${vote_average}</h5>
            </div>
        </div>
        
    </div>    

    <div class="more-info">
        <div>
            <h5>Nome</h5>
            <small>${title}</small>
        </div>
        <div>
            <h5>Lançamento</h5>
            <small>${release_date}</small>
        </div>
        <div>
            <h5>Gênero</h5>
            <small>${countArray(genres)}</small>
        </div>
        <div>
            <h5>Produção</h5>
            <small>${countArray(production_companies)}</small>
        </div>
        <div>
            <h5>Duração</h5>
            <small>${runtime}m</small>
        </div>
        <div>
            <h5>Nome Original</h5>
            <small>${original_title}</small>
        </div>
        <div>
            <h5>País de Origem</h5>
            <small>${countArray(production_countries)}</small>
        </div>
        <div>
            <h5>Linguagem Original</h5>
            <small>${original_language}</small>
        </div>
        <div>
            <h5>HomePage</h5>
            <small><a href="${homepage}">${homepage}</a></small>
        </div>  
    </div>
    `;
    main.appendChild(movieEl);  
}

    function countArray(array){
        let result = ""
        for(i = 0; i < array.length; i++){
            console.log(array[i].name)
            if (i == array.length - 1){
                result += array[i].name
            }else{
                result += array[i].name + ", "
            }
        }
        return result
    }


