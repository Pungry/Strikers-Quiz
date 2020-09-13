//What's left: content, styling, and leaderboard

var score = 100;
var trueScore = 0;
var scoreSpace = document.querySelector("#scoreSpace");
var startButton = document.querySelector("#start");
var myH1 = document.querySelector("h1");
var myH2 = document.querySelector("h2");
var choice1 = document.querySelector("#Choice1");
var choice2 = document.querySelector("#Choice2");
var choice3 = document.querySelector("#Choice3");
var choice4 = document.querySelector("#Choice4");
var choice5 = document.querySelector("#Choice5");
var choice6 = document.querySelector("#Choice6");
var choice7 = document.querySelector("#Choice7");
var choice8 = document.querySelector("#Choice8");
var choice9 = document.querySelector("#Choice9");
var choice10 = document.querySelector("#Choice10");
var choice11 = document.querySelector("#Choice11");
var choice12 = document.querySelector("#Choice12");
var choice13 = document.querySelector("#Choice13");
var choice14 = document.querySelector("#Choice14");
var choice15 = document.querySelector("#Choice15");
var choice16 = document.querySelector("#Choice16");
var horizontalBar = document.querySelector("#horizontalBar");
var correctOrWrong = document.querySelector("#correctOrWrong");
var nameInput = document.querySelector("#nameInput");
var submitButton = document.querySelector("#submit");

//function to start the game when the button is clicked
startButton.addEventListener("click", function() {
    console.log("start");
    score = 100;
    myH1.style.display = "none";
    myH2.style.display = "none";
    startButton.style.display = "none";
    choice1.style.display = "block";
    choice2.style.display = "block";
    choice3.style.display = "block";
    choice4.style.display = "block";
    scoreSpace.style.display = "block";
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
    choice1.style.display = "none";
    choice5.textContent = "A";
    choice5.style.display = "block";
    choice2.style.display = "none";
    choice6.textContent = "B";
    choice6.style.display = "block";
    choice3.style.display = "none";
    choice7.textContent = "C";
    choice7.style.display = "block";
    choice4.style.display = "none";
    choice8.textContent = "D";
    choice8.style.display = "block";
    choice5.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        thirdQuestion();
    })
    choice6.addEventListener("click", function()
    {
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Correct!";
        thirdQuestion();
    })
    choice7.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        thirdQuestion();
    })
    choice8.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        thirdQuestion();
    })
}

function thirdQuestion () {
    myH1.textContent = "Pick C";
    choice5.style.display = "none";
    choice9.style.display = "block";
    choice9.textContent = "A";
    choice6.style.display = "none";
    choice10.style.display = "block";
    choice10.textContent = "B";
    choice7.style.display = "none";
    choice11.style.display = "block";
    choice11.textContent = "C";
    choice8.style.display = "none";
    choice12.style.display = "block";
    choice12.textContent = "D";
    choice9.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        fourthQuestion();
    })
    choice10.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        fourthQuestion();
    })
    choice11.addEventListener("click", function()
    {
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Correct!";
        fourthQuestion();
    })
    choice12.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        fourthQuestion();
    })
}

function fourthQuestion() {
    myH1.textContent = "Pick D";
    choice9.style.display = "none";
    choice13.style.display = "block";
    choice13.textContent = "A";
    choice10.style.display = "none";
    choice14.style.display = "block";
    choice14.textContent = "B";
    choice11.style.display = "none";
    choice15.style.display = "block";
    choice15.textContent = "C";
    choice12.style.display = "none";
    choice16.style.display = "block";
    choice16.textContent = "D";
    choice13.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        endGame();
    })
    choice14.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        endGame();
    })
    choice15.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        endGame();
    })
    choice16.addEventListener("click", function()
    {
        horizontalBar.style.display = "block";
        correctOrWrong.textContent = "Correct!";
        endGame();
    })
}

function endGame() {
    console.log("End game");
    trueScore = score;
    scoreSpace.style.display = "none";
    choice13.style.display = "none";
    choice14.style.display = "none";
    choice15.style.display = "none";
    choice16.style.display = "none";
    horizontalBar.style.display = "none";
    correctOrWrong.style.display = "none";
    myH1.textContent = "Game over";
    myH2.style.display = "block";
    myH2.textContent = "Score: " + trueScore;
    startButton.style.display = "block";
    startButton.textContent = "Play again?";
    nameInput.style.display = "block";
    submitButton.style.display = "block";
    //Haven't learned how to make a leaderboard yet, so I've simply got the event set up to take the player's name for now
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        console.log(event);
        var response = nameInput.value;
        myH1.textContent = "Thank you for playing. You are on the leaderboard, " + nameInput.value + "!";
    })
}