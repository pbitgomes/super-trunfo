class Cartas {
    constructor(nome, img, forca, inteligencia, magia) {
        this.nome = nome;
        this.img = img;
        this.forca = forca;
        this.inteligencia = inteligencia;
        this.magia = magia
    }
}

class SuperTrunfo {
    constructor() {
        this.deck = [
            new Cartas ("Arya Stark", "img\ARYA.png", 5, 8, 7),
            new Cartas ("Bran Stark", "img\BRAN.png", 3, 9, 8),
            new Cartas ("Brienne de Tarth", "img\BRIENNE.png", 9, 6, 4),
            new Cartas ("Cersei Lannister", "img\CERSEI.png", 9, 7, 5),
            new Cartas ("Daenarys Targaryen", "img\DAENERYS.png", 9, 5, 8),
            new Cartas ("Khal Drogo", "img\DROGO.png", 8, 6, 5),
            new Cartas ("Fantasma", "img\FANTASMA.png", 9, 7, 8),
            new Cartas ("Gregor Clegane", "img\GREGOR.png", 9, 2, 3),
            new Cartas ("Jon Snow", "img\JON.png", 7, 8, 9),
            new Cartas ("Melisandre", "img\MELISANDRE.png", 4, 7, 9),
            new Cartas ("Nymeria", "img\NYMERIA.png", 8, 7, 9),
            new Cartas ("Oberyn Martell", "img\OBERYN.png", 7, 6, 5),
            new Cartas ("Samwell Tarly", "img\SAMWELL.png", 4, 9, 6),
            new Cartas ("Tormund Giantsbane", "img\TORMUND.png", 8, 4, 6),
            new Cartas ("Tyrion Lannister", "img\TYRION.png", 3, 9, 4)
        ]
        
        this.cartaJogador = [this.deck[0]]
        this.cartaComputador = [this.deck[1]]
    }

    //embaralha a carta do jogador
    renderDeck() {
        let sortDeck = this.deck.sort(() => {
            return Math.random() - 0.5;
        })
       
        sortDeck.forEach((img) => {
            let imagem = document.createElement("img") // <img src="" />
            imagem.src = img // <img src="./img/refletir.svg" />
            board.appendChild(imagem)
        })
    }
}

