// Question Array
var questions = [
    {
        questionText: "Commonly used data types DO Not Include:",
        choices: ["1. strings", "2. boolean", "3. alerts", "4. numbers"],
        answer: "2. boolean"
    },
    {
        questionText: "The condition in an if / else statement is enclosed with _______.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "3. parenthesis"
    },
    {
        questionText: "Arrays in JavaScript can be used to store _______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        questionText: "String values must be enclosed within _____ when being assigned to variables",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "2. curly brackets"
    },
    {
        questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "3. for loops"
    },
];
// Question Array End

// Grab Elements from HTML Page
var startButtonEl = document.querySelector("#start");
var allDoneEl = document.getElementById("all-done");
var quizEl = document.querySelector("#quiz");
var questionEl = document.getElementById("question");
var answerResponseEl = document.querySelector("#response");
var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var btn4El = document.getElementById("btn4");


// variables
var currentQuestion = 0;


//Hides PreQuiz Screen and shows quiz block
var startGame = function() {
    startButtonEl.classList.add("hide");
    quizEl.classList.remove("hide");
};

//Prints Current Question & choices and clears last answer response
var showQuestions = function() {

    questionEl.innerHTML = questions[currentQuestion].questionText;
    btn1.innerHTML = questions[currentQuestion].choices[0];
    btn2.innerHTML = questions[currentQuestion].choices[1];
    btn3.innerHTML = questions[currentQuestion].choices[2];
    btn4.innerHTML = questions[currentQuestion].choices[3];
};


//check if Answer is correct
var checkAnswer = function(answer) {
    // if correct go to next question
    if (questions[currentQuestion].answer === questions[currentQuestion].choices[answer]) {
        answerResponseEl.innerText = "Correct!";
        checkLength();
    } else {
        answerResponseEl.innerText = "Wrong!";
        
    };
};

// Sends which button we clicked into the checkAnswer function
var choice1 = function() {
    checkAnswer(0);
};

var choice2 = function() {
    checkAnswer(1);
};

var choice3 = function() {
    checkAnswer(2);
};

var choice4 = function() {
    checkAnswer(3);
};

// Checks current length of quiz
var checkLength = function() {
    console.log(currentQuestion);
    if (currentQuestion === questions.length - 1) {
        console.log("WOw!")
        endGame();
    } else {
        currentQuestion++;
        showQuestions();
        
    }
};

var endGame = function() {
    quizEl.classList.add("hide");
    allDoneEl.classList.remove("hide");
};
//quiz functionality
var quiz = function() {
    startGame();
    showQuestions();
};


//Event Listeners
startButtonEl.addEventListener("click", quiz);
btn1El.addEventListener('click', choice1);
btn2El.addEventListener('click', choice2);
btn3El.addEventListener('click', choice3);
btn4El.addEventListener('click', choice4);
 