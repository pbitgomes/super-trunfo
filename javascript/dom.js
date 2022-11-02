const match = new SuperTrunfo();

const telaInicial = document.getElementById("telaInicial");
const inputNomeJogador = document.getElementById("inputNomeJogador");
const btnJogar = document.getElementById("btnJogar");

const board = document.getElementById("board");
const nomeJogador = document.getElementById("nomeJogador");
const btnSortear = document.getElementById("btnSortear");
const jogador = document.getElementById("jogador");
const cartaJogador = document.getElementById("cartaJogador"); //??
const nomeCarta = document.getElementById("nomeCarta");
const atributos = document.getElementById("atributos");
const atributosRadio = document.getElementsByName("atributo"); //--------
const forca = document.getElementById("forca");
const inteligencia = document.getElementById("inteligencia");
const magia = document.getElementById("magia");
const btnCombate = document.getElementById("btnCombate");

const computador = document.getElementById("computador");
const cartaComputador = document.getElementById("cartaComputador");

const resultado = document.getElementById("resultado");

// informar o nome do jogador e passar para a tela do jogo
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

// sortear a carta do jogador, mostrar no board, mostrar atributos
btnSortear.addEventListener("click", () => {
    match.selecionarCartaJogador();
})

btnCombate.addEventListener("click", (event) => {
    event.preventDefault();
    match.selecionarAtributo();
    match.selecionarCartaComputador();
    // verificar qual atributo foi selecionado
    // comparar o atributo selecionado e verificar quem ganhou
})
