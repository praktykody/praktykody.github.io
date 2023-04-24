# CHAT AI

<iframe src="src_html/chatai.html" style="min-height:40vh;border:none;z-index:1;"></iframe>

<!-- [Dokumentacja API](https://platform.openai.com/docs/api-reference/chat/create) -->

<!-- MAYBE THIS: ?
https://rapidapi.com/farish978/api/ai-chatbot/pricing -->

## Zdobądź klucz API
<!-- 1. [Zaloguj się / zarejestruj](https://platform.openai.com/overview) do open AI - producenta chatu GPT -->

<!-- 2. Weź swój API key [stąd](https://platform.openai.com/account/api-keys)
  - Kliknij "Create new secret key" 
  - wpisz "chatbot"
  - Kliknij zielony przycisk "Create secret key" 
  - Skopiuj klucz
-->
1. Zaloguj się / Zarejestruj [w RAPIDAPI](https://rapidapi.com/auth/sign-up?referral=/hub) 
serisu gdzie znajdziesz różne API (interfejsy programistyczne)
2. Pobierz swój [API_KEY](https://rapidapi.com/farish978/api/ai-chatbot/pricing) do API "ai-chatbot", która będzie robić za sztuczną inteligencję.

## HTML 
Żeby zbudować okno czatu, potrzebujemy listy wiadomości *.chatBox*, miejsca na wpisanie wiadomości *#message* oraz przycisku je wysyłające *button*. Elementy *.wrapper* oraz *.message* są po to, żeby prościej ustawić style.
```html
<div class="wrapper">
    <div class="chatBox"></div>
    <div class="message">
      <input type="text" id="message">
      <button onclick="send()">SEND</button>
    </div>
</div>
```

Żeby prościej wysyłać zapytania (request) na serwer API i otrzymywać odpowiedzi (response) warto zaopatrzyć się w wygodną bibliotekę [axios](https://github.com/axios/axios). Możemy ją podpiąć do strony za pomocą CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.6/axios.min.js" integrity="sha512-06NZg89vaTNvnFgFTqi/dJKFadQ6FIglD6Yg1HHWAUtVFFoXli9BZL4q4EO1UTKpOfCfW5ws2Z6gw49Swsilsg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## JS 
Przycisk button z html'a podpięty jest do funkcji "send", więc trzeba takową stworzyć. Następnie za pomocą DOM możemy pobrać wszystkie funkcyjne elementy z html. Każde kliknięcie na send powinno wrzucać do czatu wiadomość od użytkownika i czyścić pole wpisywania w HTML, więc:  

```js
function send() {
  const message = document.getElementById("message").value
  const chatBox = document.querySelector(".chatBox")
  chatBox.innerHTML += `<div class="user">${ message }</div>`
  document.getElementById("message").value = ""
  // tu będzie API request
}
```

### Zapytanie do API (API REQUEST)
```js
axios.request({
  method: 'GET',
  url: 'https://ai-chatbot.p.rapidapi.com/chat/free',
  params: { message, uid: 'user1' },
  headers: {
    'X-RapidAPI-Key': env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
  }
}).then(d => {
  chatBox.innerHTML += `<div class="bot">${ d.data.response }</div>`
})
```