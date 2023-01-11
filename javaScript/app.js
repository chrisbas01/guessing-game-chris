'use strict'

let person = prompt('What is your name?');
if (person === '') {
    person = alert('please refresh and start again!');
}
else {
    let isReady = confirm(person + ' Are you ready?');
    if (isReady) {
        alert('Great! ' + person + ' is ready!');
    }
    else {
        alert('ugh oh, please come back when you are ready!');
        alert('Greetings ' + person + '!!' + ' Let us, see how good at guessing you are?');
    }
}
    
myAge();
function myAge() {
    let age = prompt ('Am I older than 40 years old?');
    if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y'){
        alert('wrong wow this is going to be hard for you!');
    } else {
        alert('Thank you for getting that correct!');
    }   
}
where();
 function where() {
    let where1 = prompt ('Am I from the U.S.?');
    if (where1.toLowerCase() === 'yes' || where1.toLowerCase() === 'y'){
        alert('correct, it would be weird to guess that wrong');
    } else {
        alert('Wrong, interesting guess!');
    }   
} 
school();
 function school() {
    let school1 = prompt ('Do I speak more than one language?');
    if (school1.toLowerCase() === 'yes' || school1.toLowerCase() === 'y'){
        alert('Correct, read next page for more info.');
    } else {
        alert('Wrong, try again!');
    }

}
young();
 function young() {
    let age = prompt ('Am I younger than 40 years old?');
    if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y'){
        alert('Correct, I am glad you got that right.');
    } else {
        alert('Wrong sorry, you need glasses.');
    }   
} 
military();
 function military() {
    let age = prompt ('Was I ever in the military?');
    if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y'){
        alert('wrong, no stolen valor here.');
    } else {
        alert('Correct, I never joined');
    }   
} 
