let background=document.querySelector("body");
let title= document.querySelector(".title");
let username = document.querySelector(".username");
let login = document.querySelector(".login");
let name = document.querySelector(".username").value;
let startingPart= document.querySelector(".starting part");
let start = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let option1= document.querySelector(".option-one");
let imgBus= document.querySelector(".bus");
let option2= document.querySelector(".option-two");
let storypart2bus = document.querySelector(".option-one-screen");
let storypart2walk= document.querySelector(".option-two-screen");
let option1End= document.querySelector(".option-one-end");
let img1End= document.querySelector(".Img1end");
let option2End= document.querySelector(".option-two-end");
let img2End= document.querySelector(".Img1end");

login.onclick = function() {
    start.style.display = "block";
    buttons.style.display = "block";
    title.innerHTML=" Adolescent life";
};

option1.onclick=function(){
       storypart2bus.style.display= "block";
};

option2.onclick=function(){
    console.log("HI");
    storypart2walk.style.display= "block";
};

imgBus.onclick=function(){
    option1End.style.display= "block";
};

img1End.onclick=function(){
    title.innerHTML="Try to make a chance. Anything can be enough";
    background.style.backgroundColor="#B1C1DF";
};

img2End.onclick=function(){
    option2End.style.display="block";
};
