'use strict'

let person = prompt('What is your name?');
if (person === null) {
    alert('please refresh and start again!');
}
else {
    let isReady = confirm(person + ' Are you ready?');
    if (isReady) {
        alert('Great! ' + person + ' is ready!');
    }
    else {
        alert('ugh oh, please come back when you are ready!');
    }
}

prompt('Greetings ' + person + '!!' + ' What do you know about me?');

// let answer1 = prompt('am I younger than 40 years old' = ' Please!! Answer with you Yes/No');

// let answer1 = (no){
// console.log(answer1, question1Answer);
// console.log(typeof answer1, typeof question1Answer);
// }
// if (answer1 === question1Answer) {
//     alert('Thats right!')


