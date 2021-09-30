const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.nodeValue;
});

saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();
};