# Tagi podstawowe

[lista wszystkich tagów html](https://www.w3schools.com/tags/default.asp)
## &lt;div&gt;
Div to skrót od divide czyli dzielić. Chodzi o podział obszaru strony na konkretne bloki.
```html
<div>
  Rodzic
  <div>Dziecko</div>
</div>
```

## &lt;p&gt;
<div class="standardWrapper">
<div>
P to akronim od "paragraph" - akapit

Akapit zawsze zaczyna się od nowego wiersza, a przeglądarki automatycznie dodają odstęp (margines) przed i po akapicie.
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```
</div>
<div>
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
</div>
</div>

## &lt;table&gt;
<div class="standardWrapper">
  <div>

```html
<table border="1">
  <thead>
    <tr>
      <th>Nagłówek1</th>
      <th>Nagłówek2</th>
  	</tr>
  <thead>
  <tbody>
    <tr>
      <td>Komórka1</td>
      <td>Komórka2</td>
    </tr>
    <tr>
      <td>Komórka3</td>
      <td>Komórka4</td>
    </tr>
  </tbody>
</table>
```
  </div>
  <div>

  <table border="1" style="width:100%">
    <thead>
      <tr>
        <th>Nagłówek1</th>
        <th>Nagłówek2</th>
      </tr>
    <thead>
    <tbody>
      <tr>
        <td>Komórka1</td>
        <td>Komórka2</td>
      </tr>
      <tr>
        <td>Komórka3</td>
        <td>Komórka4</td>
      </tr>
    </tbody>
  </table>



  </div>
</div>

## &lt;ul&gt; / &lt;ol&gt;
- &lt;ol&gt; (ordered list) - lista numerowana
- &lt;ul&gt; (unordered list) - lista nienumerowana
- &lt;li&gt; (list item) - element listy 

<div class="standardWrapper">
  <div>

  ```html
  <ul>
    <li> Lista nienumerowana 1 </li>
    <li> Lista nienumerowana 2 </li>			
  </ul>

  <ol>
    <li> Lista numerowana 1 </li>
    <li> Lista numerowana 2 </li>
  </ol>
  ```
  </div>
  <div>
  <ul>
    <li>Lista nienumerowana 1</li>
    <li>Lista nienumerowana 2</li>			
  </ul>
  <ol>
    <li>Lista numerowana 1 </li>
    <li>Lista numerowana 2 </li>
  </ol>
  </div>
</div>

## &lt;img&gt;
Img jest “wyjątkowym” znacznikiem pojedynczym. Wynika to z faktu, że wstawiając zdjęcie nie jesteśmy w stanie określić jego początku i końca, zamiast tego możemy określić jego wysokość i szerokość

```html
  <img src="scieżka_do_pliku.format" alt="Tekst alternatywny" width="200"  />
```
<!-- 
## &lt;form&gt;
Znacznik form pozwala na stworzenie formularza.
Formularzy używamy do pozyskania informacji od użytkownika. 
Wewnątrz formularzy używamy znaczników input z odpowiednimi parametrami (w zależności od tego jakiego typu informacje chcemy uzyskać)

<div class="standardWrapper">
  <div>

  ```html
  <form action=”result.html” method=”post|get”>
    <input type=”text” name=”firstName” />
    <input type =”submit” />
  </form>
  ```
  </div>
  <div>
    <form action=”result.html” method=”post|get”>
      <input type="text" name=”firstName” /><br />
      <input type ="submit" />
    </form>
  </div>
</div> -->

## Komentarze
Komentarzy w programowaniu używamy aby opisać konkretny fragment kodu. Pomaga to w: 
zorientowaniu się w kodzie po przerwie w pracy nad nim
Współpracy z innymi osobami 
Komentarze nie są widoczne w wyjściowym programie, jedynie w kodzie

```html
<!-- TO JEST KOMENTARZ HTML -->
```

[Ćwiczenie 2](/ex/html?id=Ćwiczenie-2)

