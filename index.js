class Card {     // Created a card class with suit and number in its parameters. Then set suit to suit and number to number.
    constructor(suit,number){
        this.suit = suit;
        this.number = number;
    }
}

class Deck {     // Created a class called Deck with an empty array but added the variables and their arrays. Suits: Spades, Diamonds, Clubs, Hearts. Numbers 2 through A. 
    constructor() {
        this.cards = [];
        let suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
        let numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        for (let suit of suits){
            for (let number of numbers){
                this.cards.push(new Card(suit,number));
            }
        }
    }
    shuffle(){    // created a shuffle effect that randomizes the shuffle from the bottom of the deck.
        for (let i = this.cards.length -1; i > 0; i--){
            let j = Math.floor(Math.random() * (i +1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    deal(){  //used the pop method to deal a random card.
        return this.cards.pop()
    }
}
class Player {   //  created a player class with name as the paramter and the objects in them as name, hand with an empty array, and score starting at 0.
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    
    }
    addCard(card){    // this adds the card to a players hand by pushing it onto the hand array.
        this.hand.push(card);
    }
    playCard(){       // This plays the card by using the shift method.
        return this.hand.shift();
    }
    updatedScore(points = 1){  // This updates the score.
        this.score += points;
    }
}
class Game {    // created a class called Game where the parameters are two players. The objects involve the deck and for the deck to be shuffled as well as the two players. 
    constructor(player1, player2){
        this.Deck = new Deck();
        this.Deck.shuffle;
        this.player1 = player1;
        this.player2 = player2;
        for (let i = 0; i < 26; i++){  // This helps deal the 26 cards to each player.
            this.player1.addCard(this.Deck.deal());
            this.player2.addCard(this.Deck.deal())
        }
    }
    playRound(){  // I created a playRound function within the game class with two variables card1 and card2 with a playCard function.
        let card1 = this.player1.playCard();
        let card2 = this.player2.playCard();
        if (card1.number > card2.number) {
            this.player1.updatedScore(1);  // if card1 is greater than card2 player 1 gets the point.
        } else if (card1.number < card2.number){ // if card2 is greater than card1 player 2 gets the point.
            this.player2.updatedScore(1);
        } else {
            this.player1.updatedScore(0);   //if card1 and card2 are the same, no player gets the points and it returns "War"
            this.player2.updatedScore(0);
            return "War"
        }
    }
    playGame(){   // I created a playGame function with each player receiving 26 cards in hand.
        while (this.player1.hand.length > 0 && this.player2.hand.length > 0){
            this.playRound()
        }
        if (this.player1.score > this.player2.score){       // Then I attempted to create win conditions if player1 score is greater than player2, player1 wins.
            alert (`${this.player1.name} wins the game!`);
        } else if (this.player2.name > this.player1.score) {  // vis versa
            alert (`${this.player2.name} wins the game!`);
        } else {
            alert ("Tie game!"); // if then had the same amount it was a tie.

        }
    }
}

let player1 = new Player("Lebron James");
let player2 = new Player("Michael Jordan");
let game = new Game(player1, player2);
game.playGame();