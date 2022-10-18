# JSON

![json](../images/logo_json.jpg)

JSON oznacza  JavaScript Object Notation

JSON to lekki format do przechowywania i transportu danych

JSON jest często używany, gdy dane są przesyłane z serwera na stronę internetową

JSON jest „samoopisujący się” i łatwy do zrozumienia

## Obiekty JSON

Obiekty JSON są zapisywane w nawiasach klamrowych.
Podobnie jak w JavaScript, obiekty mogą zawierać wiele par nazwa / wartość:
```js
{"firstName":"John", "lastName":"Doe"}
```

## Tablice JSON

Tablice JSON są zapisywane w nawiasach kwadratowych.
Podobnie jak w JavaScript tablica może zawierać obiekty:
```js
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
```

## Konwersja tekstu JSON na obiekt JavaScript

Typowym zastosowaniem formatu JSON jest odczytywanie danych z serwera internetowego i wyświetlanie danych na stronie internetowej.
Dla uproszczenia można to zademonstrować za pomocą ciągu znaków jako danych wejściowych.
Najpierw utwórz ciąg JavaScript zawierający składnię JSON:
```js
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
```
Następnie użyj wbudowanej funkcji JavaScript JSON.parse (), aby przekonwertować ciąg znaków na obiekt JavaScript:
```js
var obj = JSON.parse(text);
Na koniec użyj nowego obiektu JavaScript na swojej stronie:
obj.employees[1].firstName + " " + obj.employees[1].lastName;
```

https://www.w3schools.com/js/js_json_intro.asp
