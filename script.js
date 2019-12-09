
const start = document.getElementById("start");
let timerEl = document.getElementById("time");

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

start.addEventListener("click", function () {

    const timeLeft = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "You have " + secondsLeft + " seconds left.";
        if (secondsLeft === 0) {
            clearInterval(timeLeft);
        }
    }, 1000)
    startQuestions();
})



function startQuestions() {
    if (startQuestions) {
        document.getElementById('content').style.visibility = 'hidden';
    }
    for (let i = 0; i < questions[0].choices.length; i++) {

        const btn = document.createElement("BUTTON");   // Create a <button> element
        btn.textContent = "Word";                       // Insert text from choices 
        document.h1.appendChild(btn);                 //Append 

    }

}
console.log(questions[0].title);
