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
let questionTitle = document.querySelector('#question-title')
let choice1 = document.querySelector('#choice1');
let choice2 = document.querySelector('#choice2');
let choice3 = document.querySelector('#choice3');
let choice4 = document.querySelector('#choice4');
let finalScore = document.querySelector('#final-score')
let incorrect = document.querySelector('#incorrect');
let correct = document.querySelector('#correct')
let initials = document.querySelector('#initials');

let currentQuestion = getQuestion(0);
let currentQuestionIndex = 0;

let totalSeconds = 90;
let status = "working";
let interval;

//Pre Defines Show && Hide
function show(target) {
    target.classList.remove('hide');
}
function hide(target) {
    target.classList.add('hide');
}
function blink(target) {
    target.classList.remove('hide');
    delay(100).target.classList.add('hide')
}

//TIMER!!!
function getFormattedSeconds() {
    var formattedSeconds;

    if(totalSeconds < 10){
        formattedSeconds = "0" + totalSeconds;
    } else {
        formattedSeconds = totalSeconds;
    };
    return formattedSeconds;
};
function renderTime(){
    totalSeconds--
   if(totalSeconds < 0){
       clearInterval(interval);
       gameOver();
   } else {
    timer.textContent = getFormattedSeconds();
   }
}
function startTimer() {
    console.log('start timer');
    timer.textContent = '90';
    totalSeconds = 90; 
    hide(highScoreDiv);
    interval = setInterval(function(){
    renderTime();
    }, 1000);
    show(timerContainer);
    hide(startScreen);
    renderQuestion();
    console.log(currentQuestion.text);
    console.log(currentQuestion);
    show(questionContainer);
}

// This big chunk of code is setting up the questions.
function renderQuestion(){
    questionTitle.textContent = currentQuestion.text;
    choice1.textContent = currentQuestion.answers[0];
    choice2.textContent = currentQuestion.answers[1];
    choice3.textContent = currentQuestion.answers[2];
    choice4.textContent = currentQuestion.answers[3];
}
function checkAnswer(buttonIndex){
    console.log(currentQuestion);
    if(currentQuestion.correctAnswer === buttonIndex){
        console.log('right')
        currentQuestionIndex++
        currentQuestion = getQuestion(currentQuestionIndex);
        console.log(currentQuestion)
        if(currentQuestion === null){
            console.log('We Won!')
            hide(questionContainer);
            hide(timerContainer);
            show(endScreen);
            finalScore.textContent = totalSeconds;
        } else {
            renderQuestion();
        }
    } else {
        console.log('not true')
        totalSeconds = totalSeconds - 10;
        renderTime();
        blink(incorrect);
    }
}


function onChoice1(){
    checkAnswer(0);
}

function onChoice2(){
    checkAnswer(1);
}

function onChoice3(){
    checkAnswer(2);
}

function onChoice4(){
    checkAnswer(3);
}

//This will end the game when the timer runs out.
function gameOver(){
    console.log('gameOver');
    hide(questionContainer);
    hide(timerContainer);
    show(endScreen);
    hide(highScoreDiv); 
}

//When user hits submit the program will...
function onSubmit() {
    console.log('onSubmit');
    saveScore();
    goToHighScore();
    createLi();
}
// 1.)Save the score to the browsers local storage.  
function saveScore() {
    console.log('saveScore');
    let scores = JSON.parse((localStorage.getItem('score')));

    if(scores === null) {
        scores = [];
    }
    finalScore.textContent = totalSeconds;
    clearInterval(interval);
    hide(timerContainer);  
    scores.push({initials: initials.value, finalScore: finalScore.textContent})
    console.log(scores);
    localStorage.setItem('score', JSON.stringify(scores)); 
}


//creates an unordered list to store the input data.
function createUl() {
    console.log('createUl');
    let ul = document.createElement('ul');
    ul.setAttribute("id", "infoList");
    document.body.appendChild(ul);
}
createUl();

function createLi(){
    let li = document.createElement('li')
    li.textContent = finalScore.textContent;
    document.body.appendChild(li);
}

// 2.) Direct the user to the highscore page.
function goToHighScore(){
   window.location.replace("./highscores.html") 
}

startButton.addEventListener("click", startTimer);
submit.addEventListener("click", onSubmit);
choice1.addEventListener("click", onChoice1);
choice2.addEventListener("click", onChoice2);
choice3.addEventListener("click", onChoice3);
choice4.addEventListener("click", onChoice4);

