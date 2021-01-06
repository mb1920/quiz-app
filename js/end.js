scoreText = document.getElementById("score");
savedScore = localStorage.getItem("Score");
numberOfQuestions = localStorage.getItem("qn");
scoreText.innerText = savedScore + "/" + numberOfQuestions;