


//PEGAR URLs

    function getURL(){
        const baseUrl = "https://api.github.com/";
        const userURL = 'users/';

        return baseUrl + userURL;
        
    }

// BOTÃO PESQUISAR
const pesquisaButton = document.querySelector("#pesquisa-button");
const pesquisaUser = document.querySelector("#pesquisa-user");
pesquisaButton.onclick = () => {
    fetch(getURL() + pesquisaUser.value)
    .then((resp) => resp.json()).then(function(data) {
        console.log(data);
        showData(data);
    }) 
}
pesquisaUser.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            fetch(getURL() + pesquisaUser.value)
            .then((resp) => resp.json()).then(function(data) {
                console.log(data);
                showData(data);
            });
        }
      });
    

window.onload = function LoadRefresh() {
    fetch(getURL() + "github")
    .then((resp) => resp.json()).then(function(data) {
        console.log(data);
        showData(data);
    }) 
    
}

function showData(userData){
    try {
        if (userData.id == null){
            throw 'deu erro ein';
        }
    } catch (error) {
        alert('Nome de usuário inexistente ou indisponível');
        LoadRefresh();
    }


    const userContainer = document.querySelector("#user-container");
    const titleDados = document.createElement("div");
    const moreInfo = document.createElement("div");
    const infoBox = document.createElement("div");
    const linksContainer = document.createElement("div");

    titleDados.classList.add("title-dados");
    moreInfo.classList.add("more-info");
    infoBox.classList.add("info-box");
    linksContainer.classList.add("links-container");

    let name = userData.name
    let bio = userData.bio
    let location = userData.location
    let twitter = userData.twitter_username
    let created_at = userData.created_at

    created_at = new Date(userData.created_at);

    if(name == null){
        name = userData.login
    }
    if(bio == null){
        bio = "Este perfil não possui bio"
    }
    if(location == null){
        location = "Indisponível"
    }
    if(twitter == null){
        twitter = "Indisponível"
    }



    titleDados.innerHTML = `
        <img src="${userData.avatar_url}" class="img-profile" alt="">
        <div class="info-user">
            <div>
                <span class="title-user">${name}</span>
                <span class="data-entrada">Entrou em ${created_at.getFullYear()}</span>
            </div>
            <span class="id-user">${userData.login}</span>
            <p>${bio}</p>
        </div>`;

    infoBox.innerHTML = `
            <div class="box-dados">
                <h3>Repositórios</h3>
                <h2>${userData.public_repos}</h2>
            </div>
            <div class="box-dados">
                <h3>Seguidores</h3>
                <h2>${userData.followers}</h2>
            </div>
            <div class="box-dados">
                <h3>Seguindo</h3>
                <h2>${userData.following}</h2>
            </div>`;

    linksContainer.innerHTML = `
    <div class="link-box">
        <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0C3.35357 0 0 3.31568 0 7.41525C0 11.8326 4.73571 17.9237 6.68571 20.2436C7.11429 20.7521 7.89643 20.7521 8.325 20.2436C10.2643 17.9237 15 11.8326 15 7.41525C15 3.31568 11.6464 0 7.5 0ZM7.5 10.0636C6.02143 10.0636 4.82143 8.87712 4.82143 7.41525C4.82143 5.95339 6.02143 4.76695 7.5 4.76695C8.97857 4.76695 10.1786 5.95339 10.1786 7.41525C10.1786 8.87712 8.97857 10.0636 7.5 10.0636Z"/>
            </svg>
        <span>${location}</span>                            
    </div>

    <div class="link-box">
        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.8748 2.39134C23.9601 2.79545 22.9774 3.0685 21.9443 3.19191C23.0103 2.55604 23.8077 1.55525 24.188 0.376276C23.1865 0.969317 22.0904 1.38675 20.9474 1.61044C20.1788 0.792248 19.1607 0.249939 18.0512 0.0677067C16.9417 -0.114526 15.803 0.0735144 14.8117 0.602632C13.8204 1.13175 13.032 1.97234 12.5691 2.9939C12.1061 4.01546 11.9943 5.16084 12.2512 6.25219C10.2219 6.15062 8.23679 5.62479 6.42458 4.70884C4.61237 3.79289 3.0136 2.50729 1.73201 0.935471C1.29381 1.68907 1.04184 2.56282 1.04184 3.49335C1.04135 4.33105 1.24827 5.15591 1.64424 5.89476C2.04021 6.63361 2.61299 7.26359 3.31175 7.72882C2.50137 7.70311 1.70887 7.48481 1.00021 7.09208V7.15761C1.00013 8.33251 1.40778 9.47126 2.15399 10.3806C2.9002 11.29 3.93901 11.914 5.09416 12.1467C4.3424 12.3495 3.55423 12.3794 2.78919 12.2341C3.1151 13.245 3.74995 14.129 4.60487 14.7624C5.45978 15.3957 6.49195 15.7467 7.55689 15.7662C5.7491 17.181 3.51649 17.9484 1.21822 17.9451C0.811101 17.9452 0.40433 17.9215 0 17.8741C2.33288 19.3694 5.04852 20.1631 7.822 20.16C17.2106 20.16 22.3431 12.4077 22.3431 5.68426C22.3431 5.46583 22.3376 5.24521 22.3278 5.02677C23.3261 4.307 24.1879 3.41569 24.8726 2.39462L24.8748 2.39134Z"/>
            </svg>
            
        <span>${twitter}</span>                            
    </div>`;

    userContainer.innerHTML = "";
    

    userContainer.appendChild(titleDados);
    moreInfo.appendChild(infoBox);
    moreInfo.appendChild(linksContainer)
    userContainer.appendChild(moreInfo);
    
}
