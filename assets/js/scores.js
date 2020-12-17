let clearButton = document.querySelector('#clear');
let highScoreContainer = document.querySelector('#highscores');
clearButton.addEventListener("click", clearHighScore);

function clearHighScore() {
    localStorage.setItem('score', JSON.stringify([]));
    highScoreContainer.innerHTML= "";
}

    let scores = localStorage.getItem('score');
    console.log('hello')
    scores = JSON.parse(scores);
    console.log(scores);
    scores.sort(compare);
    for(i=0; i < scores.length; i++) {
        let newLi = document.createElement('li');
        newLi.textContent = scores[i].initials + " " + scores[i].finalScore;
        highScoreContainer.appendChild(newLi);
    } 

function compare(scoreA, scoreB) {
    if(scoreA.finalScore < scoreB.finalScore) return 1;
    if(scoreA.finalScore > scoreB.finalScore) return -1;

    return 0;
}