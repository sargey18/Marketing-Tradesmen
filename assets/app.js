function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++; //swap

}


function Question(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}


function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }
     else {
    //show answers
    let element = document.getElementById ("question");
    element.innerHTML = quiz.getQuestionIndex().text;


    // show choice 
    let choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i < choices.length; i++) {
        let element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
    }
}


}

let questions = [
    new Question("Test question one", ["test", "test2", "test3", "test4"], "test4"),
    new Question("Test question two", ["crap", "crap2", "crap3", "crap4"], "crap2"),
    new Question("Test question three", ["shit", "shit2", "shit3", "shit4"], "shit3"),
    new Question("Test question four", ["test", "test2", "test3", "test4"], "test4"),
    new Question("Test question five", ["test", "test2", "test3", "test4"], "test4"),

];

let quiz = new Quiz(questions);

populate();