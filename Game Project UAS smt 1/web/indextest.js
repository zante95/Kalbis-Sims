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
	document.getElementById("progress").value = progress;
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
			pertanyaan = window.prompt("laki-laki bertanya. Masukkan pertanyaan untuk perempuan :");
			jawaban = window.prompt ("Pertanyaan laki-laki adalah : "+ pertanyaan + ". Silahkan perempuan menjawab pertanyaan tersebut.");
			cek = window.prompt ("Apakah jawaban tersebut benar? (Laki-laki memasukkan benar/salah.)");
		}
		if(penanya == "perempuan"){
			pertanyaan = window.prompt("perempuan bertanya. Masukkan pertanyaan untuk laki-laki :");
			jawaban = window.prompt ("Pertanyaan perempuan adalah : "+ pertanyaan + ". Silahkan laki-laki menjawab pertanyaan tersebut.");
			cek = window.prompt ("Apakah jawaban tersebut benar? (Perempuan memasukkan benar/salah.)");
		}
	if(cek =="benar"){
		progress = 0;
		/*relationship status naik*/
		}
	if(cek == "salah"){
		window.alert("jawaban salah, anda tidak naik level. Silahkan coba lagi pada kesempatan berikutnya.");
		progress = Math.floor((Math.random()*75)+40);
		/*relationship status tetap*/		
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