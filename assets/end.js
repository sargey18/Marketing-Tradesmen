let x = localStorage.getItem("mostrecentScore");
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

console.log(x)



