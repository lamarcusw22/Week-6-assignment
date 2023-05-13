const asset = require('chai').assert
const Game = require('./path/to/game')

describe('Game', function() {
    describe('#playRound()', function() {
        it('should update player scores correctly when Player 1 wins', function() {  //mocha and Chai method to help test the code that should correctly update the scores in the playRound function.
            const player1 = new Player('Lebron James');
            const player2 = new Player('Michael Jordan');   //Setting the player variable to specific names.
            const game = new Game(player1, player2);
            const card1 = new Card('Spades', '10');   // Player1 has a 10 of Spades.
            const card2 = new Card('Hearts', '9');    // Player2 has a 9 of Hearts.
            player1.hand = [card1];
            player2.hand = [card2];
            game.playRound();
            assert.equal(player1.score, 1);   // This should result in Player1 receiving a point.
            assert.equal(player2.score, 0);
        });

        it('should update player scores when Player 2 wins', function(){  //mocha and chai mehtod to help test the code if the scenario would be reversed. 
            const player1 = new Player('Lebron James');
            const player2 = new Player('Michael Jordan');
            const game = new Game(player1, player2);
            const card1 = new Card('Diamonds', '2');  // new variables for the cards of player1 and player2
            const card2 = new Card('Clubs', '10');
            player1.hand = [card1];
            player2.hand = [card2];
            game.playRound();
            assert.equal(player1.score, 0);
            assert.equal(player2.score, 1); // If the code is correct it would return Player2 receiving a point.
        });
    });
});
