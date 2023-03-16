# Weather APP

<iframe src="src_html/angular_weather.html" style="min-height:40vh;border:none;z-index:1;"></iframe>

## Konfiguracja środowiska
### Open Weather API

1. Zdobądź API key z [OpenWeathermap](https://openweathermap.org/api)
  - [Stwórz konto](https://home.openweathermap.org/users/sign_up) lub [Zaloguj się](https://home.openweathermap.org/users/sign_in) jeżeli już posiadasz konto
  - Przejdź do  zakładki [My API keys](https://home.openweathermap.org/api_keys) i wygeneruj klucz API

2. Wybierz swoje API routes. 
Pełną listę API od OpenWeather znajdziesz [tutaj](https://openweathermap.org/api), natomiast do zbudowania aplikacji pogodowej zależnej od lokalizacji potrzebne jest: 
  - [Geocoding API](https://openweathermap.org/api/geocoding-api) - do znajdywainia lokacji

  ```http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}```

  - [One Call API](https://openweathermap.org/api/one-call-3) - subiektywnie wygląda opcję która "najszerzej" zbiera informacje o pogodzie

  ```https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}```

### Angular APP

1. Dołącz AngularJS z CDN
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"></script>
```

2. Zazancz zakres aplikacji Angulara - na przykładzie cała strona będzie zakresem tej aplikacji, dlatego zakres *myApp* ustawiam na body.

Kolejno zaznaczamy zakres kontrolera. Z racji tego, że nasza aplikacja będzie wykonywała jedną funkcję, możemy zamknąć wszystko w jednym kontrolerze *weather*

```html
  <body data-ng-app="myApp">
	  <div class='mainContainer' data-ng-controller="weather">
  ...
```

## Pozyskiwanie danych APP <=> API
1. Stwórz plik JavaScriptu i skonfuguruj app z kontrolerem: 
```js
const app = angular.module("myApp", []);
app.controller('weather', function($scope, $http, $filter){        
    $scope.getCities = function(str){
        ...
    }
})
```

2. Dzięki argumentowi *$http* możesz pobrać zapytać GeoAPI o konkretną lokalizację, dla przykładu weźmy Katowice: 

```js
$http.get("http://api.openweathermap.org/geo/1.0/direct?&appid={API key}&q=Katowice)
.then(response => {
    console.log({ response })
})
```

Po podmiance {API  key} na wygenerowany API KEY w kroku 1, odpowiedź serwera (response) powinna wyglądać mniej więcej tak: 

```js
[
  {
    "name": "Katowice",
        "local_names": 
        {
          "kk": "Катовице",
          "yi": "קאטאוויץ",
          ...
        },
    "lat": 50.2598987,
    "lon": 19.0215852,
    "country": "PL",
    "state": "Silesian Voivodeship"
  }
]
```

W ten sposób otrzymaliśmy nazwy miejscowości w różnych językach, kraj i województwo, ale najważniejszą informacją dla nas jest *lat* i *lon* czyli długość i szerokość geograficzna, które są wymagane do pobrania pogody w odpowiednim rejonie. 