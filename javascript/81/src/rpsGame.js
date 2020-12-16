import $ from 'jquery';
import './css/index.css';

import { rock, computerRock } from './rock';
import { paper, computerPaper } from './paper';
import { scissors, computerScissors } from './scissors';



const rockButton = $('#rock');
const paperButton = $('#paper');
const scissorsButton = $('#scissors');
const display = $('#display');
//const yourPickImage = $('#yourPickImage');
//const computerPickImage = $('#computerPickImage');

rockButton.text(rock.name);
paperButton.text(paper.name);
scissorsButton.text(scissors.name);


function chooseRandomNum(max) {
    return Math.floor(Math.random() * max + 1);
}
rockButton.click(function () {
    console.log(`You chose rock`);
    getComputerPick(rock); //TODO: make this dynamic for all 3 posibilities
    console.log('');
});
paperButton.click(function () {
    console.log(`You chose paper`);
    getComputerPick(paper); 
    console.log('');
});
scissorsButton.click(function () {
    console.log(`You chose scissors`);
    getComputerPick(scissors); 
    console.log('');
});

function getComputerPick(yourPick) {
    let computerPick;
    let rpsNum = chooseRandomNum(3);
    if (rpsNum === computerRock.value) {
        console.log(`computer chose ${computerRock.name}`);
        computerPick = computerRock;
    } else if (rpsNum === computerPaper.value) {
        console.log('computer chose paper');
        computerPick = computerPaper;
    } else {
        console.log('computer chose scissors');
        computerPick = computerScissors;
    }
    comparePicks(computerPick, yourPick);

    function comparePicks(computerPick, yourPick) { 
        let results;
        if (computerPick.name === yourPick.name) {
            results = 'Tie';
        }
        else if (yourPick.name === 'Rock' && computerPick.name === 'Scissors') { 
            results = 'You win';
        }
        else if (yourPick.name === 'Scissors' && computerPick.name === 'Rock') {
            results = 'You lose';
        }
        else if (yourPick.value < computerPick.value) { // rock value = 1, paper value = 2, scissors value = 3
            results = 'You lose';
        } else {
            results = 'You win';
        }
        displayResults();

        function displayResults() {
        console.log(results);
        display.text('');
        setTimeout(() => display.text(`${yourPick.name} vs ${computerPick.name}, ${results}`), 100);
        }
    }
}
/*
TODO: 
use pictures instead of buttons
make two human player option?
keep score of ties, wins, and loses 
*/
