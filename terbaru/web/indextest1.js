var hunger= Math.floor((Math.random()*80)+20);

function statusCheck(){
	if(hunger <= 0) hunger = 0;
	if(hunger >= 100) hunger = 100;
	
	document.getElementById("hunger").innerHTML = hunger;
	var timeChecker1 = setTimeout(function(){statusCheck();},1000);
}

function statusDecreaser(){
	hunger = hunger - 1;
	var timeChecker2 = setTimeout(function(){statusDecreaser();},1000);
}

function start(){
statusCheck();
statusDecreaser();
}

function loading(){
document.getElementById("button1").addEventListener("click", start, false);
}

window.addEventListener("load", loading, false);