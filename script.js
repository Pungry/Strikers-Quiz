var score = 100;
var scoreSpace = document.querySelector("#scoreSpace");
var startButton = document.querySelector("#start");
var myH1 = document.querySelector("h1");
var myH2 = document.querySelector("h2");
var choice1 = document.querySelector("#Choice1");
var choice2 = document.querySelector("#Choice2");
var choice3 = document.querySelector("#Choice3");
var choice4 = document.querySelector("#Choice4");
var horizontalBar = document.querySelector("#horizontalBar");
var correctOrWrong = document.querySelector("#correctOrWrong");
//create variables for every single choice button otherwise the score will be bugged out

console.log("What up");
choice1.style.display = "none";
choice2.style.display = "none";
choice3.style.display = "none";
choice4.style.display = "none";

//function to start the game when the button is clicked
startButton.addEventListener("click", function() {
    console.log("start");
    myH1.style.display = "none";
    myH2.style.display = "none";
    startButton.style.display = "none";
    choice1.style.display = "block";
    choice2.style.display = "block";
    choice3.style.display = "block";
    choice4.style.display = "block";
    startGame();
})

//function to keep track of score
function startGame() {
    var scoreInterval = setInterval(function ()
    {
        scoreSpace.textContent = "Score: " + score;
        score--;
        console.log(score);
        if(score <= 0){
            clearInterval(scoreInterval);
            endGame();
        }
    }, 1000)
    //Here's the first question
    myH1.style.display = "block";
    myH1.textContent = "Pick A";
    choice1.textContent = "A";
    choice2.textContent = "B";
    choice3.textContent = "C";
    choice4.textContent = "D";
    choice1.addEventListener("click", function()
    {
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Correct!";
        secondQuestion();
    })
    choice2.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        secondQuestion();
    })
    choice3.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        secondQuestion();
    })
    choice4.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        secondQuestion();
    })
}

function secondQuestion() {
    myH1.textContent = "Pick B";
    choice1.textContent = "A";
    choice2.textContent = "B";
    choice3.textContent = "C";
    choice4.textContent = "D";
    choice1.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        thirdQuestion();
    })
    choice2.addEventListener("click", function()
    {
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Correct!";
        thirdQuestion();
    })
    choice3.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        thirdQuestion();
    })
    choice4.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        thirdQuestion();
    })
}

function thirdQuestion () {
    console.log("Third question");
    myH1.textContent = "Pick C";
    choice1.textContent = "A";
    choice2.textContent = "B";
    choice3.textContent = "C";
    choice4.textContent = "D";
    choice1.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
    })
    choice2.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
    })
    choice3.addEventListener("click", function()
    {
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Correct!";
    })
    choice4.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
    })
}

function endGame() {
    myH2.style.display = "block";
    myH1.textContent = "Game over";
}

//function to subtract ten from the score every time a wrong button is clicked

//When the start button is clicked, the rest of the elements should disappear, and the first quiz question should appear

//A timer of 100 seconds is the user's score
//A quiz question should display over four buttons that are the "answers" to the question
//When one button is clicked, the user should be told if they're correct or wrong underneath the buttons and the rest of the current page should be replaced with the next question
//if the answer is incorrect, the timer/score should go down

//When all questions have been answered, either correctly or incorrectly, a form for the user to input their name should be given
//The user can then compare their score to a leaderboard of other scores
//The user can also clear the high scores by pressing a button or they can play again