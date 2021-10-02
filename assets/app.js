//getting the elements from the html/ indredients 
const question = document.querySelector('#question');  //queryselector allows us to select either class or id, the h1 tag above choice container 
const choices = Array.from(document.querySelectorAll('.choice-text')); //we need the .choice-text to be in an array and we need to select everything with the same .choice-text name
const progressText = document.querySelector('#progressText'); //under the title of question
const scoreText = document.querySelector('#score'); //above the 0 in the score 
const progressBarFull = document.querySelector('#progressBarFull'); // between question heading and score 

// creating the other variables we will need/ getting the tools to use with the ingredients
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'test question one',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
    },
    {
        question: 'test question two',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 1,
    },
    {
        question: 'test question three',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 4,
    },
    {
        question: 'test question four',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 1,
    },
    {
        question: 'test question five',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 3,
    },
];

const SCORE_POINTS = 100; //capitalizing means its not going to change
const MAX_QUESTIONS = 5;

startGame = () => { //the start game function, this is what the quiz will be like when it starts
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //put the questions in the empty array (available questions), this will stop changes in one from effecting the other
    getNewQuestion(); //this function (which will be made further below) gets the new questions
}

getNewQuestion = () => { // this is the function for getting the next question, we need to use an if statment here because this function will be reused over and over 
    if  (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ) {   //if the length of the avilable questions array is = to 0, OR the questions counter is greater than the max number of question ...
            localStorage.setItem('mostRecentScore', score)   // if this is the case then save the score into local storage, the most recent score 
   
            return window.location.assign('/end.html');   // once this has been saved into local storage, go to the end page 
        }       
        // below this will keep track of the score 
        questionCounter++
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`   // using the progress text (under the title of question)(which we get using the innerText) will show the question coounter next to the maz questions, which will will show using a template string 
        //now we update the progress bar, we will do this by finding the question we are on then timesing it by 100 AND MAKING THE STYLE AND WIDTH OF THE PROGRESSBAR = TO THIS     
        progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

        // this is how we make the questions random 
        // make a new const called questionsIndex = to a random number times the number of questions in the availablequestions array rounded down 
        const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex] //by combining the new const we just created questionIndex (which randomizes the number), with availblequestions we get a random index number for the questions
        question.innerText = currentQuestion.question // this is then added to the question text of id 

        choices.forEach(choice => { // loop through each one of the choices text in the html
            const number = choice.dataset['number'] // make a new const and call it number and this is = to the dataset number we declared in the html
            choice.innerText = currentQuestion['choice' + number] // currentquestion gives us the index that is randomized, the next part choice + number gives us the choices of answer that comes with the question
        })

        availableQuestions.splice(questionsIndex, 1)

        acceptingAnswers = true;
    }      
    
    
    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if (!acceptingAnswers) return

            acceptingAnswers = true
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset['number']

            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

            if (classToApply === 'correct') {
                incrementScore(SCORE_POINTS)
            }

            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()
            }, 1000)
        })
    })


    incrementScore = num => {
        score +=num
        scoreText.innerText = score
    }