var cards = [{
        suit: 'Hearts',
        rank: 'Queen',
        cardImage: "images/queen-of-hearts.png",
    },
    {
        suit: 'Diamonds',
        rank: 'Queen',
        cardImage: "images/queen-of-diamonds.png",
    }, {
        suit: 'Hearts',
        rank: 'King',
        cardImage: "images/king-of-hearts.png",
    }, {
        suit: 'Diamonds',
        rank: 'King',
        cardImage: "images/king-of-diamonds.png",
    }
];

var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert('You have found a match!');
    } else {
        alert('Sorry, try again.');
    }
};

var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);

    if (cardsInPlay.length === 2) {
        checkForMatch();
        cardsInPlay = [];
    }
};

var createBoard = function() {
    for (var i = 0; i <= cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};

createBoard();