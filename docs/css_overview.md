# PRZEGLĄD CSSA
## Powstanie CSS
<div class="standardWrapper">
  <div>
  Kaskadowe arkusze stylów (ang. <b>Cascading Style Sheets</b>, w skrócie <b>CSS</b>) – język służący do opisu formy prezentacji stron WWW. 

  **Håkon Wium Lie** jako pierwszy zaproponował CHSS (Cascading HTML Style Sheets) w październiku 1994 roku.

  Pod koniec 1996 roku wydano oficjalną dokumentację CSS, Kaskadowe arkusze stylów, poziom 1.
  </div>
  <div>

  ![Håkon Wium Lie](./images/css_hakon_lie.webp)
  </div>
</div>


### Technologia 
<div class="standardWrapper">
  <div style="text-align:center;">

  ![css logo](./images/css3_logo.svg)
  
  kolory, rozmiary, marginesy, kolor tła, cienie, kroje czcionek etc
  </div>
  <div style="text-align:center;">

  ![html logo](./images/html5_logo.svg)

  tekst, obrazy, przyciski, listy wyboru, hiperłącza etc
  </div>
</div>

## CSS w HTML
CSS został stworzony w celu odseparowania struktury dokumentu od formy jego prezentacji. Separacja ta zwiększa zakres dostępności witryny, zmniejsza zawiłość dokumentu, ułatwia wprowadzanie zmian w strukturze dokumentu.
Osadzamy go w sekcji head pliku HTML tagiem link:

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

## Struktura CSS
Arkusz stylów CSS to lista dyrektyw ustalających w jaki sposób ma zostać wyświetlana przez przeglądarkę internetową zawartość wybranego elementu HTML.


<div class="standardWrapper reverse">
  <div class="exampleTagsContainer">
    <div class="exampleTag">
      <span style="color:var(--green);">selektor</span>
      <span style="color:var(--red);">{</span><br />
      <span style="color:var(--blue);">&nbsp;&nbsp;&nbsp;właściwość:</span>
      <span style="color:var(--pink);">wartość;</span><br />
      <span style="color:var(--red);">}</span><br />
    </div>
  </div><br />
  <div>

  ```css
  h1{
    color:green;
    font-size:20px;
  }

  h2{ 
    padding: 12px
    border:2px dashed red;
  }
  ```
  </div>
</div>

## Rodzaje selektorów CSS
### Klasy
Selektor klasy wyszukuje każdy element z atrybutem class w dokumencie HTML. Atrybut class jest zdefiniowany jako lista przedmiotów oddzielonych ze sobą spacją, jeden z nich musi zgadzać się z daną klasą w selektorze (CSS)
```html
<div class=”gif_container” ></div>
```
```css
.gif_containter{
	border:2px dashed blue;
	/* kontur elementów */
}

```

możemy użyć kilku klas na jeden tag:

```html
<div class=”gif_container darkcolor” ></div>
```
```css
.darkcolor{
	color:black;
	/* kolor czcionki*/
}

```

### Identyfikatory
<!-- TODO: ZROBIĆ -->
### Tagi
<!-- TODO: ZROBIĆ -->


<div class="prevNextButtons">
  <a href="./#/html_basic_tags?id=tagi-podstawowe">
    <button class="prev">🏗️ Tagi podstawowe</button>
  </a>
  <a href="./#/css_properties?id=właściwości-css">
    <button class="next">🥅 Podstawowe właściwości</button>
  </a>
</div>
