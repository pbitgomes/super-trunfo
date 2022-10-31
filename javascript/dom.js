const match = new superTrunfo();

const telaInicial = document.getElementById("telaInicial");
const nomeJogador = document.getElementById("nomeJogador");
const btnJogar = document.getElementById("btnJogar");

const board = document.getElementById("board");
const btnSortear = document.getElementById("btnsortear");
const jogador = document.getElementById("jogador");
const atributos = document.getElementById("atributos");
const forca = document.getElementById("forca");
const inteligencia = document.getElementById("inteligencia");
const magia = document.getElementById("magia");

const computador = document.getElementById("computador");

const resultado = document.getElementById("resultado");


btnJogar.addEventListener("click", (event) => {
    event.preventDefault();
    if(nomeJogador.value === "") {
        alert("Você deve informar um nome para iniciar o jogo.")
        return
    }

    telaInicial.style.display = none;
    board.style.display = flex;

    // sortear uma carta e mostrar no board
})

//escolher o atributo e botão jogar