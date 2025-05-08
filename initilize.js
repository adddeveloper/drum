var img_drum = document.querySelector(".img-drum");
var bass_pedal = document.querySelector(".bass-pedal");
var bass_knob = document.querySelector(".bass-knob");
var crash = document.querySelector(".crash");
var crash_knob = document.querySelector(".crash-knob");
var chain = document.querySelector(".chain");
var high_hat_padel = document.querySelector(".high-hat-padel");
var hihat = document.querySelector(".hihat");
var ride = document.querySelector(".ride");
var ride_knob = document.querySelector(".ride-knob");

var left = document.querySelector(".left");
var right = document.querySelector(".right");

var button_y = document.querySelector(".button_y");
var button_u = document.querySelector(".button_u");
var button_r = document.querySelector(".button_r");
var button_e = document.querySelector(".button_e");
var button_c = document.querySelector(".button_c");
var button_g = document.querySelector(".button_g");
var button_h = document.querySelector(".button_h");
var button_j = document.querySelector(".button_j");
var button_s = document.querySelector(".button_s");
var button_d = document.querySelector(".button_d");
var button_x = document.querySelector(".button_x");
var button = document.querySelectorAll(".button");
var keys = document.querySelector("#keys"), canshow = true;
if(localStorage.getItem("canshow") == "false"){
     keys.classList.add("canshow")
     keys.innerHTML = "hide keys";
     canshow = false;
} else if(localStorage.getItem("canshow") == "true") {
     keys.classList.remove("canshow")
     keys.innerHTML = "show keys";
     canshow = true;
} else {
     keys.classList.remove("canshow");
     keys.innerHTML = "hide keys";
     canshow = true;
     localStorage.setItem("canshow", canshow)
}

function buttons(removex, removey){
     button_y.style.top = ((img_drum.clientHeight) * 0.12) + removey + "px";
     button_y.style.left = ((img_drum.clientWidth) * 0.255)  + removex+ "px";

     button_u.style.top = ((img_drum.clientHeight) * 0.16) + removey + "px";
     button_u.style.left = ((img_drum.clientWidth) * 0.8) + removex + "px";

     button_r.style.top = ((img_drum.clientHeight) * 0.21) + removey + "px";
     button_r.style.left = ((img_drum.clientWidth) * 0.09) + removex + "px";

     button_e.style.top = ((img_drum.clientHeight) * 0.14) + removey + "px";
     button_e.style.left = ((img_drum.clientWidth) * 0.09) + removex + "px";
     
     button_c.style.top = ((img_drum.clientHeight) * 0.85) + removey + "px";
     button_c.style.left = ((img_drum.clientWidth) * 0.11) + removex + "px";

     button_g.style.top = ((img_drum.clientHeight) * 0.25) + removey + "px";
     button_g.style.left = ((img_drum.clientWidth) * 0.36) + removex + "px";

     button_h.style.top = ((img_drum.clientHeight) * 0.25) + removey + "px";
     button_h.style.left = ((img_drum.clientWidth) * 0.55) + removex + "px";

     button_j.style.top = ((img_drum.clientHeight) * 0.52) + removey + "px";
     button_j.style.left = ((img_drum.clientWidth) * 0.74) + removex + "px";

     button_s.style.top = ((img_drum.clientHeight) * 0.34) + removey + "px";
     button_s.style.left = ((img_drum.clientWidth) * 0.21) + removex + "px";

     button_d.style.top = (img_drum.clientHeight * 0.4) + removey + "px";
     button_d.style.left = (img_drum.clientWidth * 0.25) + removex + "px";

     button_x.style.top = ((img_drum.clientHeight) * 0.77) + removey + "px";
     button_x.style.left = ((img_drum.clientWidth) * 0.45) + removex + "px";

}

function drumitems(removex, removey){
     bass_pedal.style.width = (img_drum.clientWidth * 0.045) + "px";
     bass_pedal.style.top = ((img_drum.clientHeight) * 0.735) + removey + "px";
     bass_pedal.style.left = ((img_drum.clientWidth) * 0.442) + removex + "px";

     bass_knob.style.width = (img_drum.clientWidth * 0.033) + "px";
     bass_knob.style.top = ((img_drum.clientHeight) * 0.6)+ removey + "px";
     bass_knob.style.left = ((img_drum.clientWidth * 0.455) + removex) + "px";

     crash.style.width = ((img_drum.clientWidth) * 0.16) + "px";
     crash.style.top = ((img_drum.clientHeight) * 0.1)+ removey + "px";
     crash.style.left = ((img_drum.clientWidth) * 0.19) + removex + "px";

     crash_knob.style.width = ((img_drum.clientWidth) * 0.008) + "px";
     crash_knob.style.top = ((img_drum.clientHeight) * 0.135)+ removey + "px";
     crash_knob.style.left = ((img_drum.clientWidth)* 0.266) + removex  + "px";

     chain.style.width = ((img_drum.clientWidth) * 0.01) + "px";
     chain.style.height = (((img_drum.clientWidth) * 0.01) * 3.6487730061349692)/2 + "px";
     chain.style.top = ((img_drum.clientHeight) * 0.812)+ removey + "px";
     chain.style.left = ((img_drum.clientWidth) * 0.10) + removex + "px";

     high_hat_padel.style.width = ((img_drum.clientWidth) * 0.0598159509202454) + "px";
     high_hat_padel.style.height = ((img_drum.clientHeight) * 0.0966183574879227) + "px";
     high_hat_padel.style.top = ((img_drum.clientHeight) * 0.8284269323671497)+ removey + "px";
     high_hat_padel.style.left = ((img_drum.clientWidth) * 0.10138676649222345) + removex + "px";

     hihat.style.width = (img_drum.clientWidth* 0.2085889570552147) + "px";
     hihat.style.top = ((img_drum.clientHeight) * 0.099)+ removey + "px";
     hihat.style.left = ((img_drum.clientWidth) * 0.00015976483379404968) + removex + "px";

     ride.style.width = ((img_drum.clientWidth) * 0.16104294478527606) + "px";
     ride.style.height = ((img_drum.clientHeight) * 0.1473429951690821) + "px";
     ride.style.top = ((img_drum.clientHeight) * 0.12077294685990338)+ removey + "px";
     ride.style.left = ((img_drum.clientWidth) * 0.7392638036809815) + removex + "px";

     ride_knob.style.width = ((img_drum.clientWidth) * 0.009202453987730062) + "px";
     ride_knob.style.height = ((img_drum.clientHeight) * 0.012077294685990338) + "px";
     ride_knob.style.top = ((img_drum.clientHeight) * 0.16908212560386474)+ removey + "px";
     ride_knob.style.left = ((img_drum.clientWidth) * 0.8098159509202454) + removex + "px";

     left.style.width = (img_drum.clientWidth * 0.007668711656441718) + "px";
     left.style.top = ((img_drum.clientHeight) * 0.2)+ removey + "px";
     left.style.left = ((img_drum.clientWidth) * 0.46) + removex + "px";

     right.style.width = ((img_drum.clientWidth) * 0.007668711656441718) + "px";
     right.style.top = ((img_drum.clientHeight) * 0.2)+ removey + "px";
     right.style.left = ((img_drum.clientWidth) * 0.46) + removex + "px";
}
drumitems(img_drum.getBoundingClientRect().left, img_drum.getBoundingClientRect().top)
if(!canshow){
     button.forEach(e=>{
          e.classList.toggle("hide")
          e.style.width = (img_drum.clientWidth * 0.03) + "px";
          e.style.height = (img_drum.clientWidth * 0.03) + "px";
     })
     buttons(img_drum.getBoundingClientRect().left, img_drum.getBoundingClientRect().top)
}
keys.addEventListener("click", ()=>{
     canshow = !canshow;
     localStorage.setItem("canshow", canshow)
     console.log(canshow)
     keys.classList.toggle("canshow");
     if(keys.innerHTML == "show keys"){
          keys.innerHTML = "hide keys";
     } else {
          keys.innerHTML = "show keys";
     }
     
          button.forEach(e=>{
               e.classList.toggle("hide")
               e.style.width = (img_drum.clientWidth * 0.03) + "px";
               e.style.height = (img_drum.clientWidth * 0.03) + "px";
          })
          buttons(img_drum.getBoundingClientRect().left, img_drum.getBoundingClientRect().top)
})

window.addEventListener("resize", ()=>{
     drumitems(img_drum.getBoundingClientRect().left, img_drum.getBoundingClientRect().top)
     buttons(img_drum.getBoundingClientRect().left, img_drum.getBoundingClientRect().top)
     if(canshow){
          button.forEach(e=>{
               e.classList.toggle("hide")
               e.style.width = (img_drum.clientWidth * 0.03) + "px";
               e.style.height = (img_drum.clientWidth * 0.03) + "px";
          })
          buttons(img_drum.getBoundingClientRect().left, img_drum.getBoundingClientRect().top)
     }
})

window.addEventListener("load", ()=>{
     drumitems(img_drum.getBoundingClientRect().left, img_drum.getBoundingClientRect().top)
     buttons(img_drum.getBoundingClientRect().left, img_drum.getBoundingClientRect().top)
     if(canshow){
          button.forEach(e=>{
               e.classList.toggle("hide")
               e.style.width = (img_drum.clientWidth * 0.03) + "px";
               e.style.height = (img_drum.clientWidth * 0.03) + "px";
          })
          buttons(img_drum.getBoundingClientRect().left, img_drum.getBoundingClientRect().top)
     }
})
