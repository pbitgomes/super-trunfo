class Cartas {
  constructor(nome, imagem, magia) {
    this.nome = nome;
    this.imagem = imagem;
    this.magia = magia;
  }
}

class SuperTrunfo {
  constructor() {
    this.deck = [
      new Cartas("Arya Stark", "./img/Arya-stark.jpg", 7),
      new Cartas("Bran Stark", "./img/bran-stark.png", 8),
      new Cartas("Brienne de Tarth", "./img/brienne-de-tarth.png", 4),
      new Cartas("Cersei Lannister", "./img/cersei-lannister.jpg", 5),
      new Cartas("Daenarys Targaryen", "./img/daenerys-targaryen.png", 8),
      new Cartas("Khal Drogo", "./img/khal-drogo.jpg", 5),
      new Cartas("Fantasma", "./img/ghost.jpg", 8),
      new Cartas("Gregor Clegane", "./img/gregor-clegane.jpg", 3),
      new Cartas("Jon Snow", "./img/jon-snow.jpg", 9),
      new Cartas("Melisandre", "./img/melisandre.jpg", 9),
      new Cartas("Nymeria", "./img/nymeria.jpg", 9),
      new Cartas("Oberyn Martell", "./img/oberyn-martell.jpg", 5),
      new Cartas("Samwell Tarly", "./img/samwell-tarly.png", 6),
      new Cartas("Tormund Giantsbane", "./img/tormund-giantsbane.jpg", 6),
      new Cartas("Tyrion Lannister", "./img/tyrion-lannister.jpg", 4),
    ];

    this.cartaJogador = this.deck[parseInt(Math.random() * 15)];
    this.cartaComputador = this.deck[parseInt(Math.random() * 15)];
  }

  // método para selecionar a carta do jogador
  selecionarCartaJogador() {
    console.log("jogador", this.cartaJogador);
    let imagemJogador = document.createElement("img");
    imagemJogador.src = this.cartaJogador.imagem;
    imagemJogador.alt = this.cartaJogador.nome;
    computador.appendChild(imagemJogador);
    btnSortear.className = "hide";
  }

  // método para selecionar a carta do computador
  selecionarCartaComputador() {
    if (this.cartaJogador === this.cartaComputador) {
      this.cartaComputador = [this.deck[parseInt(Math.random() * 15)]];
    }
    console.log("computador", this.cartaComputador);
    let imagemComputador = document.createElement("img");
    imagemComputador.src = this.cartaComputador.imagem;
    imagemComputador.alt = this.cartaComputador.nome;
    computador.appendChild(imagemComputador);
  }

  compararCartas() {
    //resultado.className = "show";
    instrucoes.className = "hide";
    let comparacao = ""
    
    if (this.cartaJogador.magia > this.cartaComputador.magia) {
        comparacao = "Você ganhou!";
    } else if (this.cartaJogador.magia < this.cartaComputador.magia) {
        comparacao = "Você perdeu :(";
    } else {
        comparacao = "O jogo empatou";
    }

    resultado.innerHTML = comparacao + "<br />" +  
      this.cartaJogador.nome +
      " " +
      this.cartaJogador.magia +
      " x " +
      this.cartaComputador.nome +
      " " +
      this.cartaComputador.magia;
  }
}