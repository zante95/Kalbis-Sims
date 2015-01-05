/*indextest.js*/

var hunger_male = Math.floor((Math.random()*80)+20);
var stamina_male = Math.floor((Math.random()*80)+20);
var fun_male = Math.floor((Math.random()*80)+20);
var social_male = Math.floor((Math.random()*80)+20);
var mood_male=0.25*hunger_male + 0.25*stamina_male + 0.25*fun_male + 0.25*social_male;

var hunger_female = Math.floor((Math.random()*80)+20);
var stamina_female = Math.floor((Math.random()*80)+20);
var fun_female = Math.floor((Math.random()*80)+20);
var social_female = Math.floor((Math.random()*80)+20);
var mood_female=0.25*hunger_female + 0.25*stamina_female + 0.25*fun_female + 0.25*social_female;

function statusCheck(){
	if(hunger_male <= 0) hunger_male = 0;
	if(stamina_male <= 0) stamina_male = 0;
	if(fun_male <= 0) fun_male = 0;
	if(social_male <= 0) social_male = 0;
	if(mood_male <= 0) mood_male = 0;
	if(hunger_male >= 100) hunger_male = 100;
	if(stamina_male >= 100) stamina_male = 100;
	if(fun_male >= 100) fun_male = 100;
	if(social_male >= 100) social_male = 100;
	if(mood_male >= 100) mood_male = 100;
	
	if(hunger_female <= 0) hunger_female = 0;
	if(stamina_female <= 0) stamina_female = 0;
	if(fun_female <= 0) fun_female = 0;
	if(social_female <= 0) social_female = 0;
	if(mood_female <= 0) mood_female = 0;
	if(hunger_female >= 100) hunger_female = 100;
	if(stamina_female >= 100) stamina_female = 100;
	if(fun_female >= 100) fun_female = 100;
	if(social_female >= 100) social_female = 100;
	if(mood_female >= 100) mood_female = 100;
	
	document.getElementById("hunger_male").value = hunger_male;
	document.getElementById("stamina_male").value = stamina_male;
	document.getElementById("fun_male").value = fun_male;
	document.getElementById("social_male").value = social_male;
	document.getElementById("mood_male").value = mood_male;

	document.getElementById("hunger_female").value = hunger_female;
	document.getElementById("stamina_female").value = stamina_female;
	document.getElementById("fun_female").value = fun_female;
	document.getElementById("social_female").value = social_female;
	document.getElementById("mood_female").value = mood_female;
	var timeChecker1 = setTimeout(function(){statusCheck();},1000);
}

function statusDecreaser(){
	hunger_male -= 1;
	hunger_female -= 1;
	stamina_male -= 1;
	stamina_female -= 1;
	fun_male -= 1;
	fun_female -= 1;
	social_male -= 1;
	social_female -= 1;
	mood_male = 0.25*hunger_male + 0.25*stamina_male + 0.25*fun_male + 0.25*social_male;
	mood_female = 0.25*hunger_female + 0.25*stamina_female + 0.25*fun_female + 0.25*social_female;
	var timeChecker2 = setTimeout(function(){statusDecreaser();},1000);
}

function gameStop(){
	clearTimeout(timeChecker1);
	clearTimeout(timeChecker2);
	clearTimeout(timeChecker3);
	var htmlSisip1 = '<img src="image/nekoboy.png"/>';
	var htmlSisip2 = '<img src="image/nekogirl.png"/>';
	document.getElementById("male_pict").innerHTML = htmlSisip1;
	document.getElementById("female_pict").innerHTML = htmlSisip1;
	/*loading();*/
}

function gameOverChecker(){
	var timeChecker3 = setTimeout(function(){gameOverChecker();},1000);
	if(hunger_male == 0 || hunger_female == 0 || stamina_male == 0 || stamina_female == 0 || fun_male == 0 || fun_female == 0 || social_male == 0 || social_female == 0 || mood_male == 0 || mood_female == 0){ 
	window.alert("Anda kalah, salah satu status karakter mencapai 0. Silahkan tekan f5 setelah anda menekan OK.");
	gameStop();
	}
}

function start(){
statusCheck();
statusDecreaser();
gameOverChecker();
}

function loading(){
document.getElementById("button_start").addEventListener("click", start, false);
}

window.addEventListener("load", loading, false);