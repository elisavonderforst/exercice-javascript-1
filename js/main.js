console.log("coucou");

console.log(4 ** 67);

let total = 56;

total++;
total += 475;

console.log(total);

var one = document.querySelector(".change-color");
var two = document.querySelector(".toggle-color");
var three = document.querySelector(".trigger");
var four = document.querySelector(".target");
var five = document.querySelector(".trigger-all");
var six = document.querySelector(".trigger-all-self");

var changeOne = function () {
  one.classList.toggle("is-blue");
};

one.addEventListener("click", changeOne);

var toggleTwo = function () {
  two.classList.toggle("is-red");
};

two.addEventListener("click", toggleTwo);

var triTaopa = function () {
  four.classList.toggle("is-hiden");
};

three.addEventListener("click", triTaopa);

var colorChangefive = function () {
  one.classList.toggle("is-blue");
  two.classList.toggle("is-red");
};

five.addEventListener("click", colorChangefive);

var colorChangesix = function () {
  one.classList.toggle("is-blue");
  two.classList.toggle("is-red");
  six.classList.toggle("is-green");
};

six.addEventListener("click", colorChangesix);
