var score = 100;
var scoreSpace = document.querySelector("#scoreSpace");
var startButton = document.querySelector("#start");
var myH1 = document.querySelector("h1");
var myH2 = document.querySelector("h2");

console.log("What up");

//function to start the game when the button is clicked
startButton.addEventListener("click", function() {
    console.log("start");
    myH1.style.display = "none";
    myH2.style.display = "none";
    startButton.style.display = "none";
    startGame();
})

//function to keep track of score
function startGame() {
    var scoreInterval = setInterval(function ()
    {
        score--;
        console.log(score);
        scoreSpace.textContent = score;
        if(score === 0){
            clearInterval(scoreInterval);
        }
    }, 1000)
}

//When the start button is clicked, the rest of the elements should disappear, and the first quiz question should appear

//A timer of 100 seconds is the user's score
//A quiz question should display over four buttons that are the "answers" to the question
//When one button is clicked, the user should be told if they're correct or wrong underneath the buttons and the rest of the current page should be replaced with the next question
//if the answer is incorrect, the timer/score should go down

//When all questions have been answered, either correctly or incorrectly, a form for the user to input their name should be given
//The user can then compare their score to a leaderboard of other scores
//The user can also clear the high scores by pressing a button or they can play again