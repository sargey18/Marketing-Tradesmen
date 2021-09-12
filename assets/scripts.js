//all selectors 

//selector for the navbar 
const selectElement = (element) => document.querySelector(element);
//sector for the pricing on home page (toggle switch)
const toggleSwitch = document.querySelector(".toggle-switch");


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