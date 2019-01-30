'use strict'

var name = prompt('Hello user! What should I call you going forward');
console.log(name);

var yesNo = prompt('I\'m going to ask you some yes/no questions ' + name + '; are you ready? Please use full words.').toUpperCase();
    if (yesNo === 'YES'){
        alert('Great, let us begin...');
    } else if (yesNo === 'NO') {
        alert('sorry, but you don\'t have a choice this time.');
    }
console.log(yesNo);

var apples = prompt(name + ' do you like apples?').toLowerCase();
    if (apples === 'yes') {
        alert('I love apples. They\'re the perfect fruit');
    } else if (apples === 'no') {
        alert('I\'m not saying that you\'re wrong for that opinion, but you are.')
    }
console.log(apples);

var satisfy = prompt(' Have you enjoyed these questions' + name +'?').toUpperCase();
    if (satisfy === 'YES'){
        alert('Im glad you like them. There are more on the way.')
    }
    else if (satisfy === 'NO') {
        alert('Well ' + name + ' I\'ll do my best in the future to live up to your high standards.')
    }
console.log(satisfy);

alert('Ok ' + name + ' I\'ve got 3 pets at home, do you think you can guess one of their name\'s?');

var petNameGuess = prompt('*HINT*: Two are named for foods, and the other is derived of \'father\'.').toUpperCase();
    if (petNameGuess === 'VADER'|| 'MEATLOAF' || 'NOODLE'){
        alert('Congrats! You got it!')
    }
    else (petNameGuess !== 'VADER' || 'MEATLOAF' || 'NOODLE'){
        alert('Sorry, that is wrong')
    }
console.log(petNameGuess);

