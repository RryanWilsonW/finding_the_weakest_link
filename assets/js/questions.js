// get question function.
// question is made up of the text, multiple answers, and someway to know which answer is correct.
function question(text, answers, correctAnswer){
    this.text = text;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
let questions = [
    new question("In HTML, what is the syntax to draw a line break on the screen?", 
    ["<br>","<lb>","<dl>","<hr>"], 3),
    new question("In JS, what syntax is used to create a conditional?", 
    ["for","if/else","conitionOf()","function()"], 1),
    new question("IN CSS, which of these would render over the others.", 
    ["id","class","!important","calling the element directly."], 2),
    new question("What do we do when we dont know what to do>", 
    ["Ask your instructor","Google that shit","Take a nap to refresh","Give up"], 1),

]

function getQuestion(questionIndex) {
    if(questions.length - 1 >= questionIndex){
        return questions[questionIndex];
    } else {
        return null;
    }
}