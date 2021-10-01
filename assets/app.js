function populate() {
    if(quiz.isEnded()) {
        //showScoores();
    }
     else {
    //show answers
    let element = document.getElementById("questions");
    element.innerHTML = quiz.getQuestionIndex().text;
}
}

let questions = [
    new Question("Test question one"),
    new Question("Test question two"),
    new Question("Test question three"),
    new Question("Test question four"),
    new Question("Test question five"),

];

let quiz = new Quiz(questions);

populate();