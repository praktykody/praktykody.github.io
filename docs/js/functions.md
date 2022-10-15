# Funkcje JS
Funkcje to bloki kodu, które mogą być wykonywane w wielokrotnie różnych miejscach kodu. Pozwala to m.in na 

Aby funkcja działała poprawnie, musimy ją zadeklarować (stworzyć blok kodu), a następnie możemy ją wywołać (wykonać kod znajdujący się w bloku) gdziekolwiek w kodzie. 

## Deklaracja funkcji
<div class="exampleTagsContainer">
  <div class="exampleTag">
    <span style="color:var(--green);">function</span>
    <span style="color:var(--red);">nazwaFunkcji</span>
    <span>( </span>
    <span style="color:var(--pink);">argument</span>
    <span> )</span>
    <span style="color:var(--blue);">{</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="color:var(--yellow);">// ten kod wykona się po każdym wywołaniu</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>console.log(</span>
    <span style="color:var(--pink);">argument</span>
    <span>);</span><br />
    <span style="color:var(--blue);">}</span>
  </div>
</div>
<br />
<br />

<span style="color:var(--green);">function</span> - deklaruję, że będę projektował funkcję

<span style="color:var(--red);">nazwaFunkcji</span> - nazwa własna funkcji - ważne żeby określała co dana funkcja robi

<span style="color:var(--pink);">argument</span> - zmienna, do której mogę odnieść się w środku funkcji, a którą podaję przy jej wywołaniu

<span style="color:var(--yellow);">//</span> - komentarz JS

### Wywołanie funkcji
```js
nazwaFunkcji("hello");
// output: hello

const argument = "world";
nazwaFunkcji( argument );
// output: world
```
## Funkcja strzałkowa
```js
function przyklad(argument){
  console.log(argument);
}    

// 1. Przypisz anonimową funkcję do variable z jej nazwą
const przyklad = function (argument) {
  console.log(argument);
}    

// 2. Zamień keyword "function" na strzałkę
const przyklad = (argument) => {
  console.log(argument);
}    

// Jeśli argument jest jeden - możesz pominąć nawias
// jeśli wnętrze funkcji zmieści się w jednej linii - możesz pominąć klamry
const przyklad = argument => console.log(argument);
```