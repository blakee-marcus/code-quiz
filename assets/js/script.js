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
var allDoneEl = document.getElementById("alldone");
var quizEl = document.querySelector("#quiz");
var questionEl = document.getElementById("question");
var answerResponseEl = document.querySelector("#response");
var countDownEl = document.getElementById("countdown");
var initialInput = document.getElementById("initials");
var highscorelistEl = document.getElementById("higscore-list");
var initialBtnEl = document.getElementById("submitscore");
var scoreListEl = document.getElementById("scorelist");
var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var btn4El = document.getElementById("btn4");


// variables
var currentQuestion = 0;
var timeLeft = 75;



// reset time and starting question
var reset = function() {
    currentQuestion = 0;
    timeLeft = 75;
};

// timer which decrease timeLeft by 1 every second
var timer = setInterval(function() {
    timeLeft--;
    countDownEl.innerText = timeLeft;
    if(timeLeft <= 0) {
        clearInterval(timer);
    
        if(currentQuestion < questions.length - 1) {
            endGame();
        }
    }
}, 1000);

//Hides PreQuiz Screen and shows quiz block
var startGame = function() {
    startButtonEl.classList.add("hide");
    quizEl.classList.remove("hide");
};

// Hides Quiz and Shows Score Saving Block
var endGame = function() {
    quizEl.classList.add("hide");
    allDoneEl.classList.remove("hide");
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
        timeLeft -= 10;
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

//Saves Initials inputted and stores into localStorage

var saveHighScore = function(event) {
    event.preventDefault();

    if (initialInput.value === "") {
        window.alert("Please enter Initials!");
        return;
    }

    var savedScores = localStorage.getItem("high scores");
    var scores = JSON.parse(savedScores);

    // if (savedScores === null) {
    //     scores = [];
    // } else {
    //     scores = JSON.parse(savedScores)
    // };

    var newScore = {
        initials: initialInput.value,
        score: timeLeft
    };

    var scoresString = JSON.stringify(scores);
   localStorage.setItem("high scores", scoresString);

    showHighScores();
};

var showHighScores = function() {
    allDoneEl.classList.add("hide");
    scoreListEl.classList.remove("hide");
    var savedScores = localStorage.getItem("high scores");
    var storedScores = JSON.parse(savedScores);
    for (let i = 0; i < storedScores.length; i++) {
        var eachNewScore = document.createElement("li");
        eachNewScore.innerHTML = storedScores[i].initials + ": " + storedScores[i].score;
        highscorelistEl.appendChild(eachNewScore);
    }
};

//quiz functionality
var quiz = function() {
    reset();
    startGame();
    timer;
    showQuestions();
};


//Event Listeners
startButtonEl.addEventListener("click", quiz);
initialBtnEl.addEventListener('click', saveHighScore);
btn1El.addEventListener('click', choice1);
btn2El.addEventListener('click', choice2);
btn3El.addEventListener('click', choice3);
btn4El.addEventListener('click', choice4);

 