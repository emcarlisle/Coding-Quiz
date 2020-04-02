var startQuiz = document.querySelector("#start");
var start = document.querySelector("#startPage");
var highscore = document.querySelector("#highscores");
var timer = document.querySelector("#timer");
var questionsSection = document.querySelector("#questionSection");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var correct = document.querySelector("correct");

var currentIndex  = 0;
var timer = 75;
var interval = '';

//when start button is clicked, I want to trigger the timer function, interval function, 
//and the function to generate the next question
startQuiz.addEventListener("click", function(){ 
    generateQuestion(currentIndex);
    timer();
    enableClicks();
})

//var startPage = document.querySelector("startpage");
//var questionsSection = document.querySelector("questionsSection");
//var startTimer = document.querySelector("#starttime")

//function quiz() {
//    document.querySelector('#startPage').classList.add("hide");
//    document.querySelector('questionsSection').classList.remove("hide");
//}
//startQuiz.addEventListener("click", quiz);
//update = setInterval("timer()", 1000); // put function here and not a string
//    document.querySelector("#startPage").classList.add("hide");
//    document.querySelector("#questionsSection").classList.remove("hide");
/*
When start quiz button is clicked, a timer starts; 
Questions with 4 multiple choice answers appear;
When an answer is selected, the next question will appear
If wrong answer, -10 secs on the timer
Once all questions are answered, timer stops.
Highscore is recorded with a text box to enter intials

render Highscores

List of buttons:
start quiz
choice buttons
view highscores
submit 
go back
clear high scores

list of functions:
funtion quiz
function nextQuestion
function selectAnswer*/