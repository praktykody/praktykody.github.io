var pozycje = [
	[200,20,0,0],
	[150,20,100,0],
	[20,200,0,200],
	[20,150,100,150],
	[100,20,250,150],
	[20,150,0,200],
	[20,150,0,200]
];

function setBarierki(w,h,t,l){
	var div = document.createElement("div");
	div.style.backgroundColor = "red";
	div.style.marginTop = t+"px";
	div.style.marginLeft = l+"px";
	div.style.width = w+"px";
	div.style.height = h+"px";
	div.style.position ="fixed";
	div.className ="barierka";
	
	document.body.appendChild(div);
}
for(x = 0; x < pozycje.length; x++){
	setBarierki(pozycje[x][0],pozycje[x][1],pozycje[x][2],pozycje[x][3]);
}

// start button
var start = document.createElement("div");
start.style.width = "100px";
start.style.height = "75px";
start.style.backgroundColor = "green";
start.style.paddingTop = "25px";
start.innerHTML = "START";
start.addEventListener("click",startGame);
document.body.appendChild(start);
// meta button
var meta = document.createElement("div");
meta.id = "meta";
meta.style.width = "100px";
meta.style.height = "100px";
meta.style.backgroundColor = "blue";
meta.style.marginTop = "70px";
meta.style.marginLeft = "220px";
meta.innerHTML = "META";
document.body.appendChild(meta);
// życia 
var lives = document.createElement("div");
lives.id = "lives";
lives.style.width = "100px";
lives.style.height = "25px";
lives.style.border = "1px solid #000";
lives.style.marginTop = "0px";
lives.style.marginLeft = "500px";
lives.style.position = "fixed";
lives.style.textAlign = "center";
lives.innerHTML = "3";
document.body.appendChild(lives);
// czas 
var czas = document.createElement("div");
czas.id = "czas";
czas.style.width = "100px";
czas.style.height = "25px";
czas.style.border = "1px solid #000";
czas.style.marginTop = "0px";
czas.style.marginLeft = "600px";
czas.style.position = "fixed";
czas.style.textAlign = "center";
czas.innerHTML = "30";
document.body.appendChild(czas);


function startGame(){
	czasGry = setInterval(function(){
		var czasG = document.getElementById("czas").innerHTML;
		czasG--;
		document.getElementById("czas").innerHTML = czasG;  
		if(czasG == 0){
			finishGame("time");
		}
	},1000);
	var barierka = document.getElementsByClassName("barierka");
	for(x = 0; x < barierka.length; x++){
		barierka[x].addEventListener("mouseover",collision);
	}
	document.getElementById("meta").addEventListener("mouseover",finishGame);
}

function collision(){
	var lives = document.getElementById("lives").innerHTML;
	lives--;
	document.getElementById("lives").innerHTML = lives;  
	if(lives == 0){
		finishGame("over");
	}
}


function finishGame(how){
	clearInterval(czasGry);
	document.getElementById("meta").removeEventListener("mouseover",finishGame);
	switch(how){
		case "over":
			alert("Game Over")
			break;
		case "time":
			alert("Czas minął")
			break;
		default:
			alert("Gratulacje!")
			break; 
		}
}

