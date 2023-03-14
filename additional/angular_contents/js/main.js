jQuery.getJSON("js/content.json",function(content){
	let aside = document.querySelector("aside");
	let ul = document.createElement("ul");
	for(let x = 0 ; x < Object.keys(content).length; x++){
		let li = document.createElement("li");
		li.className = "lang "+Object.keys(content)[x];
		let img = document.createElement("img");
		img.src = "img/flags/"+Object.keys(content)[x]+".png";
		li.innerHTML = Object.keys(content)[x].toUpperCase()+"&nbsp;";
		li.appendChild(img);
		ul.appendChild(li);
	}

	var urlInfo = parseURLParams(window.location.href);
	var defaultLang = "pl";
	var lang = defaultLang;
	if((typeof urlInfo !== "undefined")){
		(typeof urlInfo.lang !== "undefined")? lang = urlInfo.lang[0]: lang = defaultLang;
	}	
	(Object.keys(content).includes(lang))? "" : lang = defaultLang;
	aside.appendChild(ul);
	$(".lang").click(function(){
		$(this).hide();
		$(".lang").toggle();
		let lang = this.className.split(" ")[1];
		fillContent(content,lang);
	})
	fillContent(content,lang);
})
function fillContent(content,lang){
	document.getElementsByClassName(lang)[0].style.display = "block";
	let c = content[lang];
	// menu
	if(typeof c.menu !== 'undefined'){
	let header = document.querySelector("header"),
		h1 = header.querySelector("h1");
		nav = document.querySelector("nav");
		ul = document.createElement("ul");
		h1.innerHTML = c.title;
		nav.innerHTML = "";
		let menuTemplate = ["inprint","experience","projects","contact"];
		for(let x = 0; x < c.menu.length; x++){
			let a = document.createElement("a");
			a.href = "#"+menuTemplate[x];
			let li = document.createElement("li");
			li.innerHTML = c.menu[x].toUpperCase().replace(" ", "&nbsp;");
			a.appendChild(li);
			ul.appendChild(a);
		}
		nav.appendChild(ul);
	}
	// metryczka
	if(typeof c.inprint !== 'undefined'){
	let inPrint = document.getElementById("inprint"),
		table = inPrint.querySelector("table");
		table.innerHTML = "";
		for(let x = 0; x < c.inprint.length; x++){
			let tr = document.createElement("tr");
			let tdLeft = document.createElement("td");
			let tdRight = document.createElement("td");
			tdLeft.className = "left";
			tdRight.className = "right";
			tdLeft.innerHTML = c.inprint[x][0].toUpperCase();
			tdRight.innerHTML = c.inprint[x][1].toUpperCase();
			tr.appendChild(tdLeft);
			tr.appendChild(tdRight);
			table.appendChild(tr);
		}
		let tr = document.createElement("tr");
		let td = document.createElement("td");
		td.innerHTML = "<a href='#about'>"+c.about.title+"</a>";
		td.colSpan = '2';
		td.style.textAlign = "center";
		tr.appendChild(td);
		table.appendChild(tr);
	}
	// about
	if(typeof c.about !== 'undefined'){
		let aboutDIV = document.querySelector("#about"),
		aboutSec = aboutDIV.querySelector("section");
		aboutSec.innerHTML = "";
		let aH2 = document.createElement("h2");
		let aCont = document.createElement("div");
		aH2.innerHTML = c.about.title.toUpperCase();
		aCont.innerHTML = c.about.content.replace(/\n/g,"<br/>");		
		aboutSec.appendChild(aH2);
		aboutSec.appendChild(aCont);
	}
	// doświadczenie
	if(typeof c.experience !== 'undefined'){	
		let exp = document.querySelector("#experience"),
		expList = exp.querySelector(".expList"),
		expH2 = exp.querySelector("h2");
		expH2.innerHTML = c.expTitle.toUpperCase();
		expList.innerHTML = "";
		for(let x = 0; x < c.experience.length; x++ ){
			let expItem = document.createElement("div");
			expItem.className = "expItem";
			let key = Object.keys(c.experience[x]);
			for(let y = 0; y< key.length;y++){
				if(key[y] !== "link"){
					let expValue = c.experience[x];			
					let expElement = document.createElement("div");
					expElement.className = key[y];
					expElement.innerHTML = expValue[key[y]];
					expItem.appendChild(expElement);			
				}else{
					let a = document.createElement("a");
					a.href = c.experience[x][key[y]];
					a.target = "_blank";
					expItem.appendChild(a);			
				}
			}
			expList.appendChild(expItem);	
		}
	}
	// projekty
	if(typeof c.projects !== 'undefined'){	
		let projects = document.querySelector("#projects"),
		prH2 = projects.querySelector("h2"),
		prCont = projects.querySelector(".projectContainer");
		prH2.innerHTML = c.prTitle;
		prCont.innerHTML = "";
		let sContNr = 0;
		for(let x = 0; x < c.projects.length; x++){
			if(x % 3 == 0){
				console.log(x);
				var staticContainer = document.createElement("div");
				staticContainer.className = "staticContainer";
				staticContainer.id = "s"+sContNr;
				if(sContNr>0){staticContainer.style.display="none";}
				sContNr++
			}
			let prDiv = document.createElement("div");
			prDiv.innerHTML = c.projects[x].title;
			prDiv.style.backgroundImage = "url(img/projects/"+c.projects[x].img+")";
			staticContainer.appendChild(prDiv);
			prCont.appendChild(staticContainer);
			
		}
		let slide = 0;
		$(".sliderButt").on("click",function(){
			let direction = $(this).attr("class").split(" ")[1];
			
			$(".staticContainer").fadeOut(1000);
			if(direction == "next"){
				if(slide < sContNr-1){
					slide++;
				}else{
					slide = 0; 	
				}
			}else if(direction == "prev"){
				if(slide > 0){
					slide--;
				}else{
					slide = sContNr-1;
				}
			}
			$("#s"+slide).delay(1000).fadeIn(2000);
		})
	}
	// kontakt
	if(typeof c.contact !== 'undefined'){
		let mF = document.querySelector(".messField");
		mF.innerHTML =	c.contact.message;
		let socials = document.querySelector(".socials");
		socials.innerHTML = "";
		for(let x = 0; x < c.contact.links.length; x++){
			let social = document.createElement("div");
			social.className = "social";
			social.innerHTML = '<i class="icofont-'+c.contact.links[x][0]+'"></i>';
			let a = document.createElement("a");
			a.href = c.contact.links[x][1];
			a.target = "blank";
			a.appendChild(social);
			socials.appendChild(a);
		}
	}
	// wyrównanie linków
	$( function() {
		$( 'a[href^="#"]' ).on( 'click', function( e ) {
		if ( this.hash !== '' ) {
			//    e.preventDefault();
				var hash = this.hash;
				var nav = $( '.navBar' ).outerHeight();
			
				$( 'html, body' ).animate( {
					scrollTop: $( hash ).offset().top - nav
				}, 200, function() {
					window.location.hash = hash;
				} );
			}
		} );
	} );
}
function parseURLParams(url) {
	var queryStart = url.indexOf("?") + 1,
		queryEnd   = url.indexOf("#") + 1 || url.length + 1,
		query = url.slice(queryStart, queryEnd - 1),
		pairs = query.replace(/\+/g, " ").split("&"),
		parms = {}, i, n, v, nv;
	if (query === url || query === "") return;
	for (i = 0; i < pairs.length; i++) {
		nv = pairs[i].split("=", 2);
		n = decodeURIComponent(nv[0]);
		v = decodeURIComponent(nv[1]);

		if (!parms.hasOwnProperty(n)) parms[n] = [];
		parms[n].push(nv.length === 2 ? v : null);
	}
	return parms;
}