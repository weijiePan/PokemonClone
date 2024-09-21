
const nextButton = document.getElementById("tutorial-text-next-button");
const tutorialText = document.getElementById("tutorial-text");
const nameFieldDisplay = document.getElementById("player-name-field-display");
const nameField = document.getElementById("player-name-getter");
const nameSubmitButton = document.getElementById("name-submit");
let playerName = "";
let rivalName ="";
let tutorialTextArrIndex = 0;
const tutorialTextArr = [
    "Hello there! Welcome to the world of Pokémon!",
    "My name is Oak! People call me the Pokémon Prof!",
    "This world is inhabited by creatures called Pokémon! ",
    "For some people, Pokémon are pets. Other use them for fights.",
    "Myself? I study Pokémon as a profession.",
    "First, what is your name?",
    `Right! So your name is  `,
    "This is my grandson. He's been your rival since you were a baby. ",
    "?Erm, what is his name again?",
    "That's right! I remember now! His name is ",
    "Your very own Pokémon legend is about to unfold! ",
    "A world of dreams and adventures with Pokémon awaits! Let's go!",
];


nextButton.onclick = function(){
    if(!(tutorialTextArr[tutorialTextArrIndex].match(/name/) && tutorialTextArr[tutorialTextArrIndex].match(/\?/))){
        tutorialTextArrIndex++;
        changeText(tutorialTextArr, tutorialText);    
    }else{
        alert("bye");
        nameFieldDisplay.setAttribute("style", "display:block");
    }
    
};

nameSubmitButton.onclick = function(){
    let i = 0;
    if(nameField.value !== ""){
        tutorialTextArrIndex++;

        if(i = 0){
            playerName=nameField.value;
            tutorialTextArr[tutorialTextArrIndex] += `${playerName}`;
            nameFieldDisplay.style.display = "none";
        }else{
            rivalName = nameField.value;
            tutorialTextArr[tutorialTextArrIndex] += `${rivalName}`;
            nameFieldDisplay.style.display = "none";
        }
        i++;
   
        
        changeText(tutorialTextArr, tutorialText);
        
    }
}

function changeText(textArr, textToChange){
    if(tutorialTextArrIndex < textArr.length){
        textToChange.innerText = textArr[tutorialTextArrIndex];
    }
}

