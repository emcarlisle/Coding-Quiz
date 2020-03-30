var startQuiz = document.querySelector("#startQuiz");
var startPage = document.querySelector("startPage");
var questionsSection = document.querySelector("questionsSection");


startQuiz.addEventListener("click", quiz);
update = setInterval("timer()", 1000);
    document.querySelector("#startPage").classList.add("hide");
    document.querySelector("#questionsSection").classList.remove("hide");
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