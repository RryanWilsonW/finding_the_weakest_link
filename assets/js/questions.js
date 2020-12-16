// get question function.
// question is made up of the text, multiple answers, and someway to know which answer is correct.
function question(text, answers, correctAnswer){
    this.text = text;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
let questions = [
    new question("Q1", ["A1","A2","A3","A4"], 3),
    new question("Q2", ["A1","A2","A3","A4"], 1),
    new question("Q3", ["A1","A2","A3","A4"], 1),
    new question("Q4", ["A1","A2","A3","A4"], 1),

]

function getQuestion(questionIndex) {
    if(questions.length - 1 >= questionIndex){
        return questions[questionIndex];
    } else {
        return null;
    }
}