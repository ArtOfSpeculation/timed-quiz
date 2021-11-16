var leaderboard = document.querySelector(".container");

var loadHighScores = function () {
    var savedHighScores = localStorage.getItem("high-scores") ?? [];
    highScores = JSON.parse(savedHighScores);  
    };
    
var showHighScores = function (top5scores) {
    for (var i = 0; i < top5scores.length; i++) {
        var highScoreItem = top5scores[i][0];
        console.log(typeof highScoreItem);
        var scoreListItem = document.createElement("button");
        scoreListItem.classList.add("high-score");
        scoreListItem.textContent = (i + 1) + ". " + highScoreItem.name.toUpperCase() + " ...... " + highScoreItem.score;
        console.log(scoreListItem);
        leaderboard.appendChild(scoreListItem);
    }
};

var playAgainHandler = function() {
    console.log("Sent to play again")
    location.href = "./index.html";
}

var playAgain = document.querySelector("#start-btn");
playAgain.addEventListener("click", playAgainHandler);

loadHighScores();

showHighScores(highScores);

