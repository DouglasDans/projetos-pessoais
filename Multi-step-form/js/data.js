
const name = document.getElementById("txtName").value
const email = document.getElementById("txtName").value
const phone = document.getElementById("txtName").value
const radioPlan = document.getElementsByName("plan")
const addonItem = document.getElementsByClassName("option-box")
// const resultStep = document.getElementById("step4")
let sliderCheckbox = document.getElementById("slider-checkbox")


let plan = ""

let switcher = false

prices ={
    mouth: {
        arcade: 9,
        advanced: 12,
        pro: 15,

        online: 1,
        storage: 2,
        profile: 2,

        onlineActive: false,
        storageActive: false,
        profileActive: false,
    },
    year : {
        arcade: 90,
        advanced: 120,
        pro: 150,

        online: 10,
        storage: 20,
        profile: 20,

        onlineActive: false,
        storageActive: false,
        profileActive: false,
    }
}

let priceToggle = "mouth"

radioPlan[0].addEventListener("change",(e) => {
    plan = "arcade"
    updateData()
    updateDOM(switcher)
})
radioPlan[1].addEventListener("change",(e) => {
    plan = "advanced"
    updateData()
    updateDOM(switcher)
})
radioPlan[2].addEventListener("change",(e) => {
    plan = "pro"
    updateData()
    updateDOM(switcher)
})


sliderCheckbox.addEventListener("change", (e) => {
    switcher = !switcher
    if (switcher) {
        priceToggle = "year"
        updateData()
        updateDOM(switcher)
        updateAddon()
    } else {
        priceToggle = "mouth"
        updateData()
        updateDOM(switcher)
        updateAddon()
    }
})

let totalPlan = 0
let totalAddon = 0

addonItem[0].addEventListener("change", () => {
    if (!prices[priceToggle].onlineActive) {
        totalAddon += prices[priceToggle].online
        prices[priceToggle].onlineActive = true
    }
    if (prices[priceToggle].onlineActive) {
        totalAddon -= prices[priceToggle].online
        prices[priceToggle].onlineActive = false
    }
})
addonItem[1].addEventListener("change", () => {
    if (!prices[priceToggle].storageActive) {
        totalAddon += prices[priceToggle].storage
        prices[priceToggle].storageActive = true
    }
    if (prices[priceToggle].advancedActive) {
        totalAddon -= prices[priceToggle].storage
        prices[priceToggle].storageActive = false
    }
})
addonItem[2].addEventListener("change", () => {
    if (!prices[priceToggle].profileActive) {
        totalAddon += prices[priceToggle].profile
        prices[priceToggle].profileActive = true
    }
    if (prices[priceToggle].profileActive) {
        totalAddon -= prices[priceToggle].profile
        prices[priceToggle].profileActive = false
    }
})

function updateAddon(){
    if (prices.mouth.onlineActive !== prices[priceToggle].onlineActive) {
        prices.mouth.onlineActive = false
        totalAddon -= prices.mouth.online
        prices[priceToggle].onlineActive = true
        totalAddon += prices[priceToggle].online
    }
    if (prices.mouth.storageActive !== prices[priceToggle].storageActive) {
        prices.mouth.storageActive = false
        totalAddon -= prices.mouth.storage
        prices[priceToggle].storageActive = true
        totalAddon += prices[priceToggle].storage
    }
    if (prices.mouth.profileActive !== prices[priceToggle].profileActive) {
        prices.mouth.profileActive = false
        totalAddon -= prices.mouth.profile
        prices[priceToggle].profileActive = true
        totalAddon += prices[priceToggle].profile
    }
    if (prices.year.onlineActive !== prices[priceToggle].onlineActive) {
        prices.year.onlineActive = false
        totalAddon -= prices.year.online
        prices[priceToggle].onlineActive = true
        totalAddon += prices[priceToggle].online
    }
    if (prices.year.storageActive !== prices[priceToggle].storageActive) {
        prices.year.storageActive = false
        totalAddon -= prices.year.storage
        prices[priceToggle].storageActive = true
        totalAddon += prices[priceToggle].storage
    }
    if (prices.year.profileActive !== prices[priceToggle].profileActive) {
        prices.year.profileActive = false
        totalAddon -= prices.year.profile
        prices[priceToggle].profileActive = true
        totalAddon += prices[priceToggle].profile
    }
}

function updateData(){
    if (plan === "arcade") {
        totalPlan = prices[priceToggle].arcade
    }
    if (plan === "advanced") {
        totalPlan = prices[priceToggle].advanced
    }
    if (plan === "pro") {
        totalPlan = prices[priceToggle].pro
    }
}

function updateDOM(checkbox){
    let planOption1 = document.getElementsByClassName("opt-1")[0]
    let planOption2 = document.getElementsByClassName("opt-2")[0]

    let arcadeText = document.getElementsByClassName("preco-assinatura")[0]
    let advancedText = document.getElementsByClassName("preco-assinatura")[1]
    let proText = document.getElementsByClassName("preco-assinatura")[2]

    let freeMouth = document.getElementsByClassName("free-mouth")
    

    let priceAddonBtn = document.getElementsByClassName("price-addon-btn")

    if (checkbox) {
        planOption1.classList.remove("active")
        planOption2.classList.add("active")

        arcadeText.innerHTML = `$${prices[priceToggle].arcade}/yr` 
        advancedText.innerHTML = `$${prices[priceToggle].advanced}/yr` 
        proText.innerHTML = `$${prices[priceToggle].pro}/yr` 

        for(let i = 0; i < freeMouth.length; i++){
            freeMouth[i].style.display = "block"
        }

        priceAddonBtn[0].innerHTML = `+$${prices[priceToggle].online}/yr`
        priceAddonBtn[1].innerHTML = `+$${prices[priceToggle].storage}/yr`
        priceAddonBtn[2].innerHTML = `+$${prices[priceToggle].profile}/yr`
    } 
    if(!checkbox) {
        planOption2.classList.remove("active")
        planOption1.classList.add("active")
        
        arcadeText.innerHTML = `$${prices[priceToggle].arcade}/mo` 
        advancedText.innerHTML = `$${prices[priceToggle].advanced}/mo` 
        proText.innerHTML = `$${prices[priceToggle].pro}/mo` 

        for(let i = 0; i < freeMouth.length; i++){
            freeMouth[i].style.display = "none"
        }
        

        priceAddonBtn[0].innerHTML = `+$${prices[priceToggle].online}/mo`
        priceAddonBtn[1].innerHTML = `+$${prices[priceToggle].storage}/mo`
        priceAddonBtn[2].innerHTML = `+$${prices[priceToggle].profile}/mo`
    }
}

function infoPrices() {
    const planName = document.getElementById("plan-name")
    const planPrice = document.getElementById("plan-price")

    planName.innerHTML = `${plan}(${priceToggle})`
    planPrice.innerHTML = `$${totalPlan}/mo`

    const addonContainer = document.getElementsByClassName("addons")[0]
    const divAddon = document.createElement("div")
    const addonName = document.createElement("div")
    const addonPrice = document.createElement("span")

    // addonContainer.innerHTML = ""
    divAddon.classList.add("addon")
    addonName.classList.add("addon-name")
    addonPrice.classList.add("addon-price")

    if (prices[priceToggle].onlineActive) {
        addonName.innerHTML = "Online Service"
        addonPrice.innerHTML = prices[priceToggle].online

        divAddon.appendChild(addonName)
        divAddon.appendChild(addonPrice)
        addonContainer.appendChild(divAddon)
    }
    if (prices[priceToggle].storageActive) {
        addonName.innerHTML = "Larger Storage"
        addonPrice.innerHTML = prices[priceToggle].storage

        divAddon.appendChild(addonName)
        divAddon.appendChild(addonPrice)
        addonContainer.appendChild(divAddon)
    }
    if (prices[priceToggle].profileActive) {
        addonName.innerHTML = "Customizable Profile"
        addonPrice.innerHTML = prices[priceToggle].storage

        divAddon.appendChild(addonName)
        divAddon.appendChild(addonPrice)
        addonContainer.appendChild(divAddon)
    }
    
    nextPage()
}
