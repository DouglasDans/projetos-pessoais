const section = document.querySelector("section")
const logo = document.querySelector(".logo")

section.style.height = window.innerHeight + 'px'
section.style.width = window.innerWidth + 'px'

//variavel de movimentação da logo
let xPosition = 10
let yPosition = 10
let xSpeed = 10
let ySpeed = 10

function update(){
    logo.style.left = xPosition + 'px'
    logo.style.top = yPosition + 'px'
}
setInterval(()=>{
    xPosition += xSpeed
},1000)
update();