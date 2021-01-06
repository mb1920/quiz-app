const question = document.getElementById("questionText");
const options = Array.from(document.getElementsByClassName("button"));
const questionCounter = document.getElementById("question-counter-wrap");
const scoreCounter = document.getElementById("score-counter");

var allQuestions = [
    {
        question: "According to Greek mythology who was the first woman on earth?",
        option1: "Hera",
        option2: "Electra",
        option3: "Pandora",
        correctAnswer: 3
    },
    {
        question: "In which city was Anne Frank’s hiding place?",
        option1: "Paris",
        option2: "Amsterdam",
        option3: "Berlin",
        correctAnswer: 2
    },
    {
        question:"Which country produces the most coffee in the world?",
        option1: "Brazil",
        option2: "Colombia",
        option3: "Mexico",
        correctAnswer: 1
    },
    {
        question:"What language has the most words?",
        option1: "Latin",
        option2: "English",
        option3: "German",
        correctAnswer: 2
    },
    {
        question:"Name the world’s biggest island.",
        option1: "Cuba",
        option2: "Fiji",
        option3: "Greenland",
        correctAnswer: 3
    },
    {
        question:"What is your body’s largest organ?",
        option1: "Skin",
        option2: "Colon",
        option3: "Brain",
        correctAnswer: 1
    }
];

localStorage.setItem("qn", allQuestions.length);


var currentQuestion = {};
var enableAnswer = false;
var score = 0;

var indexes = [];

for(var a=[...Array(allQuestions.length).keys()], i=a.length; i--;){
    var rand = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    indexes.push(rand);
}


function startGame(){
    nQuestions = 0;
    getNewquestion();
};

function getNewquestion(){
    if(nQuestions >= allQuestions.length){
        return window.location.assign("/end.html");
    }
    nQuestions++;
    indexOfNewQuestion = indexes[0];
    indexes.splice(0, 1);
    currentQuestion = allQuestions[indexOfNewQuestion];

    questionText.innerText = currentQuestion.question;
    
    options.forEach(option => {
        var index = option.dataset['number'];
        option.innerText = currentQuestion['option' + index];
    });

    questionCounter.innerText = "Question "+ nQuestions + "/" + allQuestions.length;

    enableAnswer=true;
}

options.forEach(option =>{
    option.addEventListener('click', e => {
        if(!enableAnswer) return;
        enableAnswer=false;


        clickedButton = e.target.dataset['number'];
        appliedStyle = ""
        if(clickedButton==currentQuestion.correctAnswer){
            appliedStyle = "correct";
            score++;

        } else{
            appliedStyle = "incorrect";
        }

        e.target.classList.add(appliedStyle);
        scoreCounter.innerText = "Score " + score + "/" + allQuestions.length;
        localStorage.setItem("Score", score);

        setTimeout(function(){
            e.target.classList.remove(appliedStyle);
            e.target.classList.remove(".button:hover");
            getNewquestion();
        }, 600);

    });
});

startGame();

