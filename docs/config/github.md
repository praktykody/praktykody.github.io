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

## Połącz VSC z GIT i GitHub przez tworzenie repozytorium
<!-- 1. Upewnij się, że VSC nie był włączony przed GITem ( profilaktycznie możesz zrestartować VSC) -->
1. Wyłącz VSC
2. Swórz folder USERNAME.github.io
3. Otwórz folder Visualem 
    - prawym na folder i otórz za pomocą VSC, 
    - albo otwieramy VSC, CTRL + K + O i z listy wybieramy folder
4. Stwórz plik *readme.md* i wpisz do niego treść
5. Otwórz terminal w VSC ( CTRL + ` )
6. Skonfiguruj swoje konto git:
```bash
git config --global user.name [TWÓJ_USERNAME]
git config --global user.email [TWÓJ_EMAIL]
```
7. Kliknij na kontrolę źródła (3 ikonka na lewej belce), "publish to github" -> public repository -> OK, a następnie autoryzuj się.

## Połącz VSC z GIT i GitHub przez pobieranie repozytorium
1. Znajdź interesujące Cię repozytorium
2. Zaakceptuj do niego zaproszenie (lub forkuj)
3. Sprawdź credentiale w VSC i w menadżerze poświadczeń
4. Skonfiguruj swoje konto git:
```bash
git config --global user.name [TWÓJ_USERNAME]
git config --global user.email [TWÓJ_EMAIL]
```
5. Otwórz terminal w VSC ( CTRL + ` ), wybierz lokalizację i pobierz repozytorium.
```bash
cd /desktop
git clone adres_url_repozytorium
# następnie otwórz sklonowany folder za pomocą VSC: 
code nazwa_repozytorium
```




## Najczęściej występujące problemy i ich rozwiązania

### Nie można połączyć się z repozytorium 
- Możliwa przyczyna: 
    - ktoś wcześniej autoryzował się na tym komputerze
- Rozwiązanie: 
    - usuń poprzedniego użytkownika z menadżera poświadczeń ( win + R -> "control" -> Konta użytkowników -> Zarządzaj poświadczeniami systemu Windows) - tam znajdź poświadczenia "git" lub "github" i usuń je 

### Nie działa git pull | push 
- Możliwa przyczyna: 
    - ktoś wcześniej zalogował się na VSC
- Rozwiązanie 
    - wyloguj się w lewym pasku (activity bar) na ikonce chłopka (Accounts) -> czyiś username -> Sign Out