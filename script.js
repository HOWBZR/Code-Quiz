
$(document).ready(function () {
    
    const start = document.getElementById("start");
    let timerEl = document.getElementById("time");
    let fqcontent = document.getElementById('firstquestion');
    let buttoncontent = document.getElementById('buttoncontent');
    let realButtonContent = document.getElementById('first');

    let currentQuestion = 0;
    let correct = 0;
    let incorrect = 0;
    
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
    
    
    secondsLeft = 75;

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
            document.getElementById('showonstart').textContent = '';
        }
        const questionOne = document.createElement("h2");
        questionOne.textContent = questions[0].title;
        fqcontent.prepend(questionOne);
    
        for (let i = 0; i < questions[0].choices.length; i++) {
        
            const btn = document.createElement("BUTTON");   // Create a <button> element
            btn.id = 'button' + i;
            btn.classList.add('btnList');
            realButtonContent.appendChild(btn);
        }
        //btn.textContent = "Word";                       // Insert text from choices 
        fillQuestions();
    
    
    }

    function fillQuestions() {
        document.getElementById('button0').textContent = questions[currentQuestion].choices[0];
        document.getElementById('button1').textContent = questions[currentQuestion].choices[1];
        document.getElementById('button2').textContent = questions[currentQuestion].choices[2];
        document.getElementById('button3').textContent = questions[currentQuestion].choices[3];

        button0.addEventListener("click", function () {
            if ($(this).text === questions[0].answer) {
                correct++;
            }
            else {
                incorrect++;
            }
        });
        button1.addEventListener("click", function () {
            if ($(this).text === questions[0].answer) {
                correct++;
            }
            else {
                incorrect++;
            }
        });
        button2.addEventListener("click", function () {
            if ($(this).text() === questions[0].answer) {
                correct++;
            }
            else {
                incorrect++;
            }
        });
        button3.addEventListener("click", function () {
            if ($(this).text === questions[0].answer) {
                correct++;
            }
            else {
                incorrect++;
            }
        });
    }
});







