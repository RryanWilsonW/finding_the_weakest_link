let clearButton = document.querySelector('#clear');

clearButton.addEventListener("click", clearHighScore);

function clearHighScore() {
    localStorage.setItem('score', JSON.stringify([]));
}
