const video = document.getElementsByClassName('video', e => {
    console.log("test video")
});
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn', e => {
    console.log("test button")
});
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const FullscreenBtn = document.querySelector('.fullscreen');


// Play & Pause ----------------------------------- //

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Progress Bar ---------------------------------- //



// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// event listeners 
playBtn.addEventListener('click', togglePlay, e => {
    console.log("event listener btn")
});
video.addEventListener('click', togglePlay, e => {
    console.log(e)
});