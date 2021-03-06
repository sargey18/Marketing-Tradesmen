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

// add the answers variable 

let questions = [
    {
        question: 'How Long Have You Worked In Your Industry (overall)?',
        choice1: 'Less Than 6 months.',
        choice2: 'Between 6 to 12 months',
        choice3: 'Between 12 to 18 months',
        choice4: 'More than 18 Months',
        answer: [1, 4],

    },
    {
        question: 'What is the feedback your customers have given your services',
        choice1: 'My customers recommend my services to their friends and family',
        choice2: 'My customers friends and family inquire about my work ',
        choice3: 'I have collected positive online reviews from my customers ',
        choice4: 'I do not have that many reviews of customers with my work',
        answer: [1],

    },
    {
        question: 'Why do you need a website for your business?',
        choice1: 'To showcase my work to potential customers',
        choice2: 'To automatically book consultations for work ',
        choice3: 'To promote my services to customers',
        choice4: 'To promote brand awareness about business',
        answer: [1],

    },
    {
        question: 'How are you going to promote your business online (choose the main method)',
        choice1: 'Facebook and Google Ads',
        choice2: 'Registering with local directories',
        choice3: 'Ranking high on local SEO',
        choice4: 'Word of mouth',
        answer: [1],



    },
    {
        question: 'How much help do you need managing your online presence',
        choice1: 'I need help with the online marketing ',
        choice2: 'I need help with the updating of the website',
        choice3: 'I need help with everything related to the online business',
        choice4: 'I know or I can learn anything that I need to',
        answer: [1],


    },
];

const SCORE_POINTS = 100; //capitalizing means its not going to change
const MAX_QUESTIONS = 5;

let startGame = () => { //the start game function, this is what the quiz will be like when it starts
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //put the questions in the empty array (available questions), this will stop changes in one from effecting the other
    getNewQuestion(); //this function (which will be made further below) gets the new questions
};

let getNewQuestion = () => { // this is the function for getting the next question, we need to use an if statment here because this function will be reused over and over 
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {   //if the length of the avilable questions array is = to 0, OR the questions counter is greater than the max number of question ...
        localStorage.setItem('mostRecentScore', score);   // if this is the case then save the score into local storage, the most recent score 


        return window.location.assign('/end.html');   // once this has been saved into local storage, go to the end page 
    }
    // below this will keep track of the score 
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`  ; // using the progress text (under the title of question)(which we get using the innerText) will show the question coounter next to the maz questions, which will will show using a template string 
    //now we update the progress bar, we will do this by finding the question we are on then timesing it by 100 AND MAKING THE STYLE AND WIDTH OF THE PROGRESSBAR = TO THIS     
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`  ;

    // this is how we make the questions random 
    // make a new const called questionsIndex = to a random number times the number of questions in the availablequestions array rounded down 
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex] ;//by combining the new const we just created questionIndex (which randomizes the number), with availblequestions we get a random index number for the questions


    question.innerText = currentQuestion.question; // this is then added to the question text of id 




    choices.forEach(choice => { // loop through each one of the choices text in the html
        const number = choice.dataset['number']; // make a new const and call it number and this is = to the dataset number we declared in the html
        choice.innerText = currentQuestion['choice' + number] ;// currentquestion gives us the index that is randomized, the next part choice + number gives us the choices of answer that comes with the question
    });

    availableQuestions.splice(questionsIndex, 1) ;//takes out the question index from the randomized const

    acceptingAnswers = true;
};


choices.forEach(choice => { // go through each choice 
    choice.addEventListener('click', e => { // add a click event listener and put the event through a function
        if (!acceptingAnswers) return ; // if it is not accepting ansers then return 

        acceptingAnswers = false;
        const selectedChoice = e.target ;// create a const for the event click target
        const selectedAnswer = Number(selectedChoice.dataset['number']); //save the event taget dataset number into a new array

        console.log({ selectedAnswer });

        const correctAnswer = currentQuestion.answer.includes(selectedAnswer);

        let classToApply = correctAnswer ? 'correct' : 'incorrect' ;// if the choice is correct toggle the green css or if it is wrong toggle the red 

        if (correctAnswer) {  // if it is correct then how muh should we increase the score 
            incrementScore(SCORE_POINTS); // increase score by 100 points 
        }

        selectedChoice.parentElement.classList.add(classToApply); // this adds the above when we get it right 

        setTimeout(() => { // we want to see if we got the question right, so we need some time 
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion(); // this will get us the new question
        }, 1000);
    });
});


let incrementScore = num => { // we need to increment the score 
    score += num;
    scoreText.innerText = score; // increase the score number in text 
};

startGame(); // call the start game function, starting the game