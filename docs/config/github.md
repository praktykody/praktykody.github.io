# GitHub
## Czym jest github?
Platforma hostingowa kodu do kontroli wersji i współpracy. Pozwala Tobie i innym współpracować przy projektach z dowolnego miejsca.

Jak zacząć:
- Utwórz konto na stronie [github.com](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
- Utwórz repozytorium w którym będziesz pracował
- Utwórz rozgałęzienie (Branch)

Domyślnie twoje repozytorium ma jedną gałąź - “master”, która jest uważana za gałąź ostateczną. Korzystamy z gałęzi, aby eksperymentować i wprowadzać zmiany przed ich zatwierdzeniem master.
Kiedy tworzysz gałąź poza “master”, robisz jej kopię lub migawkę, jaka była w tym 
momencie. Jeśli ktoś wprowadził zmiany w “master” podczas pracy nad gałęzią, 
możesz pobrać te aktualizacje.

## Połącz VSC z GIT i GitHub
<!-- 1. Upewnij się, że VSC nie był włączony przed GITem ( profilaktycznie możesz zrestartować VSC) -->
1. Wyłącz VSC
2. Swórz folder USERNAME.github.io
3. Otwórz folder Visualem 
    - prawym na folder i otórz za pomocą VSC, 
    - albo otwieramy VSC, CTRL + K + O i z listy wybieramy folder
4. Stwórz plik *readme.md* i wpisz do niego treść
5. Otwórz terminal w VSC ( CTRL + ` )
6. Skonfiguruj swoje konto git:
```git
git config --global user.name [TWÓJ_USERNAME]
git config --global user.email [TWÓJ_EMAIL]
```
7. Kliknij na kontrolę źródła (3 ikonka na lewej belce), "publish to github" -> public repository -> OK, a następnie autoryzuj się.
