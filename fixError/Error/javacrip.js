
ScrollReveal().reveal('.seasidetms_heading', { delay: 900 });
ScrollReveal().reveal('#seasidetms > h2', { delay: 1000 });
ScrollReveal().reveal('.seasidetms_button > div', { delay: 1100 });
ScrollReveal().reveal('.feedback_customer ', { delay: 1100 });


const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
console.log(myslide)
// lay ra cac slide
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
// khi click vao >
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
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


// reponsive navbar for mobile
var menuMobile = document.querySelector('.menu_mobile');
var buttonMenu = document.getElementById('button_menu');
var button_closed = document.querySelector('.button_closed');
var button_open = document.querySelector('.button_open');
console.log(button_closed)
var heightMenu = menuMobile.clientHeight;
console.log(menuMobile.clientHeight)
buttonMenu.onclick= function() {
	var isClosed = menuMobile.clientHeight === heightMenu
	if (isClosed){
		menuMobile.style.height = '300px';
		buttonMenu.className.replace('bx-menu', 'bx-x-circle');
		button_closed.style.display = 'block';
		button_open.style.display = 'none';

	}
	else{
		button_closed.style.display = 'none';
		button_open.style.display = 'block';
		menuMobile.style.height = '0px';
	}
	
}
// var buttoNextFeedbackCustomer = document.querySelector('.feedback_button_next');
// var buttoPrevFeedbackCustomer = document.querySelector('.feedback_button_prev');
// console.log(buttoNextFeedbackCustomer)
// var feedbackCustomer = document.querySelectorAll('.cart_customer_feedback');
// console.log(feedbackCustomer)
// var index = 0;
// buttoNextFeedbackCustomer.onclick = function(){
// 	feedbackCustomer[index].classList.add('clear')
// 	index = (index + 1) % feedbackCustomer.length;
// 	feedbackCustomer[index].classList.remove('clear')
// 	console.log(index)
// 	console.log("run")
	
// }
// buttoPrevFeedbackCustomer.onclick = function(){
// 	feedbackCustomer[index].classList.add('clear')
// 	index = (index - 1 + feedbackCustomer.length) % feedbackCustomer.length;
// 	feedbackCustomer[index].classList.remove('clear')
// 	console.log(index)
	
// }










var moreMenu =document.querySelector('.menu_more');
var menuFood = document.querySelector('.option');
var heightMenuFood = menuFood.clientHeight
moreMenu.onclick = function(){
	var isClosedFood = menuFood.clientHeight === heightMenuFood
	if (isClosedFood){
		menuFood.style.height = '300px';
	}else{
		menuFood.style.height = '60px';
	}
}




// var shownMoreProduce = document.querySelector('.arrown');
// var shownMoreProduceDown = document.querySelector('.arrownDown ');
// var shownMoreProduceUp = document.querySelector('.arrownUp ');
// var produceItems = document.querySelector('.textmenu');
// console.log(produceItems.clientHeight)
// var heightProduce = produceItems.clientHeight
// shownMoreProduce.onclick = function(){
// 	var isClosedMoreProduct = produceItems.clientHeight === heightProduce;
// 	if (isClosedMoreProduct){
// 		produceItems.style.height = 'auto';
// 		shownMoreProduceDown.style.display = 'none';
// 		shownMoreProduceUp.style.display = 'block';
// 	}
// 	else{
// 		produceItems.style.height = '1055px';
// 		shownMoreProduceDown.style.display = 'block';
// 		shownMoreProduceUp.style.display = 'none';
// 	}
// }


// var product_cart = document.querySelector('.products_cart');
// var detail_Img = document.querySelector('.detail_Img');
// var detail_Text = document.querySelector('.detail_Text');
// product_cart.onmousemove = function(){
// 	detail_Img.style.opacity = '0'
// 	detail_Text.style.opacity = '1'
// }
// product_cart.onmouseout = function(){
// 	detail_Img.style.opacity = '1'
// 	detail_Text.style.opacity = '0'
// }

// var listMenu =  document.querySelectorAll('.menuPc ul li')
// var linkMenu = document.querySelectorAll('.menuPc ul li a')
// console.log(listMenu)
// for (let index = 0; index < listMenu.length; index++) {
// 	listMenu[index].onmousemove = function(){
// 		linkMenu.style.color = '#FFE148'
// 	}
// 	listMenu[index].onmouseout = function(){
// 		linkMenu.style.color = '#FFF'
// 	}
	
// }



//ListFood
var app = angular.module('home', []);
app.controller('myCtrl', function($scope) {

	
	function Food(name, img, price1, price2, price3, integrand){
		this.name = name,
		this.img = img,
		this.price1 = price1,
		this.price2 = price2,  
		this.price3 = price3, 
		this.integrand = integrand
	}
	$scope.ListFood = [
		new Food('BEEFY PIZZA', '/img/pizza1.jpg', '90000', '120000', '120000', 'Thịt bò xay, ngô, sốt BBQ, pho mai.'),
		new Food('BEEFY PIZZA', '/img/pizza2.jpg', '90000', '120000', '120000', 'Thịt bò xay, ngô, sốt BBQ, pho mai.'),
		new Food('BEEFY PIZZA', '/img/pizza4.jpg', '90000', '120000', '120000', 'Thịt bò xay, ngô, sốt BBQ, pho mai.')
	]
		// $scope.shown = function(){
		// 		productImg = document.querySelectorAll('.detail_Img');
		// 	// for (let index = 0; index < $scope.productImg.length; index++) {
		// 	// 	$scope.productImg[0].onclick = function(){
		// 	// 		console.log('run123')
		// 	// 	}
		// 	// }
		// 	console.log(productImg)
		// 	// console.log('run')
		// }
		// $scope.chooseSize = function(sizeProduce){
		// 	// switch (sizeProduce) {
		// 	// 	case 'sizeS':
		// 	// 		$scope.flagS = true;
		// 	// 		$scope.flagM = false;
		// 	// 		$scope.flagL = false;
		// 	// 		break;
		// 	// 	case 'sizeM':
		// 	// 		$scope.flagS = false;
		// 	// 		$scope.flagM = true;
		// 	// 		$scope.flagL = false;
		// 	// 		break;
		// 	// 	case 'sizeL':
		// 	// 		$scope.flagS = false;
		// 	// 		$scope.flagM = false;
		// 	// 		$scope.flagL = true;
		// 	// 		break;
		// 	// }
		// 	console.log('running...')
		// }
});
app.controller('menuCart', function($scope){
	$scope.shownDetail = function (){
		$scope.detail = true
		$scope.noDetail = true
		console.log('1...')
	}
	$scope.shownImg = function (){
		$scope.detail = false
		$scope.noDetail = false
		console.log('2...')
	}
	
	// $scope.flagS =false
	// $scope.flagM =false
	// $scope.flagL =false
	// $scope.chooseSize = function(sizeProduce){
	// 	switch (sizeProduce) {
	// 		case 'sizeS':
	// 			$scope.flagS = true;
	// 			$scope.flagM = false;
	// 			$scope.flagL = false;
	// 			break;
	// 		case 'sizeM':
	// 			$scope.flagS = false;
	// 			$scope.flagM = true;
	// 			$scope.flagL = false;
	// 			break;
	// 		case 'sizeL':
	// 			$scope.flagS = false;
	// 			$scope.flagM = false;
	// 			$scope.flagL = true;
	// 			break;
	// 	}
	// }
	// $scope.chooseSize = function(sizeProduce){
	// 	// switch (sizeProduce) {
	// 	// 	case 'sizeS':
	// 	// 		$scope.flagS = true;
	// 	// 		$scope.flagM = false;
	// 	// 		$scope.flagL = false;
	// 	// 		break;
	// 	// 	case 'sizeM':
	// 	// 		$scope.flagS = false;
	// 	// 		$scope.flagM = true;
	// 	// 		$scope.flagL = false;
	// 	// 		break;
	// 	// 	case 'sizeL':
	// 	// 		$scope.flagS = false;
	// 	// 		$scope.flagM = false;
	// 	// 		$scope.flagL = true;
	// 	// 		break;
	// 	// }
	// 	console.log('running123...')
	// }
	// var cartFood = document.getElementsByClassName('products_cart')
	// 	console.log(cartFood.length)
	// 	console.log(cartFood)
});
// app.controller('sizeCart',function($scope){
// 	$scope.chooseSize = function(sizeProduce){
// 		// switch (sizeProduce) {
// 		// 	case 'sizeS':
// 		// 		$scope.flagS = true;
// 		// 		$scope.flagM = false;
// 		// 		$scope.flagL = false;
// 		// 		break;
// 		// 	case 'sizeM':
// 		// 		$scope.flagS = false;
// 		// 		$scope.flagM = true;
// 		// 		$scope.flagL = false;
// 		// 		break;
// 		// 	case 'sizeL':
// 		// 		$scope.flagS = false;
// 		// 		$scope.flagM = false;
// 		// 		$scope.flagL = true;
// 		// 		break;
// 		// }
// 		console.log('running123...')
// 	}
// })
// app.controller('listCart', function($scope){
// 	// for (let index = 0; index < products.length; index++) {
// 	// 	products.onclick = function(){
// 	// 			// detail_Img.style.opacity = '0'
// 	// 			// detail_Text.style.opacity = '1'
// 	// 			console.log('run...')
// 	// 	}

// 	// 	// $scope.product_cart.onmouseout = function(){
// 	// 	// 	detail_Img.style.opacity = '1'
// 	// 	// 	detail_Text.style.opacity = '0'
// 	// 	// }
		
// 	// }
// 	$scope.detailProduct = function(){
// 		var productImg = document.querySelectorAll('detail_Img');
// 		// for (let index = 0; index < productImg.length; index++) {
// 		// 	productImg[index].onclick = function(){
// 		// 		console.log('run')
// 		// 	}
			
// 		// }
// 		console.log()
// 	}
// });





// function Food(FoodName, FoodImg, FoodSize2, FoodPrice1, FoodSize2, FoodPrice2, FoodPrice3, FoodSize3 , FoodIntegrand){
// 	this.FoodName = FoodName,
// 	this.FoodSize1 = FoodSize21
// 	this.FoodPrice1 = FoodPrice1,
// 	this.FoodSize2 = FoodSize2, 
// 	this.FoodPrice2 = FoodPrice2, 
// 	this.FoodPrice3 = FoodPrice3, 
// 	this.FoodSize3 = FoodSize3, 
// 	this.FoodIntegrand = FoodIntegrand
// }
// ListFood = [
// 	new Food('BEEFY PIZZA', '/img/pizza1.jpg', '20', '90000' , '24', '120000' , '29', '120000', 'Thịt bò xay, ngô, sốt BBQ, pho mai.'),
// 	new Food('BEEFY PIZZA', '/img/pizza2.jpg', '20', '90000' , '24', '120000' , '29', '120000', 'Thịt bò xay, ngô, sốt BBQ, pho mai.'),
// 	new Food('BEEFY PIZZA', '/img/pizza3.jpg', '20', '90000' , '24', '120000' , '29', '120000', 'Thịt bò xay, ngô, sốt BBQ, pho mai.')
// ]