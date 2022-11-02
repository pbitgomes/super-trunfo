class Cartas {
    constructor(nome, imagem, forca, inteligencia, magia) {
        this.nome = nome;
        this.imagem = imagem;
        this.forca = forca;
        this.inteligencia = inteligencia;
        this.magia = magia;
    }
}

class SuperTrunfo {
    constructor() {
        this.deck = [
            new Cartas ("Arya Stark", "./img/arya.png", 5, 8, 7),
            new Cartas ("Bran Stark", "./img/bran.png", 3, 9, 8),
            new Cartas ("Brienne de Tarth", "./img/brienne.png", 9, 6, 4),
            new Cartas ("Cersei Lannister", "./img/cersei.png", 9, 7, 5),
            new Cartas ("Daenarys Targaryen", "./img/daenerys.png", 9, 5, 8),
            new Cartas ("Khal Drogo", "./img/drogo.png", 8, 6, 5),
            new Cartas ("Fantasma", "./img/fantasma.png", 9, 7, 8),
            new Cartas ("Gregor Clegane", "./img/gregor.png", 9, 2, 3),
            new Cartas ("Jon Snow", "./img/jon.png", 7, 8, 9),
            new Cartas ("Melisandre", "./img/melisandre.png", 4, 7, 9),
            new Cartas ("Nymeria", "./img/nymeria.png", 8, 7, 9),
            new Cartas ("Oberyn Martell", "./img/oberyn.png", 7, 6, 5),
            new Cartas ("Samwell Tarly", "./img/samwell.png", 4, 9, 6),
            new Cartas ("Tormund Giantsbane", "./img/tormund.png", 8, 4, 6),
            new Cartas ("Tyrion Lannister", "./img/tyrion.png", 3, 9, 4)
        ]
        
        this.cartaJogador = this.deck[parseInt(Math.random() * 15)];
        this.cartaComputador = this.deck[parseInt(Math.random() * 15)];
    }
    
    // método para selecionar a carta do jogador
    selecionarCartaJogador() {
        //console.log("jogador", this.cartaJogador);
        let imagemJogador = document.createElement("img");
        imagemJogador.src = this.cartaJogador.imagem;
        imagemJogador.alt = this.cartaJogador.nome;
        cartaJogador.appendChild(imagemJogador);
        atributos.className = "show";
        btnSortear.className = "hide";
    }

    // método para selecionar o atributo com o qual o jogador quer jogar
    // o que fazer se um atributo não for selecionado?
    selecionarAtributo(){        
        for (let i = 0; i < atributosRadio.length; i++) {
            if(atributosRadio[i].checked) {
                let atributoSelecionado = atributosRadio[i].value
                console.log(atributoSelecionado)
                //let atributoSelecioadoJogador = this.cartaJogador.atributoSelecionado //UNDEFINED
                console.log(this.cartaJogador) // COMO RECUPERAR O VALOR DO ATRIBUTO?
                console.log(this.cartaComputador)
                console.log(i)
            }
            // if (i = 0) {
            //     if (this.cartaJogador.forca > this.cartaComputador.forca) {
            //         alert("Você ganhou!!!!!!")
            //     } else if (this.cartaJogador.forca < this.cartaComputador.forca) {
            //         alert("Você perdeu :(")
            //     } else {alert("Você empatou com o computador.")}
            // }
            
            //     } else if (i = 1) {
            //         if (this.cartaJogador.inteligencia > this.cartaComputador.inteligencia) {
            //             alert("Você ganhou!!!!!!")
            //         } else {alert("Você perdeu :(")}
            //     } else if (i = 2) {
            //         if (this.cartaJogador.magia > this.cartaComputador.magia) {
            //             alert("Você ganhou!!!!!!")
            //         } else {alert("Você perdeu :(")}
            //     }
            // }
            //else {alert("Um atributo deve ser selecionado.")} não funcionou :(
        }
    }
    
    //selecionar a carta do computador
    selecionarCartaComputador() {
        computador.className = "show";
        if (this.cartaJogador === this.cartaComputador) {
            this.cartaComputador = [this.deck[parseInt(Math.random() * Cartas.length)]]
        } 
        //console.log("computador", this.cartaComputador)
        let imagemComputador = document.createElement("img");
        imagemComputador.src = this.cartaComputador.imagem;
        imagemComputador.alt = this.cartaComputador.nome;
        computador.appendChild(imagemComputador)
    }
}

