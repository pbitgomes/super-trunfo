const match = new SuperTrunfo();

const telaInicial = document.getElementById("telaInicial");
const inputNomeJogador = document.getElementById("inputNomeJogador");
const btnJogar = document.getElementById("btnJogar");

const board = document.getElementById("board");
const nomeJogador = document.getElementById("nomeJogador");
const instrucoes = document.getElementById("instrucoes");
const btnSortear = document.getElementById("btnSortear");
const cartaJogador = document.getElementById("cartaJogador");
const jogador = document.getElementById("jogador");
const computador = document.getElementById("computador");
const resultado = document.getElementById("resultado");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");

// informar o nome do jogador e avançar para a tela do jogo
btnJogar.addEventListener("click", (event) => {
    event.preventDefault();
    if(inputNomeJogador.value === "") {
        alert("Você deve informar um nome para iniciar o jogo.")
        return
    }
    telaInicial.style.display = "none";
    board.style.display = "flex";
    nomeJogador.innerText = inputNomeJogador.value;
})

// sortear as cartas e mostrar o resultado do jogo
btnSortear.addEventListener("click", () => {
    match.selecionarCartaJogador();
    match.selecionarCartaComputador();
    match.compararCartas();    
})
