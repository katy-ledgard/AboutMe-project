"use strict";

console.log("Welcome!");

let user;
let points = 0;

alert("Hi there! Welcome to my page!");

function userName() {
  // user = console.log("Why hello there! Who might you be? Please tell me your name.")
  user = prompt("Who might you be? Please tell me your name.");
  alert(
    "Hi " +
      user +
      "! My name is Katy - I hope you will enjoy getting to know about me!"
  );
  console.log(user);
}

userName();

alert("I have a quiz for you! Please answer with yes/no or y/n.");

// Five Questions with only yes/no or y/n for an answer

function firstQuestion() {
  let born = prompt("Was Katy born in Norfolk?").toLowerCase();

  while (
    born != "y" &&
    born != "yes" &&
    born != "n" &&
    born != "no" /*&& born != ""*/
  ) {
    alert("Please answer with yes/no or y/n.");
    born = prompt("Was Katy born in Norfolk?").toLowerCase();
  }
  if (born === "yes" || born === "y") {
    // console.log("That's right! Katy was born in Norfolk!");
    alert("That's right! Katy was born in Norfolk!");
    points++;
  } else if (born === "no" || born === "n") {
    // console.log("Oops! Katy WAS born in Norfolk!")
    alert("Oops! Katy WAS born in Norfolk!");
  }
}


function secondQuestion() {
  let beach = prompt("Is Cromer Katy's favourite beach?").toLowerCase();

  while (
    beach != "yes" &&
    beach != "y" &&
    beach != "no" &&
    beach != "n" /*&& beach != ""*/
  ) {
    alert("Please answer with yes/no or y/n.");
    beach = prompt("Is Cromer Katy's favourite beach?").toLowerCase();
  }

  if (beach === "yes" || beach === "y") {
    // console.log("Not quite! Katy's favourite beach is West Runton!");
    alert("Not quite! Katy's favourite beach is West Runton!");
  } else if (beach === "no" || beach === "n") {
    // console.log("That's right! Katy's favourite beach is West Runton, not Cromer!");
    alert("That's right! Katy's favourite beach is West Runton, not Cromer!");
    points++;
  }
}



function thirdQuestion() {
  let bootcamp = prompt(
    "Is Katy completing a Full Stack Bootcamp with Tech Educators?"
  ).toLowerCase();

  while (
    bootcamp != "yes" &&
    bootcamp != "y" &&
    bootcamp != "no" &&
    bootcamp != "n" /*&& bootcamp != ""*/
  ) {
    alert("Please answer with yes/no or y/n.");
    bootcamp = prompt(
      "Is Katy completing a Full Stack Bootcamp with Tech Educators?"
    ).toLowerCase();
  }

  if (bootcamp === "yes" || bootcamp === "y") {
    // console.log("Correct! Katy is having great fun completing a Full Stack Bootcamp with Tech Educators!");
    alert(
      "Correct! Katy is having great fun completing a Full Stack Bootcamp with Tech Educators!"
    );
    points++;
  } else if (bootcamp === "no" || bootcamp === "n") {
    // console.log("Hmmm, that's not quite right. Katy is completeing a Full Stack Bootcamp with Tech Educators!");
    alert(
      "Hmmm, that's not quite right. Katy is completing a Full Stack Bootcamp with Tech Educators!"
    );
  }
}



function fourthQuestion() {
  let role = prompt("Is Cosette from Les Mis Katy's dream role?").toLowerCase();

  while (
    role != "y" &&
    role != "yes" &&
    role != "n" &&
    role != "no" /*&& role != ""*/
  ) {
    alert("Please answer with yes/no or y/n.");
    role = prompt("Is Cosette from Les Mis Katy's dream role?").toLowerCase();
  }
  if (role === "yes" || role === "y") {
    // console.log("Nearly! Right musical, wrong character! Katy's dream role is Eponine!");
    alert(
      "Nearly! Right musical, wrong character! Katy's dream role is Eponine!"
    );
  } else if (role === "no" || role === "n") {
    // console.log("You got it. Katy's dream role is actually Eponine from Les Mis!")
    alert("You got it. Katy's dream role is actually Eponine from Les Mis!");
    points++;
  }
}



function fifthQuestion() {
  let dev = prompt("Does Katy want to be a Junior Developer?").toLowerCase();

  while (
    dev != "y" &&
    dev != "yes" &&
    dev != "n" &&
    dev != "no" /*&& dev != ""*/
  ) {
    alert("Please answer with yes/no or y/n.");
    dev = prompt("Does Katy want to be a Junior Developer?").toLowerCase();
  }
  if (dev === "yes" || dev === "y") {
    // console.log("Yes, that's the goal!");
    alert("Yes, that's the goal!");
    points++;
  } else if (dev === "no" || dev === "n") {
    // console.log("False - I DO want to become a Junior Developer!")
    alert("False - I DO want to become a Junior Developer!");
  }
}



// Add 6th Q that allows user to take numeric input to guess a number
// alert user if their guess is too high or too low
//give 4 chances to guess number
//after all chances have been used, give answer
//use a loop of some kind

function sixthQuestion() {
  let number = 6;

  console.log("testing");

  for (let i = 4; i > 0; i--) {
    let guess = prompt(
      "I am thinking of a number between 1 and 10. Can you guess what it is? You have 4 tries! Attempts remaining: " +
        i
    );

    if (guess > number) {
      alert("Oops, too high!");
      // guess = prompt("I am thinking of a number between 1 and 10. Can you guess what it is? You have four tries!");
    } else if (guess < number) {
      alert("Uh-oh! Too low!");
      // guess = prompt("I am thinking of a number between 1 and 10. Can you guess what it is? You have four tries!");
    } else if (guess == number) {
      alert("Woohoo! You guessed it!");
      points++;
      break;
    } else {
      alert("Thats not a valid answer");
    }
  }

  alert("The answer was 6!");
}



// add 7th question using array to have multiple options for answer
// give 6 attempts to answer
// q ends when guessed correctly or all attempts are used
// display possible answers
// use a loop of some kind

function seventhQuestion() {
  const favSongs = [
    "for good",
    "one day more",
    "one last time",
    "satisfied",
    "the world will know",
  ];
  // console.log(FavSongs)

  for (let i = 6; i > 0; i--) {
    let song = prompt(
      "Name one of my top 5 Musical Theatre numbers.  You have 6 tries! Attempts remaining: " +
        i
    ).toLowerCase();

    if (song === favSongs[0]) {
      alert("Yes! 'For Good' from Wicked is such a lovely song!");
      points++;
      break;
    }
    if (song === favSongs[1]) {
      alert(
        "Absolutely! I love to try and sing all the parts of 'One Day More' from Les Misérables."
      );
      points++;
      break;
    }
    if (song === favSongs[2]) {
      alert("You got it! 'One Last Time' from Hamilton is a great song!");
      points++;
      break;
    }
    if (song === favSongs[3]) {
      alert(
        "Ding ding ding! Yep, the first time I heard 'Satisfied' from Hamilton, my mind was blown!"
      );
      points++;
      break;
    }
    if (song === favSongs[4]) {
      alert(
        "True! And now the world knows that 'The World Will Know' from Newsies is a great tune!"
      );
      points++;
      break;
    } else {
      alert("Sorry, that's not one of my top five Musical Theatre songs!");
    }
  }

  alert(
    "Here are the answers you could have had: " +
      favSongs[0] +
      ", " +
      favSongs[1] +
      ", " +
      favSongs[2] +
      ", " +
      favSongs[3] +
      " and " +
      favSongs[4]
  );
}



//keep track of correct answers
//tell user how many points they got


function callFunctions() {
    firstQuestion()
    secondQuestion()
    thirdQuestion()
    fourthQuestion()
    fifthQuestion()
    sixthQuestion()
    seventhQuestion()
}

callFunctions()

alert("Thank you for taking part in my quiz, " + user + "! You got " + points + " point(s)!");