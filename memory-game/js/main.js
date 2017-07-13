var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

cardsInPlay.push(cardOne, cardTwo);

console.log('User flipped ' + cardOne);
console.log('User flipped ' + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert('You have found a match');
} else {
    alert('Sorry, try again.');
}