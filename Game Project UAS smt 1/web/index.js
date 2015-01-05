/*index.js*/

/*window.onload(function(){*/
	/*Buat acak value status secara random
	var statusHunger_male = Math.floor((Math.random()*100)+20);
	var statusStamina_male = Math.floor((Math.random()*100)+20);
	var statusFun_male = Math.floor((Math.random()*100)+20);
	var statusSocial_male = Math.floor((Math.random()*100)+20);

	var statusHunger_female = Math.floor((Math.random()*100)+20);
	var statusStamina_female = Math.floor((Math.random()*100)+20);
	var statusFun_female = Math.floor((Math.random()*100)+20);
	var statusSocial_female = Math.floor((Math.random()*100)+20);

	$("#text1_male") = hungerBar_male;
	hungerBar_male.value = statusHunger_male;
	});*/
	
var hunger_male = 100;
var stamina_male = 100;
var fun_male = 100;
var social_male = 100;
var mood_male = 100;

var hunger_female = 100;
var stamina_female = 100;
var fun_female = 100;
var social_female = 100;
var mood_female = 100;

var jam = 0;
var jamStr;
var waktu;
var male;
var female;
	/*Jangan lupa masukkin clock system*/


/*function gameStop(){
	clearTimeout(waktu);
	clearTimeout(tStatus);
	clearTimeout(tLevel);
	clearTimeout(male);
	clearTimeout(female);
	var htmlSisip1 = '<img src="image/nekoboy.png"/>';
	var htmlSisip2 = '<img src="image/nekogirl.png"/>';
	document.getElementById("male_pict").innerHTML = htmlSisip1;
	document.getElementById("female_pict").innerHTML = htmlSisip1;
	
	var hunger_male = 100;
	var stamina_male = 100;
	var fun_male = 100;
	var social_male = 100;
	var mood_male = 100;

	var hunger_female = 100;
	var stamina_female = 100;
	var fun_female = 100;
	var social_female = 100;
	var mood_female = 100;
	var jam = 0;
}

function jamWaktu(){
	jamStr = jam + ":00";
	document.getElementById("jam").innerHTML = jamStr;
	jam += 1;
	if(jam == 24) jam = 0;
	waktu = setTimeout(function(){jamWaktu()},5000);
}
*/

function status(){
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
	tStatus = setTimeout(function(){status();},1000);
}

/*function chat(){

}

function eatMale(){

}
function sleepMale(){

}

function playMale(){

}

function eatFemale(){

}

function sleepFemale(){

}
function playFemale(){

}*/

function cetakLevel(){
	/*if(hunger_male <= 0) hunger_male = 0;
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
	if(mood_female >= 100) mood_female = 100;*/
	
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
	/*tLevel = setTimeout(function(){cetakLevel();},1000);*/
	
	/*if(hunger_male == 0 || hunger_female == 0 || stamina_male == 0 || stamina_female == 0 || fun_male == 0 || fun_female == 0 || social_male == 0 || social_female == 0 || mood_male == 0 || mood_female == 0){ 
	window.alert("Anda kalah, salah satu status karakter mencapai 0");
	gameStop();
	}*/
}

function start(){
	/*jamWaktu();*/
	/*status();*/
	cetakLevel();
	/*normalMode();*/
}

function load_button(){
	document.getElementById("eat_male").addEventListener("click", eatMale, false);
	document.getElementById("eat_female").addEventListener("click", eatFemale, false); 
	document.getElementById("sleep_male").addEventListener("click", sleepMale, false);
	document.getElementById("sleep_female").addEventListener("click", sleepFemale, false);
	document.getElementById("play_male").addEventListener("click", playMale, false);
	document.getElementById("play_female").addEventListener("click", playFemale, false);
	document.getElementById("button_start").addEventListener("click", start, false);
	document.getElementById("button_chat").addEventListener("click", chat, false);
	}
 
 window.addEventListener("load", load_button, false);