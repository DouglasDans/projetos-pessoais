const gamePosition = document.getElementsByClassName("game")[0]
const vezJogador = document.querySelector(".sua-vez-player span")

let jogadorAtual = 0
let formas = [
    `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.71574 17.8579C-0.189507 13.9526 -0.189507 7.62098 3.71574 3.71574C7.62098 -0.189507 13.9526 -0.189507 17.8579 3.71574L60.2843 46.1421C64.1895 50.0474 64.1895 56.379 60.2843 60.2843C56.379 64.1895 50.0474 64.1895 46.1421 60.2843L3.71574 17.8579Z" fill="#A276D9"/>
    <path d="M17.8579 60.2843C13.9526 64.1895 7.62098 64.1895 3.71574 60.2843C-0.189507 56.379 -0.189507 50.0474 3.71574 46.1421L46.1421 3.71574C50.0474 -0.189507 56.379 -0.189507 60.2843 3.71574C64.1895 7.62098 64.1895 13.9526 60.2843 17.8579L17.8579 60.2843Z" fill="#A276D9"/>
    </svg>
    `
    ,
    `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="30" stroke="#E5E6EB" stroke-width="20"/>
    </svg>
    `
]
let jogador1 = formas[1]
let jogador2 = formas[0]
let checarTurno = false
let tabuleiro = new Array(9)

gamePosition.addEventListener("click", function(e) {
    if(e.target.matches(".empty-table")){
        e.target.classList.remove("empty-table")
        atualizarTabuleiro(e.target)
        verificarElementosVertical()
        verificarElementosHorizontal()
        verificarElementosDiagonal()
        verificarVelha()
    }
})

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
    checarTurno = false
}

function atualizarTabuleiro(celulaId) {
    let celulaArrayIndice = parseInt(celulaId.id.substr(celulaId.id.length - 1))

    turno = checarTurno ? jogador1 : jogador2
    celulaId.innerHTML = turno
    if (checarTurno) {
        tabuleiro[celulaArrayIndice] = "O"
        vezJogador.textContent = "Jogador 1"
    }else{
        tabuleiro[celulaArrayIndice] = "X"
        vezJogador.textContent = "Jogador 2"
    }
    checarTurno = !checarTurno
}

function verificarVelha() {
    let preenchidos = 0
    tabuleiro.forEach(function(celula, i){
        if(celula != undefined){
            preenchidos++
        }
    })
    if (preenchidos === tabuleiro.length) {
        alert("Deu Veia")
        resetarTabuleiro()
    }
}

function verificarElementosHorizontal() {
    for( var i = 0; i < 7; i += 3) {
        if (tabuleiro[i] == 'X' && tabuleiro[i + 1] == 'X' && tabuleiro[i + 2] == 'X'){ 
            alert ('Jogador 1 ganhou!')
            resetarTabuleiro()
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O'){
            alert ('Jogador 2 ganhou!')
            resetarTabuleiro()
        }
    }
}
function verificarElementosVertical() {
    for( var i = 0; i < 7; i += 3) {
        if (tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X' && tabuleiro[i + 6] == 'X'){ 
            alert ('Jogador 1 ganhou!')
            resetarTabuleiro()
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O'){
            alert ('Jogador 2 ganhou!')
            resetarTabuleiro()
        }
    }
}
function verificarElementosDiagonal() {
    for( var i = 0; i < 7; i += 3) {
        if (tabuleiro[i] == 'X' && tabuleiro[i + 4] == 'X' && tabuleiro[i + 8] == 'X'){ 
            alert ('Jogador 1 ganhou!')
            resetarTabuleiro()
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i + 4] == 'O' && tabuleiro[i + 8] == 'O'){
            alert ('Jogador 2 ganhou!')
            resetarTabuleiro()
        }
        if (tabuleiro[i + 2] == 'X' && tabuleiro[i + 4] == 'X' && tabuleiro[i + 6] == 'X'){ 
            alert ('Jogador 1 ganhou!')
            resetarTabuleiro()
        }
        if (tabuleiro[i + 2] == 'O' && tabuleiro[i + 4] == 'O' && tabuleiro[i + 6] == 'O'){
            alert ('Jogador 2 ganhou!')
            resetarTabuleiro()
        }
    }
}