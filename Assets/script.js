var startQuiz = document.getElementById("start");
var start = document.getElementById("startScreen");
var questionsScreen = document.getElementById("questionsScreen");
var options = document.getElementById("options")
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var correct = document.getElementById("correctAnswer");
var highscore = document.getElementById("highscores");
var time = document.getElementById("time");

//var question = document.getElementById("question");
//var answers = document.getElementById("answers");

var currentIndex  = 0;
var currentTime = 75;
var interval;


// I want to start off with start screen displayed and the questionsScreen hidden,
// when I click start quiz, the start screen disappears and the questions screen displays
//var start = function() {
//    questionsScreen.style.display = 'none';
//}
//function () {
//    document.getElementById('questionsScreen').style.visibility ="hidden";
//}
//when start button is clicked, I want to trigger the timer function, interval function, 
//and the function to generate the next question
startQuiz.addEventListener("click", function(){
    startScreen.classList.add("d-none");
    questionContainer.classList.remove("d-none");
    if (start.style.display === "none") {
        start.style.display = "block";
      } else {
        start.style.display = "none";
    }
    generateQuestion(currentIndex);
    timer();
    enableClicks();
});
//document.getElementById('questionsScreen').classList.add("hide");
    //questionsScreen.style.display = "block";
   
function timer() {
    interval = setInterval(function() {
        time.innerHTML = currentTime--;
        if(correct === 'Incorrect') {
            currentTime = currentTime - 10;
        }
        if(currentTime === -1) {
            clearInterval(interval)
        }
    }, 1000)
}

function enableClicks() {
    choice1.addEventListener('click', function() {
        generateQuiz(choice1);
    })
    choice2.addEventListener('click', function() {
        generateQuiz(choice2);
    })
    choice3.addEventListener('click', function() {
        generateQuiz(choice3);
    })
    choice4.addEventListener('click', function() {
        generateQuiz(choice4);
    })
}

function generateQuestion(index) {
    if(index === question.length) {
        clearInterval(interval);
        return score.innerHTML = time.innerHTML;
    }
    questionsScreen.innerHTML = question[index].question;
    choice1.innerHTML = questions[index].correct.a; 
    choice2.innerHTML = questions[index].correct.b; 
    choice3.innerHTML = questions[index].correct.c;
    choice4.innerHTML = questions[index].correct.d;
}


 //main function for the quiz
function generateQuiz(UserChoice) {
    var options = question[currentIndex].choice1;
    if(UserChoice.innerHTML === correctAnswer) {
       options.innerHTML = 'Correct'; 
    } else {
        options.innerHTML = 'Incorrect';
        currentTime = currentTime - 10;
    }
    currentIndex++;
    generateQuestion(currentIndex);
}

var question [
    {
        question: 'Which of the following function of String object combines the text of two strings and returns a new string?',
        options: {
            choice1: 'add()',
            choice2: 'merge()',
            choice3: 'concat()',
            choice4: 'append()',
        },
        correct: 
        
    }
]


//var startPage = document.getElementById("startpage");
//var questionsSection = document.getElementById("questionsSection");
//var startTimer = document.getElementById("starttime")

//function quiz() {
//    document.getElementById('startPage').classList.add("hide");
//    document.getElementById('questionsSection').classList.remove("hide");
//}
//startQuiz.addEventListener("click", quiz);
//update = setInterval("timer()", 1000); // put function here and not a string
//    document.getElementById("startPage").classList.add("hide");
//    document.getElementById("questionsSection").classList.remove("hide");
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