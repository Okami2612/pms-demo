// Menu toggle
let toggler = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggler.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// All hovered class in selected list item
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Date picker
let datePicker = document.querySelectorAll(".datepicker");
$(document).ready(function () {
  $(datePicker).datepicker({
    dateFormat: "dd-mm-yy",
    duration: "fast",
    multidate: true,
  });
});

// Time picker
$(document).ready(function () {
  $("input.timepicker").timepicker({
    timeFormat: "HH:mm",
    minTime: new Date(0, 0, 0, 8, 0, 0),
    maxTime: new Date(0, 0, 0, 15, 0, 0),
    startHour: 6,
    startTime: new Date(0, 0, 0, 8, 20, 0),
    interval: 10,
  });
});

// Modals
let modalBtns = document.querySelectorAll("[data-target]");
let closeBtns = document.querySelectorAll(".close-btn");

modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove("active");
  });
});

// window.onclick = function(e){
//     if(!e.target.matches(".modal")){
//         let modals = document.querySelectorAll('.modal');
//         modals.forEach((modal)=>modal.classList.remove('active'))
//     }
// }