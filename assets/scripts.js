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





// selectors end ---------------------------------------------------------------------

// boolean start --------------------------------------------------------------------




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
   
  }
  
  function storeFormData() {
    const user = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      website: form.website.value,
 
    };
    // Do something with user data
    console.log(user);
  }
  
  function processFormData(e) {
    e.preventDefault();

  }

// form validation end -------------------------------------------------------------------





//event listeners start ------------------------------------------------

//event listeners for the video


// form event listeners 
form.addEventListener('submit', processFormData);