

const step1 = document.getElementById("step1")
const step2 = document.getElementById("step2")
const step3 = document.getElementById("step3")
const step4 = document.getElementById("step4")
const step5 = document.getElementById("step5")

let numberPage = 1;

step1.style.display = "flex"

function nextPage(){
    numberPage++
    switch(numberPage){
        case 1:
            step1.style.display = "flex"
            step2.style.display = "none"
            step3.style.display = "none"
            step4.style.display = "none"
            step5.style.display = "none"
            break
        case 2:
            step1.style.display = "none"
            step2.style.display = "flex"
            step3.style.display = "none"
            step4.style.display = "none"
            step5.style.display = "none"
            break
        case 3:
            step1.style.display = "none"
            step2.style.display = "none"
            step3.style.display = "flex"
            step4.style.display = "none"
            step5.style.display = "none"
            break
        case 4:
            step1.style.display = "none"
            step2.style.display = "none"
            step3.style.display = "none"
            step4.style.display = "flex"
            step5.style.display = "none"
            break
        case 5:
            step1.style.display = "none"
            step2.style.display = "none"
            step3.style.display = "none"
            step4.style.display = "none"
            step5.style.display = "flex"
            break
    }
}
function backPage(){
    numberPage--
    switch(numberPage){
        case 1:
            step1.style.display = "flex"
            step2.style.display = "none"
            step3.style.display = "none"
            step4.style.display = "none"
            step5.style.display = "none"
            break
        case 2:
            step1.style.display = "none"
            step2.style.display = "flex"
            step3.style.display = "none"
            step4.style.display = "none"
            step5.style.display = "none"
            break
        case 3:
            step1.style.display = "none"
            step2.style.display = "none"
            step3.style.display = "flex"
            step4.style.display = "none"
            step5.style.display = "none"
            break
        case 4:
            step1.style.display = "none"
            step2.style.display = "none"
            step3.style.display = "none"
            step4.style.display = "flex"
            step5.style.display = "none"
            break
        case 5:
            step1.style.display = "none"
            step2.style.display = "none"
            step3.style.display = "none"
            step4.style.display = "none"
            step5.style.display = "flex"
            break
    }
}