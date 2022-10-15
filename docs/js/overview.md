# Przegląd JS
  Skryptowy oraz wieloparadygmatowy język programowania, stworzony przez firmę **Netscape**, najczęściej stosowany na stronach internetowych.
## Historia JavaScript
<div class="standardWrapper">
<div>
  Twórcą JavaScriptu jest Brendan Eich.

  Początkowo Netscape nazwała nowy język LiveScript. Nazwa została jednak szybko zmieniona na JavaScript wskutek biznesowych porozumień pomiędzy Netscape a firmą Sun Microsystems, lecz JavaScript i Java to mimo wszystko dwa różne języki.
</div>
<div>

  ![Brendan Eich](../images/brendaneich.png)

  [Brendan Eich on GitHub](https://github.com/BrendanEich)
</div>
</div>

## Technologia 
<div class="standardWrapper reverse">
<div style="text-align:center;">

  ![html logo](../images/html5_logo.svg)
  
  **DEFINICJA ELEMENTÓW**

  tekst, obrazy, przyciski, listy wyboru, hiperłącza, semantyka itd.
</div>
<div style="text-align:center;">

  ![css logo](../images/css3_logo.svg)  
  
  **DEFINICJA WYGLĄDU**

  kolory, rozmiary, marginesy, kolor tła, cienie, kroje czcionek itd.
</div>
<div style="text-align:center;">

  ![JavaScript Logo](../images/js_logo.svg)  

  **DEFINICJA ZACHOWANIA**

  wydarzenia (np click), połączenie z API, przetwarzanie danych itd.
</div>
</div>

## Onboard JS
### Komunikacja z JavaScript - konsola
```html
<script>
  console.log("Hello World");
</script>
```

### Zmienne
<div class="exampleTagsContainer">
  <div class="exampleTag">
    <span style="color:var(--green);">deklaracja</span>
    <span style="color:var(--red);">nazwaZmiennej</span>
    <span> = </span>
    <span style="color:var(--pink);">wartość</span>
    <span>;</span>
  </div>
</div>
<br />
<br />

<span style="color:var(--green);">deklaracja</span>:
- **const** - *jeśli deklarujemy "stałą" wartość która nie będzie się zmieniać*
- **let&nbsp;&nbsp;&nbsp;** - *jeśli wartość będzie się zmieniać*
- **var&nbsp;&nbsp;** - *jest odradzane - dowiemy się później dlaczego*

<span style="color:var(--red);">nazwaZmiennej</span> - wymyślasz ją na własną rękę - ważne żeby **określała czym jest wartość**

<span style="color:var(--pink);">wartość</span> - może to być każdy poprawnie wpisany [typ danych](js/data_types.md)