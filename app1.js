function askName() {
    let name = prompt('Hello, what is your name?');
    let askAgain = confirm('Are you sure?');
    if (askAgain == false) {
        let name = prompt('Hello, what is your name?');
        document.write('<h2> Hello ' + name + '!</h2>');
    }
    else {
        document.write('<h2> Hello ' + name + '!</h2>');
    }
}
function askForCause() {
    let question = confirm('Would you like to help our cause and fight Malaria?');
    if (question == true) {
        document.write('<h2>Thank you for your desire to help, please read the article to learn more.</h2>')
    }
}

function guessNumber() {
    let userGuess = prompt('Guess a number from 1 to 10.');
    let correctAmount = 2;
    let attempts = 3;

    for (i = 1; i <= attempts; i++) {
        if (i == attempts) {
            alert('Sorry, you ran out of tries.');
            break;
        }
        while (userGuess < 1 || userGuess > 10) {
            userGuess = prompt('Try again, enter a number from 1 to 10');
        }
        if (userGuess == correctAmount) {
            alert('That is correct!');
            break;
        } else if (userGuess > correctAmount || userGuess < correctAmount) {
            userGuess = prompt('Sorry, try again.')
        }
    }
}

function askMosquito() {
    let mosquitos = prompt('How many mosquitos would you like to see below? Limit is 10.');
    for (i = 1; i <= mosquitos; i++) {
        while (mosquitos >= 11){
        mosquitos = prompt('Sorry, too many. Limit is 10');
        }
        document.write('<img src="https://www.cdc.gov/mosquitoes/images/gallery/Anopheles-freeborni-adult-large.jpg?_=16886" alt="Mosquito" width="300px">');
        document.write(i)
    }
}
