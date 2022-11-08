# Tagi Semantyczne
## Definicja semantyki
- dział językoznawstwa, którego przedmiotem jest analiza znaczeń wyrazów
- dział semiotyki zajmujący się badaniem związków, jakie zachodzą między wyrażeniami języka a przedmiotami, do których się one odnoszą

źródło: [https://sjp.pwn.pl/slowniki/semantyczny.html](sjp.pwn.pl)

Znaczniki semantyczne tworzą nową warstwę strukturalną, która podpowiada robotom jak interpretować zawartość witryny przez co mają wpływ na pozycjonowanie witryny w wyszukiwarkach.

## &lt;h1&gt; [...] &lt;h6&gt;
Tagi h*, to nagłówki (ang. heading). Posługujemy się nimi, aby zatytułować konkretne bloki tekstu oraz nadać im hierarchię. 
Nagłówków mamy 6 (od największego):

<div class="standardWrapper">
  <div>

```html
<h1>HEADING 1</h1>
<h2>HEADING 2</h2>
<h3>HEADING 3</h3>
<h4>HEADING 4</h4>
<h5>HEADING 5</h5>
<h6>HEADING 6</h6>
```
  </div>
  <div>

<h1>HEADING 1</h1>
<h2>HEADING 2</h2>
<h3>HEADING 3</h3>
<h4>HEADING 4</h4>
<h5>HEADING 5</h5>
<h6>HEADING 6</h6>
  </div>
</div>

## &lt;header&gt;
Służy do określenia zawartości wstępnej, wprowadzającej treść do poprzedniego znacznika semantycznego (np sekcji, artykułu,stopki), albo jako wstęp do podstrony (kiedy jest wstępem do body). Headery mogą zawierać też elementy nawigacyjne.
- Może być ich wiele na stronie 
- Roboty sprawdzają jaki znacznik stoi przed headerem i wiedzą, co otwierają i pozycjonują artykuł, czy stronę wg tych informacji
```html
<body>
	<header>
		<!--  header podstrony  -->
	</header>

    <article>
      <header>
        <!-- nagłówek artykułu -->
      </header>
```

## &lt;nav&gt;
Stosujemy dla najważniejszych, głównych elementów nawigacyjnych na stronie! Dla tych elementów, które linkują do podstron witryny lub innych domen. Używajmy nav tylko do najważniejszych linków - tych, których konkretnie dotyczy strona, co nie znaczy, że na stronie może znajdować się tylko jeden nav ;> 

Najczęściej nav’y wykorzystuje się w menu strony.

## &lt;article&gt;
Znacznik article to kompletna, dająca się zawrzeć w sobie (autonomiczna) część dokumentu niezależna od innych jego części. Często ma powtarzalną formę - np. wpis blogowy, post na forum, artykuł w portalu.
&lt;article&gt; można zagnieżdżać, jeśli treść jest powiązana z innym

## &lt;section&gt;
Dająca się wyróżnić, ze względu na przeznaczenie treść dokumentu (tematycznie zgrupowany content). Temat każdej sekcji powinien zostać określony w jej części nagłówkowej. Sekcje stanowią część większej całości (w przeciwieństwie do artykułu). Wybór sekcji czy artykułu zależne jest od intencji programisty.

## &lt;main&gt;
Znacznik decydujący o “flow” witryny - podkreślający, co stanowi najważniejszą część witryny. Warto go używać do podkreślenia, po co jest ta strona.
Nie może znajdować się wewnątrz znacznika semantycznego (ale może być w divie)
Może znaleźć się tylko raz na stronie (tak samo jak &lt;head&gt; czy &lt;body&gt;)

## &lt;aside&gt;
W tym znaczniku opisujemy zawartość marginalnie powiązaną z głównym contentem witryny. Np reklamy, archiwum, polecane źródła itd...

## &lt;footer&gt;
Służy do zamykania strony - miejsce na media społecznościowe, info o autorze, kontakt, linki, projekty. Działa podobnie, ale odwrotnie do headera.
Może być użyty parę razy na stronie
Możemy otwierać sekcje headerami, a zamykać footerami

## &lt;noscript&gt;
W tag &lt;noscript> wpisujemy alternatywną treść wyświetlaną w przeglądarkach nieobsługujących skryptów lub w przeglądarkach, w których użytkownik wyłącza obsługę skryptów. W przeciwnym razie przeglądarka ignoruje ten tag i jego zawartość. W HTML5 znacznik &lt;noscript&gt; można umieścić w elementach &lt;head&gt; i &lt;body&gt;.

[Ćwiczenie 1](/ex/html?id=Ćwiczenia-1)
