'use strict'

var correctCounter = 0;

var name = prompt('Hello user! What should I call you going forward?');
console.log(name);

var yesNo = prompt('I\'m going to ask you some yes/no questions ' + name + '; are you ready? Please use full words.').toUpperCase();
    if (yesNo === 'YES'){
        alert('Great, let us begin...');
    } else if (yesNo === 'NO') {
        alert('sorry, but you don\'t have a choice this time.');
    }
console.log(yesNo);

var apples = prompt(name + ' do you think I like apples?').toLowerCase();
    if (apples === 'yes') {
        alert('I love apples. They\'re the perfect fruit');
        correctCounter++
    } else if (apples === 'no') {
        alert('I\'m not saying that you\'re wrong, but you are.')
    }
console.log(apples);

var travel = prompt(name + ' would you believe me if I told you that I\'ve been to Mongolia?').toLowerCase();
    if (travel === 'yes') {
        alert('Well you shoul\'nt!');
    }
    else if (travel === 'no'){
        alert('Affermative! I have never been to the land of Ghengis Kahn!');
        correctCounter++
    }
console.log(travel);

//Question 6
var guessRemains = 4;
  var myAge = 28;
  while(guessRemains > 0) {
    var guessMyAge = prompt( name + ' can you guess my age?');
    guessMyAge = parseInt(guessMyAge);

    if(guessMyAge === myAge) {
      alert('You are correct! I am still, thankfully, in my 20\'s');
      // eslint-disable-next-line semi
      correctCounter++
      break;
    } else if(guessMyAge > myAge) {
      guessRemains--;
      alert('I\'m not that old!');
    } else if(guessMyAge < myAge) {
      guessRemains--;
      alert('Thanks for thinking I look so young!');
    }
    if( guessRemains===0) {
      alert('Sorry, you\'re out of attempts. The right answer is 28.');
    }
  }
  console.log('user has guessed ' + guessMyAge);
  console.log(guessRemains);

//Question 7

alert('Its time to guess the names of my pets! You\'ll have 6 attempts!');

  var petNames = ['meatloaf', 'noodle', 'vader'];
  var counterGuess = 0;
  do{
    var petNameGuess = prompt('I have 3 pets. Can you guess one of their names? **HINT** Two are named after food.');
    petNameGuess= petNameGuess.toLowerCase();

    if (petNames.includes(petNameGuess)) {
      alert('That is correct! Congrats!');
      console.log('pets' + correctCounter);
      correctCounter++;
      break;
    }

    if( !petNames.includes(petNameGuess)) {
      alert('Sorry, try again');
      counterGuess++;
      console.log(counterGuess);
    }
    if (counterGuess === 6) {
      alert('Looks like you\'re all out of tries...');
    }
  }while(counterGuess < 6);
  alert('My dog is named Vader, and my cats are named Meatloaf and Noodle! :) ');

  var satisfy = prompt(' Have you enjoyed these questions ' + name +'?').toUpperCase();
    if (satisfy === 'YES'){
        alert('Im glad you like them. There are more on the way.')
    }
    else if (satisfy === 'NO') {
        alert('Well ' + name + ' I\'ll do my best in the future to live up to your high standards.')
    }
console.log(satisfy);

  alert( name + ' you got ' + correctCounter + ' out of 4.');
