$(document).ready(function() {
$("#laka").click(function(){
    $(this).hide();
    alert("Thank you for subscribing to our newsletter!");
  });

$("#laka").mouseenter(function(){
    $("#laka").css("background-color", "#BE1010");
  });
  $("#laka").mouseleave(function(){
    $("#laka").css("background-color", "#ff7b47");
  });

})


document.head.insertAdjacentHTML('beforeend', `<link rel="icon" href="img/booking/10.png">`);

var backgroundSong = document.getElementById("main-block__button__music");
backgroundSong.insertAdjacentHTML('afterend', `<audio src="bothOfUs.mp3" id="backgroundSong"></audio>`);

var button = document.getElementById("main-block__button__music");
button.insertAdjacentHTML('afterend', `<button class="main-block__button main-block__button_orange" id="button" onclick="backgroundMusic()">Music</button>`);



function backgroundMusic(){
  var btn = document.getElementById("button")
  var backgroundSong= document.getElementById("backgroundSong");
    if (backgroundSong.paused){
      btn = backgroundSong.play();
}
    else{
      backgroundSong.pause();
}
}



function scal1(){
  document.querySelector('#services__column_1').style.transform = "scale(1.1)";
  document.querySelector("#services__column_1").style.transitionDuration = "1s";}

function scalNone1(){
  document.querySelector('#services__column_1').style.transform = "none";}


function scal2(){
  document.querySelector('#services__column_2').style.transform = "scale(1.1)";
  document.querySelector("#services__column_2").style.transitionDuration = "1s";}

function scalNone2(){
  document.querySelector('#services__column_2').style.transform = "none";}


function scal3(){
  document.querySelector('#services__column_3').style.transform = "scale(1.1)";
  document.querySelector("#services__column_3").style.transitionDuration = "1s";}

function scalNone3(){
  document.querySelector('#services__column_3').style.transform = "none";}



function scall1(){
  document.querySelector('#advantages__item_1').style.transform = "scale(1.1)";
  document.querySelector("#advantages__text_1").innerHTML = "In Healtcare Market";
  document.querySelector("#advantages__item_1").style.transitionDuration = "0.2s";}

function scallNone1(){
  document.querySelector('#advantages__item_1').style.transform = "none";
  document.querySelector("#advantages__text_1").innerHTML = " ";}


function scall2(){
  document.querySelector('#advantages__item_2').style.transform = "scale(1.1)";
  document.querySelector("#advantages__text_2").innerHTML = "Branch Offices";
  document.querySelector("#advantages__item_2").style.transitionDuration = "0.2s";}

function scallNone2(){
  document.querySelector('#advantages__item_2').style.transform = "none";
  document.querySelector("#advantages__text_2").innerHTML = " ";}


function scall3(){
  document.querySelector('#advantages__item_3').style.transform = "scale(1.1)";
  document.querySelector("#advantages__text_3").innerHTML = "Positive Reviews";
  document.querySelector("#advantages__item_3").style.transitionDuration = "0.2s";}

function scallNone3(){
  document.querySelector('#advantages__item_3').style.transform = "none";
  document.querySelector("#advantages__text_3").innerHTML = " ";}


function scall4(){
  document.querySelector('#advantages__item_4').style.transform = "scale(1.1)";
  document.querySelector("#advantages__text_4").innerHTML = "Qualified Doctors";
  document.querySelector("#advantages__item_4").style.transitionDuration = "0.2s";}

function scallNone4(){
  document.querySelector('#advantages__item_4').style.transform = "none";
  document.querySelector("#advantages__text_4").innerHTML = " ";}



function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

var options = {
  threshold: [0.5] };
var observer = new IntersectionObserver(onEntry, options);
var elements = document.querySelectorAll('.subscribe__body');

for (var elm of elements) {
  observer.observe(elm);
}


// document.querySelector(".subscribe__body").style.opacity = "0.1";
// document.querySelector(".subscribe__body").style.transform = "translateX(200px)";

// document.querySelector(".subscribe__body.element-show").style.opacity = "1";
// document.querySelector(".subscribe__body.element-show").style.transition = "all 1.5s";
// document.querySelector(".subscribe__body.element-show").style.transform = "translateX(0%)";









