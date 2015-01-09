/*indextest.js*/
var levelRelation = 1;

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
var progress = 0;

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
	if(progress >= 100) progress = 100;
	
	document.getElementById("hunger_male").firstChild.nodeValue = hunger_male;
	document.getElementById("stamina_male").firstChild.nodeValue = stamina_male;
	document.getElementById("fun_male").firstChild.nodeValue = fun_male;
	document.getElementById("social_male").firstChild.nodeValue = social_male;
	document.getElementById("mood_male").firstChild.nodeValue = mood_male;

	document.getElementById("hunger_female").firstChild.nodeValue = hunger_female;
	document.getElementById("stamina_female").firstChild.nodeValue = stamina_female;
	document.getElementById("fun_female").firstChild.nodeValue = fun_female;
	document.getElementById("social_female").firstChild.nodeValue = social_female;
	document.getElementById("mood_female").firstChild.nodeValue = mood_female;
	document.getElementById("progress").value = progress;
	
	if(hunger_male <= 100 && hunger_male > 65){
		document.getElementById("hunger_male").setAttribute("class","green");
	}
	if(hunger_male <= 65 && hunger_male > 20){
		document.getElementById("hunger_male").setAttribute("class","orange");
	}
	if(hunger_male <= 20){
		document.getElementById("hunger_male").setAttribute("class","red");
	}
	
	if(hunger_female <= 100 && hunger_female > 65){
		document.getElementById("hunger_female").setAttribute("class","green");
	}
	if(hunger_female <= 65 && hunger_female > 20){
		document.getElementById("hunger_female").setAttribute("class","orange");
	}
	if(hunger_female <= 20){
		document.getElementById("hunger_female").setAttribute("class","red");
	}
	
	if(stamina_male <= 100 && stamina_male > 65){
		document.getElementById("stamina_male").setAttribute("class","green");
	}
	if(stamina_male <= 65 && stamina_male > 20){
		document.getElementById("stamina_male").setAttribute("class","orange");
	}
	if(stamina_male <= 20){
		document.getElementById("stamina_male").setAttribute("class","red");
	}
	
	if(stamina_female <= 100 && stamina_female > 65){
		document.getElementById("stamina_female").setAttribute("class","green");
	}
	if(stamina_female <= 65 && stamina_female > 20){
		document.getElementById("stamina_female").setAttribute("class","orange");
	}
	if(stamina_female <= 20){
		document.getElementById("stamina_female").setAttribute("class","red");
	}
	
	if(fun_male <= 100 && fun_male > 65){
		document.getElementById("fun_male").setAttribute("class","green");
	}
	if(fun_male <= 65 && fun_male > 20){
		document.getElementById("fun_male").setAttribute("class","orange");
	}
	if(fun_male <= 20){
		document.getElementById("fun_male").setAttribute("class","red");
	}
	
	if(fun_female <= 100 && fun_female > 65){
		document.getElementById("fun_female").setAttribute("class","green");
	}
	if(fun_female <= 65 && fun_female > 20){
		document.getElementById("fun_female").setAttribute("class","orange");
	}
	if(fun_female <= 20){
		document.getElementById("fun_female").setAttribute("class","red");
	}
	
	if(social_male <= 100 && social_male > 65){
		document.getElementById("social_male").setAttribute("class","green");
	}
	if(social_male <= 65 && social_male > 20){
		document.getElementById("social_male").setAttribute("class","orange");
	}
	if(social_male <= 20){
		document.getElementById("social_male").setAttribute("class","red");
	}
	
	if(social_female <= 100 && social_female > 65){
		document.getElementById("social_female").setAttribute("class","green");
	}
	if(social_female <= 65 && social_female > 20){
		document.getElementById("social_female").setAttribute("class","orange");
	}
	if(social_female <= 20){
		document.getElementById("social_female").setAttribute("class","red");
	}
	
	if(mood_male <= 100 && mood_male > 65){
		document.getElementById("mood_male").setAttribute("class","green");
	}
	if(mood_male <= 65 && mood_male > 20){
		document.getElementById("mood_male").setAttribute("class","orange");
	}
	if(mood_male <= 20){
		document.getElementById("mood_male").setAttribute("class","red");
	}
	
	if(mood_female <= 100 && mood_female > 65){
		document.getElementById("mood_female").setAttribute("class","green");
	}
	if(mood_female <= 65 && mood_female > 20){
		document.getElementById("mood_female").setAttribute("class","orange");
	}
	if(mood_female <= 20){
		document.getElementById("mood_female").setAttribute("class","red");
	}
	var timeChecker1 = setTimeout(function(){statusCheck();},1000);
}

function statusDecreaser(){
	if(levelRelation == 1){
	hunger_male -= 1;
	hunger_female -= 1;
	stamina_male -= 1;
	stamina_female -= 1;
	fun_male -= 1;
	fun_female -= 1;
	social_male -= 1;
	social_female -= 1;
	}
	if(levelRelation == 2){
	hunger_male -= 2;
	hunger_female -= 2;
	stamina_male -= 2;
	stamina_female -= 2;
	fun_male -= 2;
	fun_female -= 2;
	social_male -= 2;
	social_female -= 2;
	}
	if(levelRelation == 3){
	hunger_male -= 3;
	hunger_female -= 3;
	stamina_male -= 3;
	stamina_female -= 3;
	fun_male -= 3;
	fun_female -= 3;
	social_male -= 3;
	social_female -= 3;
	}
	if(levelRelation == 4){
	hunger_male -= 4;
	hunger_female -= 4;
	stamina_male -= 4;
	stamina_female -= 4;
	fun_male -= 4;
	fun_female -= 4;
	social_male -= 4;
	social_female -= 4;
	}
	if(levelRelation == 5){
	hunger_male -= 5;
	hunger_female -= 5;
	stamina_male -= 5;
	stamina_female -= 5;
	fun_male -= 5;
	fun_female -= 5;
	social_male -= 5;
	social_female -= 5;
	}
	if(levelRelation == 6){
	hunger_male -= 6;
	hunger_female -= 6;
	stamina_male -= 6;
	stamina_female -= 6;
	fun_male -= 6;
	fun_female -= 6;
	social_male -= 6;
	social_female -= 6;
	}
	mood_male = 0.25*hunger_male + 0.25*stamina_male + 0.25*fun_male + 0.25*social_male;
	mood_female = 0.25*hunger_female + 0.25*stamina_female + 0.25*fun_female + 0.25*social_female;
	var timeChecker2 = setTimeout(function(){statusDecreaser();},3000);
}

function normalMale(){
	var male_pict_normal = '<img src="image/nekoboy.png"/>';
	document.getElementById("male_pict").innerHTML = male_pict_normal;
}

function normalFemale(){
	var female_pict_normal = '<img src="image/nekogirl.png"/>';
	document.getElementById("female_pict").innerHTML = female_pict_normal;
}

function gameStop(){
	clearTimeout(timeChecker1);
	clearTimeout(timeChecker2);
	clearTimeout(timeChecker3);
	clearTimeout(timeChecker4);
	normalMale();
	normalFemale();
	/*loading();*/
}

function gameOverChecker(){
	var timeChecker3 = setTimeout(function(){gameOverChecker();},1000);
	if(hunger_male == 0 || hunger_female == 0 || stamina_male == 0 || stamina_female == 0 || fun_male == 0 || fun_female == 0 || social_male == 0 || social_female == 0 || mood_male == 0 || mood_female == 0){ 
	window.alert("Anda kalah, salah satu status karakter mencapai 0. Silahkan tekan f5 setelah anda menekan OK.");
	gameStop();
	}
}

function promotionChecker(){
	if(progress == 100){
	clearTimeout(timeChecker1);
	clearTimeout(timeChecker2);
	clearTimeout(timeChecker3);
	clearTimeout(timeChecker4);
	penanya = window.prompt("Masukkan penanya (laki/perempuan):");
		if(penanya == "laki"){
			var kunci = olahraga;
				document.write();
			
			var tebakan = window.prompt("Apa hobby laki-laki?");
			if(kunci != tebakan){
				document.write("Jawaban salah! Coba tebak lagi.");
			}
			else{
				document.write("Jawaban benar! Selamat, kamu dapat lanjut ke relationship status acquintance.");
			}
			
			
		}
		if(penanya == "perempuan"){
			var kunci2 = menyanyi;
				document.write();
				
			var tebakan2 = window.prompt("Apa hobby perempuan?");
			if(kunci2 != tebakan2){
				document.write("Jawaban salah! Coba tebak lagi.");
			}
			else{
				document.write("Jawaban benar! Selamat, kamu dapat lanjut ke relationship status acquintance.");
			}
		}
	}
	timeChecker4 = setTimeout(function(){promotionChecker();},1000);
}


function start(){
	statusCheck();
	statusDecreaser();
	gameOverChecker();
	promotionChecker();
}

function chat(){
	social_male += 15;
	social_female += 15;
	progress += (mood_male / 10)+ (mood_female / 10); 
	hunger_male -= 2;
	stamina_male -= 2;
	fun_male -= 2;
	hunger_female -= 2;
	stamina_female -= 2;
	fun_female -= 2;
}

function eatMale(){
	hunger_male += 15;
	stamina_male -= 2;
	fun_male -= 2;
}
function sleepMale(){
	hunger_male -= 2;
	stamina_male += 15;
	fun_male -= 2;
}
function playMale(){
	hunger_male -= 2;
	stamina_male -= 2;
	fun_male += 15;
}
function eatFemale(){
	hunger_female += 15;
	stamina_female -= 2;
	fun_female -= 2;
}
function sleepFemale(){
	hunger_female -= 2;
	stamina_female += 15;
	fun_female -= 2;
}
function playFemale(){
	hunger_female -= 2;
	stamina_female -= 2;
	fun_female += 15;
}

function loading(){
	document.getElementById("button_start").addEventListener("click", start, false);
	document.getElementById("eat_male").addEventListener("click", eatMale, false);
	document.getElementById("eat_female").addEventListener("click", eatFemale, false); 
	document.getElementById("sleep_male").addEventListener("click", sleepMale, false);
	document.getElementById("sleep_female").addEventListener("click", sleepFemale, false);
	document.getElementById("play_male").addEventListener("click", playMale, false);
	document.getElementById("play_female").addEventListener("click", playFemale, false);
	document.getElementById("button_chat").addEventListener("click", chat, false);
}

window.addEventListener("load", loading, false);