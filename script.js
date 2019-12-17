$('document').ready(function () {

    let questionBoxEl = document.getElementById('questions');
    let allButtionsEl = document.getElementById('buttons');
    let startButtonEl = document.getElementById('startbutton');
    let button0 = document.getElementById('button0');
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');
    let calculatedScore = document.getElementById('final-score');
    let timerEl = document.getElementById("time");
    let lastMessage = document.getElementById("last-message");
    let initials = document.getElementById('initials');
    correct = 0;
    incorrect = 0;
    currentQuestion = 0;
    currentChoices = 0;
    secondsLeft = 75;
    $('#initials').hide();

    let questions = [
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
        {
            title: "What does HTML stand for?",
            choices: ["Hyper Train Media Lama", "Hold tight Ma Lasagana", "Here thee mother lotus", "Hyper Text Markup Language"],
            answer: "parentheses"
        },
        {
            title: "What does HTML stand for?",
            choices: ["Hyper Train Media Lama", "Hold tight Ma Lasagana", "Here thee mother lotus", "Hyper Text Markup Language"],
            answer: "parentheses"
        },

    ];



    $('#startbutton').on('click', function () {
        $('#coding').hide();
        $('#pcontent').hide();
        $('#startbutton').hide();
        $('.buttons').show();

        const timeLeft = setInterval(function () {
            secondsLeft--;
            timerEl.textContent = "You have " + secondsLeft + " seconds left.";
            if (secondsLeft === 0) {
                clearInterval(timeLeft);
            }
        }, 1000)

        questionBoxEl.textContent = questions[0].title
        button0.textContent = questions[0].choices[0];
        button1.textContent = questions[0].choices[1];
        button2.textContent = questions[0].choices[2];
        button3.textContent = questions[0].choices[3];
    })

    $('.btn').on('click', function () {

        if (this.innerHTML === questions[currentQuestion].answer) {
            currentQuestion++;
            let questionSelector = questions[currentQuestion].title
            correct++;
            //start button content change
            button1.textContent = questions[currentQuestion].choices[1];
            button2.textContent = questions[currentQuestion].choices[2];
            button3.textContent = questions[currentQuestion].choices[3];
            currentChoices++;

            questionBoxEl.textContent = questionSelector;
        }
        else if (this.innerHTML !== questions[currentQuestion].answer) {
            currentQuestion++;
            incorrect++;
            secondsLeft -= 20;
            let questionSelector = questions[currentQuestion].title;
            //start button content change
            button0.textContent = questions[currentQuestion].choices[0];
            button1.textContent = questions[currentQuestion].choices[1];
            button2.textContent = questions[currentQuestion].choices[2];
            button3.textContent = questions[currentQuestion].choices[3];
            questionBoxEl.textContent = questionSelector;
        }
        finish();
    })

    function finish() {
        if (currentQuestion > 2) {
            questionBoxEl.textContent = "Nice work! You finished with a high score of: ";
            calculatedScore.textContent = secondsLeft * 2;
            let score = secondsLeft * 2;
            $('.buttons').hide();
            lastMessage.textContent = "Please enter your initials below:"
            $form = $("<form></form>").score;
            $('#initials').show();

            initials.addEventListener('click', function () {
                let scoreInput = score.valueOf();
                localStorage.setItem('scoreInput');


            })
            // $form.append('<input type="form" value="form">');
            //$('#final-score').append($form);

        }
    }

})







