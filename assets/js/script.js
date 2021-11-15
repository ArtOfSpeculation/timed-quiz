var containerEl = document.querySelector(".container");
var startButtonEl = document.querySelector("#start-btn");
var questionTextEl = document.querySelector(".question-text");
var answerButtonsEl = document.querySelector("#answer-buttons");
var textContainerEl = document.querySelector(".text-container");
var formEl = document.querySelector("form");
var revealIfAnswerWasCorrectEl = document.querySelector(".revealIfAnswerWasCorrect");
var submitScoreButtonEl = document.querySelector(".submit-score");
var questionsArray = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            { text: "1. Strings", correctResponse: false, response: "Wrong!"},
            { text: "2. Booleans", correctResponse: false, response: "Wrong!"},
            { text: "3. Alerts", correctResponse: true, response: "Correct!"},
            { text: "4. Numbers", correctResponse: false, response: "Wrong!"}
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed with _____________.",
        answers: [
            { text: "1. Quotes", correctResponse: false, response: "Wrong!"},
            { text: "2. Curly Brackets", correctResponse: false, response: "Wrong!"},
            { text: "3. Parenthesis", correctResponse: true, response: "Correct!"},
            { text: "4. Square Brackets", correctResponse: false, response: "Wrong!"}
        ]
    },
    {
        question: "Arrays in Javascript can be used to store _________________.",
        answers: [
            { text: "1. Numbers and strings", correctResponse: false, response: "Wrong!"},
            { text: "2. Other Arrays", correctResponse: false, response: "Wrong!"},
            { text: "3. Booleans", correctResponse: false, response: "Wrong!"},
            { text: "4. All of the above", correctResponse: true, response: "Correct!"}
        ]
    },
    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        answers: [
            { text: "1. Commas", correctResponse: false, response: "Wrong!"},
            { text: "2. Curly Brackets", correctResponse: false, response: "Wrong!"},
            { text: "3. Quotes", correctResponse: true, response: "Correct!"},
            { text: "4. Parenthesis", correctResponse: false, response: "Wrong!"}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "1. Javascript", correctResponse: false, response: "Wrong!"},
            { text: "2. Terminal/Bash", correctResponse: false, response: "Wrong!"},
            { text: "3. For loops", correctResponse: false, response: "Wrong!"},
            { text: "4. Console log", correctResponse: true, response: "Correct!"}
        ]
    }
]
var currentQuestionNumber = 0;
var currentScore = 0;
var timeOnClock = 10;

var endGame = function() {
    console.log("the game is now over");
    questionTextEl.innerText = "All done!";
    textContainerEl.innerText = "Your final score is " + currentScore +" out of " + questionsArray.length + ".";
    textContainerEl.classList.add("left");
    textContainerEl.classList.remove("hidden");
    formEl.classList.remove("hidden");

};

var clearQuestion = function() {
    while(answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
    if(currentQuestionNumber >= questionsArray.length) {
        endGame();
    }
};

var nextQuestion = function(question) {
    if (currentQuestionNumber >= questionsArray.length) return;

    clearQuestion();
    // debugger
    questionTextEl.innerHTML = question.question;
    question.answers.forEach(answer => {
        var newButton = document.createElement("button");
        newButton.classList.add("btn");
        newButton.innerText = answer.text;
        if (answer.correctResponse) {
            newButton.dataset.correct = answer.correctResponse;
        }
        newButton.addEventListener("click", checkAnswer);
        answerButtonsEl.appendChild(newButton);
    }
    )}
    
    var checkAnswer = function (event) {
        selectedButton = event.target;
        if (selectedButton.dataset.correct) {
            currentScore += 1;
            revealIfAnswerWasCorrectEl.innerText = "Correct!";
            revealIfAnswerWasCorrectEl.classList.remove("hidden");
        } else {
            revealIfAnswerWasCorrectEl.innerText = "Wrong!", revealIfAnswerWasCorrectEl.classList.remove("hidden");
        }
        console.log(selectedButton.dataset.correct, currentScore);
        currentQuestionNumber++;
        if (timeOnClock > 0 && currentQuestionNumber<questionsArray.length) {
            nextQuestion(questionsArray[currentQuestionNumber]);
        } else {
            clearQuestion();
        }
        
    }
    
    var startGame = function() {
        startButtonEl.classList.add("hidden");
        textContainerEl.classList.add("hidden");
        answerButtonsEl.classList.remove("hidden");
        questionTextEl.classList.add("question");
        console.log(questionTextEl);
            nextQuestion(questionsArray[currentQuestionNumber]);
    };

    var visitLeaderboard = function (){
        console.log("Here is the leaderboard")
        
        while(containerEl.firstChild) {
            console.log("removed something");
            containerEl.removeChild(containerEl.firstChild);
        }
        questionTextEl.innerText = "High scores"
    }

submitScoreButtonEl.addEventListener("click", visitLeaderboard)
startButtonEl.addEventListener("click", startGame);