//all selectors ----------------------------------------------------------------

//selector for the navbar ---------------------------------
const selectElement = (element) => document.querySelector(element);
//sector for the pricing on home page (toggle switch)
const toggleSwitch = document.querySelector(".toggle-switch");

//javascript for the faq----------------------
//gets the class faq-toggle
let toggles = document.getElementsByClassName('faq-toggle');
//gets the class name faq-content
let contentDiv = document.getElementsByClassName('faq-content');
//gets the class name icon
let icons = document.getElementsByClassName('icon');

//form selectors------------------------------------ 
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


//for the video player------------------------------
const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');


// selectors end ---------------------------------------------------------------------

// boolean start --------------------------------------------------------------------

//form boolean
let isValid = false;
let passwordsMatch = false;


// boolean end ------------------------------------------------------------------------





//on click listener for the navbar toggle
selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
})


//toggle switch function. removes and adds pricing main if toggle switch is checked
toggleSwitch.addEventListener("change",() =>{
  if(toggleSwitch.checked){
      document.querySelector(".pricing-main").classList.add("active");
  }
  else{
      document.querySelector(".pricing-main").classList.remove("active");
  }
});


//for the faq on the home page

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0084e9";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}

//for the video player---------------------------------------------------------------------

// Play & Pause ----------------------------------- //

function showPlayIcon() {
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
}

function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('title', 'Pause');
    } else {
        video.pause();
        showPlayIcon();
    }
}

//on video end, show play button icon 
video.addEventListener('ended', showPlayIcon);
// Progress Bar ---------------------------------- //



// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


//for the video player---------------------------------------------------------------------







//form validation start ----------------------------------------------------------------

function validateForm() {
    // Use HTML constraint API to check form validity
    isValid = form.checkValidity();
    // If the form isn't valid
    if (!isValid) {
      // Style main message for an error
      message.textContent = 'Please fill out all fields.';
      message.style.color = 'red';
      messageContainer.style.borderColor = 'red';
      return;
    }
    // Check to see if both password fields match
    if (password1El.value === password2El.value) {
      // If they match, set value to true and borders to green
      passwordsMatch = true;
      password1El.style.borderColor = 'green';
      password2El.style.borderColor = 'green';
    } else {
      // If they don't match, border color of input to red, change message
      passwordsMatch = false;
      message.textContent = 'Make sure passwords match.';
      message.style.color = 'red';
      messageContainer.style.borderColor = 'red';
      password1El.style.borderColor = 'red';
      password2El.style.borderColor = 'red';
      return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
      // Style main message for success
      message.textContent = 'Successfully Registered!';
      message.style.color = 'green';
      messageContainer.style.borderColor = 'green';
    }
  }
  
  function storeFormData() {
    const user = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      website: form.website.value,
      password: form.password.value,
    };
    // Do something with user data
    console.log(user);
  }
  
  function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit Form if Valid
    if (isValid && passwordsMatch) {
      storeFormData();
    }
  }

// form validation end -------------------------------------------------------------------





//event listeners start ------------------------------------------------

//event listeners for the video
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

// form event listeners 
form.addEventListener('submit', processFormData);