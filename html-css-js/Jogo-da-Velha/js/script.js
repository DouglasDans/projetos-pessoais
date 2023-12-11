const buttonIniciarGame = document.querySelector("#começar-game")


// VARIAVEIS PLACAR
const dadosContainer = document.querySelector("#dados-container")

const gamePosition = document.getElementsByClassName("game")[0]

let formas = [
    `<svg class="formaX" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.71574 17.8579C-0.189507 13.9526 -0.189507 7.62098 3.71574 3.71574C7.62098 -0.189507 13.9526 -0.189507 17.8579 3.71574L60.2843 46.1421C64.1895 50.0474 64.1895 56.379 60.2843 60.2843C56.379 64.1895 50.0474 64.1895 46.1421 60.2843L3.71574 17.8579Z"/>
    <path d="M17.8579 60.2843C13.9526 64.1895 7.62098 64.1895 3.71574 60.2843C-0.189507 56.379 -0.189507 50.0474 3.71574 46.1421L46.1421 3.71574C50.0474 -0.189507 56.379 -0.189507 60.2843 3.71574C64.1895 7.62098 64.1895 13.9526 60.2843 17.8579L17.8579 60.2843Z"/>
    </svg>
    `
    ,
    `<svg  width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle class="formaO" cx="40" cy="40" r="30" stroke="#E5E6EB" stroke-width="20"/>
    </svg>
    `
]
let jogador1 = formas[1]
let jogador2 = formas[0]

let jogadorAtual = 0
let partidas = 1
let fimDeParida = false
let velha = true
let checarTurno = false
let tabuleiro = new Array(9)

function Jogador(nome, pontos, forma) {
    this.nome = nome
    this.pontos = pontos = 0
    this.forma = forma
}
jogador1 = new Jogador()
jogador2 = new Jogador()


buttonIniciarGame.addEventListener("click", function (e) {
    e.preventDefault()
    const inputJogador1Name = document.querySelector("#jogador1-input-name")
    const inputJogador2Name = document.querySelector("#jogador2-input-name")

    jogador1.nome = inputJogador1Name.value
    jogador2.nome = inputJogador2Name.value
    jogador1.forma = formas[1]
    jogador2.forma = formas[0]

    document.querySelector(".splash-screen").style.display = "none"
    atualizarPlacar()

})



function atualizarPlacar() {
    const partidaNumber = document.querySelector("#partida-number")
    const jogador1Name = document.querySelector("#jogador1-name")
    const jogador2Name = document.querySelector("#jogador2-name")
    const pontosPlayer1 = document.querySelector("#pontos-player1")
    const pontosPlayer2 = document.querySelector("#pontos-player2")

    const SuaVezContainer = document.querySelector("#SuaVezContainer")

    partidaNumber.textContent = "Partida " + partidas

    jogador1Name.textContent = jogador1.nome
    jogador2Name.textContent = jogador2.nome

    pontosPlayer1.textContent = jogador1.pontos
    pontosPlayer2.textContent = jogador2.pontos

    if (checarTurno) {
        SuaVezContainer.innerHTML = `
            <img src="assets/X-sua-vez.png" width="51" height="51" alt="">
            <h2>Sua vez <span>${jogador1.nome}</span></h2>
        `
    }else{
        SuaVezContainer.innerHTML = `
            <img src="assets/O-sua-vez.png" width="51" height="51" alt="">
            <h2>Sua vez <span>${jogador2.nome}</span></h2>
        `
    }
}


gamePosition.addEventListener("click", function(e) {
    if(e.target.matches(".empty-table") && !fimDeParida){
        e.target.classList.remove("empty-table")
        atualizarPlacar()
        atualizarTabuleiro(e.target)
        verificarElementosVertical()
        verificarElementosHorizontal()
        verificarElementosDiagonal()
        verificarVelha()
    }
})

function atualizarTabuleiro(celulaId) {
    let celulaArrayIndice = parseInt(celulaId.id.substr(celulaId.id.length - 1))
    turno = checarTurno ? jogador1.forma : jogador2.forma
    celulaId.innerHTML = turno
    if (checarTurno) {
        tabuleiro[celulaArrayIndice] = "O"
    }else{
        tabuleiro[celulaArrayIndice] = "X"
    }
    checarTurno = !checarTurno
}

function verificarVelha() {
    const SuaVezContainer = document.querySelector("#SuaVezContainer")
    let preenchidos = 0

    tabuleiro.forEach(function(celula, i){
        if(celula != undefined){
            preenchidos++
        }
    })
    if (preenchidos === tabuleiro.length && velha) {
        fimDeParida = true
        SuaVezContainer.innerHTML = `
            <span class="name-win">Velha</span>
            <div class="buttons-container">
                <button class="button-finalizar" onclick=document.location.reload(true);>Finalizar</button>
                <button class="button-continuar" onclick=resetarTabuleiro()>Continuar</button>
            </div>
        `
    }
}

function informarVencedor(forma, posicao1, posicao2, posicao3,jogador) {
    if(forma === "X"){
        document.querySelector("#game-celula-" + posicao1).classList.add("formaX-win")
        document.querySelector("#game-celula-" + posicao2).classList.add("formaX-win")
        document.querySelector("#game-celula-" + posicao3).classList.add("formaX-win")
    }
    if(forma === "O"){
        document.querySelector("#game-celula-" + posicao1).classList.add("formaO-win")
        document.querySelector("#game-celula-" + posicao2).classList.add("formaO-win")
        document.querySelector("#game-celula-" + posicao3).classList.add("formaO-win")
    }

    const SuaVezContainer = document.querySelector("#SuaVezContainer")

    SuaVezContainer.innerHTML = `
        <span class="name-win">${jogador.nome} Ganhou</span>
        <div class="buttons-container">
            <button class="button-finalizar" onclick=document.location.reload(true);>Finalizar</button>
            <button class="button-continuar" onclick=resetarTabuleiro()>Continuar</button>
        </div>
    `
    partidas++
    fimDeParida = true
    velha = false
}

function verificarElementosHorizontal() {
    for( var i = 0; i < 7; i += 3) {
        if (tabuleiro[i] == 'X' && tabuleiro[i + 1] == 'X' && tabuleiro[i + 2] == 'X'){ 
            jogador1.pontos++ 
            atualizarPlacar()
            informarVencedor(tabuleiro[i], i, i + 1, i + 2, jogador1)
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O'){
            jogador2.pontos++ 
            atualizarPlacar()
            informarVencedor(tabuleiro[i], i, i + 1, i + 2, jogador2)
        }
    }
}
function verificarElementosVertical() {
    for( var i = 0; i < 7; i += 1) {
        if (tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X' && tabuleiro[i + 6] == 'X'){
            jogador1.pontos++ 
            atualizarPlacar()
            informarVencedor(tabuleiro[i], i, i + 3, i + 6, jogador1)
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O'){
            jogador2.pontos++ 
            atualizarPlacar()
            informarVencedor(tabuleiro[i], i, i + 3, i + 6, jogador2)
        }
    }
}
function verificarElementosDiagonal() {
    for( var i = 0; i < 7; i += 3) {
        if (tabuleiro[i] == 'X' && tabuleiro[i + 4] == 'X' && tabuleiro[i + 8] == 'X'){ 
            jogador1.pontos++ 
            atualizarPlacar()
            informarVencedor(tabuleiro[i], i, i + 4, i + 8, jogador1)
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i + 4] == 'O' && tabuleiro[i + 8] == 'O'){
            jogador2.pontos++ 
            atualizarPlacar()
            informarVencedor(tabuleiro[i], i, i + 4, i + 8, jogador2)
        }
        if (tabuleiro[i + 2] == 'X' && tabuleiro[i + 4] == 'X' && tabuleiro[i + 6] == 'X'){ 
            jogador1.pontos++ 
            atualizarPlacar()
            informarVencedor(tabuleiro[i], i + 2, i + 4, i + 6, jogador1)
        }
        if (tabuleiro[i + 2] == 'O' && tabuleiro[i + 4] == 'O' && tabuleiro[i + 6] == 'O'){
            jogador2.pontos++ 
            atualizarPlacar()
            informarVencedor(tabuleiro[i], i + 2, i + 4, i + 6, jogador2)
        }
    }
}

function resetarTabuleiro() {
    gamePosition.innerHTML = `
    <div class="game-position empty-table" id="game-celula-0"></div>
    <div class="game-position empty-table" id="game-celula-1"></div>
    <div class="game-position empty-table" id="game-celula-2"></div>
    <div class="game-position empty-table" id="game-celula-3"></div>
    <div class="game-position empty-table" id="game-celula-4"></div>
    <div class="game-position empty-table" id="game-celula-5"></div>
    <div class="game-position empty-table" id="game-celula-6"></div>
    <div class="game-position empty-table" id="game-celula-7"></div>
    <div class="game-position empty-table" id="game-celula-8"></div>
    `
    tabuleiro = new Array(9)
    jogadorAtual = 0
    partidas = 1
    fimDeParida = false
    velha = true
    checarTurno = false
    atualizarPlacar()

    
}