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
	hungerBar_male.value = statusHunger_male;*/
	
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
});

function start(){
	jamWaktu();
	status();
	cetakLevel();
	normalMode();
}

function jamWaktu(){
	jamStr = jam + ":00";
	document.getElementById("jam").innerHTML = jamStr;
	jam += 1;
	if(jam == 24) jam = 0;
	waktu = setTimeout(function(){jamWaktu()},5000);
}

function cetakLevel(){
	if(hunger_male <= 0) fun = 0;
	if(meal <= 0) meal = 0;
	if(sleep <= 0) sleep = 0;
	if(fun >= 10) fun= 10;
	
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
	tLevel = setTimeout(function(){cetakLevel();},500);
}

function status(){
	fun -= 1;
	meal -= 1;
	sleep -= 1;
	tStatus = setTimeout(function(){status();},1000);
}

function chat(){

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

}

function load_button(){
	document.getElementById("eat_male").addEventListener("click", playMale, false);
	document.getElementById("eat_female").addEventListener("click", playFemale, false); 
	document.getElementById("sleep_male").addEventListener("click", sleepMale, false);
	document.getElementById("sleep_female").addEventListener("click", sleepFemale, false);
	document.getElementById("play_male").addEventListener("click", playMale, false);
	document.getElementById("play_female").addEventListener("click", playFemale, false);
	document.getElementById("button_start").addEventListener("click", start, false);
	document.getElementById("button_chat").addEventListener("click", chat, false);
	}
 
 window.addEventListener("load", load_button, false);