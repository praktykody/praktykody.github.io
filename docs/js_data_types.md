# Typy danych
## Numer (number)
```js
let currentSlide = 0; 
```
## Ciąg znaków / tekst (string)
```js
const string = "nazwa";
```
## Obiekt (object)
```js
const image = {
  "src": "1.jpg",
  "title": "Widok 1"
};

console.log(image.src); // 1.jpg
```
## Tablica (array)
```js
const users = [ "Jan", "Ewa", "Maria" ];  // tablica stringów 
const ages = [ 31, 22, 53 ];  // tablica numerów
```

### Tablica obiektów
```js
const views = [ 		// tablica obiektów
  {
    "src" : "1.jpg",
    "name" : " Pierwszy "
  },
  {
    "src" : "2.jpg",
    "name" : " Drugi "
  }
];

console.log(users[0]);  // Jan
```