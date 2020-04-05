// access to html elements
var startQuiz = document.getElementById("start");
var start = document.getElementById("startScreen");
var questionsScreen = document.getElementById("questionsScreen");
var questionTitle = document.getElementById("question-title")
var options = document.getElementById("options")
var a = document.getElementById("choice1");
var b = document.getElementById("choice2");
var c = document.getElementById("choice3");
var d = document.getElementById("choice4");
var answer = document.getElementById("answer");
var highscore = document.getElementById("highscores");
var time = document.getElementById("time");

//global variables
var currentIndex  = 0;
var currentTime = 75;
var interval;

// when this button is clicked, this will cause
// the startScreen to hide and display questions
// and trigger the timer
startQuiz.addEventListener("click", function(){
    startScreen.classList.add("d-none");
    questionContainer.classList.remove("d-none");
    generateQuestion(currentIndex);
    timer();
    enableClicks();
});
// timer function 
function timer() {
    interval = setInterval(function() {
        time.innerHTML = currentTime--;
        if(answer === 'Incorrect') {
            currentTime = currentTime - 10;
        }
        if(currentTime === -1) {
            clearInterval(interval)
        }
    }, 1000)
}
// function to enable clicks
function enableClicks() {
    a.addEventListener('click', function() {
        generateQuiz(a);
    })
    b.addEventListener('click', function() {
        generateQuiz(b);
    })
    c.addEventListener('click', function() {
        generateQuiz(c);
    })
    d.addEventListener('click', function() {
        generateQuiz(d);
    })
}

// generates the next question
// after the last question is answered, this function will clear
// interval and return the time and score
function generateQuestion(index) {
    if(index === question.length) {
        clearInterval(interval);
        return score.innerHTML = time.innerHTML;
    }
    questionTitle.innerHTML = questions[index].question;
    a.innerHTML = questions[index].options.a; 
    b.innerHTML = questions[index].options.b; 
    c.innerHTML = questions[index].options.c;
    d.innerHTML = questions[index].options.d;
}
// ^ this will change the question/answers/correct answer

 //main function for the quiz
function generateQuiz(UserChoice) {
    var correctAnswer = question[currentIndex].a;
    if(UserChoice.innerHTML === correctAnswer) {
       answer.innerHTML = 'Correct'; 
    } else {
        answer.innerHTML = 'Incorrect';
        currentTime = currentTime - 10;
    }
    currentIndex++;
    generateQuestion(currentIndex);
}
// if user chooses the correct answer, display correct
// else display incorrect and -10 sec on timer
//update current index & go back to generateQuestion function

//var questions [
//    {
//        question: 'Which of the following function of String object combines the text of two strings and returns a new string?',
//        options: {
//            choice1: 'add()',
//            choice2: 'merge()',
//            choice3: 'concat()',
//            choice4: 'append()',
//        },
//        correct: 
//        
//    }
//]
