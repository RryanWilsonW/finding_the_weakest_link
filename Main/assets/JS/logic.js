let startButton = document.querySelector("#start");
let timer = document.querySelector('#time')
let startScreen = document.querySelector('#start-screen')
let questionScreen = document.querySelector('#questions')

let totalSeconds = 90;
let SecondsElapsed = 0;
let status = "working";
let interval;

function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - SecondsElapsed);
    
    var formattedSeconds;

    if(secondsLeft < 10){
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft
    }
    return formattedSeconds;
};
function renderTime(){
   timer.textContent = getFormattedSeconds();
}

function startTimer() {
    interval = setInterval(function(){
        SecondsElapsed++
        startScreen.classList.add('hide');
        questionScreen.classList.remove('hide');
        renderTime();
    }, 1000);
}


startButton.addEventListener("click", startTimer);
    
