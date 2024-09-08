/*
    App: First JavaScript Application
    Author: Diego Robles
    Date: 09/08/24
*/

// Allow the user to enter their guess
let num = prompt ('Guess a number between 1 & 10');
// Check to see if the number is a winner
if (num == 5)
    // If it is, they got it right
    {
        alert('You guess the right number!');
    } else {
        // If it isn't, they got it wrong
        alert('You chose poorly...');
    }
