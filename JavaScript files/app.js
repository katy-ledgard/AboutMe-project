"use strict"

console.log("Welcome!")

let user;
let answer1;
let answer2;


function userName() {
    // user = console.log("Why hello there! Who might you be? Please tell me your name.")
    user = prompt("Why hello there! Who might you be? Please tell me your name.")
    alert("Hi " + user + "! Welcome to my page. My name is Katy - I hope you will enjoy getting to know about me!")
    console.log(user)
}

userName()

function firstQuestion() {

    answer1 = prompt("Is my code working?").toLowerCase();

    while (answer1 != "y" && answer1 != "yes" && answer1 != "n" && answer1 != "no") {
            alert("Please answer with yes/no or y/n.");
            answer1 = prompt("Is my code working?").toLowerCase();
    
}
    if (answer1 === "yes" || answer1 === "y") {
        // console.log("You chose yes!");
        alert("You chose yes!");
    } else if (answer1 === "no" || answer1 === "n") {
        // console.log("you chose no!")
        alert("You chose no!");
    }
    
}

firstQuestion()

function secondQuestion() {

    answer2 = prompt("Is this question two?").toLowerCase();

    while (answer2 != "yes" && answer2 != "y" && answer2 != "no" && answer2 != "no") {
        alert("Please answer with yes/no or y/n.")
        answer2 = prompt("Is this question two?").toLowerCase();
    }

    if (answer2 === "yes" || answer2 === "y") {
        // console.log("You chose yes!");
        alert("You chose yes!");        
    } else if (answer2 === "no" || answer2 === "n") {
        // console.log("You chose no!");
        alert("You chose no!");        
    }
}

secondQuestion()
