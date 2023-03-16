# Weather APP

<iframe src="src_html/angular_weather.html" style="min-height:40vh;border:none;z-index:1;"></iframe>

## Konfiguracja środowiska
1. Dołącz AngularJS z CDN
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"></script>
```

2. Zdobądź API key z [OpenWeathermap](https://openweathermap.org/api)
  - [Stwórz konto](https://home.openweathermap.org/users/sign_up) lub [Zaloguj się](https://home.openweathermap.org/users/sign_in) jeżeli już posiadasz konto
  - Przejdź do  zakładki [My API keys](https://home.openweathermap.org/api_keys) i wygeneruj klucz API

3. Wybierz swoje API routes. 
Pełną listę API od OpenWeather znajdziesz [tutaj](https://openweathermap.org/api), natomiast do zbudowania aplikacji pogodowej zależnej od lokalizacji potrzebne jest: 
  - [Geocoding API](https://openweathermap.org/api/geocoding-api) - do znajdywainia lokacji

  ```http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}```

  - [One Call API](https://openweathermap.org/api/one-call-3) - subiektywnie wygląda opcję która "najszerzej" zbiera informacje o pogodzie

  ```https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}```

4. Zazancz zakres aplikacji Angulara - na przykładzie cała strona będzie zakresem tej aplikacji, dlatego zakres *myApp* ustawiam na body.

Kolejno zaznaczamy zakres kontrolera. Z racji tego, że nasza aplikacja będzie wykonywała jedną funkcję, możemy zamknąć wszystko w jednym kontrolerze *weather*

```html
  <body data-ng-app="myApp">
	  <div class='mainContainer' data-ng-controller="weather">
  ...
```