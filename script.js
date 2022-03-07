var popup1 = document.querySelector(".popup-1");
var popup1Yes = document.querySelector(".popup-1 .btn-yes");


var popup2 = document.querySelector(".popup-2");
var popup2Yes = document.querySelector(".popup-2 .btn-yes");
var popup2No = document.querySelector(".popup-2 .btn-no");


var popup3 = document.querySelector(".popup-3");
var popup3Yes = document.querySelector(".popup-3 .btn-yes");
var popup2No = document.querySelector(".popup-3 .btn-no");


var popup4 = document.querySelector(".popup-4");
var popup4Yes = document.querySelector(".popup-4 .btn-yes");
var popup4No = document.querySelector(".popup-4 .btn-no");


popup1.classList.toggle("active");
popup1Yes.addEventListener("click", (event) => {
	popup1.classList.toggle("active");
	popup2.classList.toggle("active");
});


popup2Yes.addEventListener("click", (event) => {
	popup2.classList.toggle("active");
	popup3.classList.toggle("active");
});
popup2No.addEventListener("click", (event) => {
	popup2.classList.toggle("active");
});


popup3Yes.addEventListener("click", (event) => {
	popup3.classList.toggle("active");
	popup4.classList.toggle("active");
});
popup3No.addEventListener("click", (event) => {
	popup3.classList.toggle("active");
});

