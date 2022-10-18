# Programowanie obiektowe

## Obiekty w JS
```js
// definicja
const pies = {
	name: "Azor",
	volume: 70,
	color: "brown",
	showText(){
		console.log(this.name+" robi hał");
	}
}

// odwołania
pies.name;
pies.showText(); // Azor robi hał

pies['name'];
pies['showText'](); // Azor robi hał

// usuwanie
console.log(pies.color); // brown
delete pies.color;
console.log(pies.color); // undefined
```

## Właściwości obiektów

Obiekty są typami referencyjnymi. Oznacza to, że jeżeli dany obiekt będzie podstawiony pod dwie zmienne, to zmiana jego składowej za pomocą którejkolwiek zmiennej zmieni go we wszystkich zmiennych:

```js
const a = { name : "Maciek" }
const b = a;
b.name = "Karol";
console.log(a.name, b.name); //Karol, Karol
```

## Konstruktory obiektów

```js
function Pet(name,color,race,volume){
	this.name = name;
	this.color = color;
	this.race = race;
	this.volume = volume;
}

let tiger = new Pet("Azor","brown","tygrys",67);
```

## Właściwość prototype

Każda funkcja ma swój prototyp
Prototype jest obiektem 
Zawiera zbiór właściwości (danych i zachowań), które mogą być dziedziczone przez obiekty utworzone na podstawie prototypu

Składnia:
```js
Funkcja.prototype.method = function(){
	// code
}
```

Dzięki prototype, funkcja w pamięci jest zapisana tylko raz, nawet jeśli utworzymy wiele takich obiektów.


## Działanie interpretera JS

Interpreter to coś, co zamienia język programowania na język komputera.

```js
tiger.showName();

function Pet(name,race){
	this.name = name;
	this.race = race;
}
Pet.prototype.showName = function(){
	console.log(“rasa to:“ +this.race);
}

let tiger = new Pet(”Paweł”,“tygrys”);
```

INTERPRETER

Jeśli nie, to sprawdź prototyp tego obiektu.

Czy na obiekt “tygrys” zwiera metodę showName? 


## Dziedziczenie

```js
Object.prototype()
Pet.prototype()
tiger
```


## Ćwiczenie 1

Stwórz konstruktor Pet, który będzie definiował takie wartości jak :imię, rasa, kolor i głośność zwierzęcia -  stwórz za jego pomocą 5 obiektów
Do stworzonego konstruktora dodaj prototyp, który będzie wyświetlał imię i rasę zwierzęcia 

