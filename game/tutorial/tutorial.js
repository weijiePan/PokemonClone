
const nextButton = document.getElementById("tutorial-text-next-button");
const tutorialText = document.getElementById("tutorial-text");
//a container that is normally invisible and becomes visible when grabbing player or npc name
const nameFieldDisplay = document.getElementById("player-name-field-display");

//an input element that grabs player name
const nameField = document.getElementById("player-name-getter");
const nameSubmitButton = document.getElementById("name-submit");
let playerName = "";
let rivalName ="";

//specifies which line in the tutorialTextArr displayed
let tutorialTextArrIndex = 0;
const tutorialTextArr = [
    "Hello there! Welcome to the world of pokemon!",
    "My name is Oak! People call me the pokemon Prof!",
    "This world is inhabited by creatures called pokemon! ",
    "For some people, Pokemon are pets. Other use them for fights.",
    "Myself? I study Pokemon as a profession.",
    "First, what is your name?",
    `Right! So your name is  `,
    "This is my grandson. He's been your rival since you were a baby. ",
    "?Erm, what is his name again?",
    "That's right! I remember now! His name is ",
    "Your very own pokemon legend is about to unfold! ",
    "A world of dreams and adventures with pokemon awaits! Let's go!",
];


nextButton.onclick = function(){
    //switch current tutorial text to the next text in the tutorialTextArray
    if(!(tutorialTextArr[tutorialTextArrIndex].match(/name/) && tutorialTextArr[tutorialTextArrIndex].match(/\?/))){
        tutorialTextArrIndex++;
        changeText(tutorialTextArr, tutorialText);  

    }
    //make visible the name field display that will grab player name or npc name
    else{
        nameFieldDisplay.setAttribute("style", "display:block");
    }
    
};
//adds player name to the end of the next tutorialText
nameSubmitButton.onclick = function(){
    let i = 0;//checks whether it's the first time the name has been added
    //if it's the first, the name field's value will be applied to player name, 2nd time means name field's value will
    //be applied to npc rival name
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

