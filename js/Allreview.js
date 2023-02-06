//check name of user
function CheckNameUser(value){
	let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
	if (!value){
		MessageName.innerHTML = "This box cannot be left blank" ;
	}
	else{
		if(regex.test(value)){
			MessageName.innerHTML = ""
		}
		else{
			MessageName.innerHTML = "Invalid name" ;
		}

	}
}
//check email user
function CheckEmailUser(value){
	let regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

	if (!value){
		MessageEmail.innerHTML = "This box cannot be left blank" ;
	}
	else
	{
		if (regex.test(value)){
			MessageEmail.innerHTML = "" ;
			console.log('1')
		}
		else{
			MessageEmail.innerHTML = "Invalid Email" ;
			console.log('2')
		}	
	}
}
//check conten review
function CheckContentReview(value){
	if (!value){
		MessageContentReview.innerHTML = "This box cannot be left blank" ;
	}
	else{
		MessageContentReview.innerHTML = "" ;
	}
}

//declare input cells to get values
let NameUser = document.querySelector('#NameCustomer');
let EmailUser = document.querySelector('#EmailCustomer');
let ContentReview = document.querySelector('#ReviewContent');
//declare to get input cell messages
let MessageName = document.querySelector('.form_group1 > .form-message');
let MessageEmail = document.querySelector('.form_group2 > .form-message');
let MessageContentReview = document.querySelector('.form_group3 > .form-message');
console.log(ContentReview);
console.log('run')
if(NameUser){
	NameUser.onblur = function(){
		CheckNameUser(NameUser.value);
	}
}
if(EmailUser){
	EmailUser.onblur = function(){
		CheckEmailUser(EmailUser.value);
	}
}
if(ContentReview){
	ContentReview.onblur = function(){
		CheckContentReview(ContentReview.value);
	}
}