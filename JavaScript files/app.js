"use strict"

console.log("Welcome!")

let user;

alert("Hi there! Welcome to my page!")

function userName() {
    // user = console.log("Why hello there! Who might you be? Please tell me your name.")
    user = prompt("Who might you be? Please tell me your name.")
    alert("Hi " + user + "! My name is Katy - I hope you will enjoy getting to know about me!")
    console.log(user)
}

userName()

alert("I have a quiz for you! Please answer with yes/no or y/n.")

function firstQuestion() {

    let born = prompt("Was Katy born in Norfolk?").toLowerCase();

    while (born != "y" && born != "yes" && born != "n" && born != "no") {
            alert("Please answer with yes/no or y/n.");
            born = prompt("Was Katy born in Norfolk?").toLowerCase();
    
}
    if (born === "yes" || born === "y") {
        // console.log("That's right! Katy was born in Norfolk!");
        alert("That's right! Katy was born in Norfolk!");
    } else if (born === "no" || born === "n") {
        // console.log("Oops! Katy WAS born in Norfolk!")
        alert("Oops! Katy WAS born in Norfolk!");
    } 
    
}

firstQuestion()

function secondQuestion() {

    let beach = prompt("Is Cromer Katy's favourite beach?").toLowerCase();

    while (beach != "yes" && beach != "y" && beach != "no" && beach != "n") {
        alert("Please answer with yes/no or y/n.")
        beach = prompt("Is Cromer Katy's favourite beach?").toLowerCase();
    }

    if (beach === "yes" || beach === "y") {
        // console.log("Not quite! Katy's favourite beach is West Runton!");
        alert("Not quite! Katy's favourite beach is West Runton!");        
    } else if (beach === "no" || beach === "n") {
        // console.log("That's right! Katy's favourite beach is West Runton, not Cromer!");
        alert("That's right! Katy's favourite beach is West Runton, not Cromer!");        
    } 
}

secondQuestion()

function thirdQuestion() {

    let bootcamp = prompt("Is Katy completing a Full Stack Bootcamp with Tech Educators?").toLowerCase();

    while (bootcamp != "yes" && bootcamp != "y" && bootcamp != "no" && bootcamp != "n") {
        alert("Please answer with yes/no or y/n.")
        bootcamp = prompt("Is Katy completing a Full Stack Bootcamp with Tech Educators?").toLowerCase();
    }

    if (bootcamp === "yes" || bootcamp === "y") {
        // console.log("Correct! Katy is having great fun completing a Full Stack Bootcamp with Tech Educators!");
        alert("Correct! Katy is having great fun completing a Full Stack Bootcamp with Tech Educators!");
    } else if (bootcamp === "no" || bootcamp === "n") {
        // console.log("Hmmm, that's not quite right. Katy is completeing a Full Stack Bootcamp with Tech Educators!");
        alert("Hmmm, that's not quite right. Katy is completing a Full Stack Bootcamp with Tech Educators!");
    }
}

thirdQuestion()

function fourthQuestion() {

    let born = prompt("Is Cosette from Les Mis Katy's dream role?").toLowerCase();

    while (born != "y" && born != "yes" && born != "n" && born != "no") {
            alert("Please answer with yes/no or y/n.");
            born = prompt("Is Cosette from Les Mis Katy's dream role?").toLowerCase();
    
}
    if (born === "yes" || born === "y") {
        // console.log("Nearly! Right musical, wrong character! Katy's dream role is Eponine!");
        alert("Nearly! Right musical, wrong character! Katy's dream role is Eponine!");
    } else if (born === "no" || born === "n") {
        // console.log("You got it. Katy's dream role is actually Eponine from Les Mis!")
        alert("You got it. Katy's dream role is actually Eponine from Les Mis!");
    } 
    
}

fourthQuestion()


function fifthQuestion() {

    let born = prompt("Does Katy want to be a Junior Developer?").toLowerCase();

    while (born != "y" && born != "yes" && born != "n" && born != "no") {
            alert("Please answer with yes/no or y/n.");
            born = prompt("Does Katy want to be a Junior Developer?").toLowerCase();
    
}
    if (born === "yes" || born === "y") {
        // console.log("Yes, that's the goal!");
        alert("Yes, that's the goal!");
    } else if (born === "no" || born === "n") {
        // console.log("False - I DO want to become a Junior Developer!")
        alert("False - I DO want to become a Junior Developer!");
    } 
    
}

fifthQuestion()

alert("Thank you " + user + "! I hope you enjoyed my quiz!")