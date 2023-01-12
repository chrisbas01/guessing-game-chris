// THank you Kawiki for help with the code!!
"use strict";

function normalizeAnswer (answer) {
    // Gets the first character of an answer, which should be either 'y' or 'n', and then capitalizes it to prepare it for our conditional checks.
    let normalizedResponse = answer.charAt(0).toUpperCase();
    return normalizedResponse;
}

function askQuestion (input, i) {

    let answer = prompt(input);
    
    while (!answer) {
        alert('Dude, you have to at least try to answer the question...');
        answer = prompt(input);
    }
    
    alert(`${userName} answered ${answer}...`);
    answer = normalizeAnswer(answer);
    
    if (answer === answersArr[i]) {
        //console.log('correct response')
        alert(responseCorrect[i]);
        score++;
    } else if ((answer != answersArr[i] && answer === 'N') || (answer != answersArr[i] && answer === 'Y')) {
        //console.log('incorrect response');
        alert(responseIncorrect[i]);
    } else {
        //console.log(j);
        if (j >= responseInvalidAnswer.length) {
            alert(responseInvalidAnswer[4]);
        } else {
            alert (responseInvalidAnswer[j]);
        }
        j++;
        i--;
        //console.log(j);
    }
        
}


alert("Welcome to my guessing game about 'Me'!.")

let userName = prompt("Hey, what do I call you?");
while (!userName) {
    userName = prompt("Oh you didn't understand, What is your name?");
}
//console.log("user's name is " + userName);
alert('Hey, ' + userName + '! Get ready to make some guesses!')

const questionsArr = [
    'Am I older than 40 years old?', 
    'Am I from the U.S.?',
    'Do I speak more than one language?',
    'Am I younger than 40 years old?',
    'Was I ever in the military?',
];

const answersArr = [
    'N',
    'Y',
    'Y',
    'Y',
    'N',
];

const responseCorrect = [
    "Thank you for getting that correct!",
    "correct, it would be weird to guess that wrong",
    'Correct, read next page for more info.',
    "Correct, I am glad you got that right.",
    "Correct, I never joined.",

];

const responseIncorrect = [
    'Wrong, wow this is going to be hard for you, we both should be embarrassed!',
    'Wrong, interesting guess!',
    'Wrong, try again',
    "Wrong, sorry, you need glasses.",
    "Wrong, no stolen valor here."

];

const responseInvalidAnswer = [
    "It was a 'yes' or 'no' question...",
    "Please abide by the rules and  Pick 'Yes' or 'No'.",
    "'YES' OR 'NO' ANSWERS ONlY!",
    "Hmmm, you would think you would learn by now 'Yes' or 'No' only!",
    "What's the point in giving you instructions, if you're going to ignore them? PLEASE AWNSER 'YES' OR 'NO'!" ,

]

const topFiveSports = [
    'Pool',
    'Golf',
    'Basketball',
    'Football',
    'Table-Tennis',
]

let score = 0;
let j = 0;

for (let i = 0; i < questionsArr.length; i++) {

    askQuestion(questionsArr[i], i);

}






let randomNumber = Math.floor(Math.random() * 21); 
// Math.random returns a random number between 0 and 1. When we multiply it by a number it scales the max range. However, if we multiply it by 20 it will only produce a number between 0 and 19, so by scaling it by 21 we set the range of possible numbers between 0 and 20.
let attempts = 0;
let numberGuess = 0;

do {
    //console.log(randomNumber);
    numberGuess = prompt('Pick a number between 0 and 20.');
    // numberGuess = Number(numberGuess);
    // console.log(typeof numberGuess);

    while (/*numberGuess === NaN ||*/ numberGuess < 0 || numberGuess > 20) {
        numberGuess = prompt('Please enter a valid number between 0 and 20')
    }

    if (numberGuess > randomNumber) {
        alert('Too high!');
    } else if (numberGuess < randomNumber) {
        alert('Too low!');
    } else if (numberGuess == randomNumber) {
        alert('Whoa! You got it right!');
        score++;
        //console.log(score);
    }
    attempts++;
    // console.log(attempts);
} while (attempts < 4 && numberGuess != randomNumber)

if (attempts === 4 && numberGuess != randomNumber) {
    alert(`Sorry, too many attempts! No points given. The correct answer was ${randomNumber}!`);
}

attempts = 0;
let sportsGuess;

do {
    sportsGuess = prompt('Guess what one of my top 5 favorite sports are? (Some I play, and some I just watch.)');
    sportsGuess = sportsGuess.charAt(0).toUpperCase() + sportsGuess.slice(1).toLowerCase();
    if (topFiveSports.includes(sportsGuess)) {
        alert(`Nice! Yeah, ${sportsGuess} is pretty awesome!`);
        score++;
    } else {
        alert('Sorry, try again!')
    }
    attempts++;
} while (attempts < 7 && !topFiveSports.includes(sportsGuess))

alert(`The correct answers were ${topFiveSports}`);
alert(`You got ${score} correct out of 7. well done!.`)
alert("Thank you for playing 'My guessing game', " + userName +" We'll see you next time!");
