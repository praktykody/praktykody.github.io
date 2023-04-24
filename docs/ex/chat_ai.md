# CHAT AI

<iframe src="src_html/chatai.html" style="min-height:40vh;border:none;z-index:1;"></iframe>

[Dokumentacja API](https://platform.openai.com/docs/api-reference/chat/create)

MAYBE THIS: ?
https://rapidapi.com/farish978/api/ai-chatbot/pricing

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
### HTML 

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

### JS 