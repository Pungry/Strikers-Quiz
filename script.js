var intervalBoolean = false;
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
var leaderboardBoard = document.querySelector("#leaderboard");

var leaderboard = [];

var scores = JSON.parse(localStorage.getItem("scores"));
console.log(scores);

//function to start the game when the button is clicked
startButton.addEventListener("click", function() {
    console.log("start");
    score = 100;
    trueScore = 100;
    myH1.style.display = "none";
    myH2.style.display = "none";
    startButton.style.display = "none";
    nameInput.style.display = "none";
    submitButton.style.display = "none";
    leaderboardBoard.style.display = "none";
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
    myH1.textContent = "What is the objectively best combination of teams and sidekicks?";
    choice1.textContent = "Daisy and Hammer Bros";
    choice2.textContent = "Waluigi and Toads";
    choice3.textContent = "Super Team";
    choice4.textContent = "DK and Birdos";
}
//originally, each event listener was in a function, so things were getting cumulative on replay. Taking these eventListeners out of the functions has fixed it
//Each event listener is looking for a click. On click, it tells the user if their answer was right or wrong, subtracts from the timer if wrong, and goes to the next question
choice1.addEventListener("click", function()
    {
        horizontalBar.style.display = "block";
        correctOrWrong.style.display = "block";
        correctOrWrong.textContent = "Correct!";
        secondQuestion();
    })
choice2.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        secondQuestion();
    })
choice3.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        secondQuestion();
    })
choice4.addEventListener("click", function()
    {
        score = score - 10;
        horizontalBar.style.display = "block";
        correctOrWrong.style.display = "block";
        correctOrWrong.textContent = "Wrong!";
        secondQuestion();
    })

function secondQuestion() {
    myH1.textContent = "What is objectively the best stadium to play in?";
    choice1.style.display = "none";
    choice5.textContent = "The Palace";
    choice5.style.display = "block";
    choice2.style.display = "none";
    choice6.textContent = "The Battle Dome";
    choice6.style.display = "block";
    choice3.style.display = "none";
    choice7.textContent = "The Underground";
    choice7.style.display = "block";
    choice4.style.display = "none";
    choice8.textContent = "Pipeline Central";
    choice8.style.display = "block";
}

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

function thirdQuestion () {
    myH1.textContent = "What's objectively the most fun way to score?";
    choice5.style.display = "none";
    choice9.style.display = "block";
    choice9.textContent = "Super Strike";
    choice6.style.display = "none";
    choice10.style.display = "block";
    choice10.textContent = "One-timer off a perfect pass";
    choice7.style.display = "none";
    choice11.style.display = "block";
    choice11.textContent = "Deking around Kritter";
    choice8.style.display = "none";
    choice12.style.display = "block";
    choice12.textContent = "Charged shot from 30 yards away";
}

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

function fourthQuestion() {
    myH1.textContent = "Why hasn't Nintendo remade Super Mario Strikers?";
    choice9.style.display = "none";
    choice13.style.display = "block";
    choice13.textContent = "They hate money";
    choice10.style.display = "none";
    choice14.style.display = "block";
    choice14.textContent = "They hate me";
    choice11.style.display = "none";
    choice15.style.display = "block";
    choice15.textContent = "They hate society";
    choice12.style.display = "none";
    choice16.style.display = "block";
    choice16.textContent = "It was an obscure 2005 game that nobody really bought nor does anyone continue to play considering the success of Mario Strikers Charged 2 years later";
}

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

function endGame() {
    intervalBoolean = true;
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
    leaderboardBoard.style.display = "block";
}

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event);
    var response = nameInput.value;
    myH1.textContent = "Thank you for playing. You are on the leaderboard, " + nameInput.value + "!";
    //creates new object of user of name and score, pushes it to the leaderboard array, stores the list to local storage with JSON
    var newPlayer = {name: nameInput.value, score: trueScore};
    scores.push(newPlayer);
    //sorts the leaderboard from high to low
    scores = scores.sort(function(a,b){return b.score - a.score});
    localStorage.setItem("scores", JSON.stringify(scores));
    var printItem = JSON.parse(localStorage.getItem("score"));

    //prints out the leaderboard
    for (var i = 0; i < 10; i++)
    {
        var highScorePerson = document.createElement("li");
        highScorePerson.textContent = scores[i].name + " " + scores[i].score;
        leaderboardBoard.appendChild(highScorePerson);
    }
})