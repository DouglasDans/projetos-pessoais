const projectImg = document.getElementById("project-image")
const projectList = document.getElementById("project-list")
const projectTitle = document.getElementById("project-title")
const projectSrc = document.getElementById("project-src")

projectList.addEventListener("click", (e) => {
    let element = e.target;

    if (element.nodeName === "UL"){
        projectSrc.style.display = "none"
        projectImg.src = ""
        projectTitle.innerHTML = "Projetos Web"
        projectSrc.parentElement.href = "#"

        return false
    }

    if (element.nodeName !== "LI"){
        console.warn(element.nodeName);
        element = element.parentElement
    }
    
    for(let i = 0; i < projectList.children.length; i++){
        projectList.children[i].classList.remove("active")
    }
    
    if (element.classList.contains("active")){
        element.classList.remove("active")
        projectImg.src = ""
        projectSrc.style.display = "none"
    } else {
        projectImg.src = "index-assets/img/" + element.getAttribute("name") + ".png"
        element.classList.add("active")
        projectSrc.style.display = "block"
        projectTitle.innerHTML = element.children[0].innerHTML
        projectSrc.parentElement.href = element.children[1].href
    }

    
})