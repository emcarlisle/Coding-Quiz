// access to html elements
var startQuiz = document.getElementById("start");
var start = document.getElementById("startScreen");
var questionsScreen = document.getElementById("questionsScreen");
var questionTitle = document.getElementById("question-title")
//var options = document.getElementById("options")
var a = document.getElementById("button-choice1");
var b = document.getElementById("button-choice2");
var c = document.getElementById("button-choice3");
var d = document.getElementById("button-choice4");
var answer = document.getElementById("answer");
var score = document.getElementById("final-score");
//var highscore = document.getElementById("highscores");
var time = document.getElementById("time");
var endGame = document.getElementById("end-screen")

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
    //interval = setInterval(timer, 1000);
    enableClicks();
});
// timer function 
function timer() {
    interval = setInterval(function() {
        time.innerHTML = currentTime--;
        if(answer === 'Incorrect') {
            currentTime = currentTime - 10;
        }
        if(currentTime === 0) {
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
    if(index === questions.length) {
        clearInterval(interval);
        questionContainer.classList.add("d-none");
        endGame.classList.remove("d-none");
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
    let correctAnswer = questions[currentIndex].answer;
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

var questions = [
    {
        question: 'Which of the following function of String object combines the text of two strings and returns a new string?',
        options: {
            a: 'add()',
            b: 'merge()',
            c: 'concat()',
            d: 'append()',
        },
        answer: 'concat()'
        
    },
    {
        question: 'Which built-in method returns the length of the string?',
        options: {
            a: 'length()',
            b: 'size()',
            c: 'index()',
            d: 'None of the above()',
        },
        answer: 'length()'
    },
    {
        question: 'Which of the following are capabilities of functions in JavaScript?',
        options: {
            a: 'Return a value',
            b: 'Accept parameters and Return a value',
            c: 'Accept arameters',
            d: 'None of the above()',
        },
        answer: 'Accept parameters'
    },
    {
        question: 'What is the correct JavaScript syntax to write "Hello World"?',
        options: {
            a: 'console.log("Hello World")',
            b: 'printIn ("Hello World)',
            c: 'document.write("Hello World)',
            d: 'response.write("Hello World)',
        },
        answer: 'document.write("Hello World)'
    },
    {
        question: 'Which of the following is not considered a JavaScript operator?',
        options: {
            a: 'new',
            b: 'this',
            c: 'delete',
            d: 'typeOf',
        },
        answer: 'this'
    }
    
]
