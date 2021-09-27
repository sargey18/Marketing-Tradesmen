const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "How long have you been a tradesman?",
        choice1: "Less than 6 months.",
        choice2: "Between 6 to 12 months",
        choice3: "Between 12 to 18 months",
        choice4: "More than 18 months",
        answer: 4
    }, 
    {
        question: "What do you need help with?",
        choice1: "I need a website created from scratch",
        choice2: "I only need help with the online marketing",
        choice3: "I have a website but don't know what to do with it",
        choice4: "I have a website and am doing my own marketing and want some feedback",
        answer: 1
    }, 
    {
        question: "How would your customers rate your services?",
        choice1: "All of my customers recommend my services",
        choice2: "Customers friends and family ask about who did the work and I get referals",
        choice3: "Mostly my reviews are good, but there are some difficult customers",
        choice4: "There are some jobs where I could have done better",
        answer: 2
    }, 
    {
        question: "",
        choice1: "All of my customers recommend my services",
        choice2: "Customers friends and family ask about who did the work and I get referals",
        choice3: "Mostly my reviews are good, but there are some difficult customers",
        choice4: "There are some jobs where I could have done better",
        answer: 2
    },

];

//constants 
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame= () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    questionCounter++;
    const  questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    } );

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswer = true;
}

startGame();