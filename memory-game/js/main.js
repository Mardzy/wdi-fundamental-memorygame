var cards = ['queen', 'queen', 'king', 'king'];
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[2]) {
        alert('You have found a match');
    } else {
        alert('Sorry, try again.');
    }
}
var cardsInPlay = [];

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    checkForMatch();
}
flipCard(0);
flipCard(2);