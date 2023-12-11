const moneyInput = document.getElementById("money-input")


const containerButtons = document.getElementsByClassName("container-buttons")[0]

const personNumber = document.getElementById("person-number")
const percentInput = document.getElementById("porcent-input")

const amontPerson = document.getElementById("amont-person")

const totalPerson = document.getElementById("total-person")

function reset() {
    moneyInput.value = ""
    personNumber.value = ""
    amontPerson.textContent = "0"
    totalPerson.textContent = "0"
    percentInput.value = ""
}

reset()

containerButtons.addEventListener("click", function(e) {
    let button = e.target.getAttribute("data-action")
    console.log(button);

    let bill = parseFloat(moneyInput.value)
    let person = parseFloat(personNumber.value)
    let total = bill / person


    switch(button){
        case "5":
            amontPerson.textContent = ( (total * 5) / 100 ).toFixed(2)
            totalPerson.textContent = total.toFixed(2)
            break
        case "10":
            amontPerson.textContent = ( (total * 10) / 100 ).toFixed(2)
            totalPerson.textContent = total.toFixed(2)
            break
        case "15":
            amontPerson.textContent = ( (total * 15) / 100 ).toFixed(2)
            totalPerson.textContent = total.toFixed(2)
            break
        case "20":
            amontPerson.textContent = ( (total * 20) / 100 ).toFixed(2)
            totalPerson.textContent = total.toFixed(2)
            break
        case "25":
            amontPerson.textContent = ( (total * 25) / 100 ).toFixed(2)
            totalPerson.textContent = total.toFixed(2)
            break
    }
})

percentInput.addEventListener("input", function(e){
    let bill = parseFloat(moneyInput.value)
    let person = parseFloat(personNumber.value)
    let total = bill / person



    amontPerson.textContent = ( (total * parseInt(percentInput.value)) / 100 ).toFixed(2)
    totalPerson.textContent = total.toFixed(2)
})

moneyInput.addEventListener("input", function(e){
    let containerInput = moneyInput.parentElement.parentElement
    let labelsInput = containerInput.children[0]
    let span = labelsInput.getElementsByTagName("span")[0]

    if (moneyInput.value == 0){
        span.classList.add("span-active")
    }else{
        span.classList.remove("span-active")
    }
})

personNumber.addEventListener("input", function(e){
    let containerInput = personNumber.parentElement.parentElement
    let labelsInput = containerInput.children[0]
    let span = labelsInput.getElementsByTagName("span")[0]

    if (personNumber.value == 0){
        span.classList.add("span-active")
    }else{
        span.classList.remove("span-active")
    }
})