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

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[2]) {
        alert('You have found a match');
    } else {
        alert('Sorry, try again.');
    }
}

var cardsInPlay = [];

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();


}
flipCard(0);
flipCard(2);