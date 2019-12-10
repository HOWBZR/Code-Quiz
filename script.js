
const start = document.getElementById("start");
let timerEl = document.getElementById("time");
let correct = 0;
let incorrect = 0;
const currentQuestion = 0;

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

];



secondsLeft = 100;

// Timer function and starts questions function
start.addEventListener("click", function () {

    const timeLeft = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "You have " + secondsLeft + " seconds left.";
        if (secondsLeft === 0) {
            clearInterval(timeLeft);
        }
    }, 1000)
    startQuestions();
});


// creates new element with question and button answers
function startQuestions() {
    if (startQuestions) {
        document.getElementById('content').style.visibility = 'hidden';
    }
    const questionOne = document.createElement("h2");
    questionOne.id = 'first';
    questionOne.textContent = questions[0].title;
    document.getElementById('first').appendChild(questionOne);

    for (let i = 0; i < questions[0].choices.length; i++) {

        const btn = document.createElement("BUTTON");   // Create a <button> element
        btn.id = 'button' + i;
        btn.classList.add('btnList');
        document.body.appendChild(btn);                 //Append 
    }
    //btn.textContent = "Word";                       // Insert text from choices 
    fillQuestions();
}

function fillQuestions() {
    document.getElementById('button0').textContent = questions[currentQuestion].choices[0];
    document.getElementById('button1').textContent = questions[currentQuestion].choices[1];
    document.getElementById('button2').textContent = questions[currentQuestion].choices[2];
    document.getElementById('button3').textContent = questions[currentQuestion].choices[3];

}
const any = document.getElementsByClassName("btnList");
any.addEventListener("click", function () {
    alert('its working');
});

$(document).ready(function () {
    $('.btnList').on('click', function () {

        if ($(this).text === questions[currentQuestion].answer) {
            correct++;
            console.log("correct" + correct);
        }
        else {
            incorrect++;
            console.log("incorrect" + incorrect);
        }

        // handles score and start next question
        currentQuestion++;
        fillQuestions();
    });
});
