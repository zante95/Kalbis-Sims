/*indextest.js*/
$(document).ready(function(){
var levelRelation = 1;
var nama_player1;
var nama_player2;
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
var detik = 0;
var menit = 0;
var timeChecker0;
var timeChecker1;
var timeChecker2;
var timeChecker3;
var timeChecker4;

$("#wrapper").hide();
$("#main_menu").hide();
$("#player_name_input").hide();
$("#instruction").hide();
$("#game_over").hide();
$("#main_menu").fadeIn(2000);

$("#main_start").click(function(){
$("#player_name_input").fadeIn(1000);
});

$("#back_game").click(function(){
$("#player_name_input").fadeOut(1000);
});

$("#main_instruction").click(function(){
$("#instruction").fadeIn(1000);
});

$("#back_ins").click(function(){
$("#instruction").fadeOut(1000);
});

$("#start_game").click(function(){
nama_player1 = document.getElementById("input_male").value;
nama_player2 = document.getElementById("input_female").value;
$("#main_menu").fadeOut(2000);
$("#wrapper").fadeIn(2000);
});	

function gameClock(){
	detik += 1;
	if(detik == 60){
	menit +=1;
	detik = 0;
	}
	timeChecker0 = setTimeout(function(){gameClock();},1000);
}

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
	
	sisipDetik = detik;
	document.getElementById("sisipDetik").firstChild.nodeValue = sisipDetik;
	sisipMenit = menit;
	document.getElementById("sisipMenit").firstChild.nodeValue = sisipMenit;
	
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
	timeChecker1 = setTimeout(function(){statusCheck();},1000);
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
	hunger_male -= 1;
	hunger_female -= 1;
	stamina_male -= 1;
	stamina_female -= 1;
	fun_male -= 1;
	fun_female -= 1;
	social_male -= 1;
	social_female -= 1;
	}
	if(levelRelation == 3){
	hunger_male -= 2;
	hunger_female -= 2;
	stamina_male -= 2;
	stamina_female -= 2;
	fun_male -= 2;
	fun_female -= 2;
	social_male -= 2;
	social_female -= 2;
	}
	if(levelRelation == 4){
	hunger_male -= 2;
	hunger_female -= 2;
	stamina_male -= 2;
	stamina_female -= 2;
	fun_male -= 2;
	fun_female -= 2;
	social_male -= 2;
	social_female -= 2;
	}
	if(levelRelation == 5){
	hunger_male -= 3;
	hunger_female -= 3;
	stamina_male -= 3;
	stamina_female -= 3;
	fun_male -= 3;
	fun_female -= 3;
	social_male -= 3;
	social_female -= 3;
	}
	if(levelRelation == 6){
	hunger_male -= 3;
	hunger_female -= 3;
	stamina_male -= 3;
	stamina_female -= 3;
	fun_male -= 3;
	fun_female -= 3;
	social_male -= 3;
	social_female -= 3;
	}
	mood_male = 0.25*hunger_male + 0.25*stamina_male + 0.25*fun_male + 0.25*social_male;
	mood_female = 0.25*hunger_female + 0.25*stamina_female + 0.25*fun_female + 0.25*social_female;
	timeChecker2 = setTimeout(function(){statusDecreaser();},3000);
}

function normalMale(){
	document.getElementById("male_pict").setAttribute("src","image/nekoboy.png");
	document.getElementById("male_pict").setAttribute("width","125");
	document.getElementById("male_pict").setAttribute("height","287");
}

function normalFemale(){
	document.getElementById("female_pict").setAttribute("src","image/nekogirl.png");
	document.getElementById("female_pict").setAttribute("width","133");
	document.getElementById("female_pict").setAttribute("height","287");
}

function gameStop(){
	clearTimeout(timeChecker0);
	clearTimeout(timeChecker1);
	clearTimeout(timeChecker2);
	clearTimeout(timeChecker3);
	clearTimeout(timeChecker4);
	normalMale();
	normalFemale();
}
function gameOverChecker(){
	timeChecker3 = setTimeout(function(){gameOverChecker();},1000);
	if(hunger_male == 0 || hunger_female == 0 || stamina_male == 0 || stamina_female == 0 || fun_male == 0 || fun_female == 0 || social_male == 0 || social_female == 0 || mood_male == 0 || mood_female == 0){ 
	$("#wrapper").fadeOut(2000);
	$("#game_over").fadeIn(2000);
	gameStop();}
}

function promotionChecker(){
	
		if(levelRelation == 1 && progress == 100){
		jawaban = window.prompt("Soal 1: Apa istilah untuk kegiatan yang dilakukan sesorang dalam mencari tahu sesuatu tapi berlebihan?");
		kunci = "kepo";

			if(jawaban == kunci){
			window.alert("Selamat anda naik level. Hobby interaction unlocked!");
			progress = 0;
			levelRelation += 1;
			document.getElementById("status2").innerHTML = "ACQUINTANCE";
			document.getElementById("button_hobby").setAttribute("class","terlihat");
			/*relationship status naik*/
			}
			if(jawaban != kunci){
			window.alert("jawaban salah, anda tidak naik level. Silahkan coba lagi pada kesempatan berikutnya.");
			progress = Math.floor((Math.random()*50)+20);
			/*relationship status tetap*/		
			}
		}
		if(levelRelation == 2 && progress == 100){
		jawaban = window.prompt("Soal 2: Apa nama keyword cheat di game the sims yang digunakan untuk mengatur jumlah uang kita menjadi banyak?");
		kunci = "motherload";

			if(jawaban == kunci){
			window.alert("Selamat anda naik level. Humour interaction unlocked!");
			progress = 0;
			levelRelation += 1;
			document.getElementById("status2").innerHTML = "FRIEND";
			document.getElementById("button_humour").setAttribute("class","terlihat");
			/*relationship status naik*/
			}
			if(jawaban != kunci){
			window.alert("jawaban salah, anda tidak naik level. Silahkan coba lagi pada kesempatan berikutnya.");
			progress = Math.floor((Math.random()*50)+20);
			/*relationship status tetap*/		
			}
		}	
		if(levelRelation == 3 && progress == 100){
		jawaban = window.prompt("Soal 3: Apa yang putih kecil, tetapi larinya cepat?");
		kunci = "nasi menempel pada kereta";

			if(jawaban == kunci){
			window.alert("Selamat anda naik level. Date interaction unlocked!");
			progress = 0;
			levelRelation += 1;
			document.getElementById("status2").innerHTML = "LOVER";
			document.getElementById("button_date").setAttribute("class","terlihat");
			/*relationship status naik*/
			}
			if(jawaban != kunci){
			window.alert("jawaban salah, anda tidak naik level. Silahkan coba lagi pada kesempatan berikutnya.");
			progress = Math.floor((Math.random()*50)+20);
			/*relationship status tetap*/		
			}
		}
		if(levelRelation == 4 && progress == 100){
		jawaban = window.prompt("Soal 4:One heart.");
		kunci = "honda";

			if(jawaban == kunci){
			window.alert("Selamat anda naik level. Propose interaction unlocked!");
			progress = 0;
			levelRelation += 1;
			document.getElementById("status2").innerHTML = "ENGAGED";
			document.getElementById("button_propose").setAttribute("class","terlihat");
			/*relationship status naik*/
			}
			if(jawaban != kunci){
			window.alert("jawaban salah, anda tidak naik level. Silahkan coba lagi pada kesempatan berikutnya.");
			progress = Math.floor((Math.random()*50)+20);
			/*relationship status tetap*/		
			}
		}
		if(levelRelation == 5 && progress == 100){
		jawaban = window.prompt("Soal 5: Apa jenis martial art yang dimiliki oleh bruce lee?");
		kunci = "jeet kune do";

			if(jawaban == kunci){
			window.alert("Selamat anda naik level.");
			progress = 0;
			levelRelation += 1;
			document.getElementById("status2").innerHTML = "MARRIED";
			window.alert("Selamat, anda telah menyelesaikan game! Silahkan restart game anda.");
			/*relationship status naik*/
			}
			if(jawaban != kunci){
			window.alert("jawaban salah, anda tidak naik level. Silahkan coba lagi pada kesempatan berikutnya.");
			progress = Math.floor((Math.random()*50)+20);
			/*relationship status tetap*/		
			}
		}
	timeChecker4 = setTimeout(function(){promotionChecker();},1000);
}

function start(){
	gameClock();
	statusCheck();
	statusDecreaser();
	gameOverChecker();
	promotionChecker();
	document.getElementById("button_start").setAttribute("class","ngumpet");
	document.getElementById("heading_name_male_player").firstChild.nodeValue = nama_player1;
	document.getElementById("heading_name_female_player").firstChild.nodeValue = nama_player2;
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
	document.getElementById("male_pict").setAttribute("src","");
	document.getElementById("female_pict").setAttribute("src","");
	normal1 = setTimeout(function(){normalMale();},3000);
	normal2 = setTimeout(function(){normalFemale();},3000);
}
function hobby(){
	social_male += 5;
	social_female += 5;
	progress += (mood_male / 10)+ (mood_female / 10); 
	hunger_male -= 5;
	stamina_male -= 3;
	fun_male += 15;
	hunger_female -= 5;
	stamina_female -= 3;
	fun_female += 15;
	document.getElementById("male_pict").setAttribute("src","");
	document.getElementById("female_pict").setAttribute("src","");
	normal1 = setTimeout(function(){normalMale();},3000);
	normal2 = setTimeout(function(){normalFemale();},3000);
}
function humour(){
	social_male += 15;
	social_female += 15;
	progress += (mood_male / 10)+ (mood_female / 10); 
	hunger_male -= 2;
	stamina_male -= 2;
	fun_male += 2;
	hunger_female -= 2;
	stamina_female -= 2;
	fun_female += 2;
	document.getElementById("male_pict").setAttribute("src","");
	document.getElementById("female_pict").setAttribute("src","");
	normal1 = setTimeout(function(){normalMale();},3000);
	normal2 = setTimeout(function(){normalFemale();},3000);
}
function date(){
	social_male += 5;
	social_female += 5;
	progress += (mood_male / 5)+ (mood_female / 5); 
	hunger_male -= 2;
	stamina_male -= 2;
	fun_male += 2;
	hunger_female -= 2;
	stamina_female -= 2;
	fun_female += 2;
	document.getElementById("male_pict").setAttribute("src","");
	document.getElementById("female_pict").setAttribute("src","");
	normal1 = setTimeout(function(){normalMale();},3000);
	normal2 = setTimeout(function(){normalFemale();},3000);
}
function propose(){
	if(mood_male >= 75 && mood_female >= 75){
	progress += 100; 
	hunger_male -= 2;
	stamina_male -= 2;
	fun_male -= 2;
	hunger_female -= 2;
	stamina_female -= 2;
	fun_female -= 2;
	document.getElementById("male_pict").setAttribute("src","");
	document.getElementById("female_pict").setAttribute("src","");
	normal1 = setTimeout(function(){normalMale();},3000);
	normal2 = setTimeout(function(){normalFemale();},3000);
	}
	if(mood_male < 75 || mood_female < 75){
	hunger_male -= 2;
	stamina_male -= 2;
	fun_male -= 2;
	hunger_female -= 2;
	stamina_female -= 2;
	fun_female -= 2;
	document.getElementById("male_pict").setAttribute("src","");
	document.getElementById("female_pict").setAttribute("src","");
	normal1 = setTimeout(function(){normalMale();},3000);
	normal2 = setTimeout(function(){normalFemale();},3000);
	}
}

function eatMale(){
	hunger_male += 15;
	stamina_male -= 2;
	fun_male -= 2;
	document.getElementById("male_pict").setAttribute("src","image/icon and animations/burger.gif");
	document.getElementById("male_pict").setAttribute("width","150");
	document.getElementById("male_pict").setAttribute("height","150");
	normal1 = setTimeout(function(){normalMale();},3000);
}
function sleepMale(){
	hunger_male -= 2;
	stamina_male += 15;
	fun_male -= 2;
	document.getElementById("male_pict").setAttribute("src","image/icon and animations/cowok tidur.jpg");
	document.getElementById("male_pict").setAttribute("width","250");
	document.getElementById("male_pict").setAttribute("height","287");
	normal1 = setTimeout(function(){normalMale();},3000);
}
function playMale(){
	hunger_male -= 2;
	stamina_male -= 2;
	fun_male += 15;
	document.getElementById("male_pict").setAttribute("src","image/icon and animations/art.gif");
	document.getElementById("male_pict").setAttribute("width","150");
	document.getElementById("male_pict").setAttribute("height","150");
	normal1 = setTimeout(function(){normalMale();},3000);
}
function eatFemale(){
	hunger_female += 15;
	stamina_female -= 2;
	fun_female -= 2;
	document.getElementById("female_pict").setAttribute("src","image/icon and animations/sandwich.gif");
	document.getElementById("female_pict").setAttribute("width","150");
	document.getElementById("female_pict").setAttribute("height","150");
	normal2 = setTimeout(function(){normalFemale();},3000);
}
function sleepFemale(){
	hunger_female -= 2;
	stamina_female += 15;
	fun_female -= 2;
	document.getElementById("female_pict").setAttribute("src","image/icon and animations/cewek tidur.jpg");
	document.getElementById("female_pict").setAttribute("width","250");
	document.getElementById("female_pict").setAttribute("height","287");
	normal2 = setTimeout(function(){normalFemale();},3000);
}
function playFemale(){
	hunger_female -= 2;
	stamina_female -= 2;
	fun_female += 15;
	document.getElementById("female_pict").setAttribute("src","image/icon and animations/balon.gif");
	document.getElementById("female_pict").setAttribute("width","150");
	document.getElementById("female_pict").setAttribute("height","150");
	normal2 = setTimeout(function(){normalFemale();},3000);
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
	document.getElementById("button_hobby").addEventListener("click", hobby, false);
	document.getElementById("button_humour").addEventListener("click", humour, false);
	document.getElementById("button_date").addEventListener("click", date, false);
	document.getElementById("button_propose").addEventListener("click", propose, false);
}

window.addEventListener("load", loading, false);

});