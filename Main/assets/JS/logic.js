let startButton = document.querySelector("#start");
let timer = document.querySelector('#time');
let startScreen = document.querySelector('#start-screen');
let questionContainer = document.querySelector('#questions');
let lastAnswer = document.querySelector('#lastCorrectAnswer');
let inputPage = document.querySelector('#initials');
let endScreen = document.querySelector('#end-screen');
let timerContainer = document.querySelector('#timer');
let highScoreDiv = document.querySelector('#scores');
let submit = document.querySelector('#submit');

let totalSeconds = 5;
let status = "working";
let interval;

function getFormattedSeconds() {
    console.log('getFormattedSeconds');
    var formattedSeconds;

    if(totalSeconds < 10){
        formattedSeconds = "0" + totalSeconds;
    } else {
        formattedSeconds = totalSeconds;
    };
    return formattedSeconds;
};

function renderTime(){
    console.log('RenderTime');
    console.log(totalSeconds);
    totalSeconds--
   timer.textContent = getFormattedSeconds();
   if(totalSeconds < 0){
       clearInterval(interval);
       gameOver();
   }
}

function gameOver(){
    console.log('gameOver');
    hide(questionContainer);
    hide(timerContainer);
    show(endScreen);
    hide(highScoreDiv); 
}

function startTimer() {
    console.log('start timer');
    timer.textContent = '05';
    totalSeconds = 5;  
    interval = setInterval(function(){
        renderTime();
    }, 1000);
    show(timerContainer);
    hide(startScreen);
    show(questionContainer);
}

function onSubmit() {
    console.log('onSubmit');
    saveScore();
    resetGame();
}
// ???
function saveScore() {
    console.log('saveScore');

}

function resetGame(){
    console.log('resetGame');
    hide(endScreen);
    show(startScreen);
}

function show(target) {
    target.classList.remove('hide');
}

function hide(target) {
    target.classList.add('hide');
}

startButton.addEventListener("click", startTimer);
submit.addEventListener("click", onSubmit);
    
