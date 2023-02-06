var ContenHome = angular.module('ContenHome', []);
ContenHome.controller('MyContenHome', function($scope) {
	const myslide = document.querySelectorAll('.myslide'),
	dot = document.querySelectorAll('.dot');
console.log(myslide)
console.log(dot)
// lay ra cac slide
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
// khi click vao >
$scope.plusSlides = function(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
$scope.currentSlide = function(n) {
  counter = n;
  slidefun(counter);
}
function slidefun(n) {
  
  let i;
  for(i = 0;i<myslide.length;i++){
	  myslide[i].style.display = "none";
  }
  for(i = 0;i<dot.length;i++) {
	  dot[i].className = dot[i].className.replace(' active', '');
  }
  //ẩn hết các slide

  if(n > myslide.length){
	 counter = 1;
	 }
  if(n < 1){
	 counter = myslide.length;
	 }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}


var buttoNextFeedbackCustomer = document.querySelector('.feedback_button_next');
var buttoPrevFeedbackCustomer = document.querySelector('.feedback_button_prev');
console.log(buttoNextFeedbackCustomer)
var feedbackCustomer = document.querySelectorAll('.cart_customer_feedback');
console.log(feedbackCustomer)
var index = 0;
buttoNextFeedbackCustomer.onclick = function(){


  feedbackCustomer[index].classList.add('clear')
  index = (index - 1 + feedbackCustomer.length) % feedbackCustomer.length;
  feedbackCustomer[index].classList.remove('clear')
  console.log(index)
  console.log(index)
  console.log("run")
  
}
buttoPrevFeedbackCustomer.onclick = function(){
  feedbackCustomer[index].classList.add('clear')
  index = (index - 1 + feedbackCustomer.length) % feedbackCustomer.length;
  feedbackCustomer[index].classList.remove('clear')
  console.log(index)
  
}
let time = setInterval(autoNextFeedback, 500);
function autoNextFeedback(){
  feedbackCustomer[index].classList.add('clear')
  index = (index + 1) % feedbackCustomer.length;
  console.log(index )
  feedbackCustomer[index].classList.remove('clear')
}

ScrollReveal().reveal('.seasidetms_heading', { delay: 500 });
ScrollReveal().reveal('#seasidetms > h2', { delay: 600 });
ScrollReveal().reveal('.seasidetms_button > div', { delay: 700 });
ScrollReveal().reveal('.feedback_customer ', { delay: 700 });
});








