function ToggleDarkMode(){
    // const nightModeStorage = localStorage.getItem('gmtNightMode');

    // if(nightModeStorage){

    // }



    const cssBody = document.body;
    const darkButton = document.querySelector(".dark-button");
    const linkBoxSpan = document.querySelector(".link-box");
    const userContainer = document.querySelector("#user-container");
    const pesquisaDiv = document.querySelector("#pesquisa-id")


    cssBody.classList.toggle("body-light")
    linkBoxSpan.classList.toggle("light-span");
    userContainer.classList.toggle("light-card");
    pesquisaDiv.classList.toggle("light-card");
    darkButton.classList.toggle("dark-button-light");

    
    localStorage.setItem('gmtNightMode', false)
}

document.getElementsByClassName("dark-button")[0].addEventListener("click", () => {
    ToggleDarkMode();
})
