var drumSounds = {
     "y": document.getElementById("y"),
     "u": document.getElementById("u"),
     "r": document.getElementById("r"),
     "e": document.getElementById("e"),
     "c": document.getElementById("c"),
     "g": document.getElementById("g"),
     "h": document.getElementById("h"),
     "j": document.getElementById("j"),
     "s": document.getElementById("s"),
     "d": document.getElementById("d"),
     "x": document.getElementById("x")
};

var left = document.querySelector(".left");
var right = document.querySelector(".right");

var activeKeys = new Set();

function playSound(k) {
     if (drumSounds[k]) {
          var clone = drumSounds[k].cloneNode();
          clone.play();
     }
}

function x() {
     bass_pedal.style.transform = "rotateX(25deg)";
     bass_knob.style.transform = "translate3d(0px, 5px, 0px) scale(0.95)";
     setTimeout(() => {
          bass_pedal.style.transform = "rotateX(0deg)";
          bass_knob.style.transform = "translate3d(0px, 0px, 0px) scale(1)";
     }, 100);
}

function leftx(){
     left.style.transform =  "rotate(-30deg)";
     setTimeout(() => {
          left.style.transform =  "rotate(-10deg)";
     }, 200);
}

function rightx(){
     right.style.transform =  "rotate(30deg)";
     setTimeout(() => {
          right.style.transform =  "rotate(10deg)";
     }, 200);
}

function y(){
     left.style.top = (img_drum.clientHeight * 0.15) + img_drum.getBoundingClientRect().top + "px";
     left.style.left = (img_drum.clientWidth * 0.3) + img_drum.getBoundingClientRect().left + "px";
     crash.classList.add("move");
     setTimeout(()=>{
          crash.classList.remove("move");
     }, 200)
     leftx()
}

function u(){
     right.style.top = (img_drum.clientHeight * 0.2) + img_drum.getBoundingClientRect().top + "px";
     right.style.left = (img_drum.clientWidth * 0.75) + img_drum.getBoundingClientRect().left + "px";
     ride.classList.add("move");
     setTimeout(()=>{
          ride.classList.remove("move");
     }, 1000)
     rightx()
}

function r(){
     left.style.top = (img_drum.clientHeight * 0.2) + img_drum.getBoundingClientRect().top + "px";
     left.style.left = (img_drum.clientWidth * 0.17) + img_drum.getBoundingClientRect().left + "px";
     hihat.style.top = (img_drum.clientHeight * 0.11) + img_drum.getBoundingClientRect().top + "px";
     hihat.classList.add("moveslight")
     setTimeout(() => {
          hihat.classList.remove("moveslight")
     }, 200); 
     leftx()
}

function e_(){
     left.style.top = (img_drum.clientHeight * 0.175) + img_drum.getBoundingClientRect().top + "px";
     left.style.left = (img_drum.clientWidth * 0.17) + img_drum.getBoundingClientRect().left + "px";
     hihat.style.top = (img_drum.clientHeight * 0.099) + img_drum.getBoundingClientRect().top + "px";
     hihat.classList.add("moveslight")
     setTimeout(() => {
          hihat.classList.remove("moveslight")
     }, 200); 
     leftx()
}


function g(){
     left.style.top = (img_drum.clientHeight * 0.18) + img_drum.getBoundingClientRect().top + "px";
     left.style.left = (img_drum.clientWidth * 0.4) + img_drum.getBoundingClientRect().left + "px";
     leftx()
}

function h(){
     right.style.top = (img_drum.clientHeight * 0.18) + img_drum.getBoundingClientRect().top + "px";
     right.style.left = (img_drum.clientWidth * 0.52) + img_drum.getBoundingClientRect().left + "px";
     rightx()
}

function j(){
     right.style.top = (img_drum.clientHeight * 0.36) + img_drum.getBoundingClientRect().top + "px";
     right.style.left = (img_drum.clientWidth * 0.71) + img_drum.getBoundingClientRect().left + "px";
     rightx()
}

function s(){
     left.style.top = (img_drum.clientHeight * 0.35) + img_drum.getBoundingClientRect().top + "px";
     left.style.left = (img_drum.clientWidth * 0.25) + img_drum.getBoundingClientRect().left + "px";
     leftx()
}

function d(){
     left.style.top = (img_drum.clientHeight * 0.38) + img_drum.getBoundingClientRect().top + "px";
     left.style.left = (img_drum.clientWidth * 0.3) + img_drum.getBoundingClientRect().left + "px";
     leftx()
}

function c() {
     chain.style.height = chain.clientHeight+10+"px";
     chain.querySelector("img").style.top = "0%"
     high_hat_padel.style.transform = "rotate(-9deg) translate(-2px, 5px)";
     hihat.style.top = (img_drum.clientHeight * 0.099) + img_drum.getBoundingClientRect().top + "px";
     hihat.classList.add("moveslight")
     setTimeout(() => {
          hihat.classList.remove("moveslight")
          hihat.style.top = (img_drum.clientHeight * 0.11) + img_drum.getBoundingClientRect().top + "px";
          chain.style.height = chain.clientHeight-10+"px";
          high_hat_padel.style.transform = "rotate(0deg) translate(0px, 0px)";
          chain.querySelector("img").style.top = "-100%"
     }, 200); 
}

document.addEventListener("keydown", (e) => {
     if (!activeKeys.has(e.key)) {
          activeKeys.add(e.key);
          playSound(e.key);

          if (e.key === "x") {
               x();
          }
          if (e.key === "y"){
               y()
          }
          if (e.key === "r"){
               r()
          }
          if (e.key === "e"){
               e_()
          }
          if (e.key === "s"){
               s()
          }
          if (e.key === "d"){
               d()
          }
          if (e.key === "g"){
               g()
          }
          if (e.key === "h"){
               h()
          }
          if (e.key === "j"){
               j()
          }
          if (e.key === "u"){
               u()
          }

          if (e.key === "c"){
               c()
          }
     }
});


document.addEventListener("keyup", (e) => {
     activeKeys.delete(e.key);
});