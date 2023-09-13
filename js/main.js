
var one = document.querySelector(".change-color");
var two = document.querySelector(".toggle-color");
var three = document.querySelector(".trigger");
var four = document.querySelector(".target");
var five = document.querySelector(".trigger-all");
var six = document.querySelector(".trigger-all-self");

var changeOne = function () {
  one.classList.toggle("is-active");
};

one.addEventListener("click", changeOne);

var toggleTwo = function () {
  two.classList.toggle("is-active");
};

two.addEventListener("click", toggleTwo);

var triTaopa = function () {
  four.classList.toggle("is-open");
};

three.addEventListener("click", triTaopa);

var targetAll = function () {
  four.classList.toggle("is-active");
};

five.addEventListener("click", targetAll);
