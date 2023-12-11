const section = document.querySelector("section")
const logo = document.querySelector(".logo")
const fps = 60



//variavel de movimentação da logo
let xPosition = 0.1
let yPosition = 0.1
let xSpeed = 3
let ySpeed = 3

function update(){
    section.style.height = window.innerHeight + 'px'
    section.style.width = window.innerWidth + 'px'

    logo.style.width = (window.innerHeight/1000 * 20) + '%'
    logo.style.left = xPosition + 'px'
    logo.style.top = yPosition + 'px'
}
setInterval(()=>{
    
    if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0){
        xSpeed = -xSpeed
        logo.style.fill = randomColor()
    }
    if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0){
        ySpeed = -ySpeed
        logo.style.fill = randomColor()
    }
    xPosition += xSpeed
    yPosition += ySpeed
    update();
},1000/fps)

function randomColor(){
    let color = "#"
    color += Math.random().toString(16).slice(2,8).toUpperCase()
    console.log(color)
    return color
}

window.addEventListener('resize',()=>{
    xPosition = 1
    yPosition = 3
})