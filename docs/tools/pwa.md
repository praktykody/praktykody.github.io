# PWA

![PWA logo](../images/logo_pwa.png)

## Progresywna aplikacja internetowa ( PWA ) 
Rodzaj oprogramowania dostarczonego przez sieci , zbudowany przy użyciu typowych technologii internetowych w tym HTML , CSS i JavaScript . Przeznaczony jest do pracy na dowolnej platformie korzystającej z przeglądarki zgodnej ze standardami , w tym zarówno na komputerach stacjonarnych, jak i urządzeniach mobilnych .

Podczas premiery iPhone'a w 2007 roku Steve Jobs ogłosił, że aplikacje internetowe, opracowane w HTML5 z wykorzystaniem architektury AJAX , będą standardowym formatem aplikacji na iPhone'a. Nie był wymagany żaden zestaw programistyczny (SDK), a aplikacje byłyby w pełni zintegrowane z urządzeniem za pośrednictwem silnika przeglądarki Safari . [5] Ten model został później przeniesiony do App Store, aby zapobiec włamywaczom do jailbreaków i uspokoić sfrustrowanych programistów. [6] W październiku 2007 Jobs ogłosił, że pakiet SDK zostanie uruchomiony w następnym roku. [5] W rezultacie, chociaż Apple nadal wspierało aplikacje internetowe, zdecydowana większość aplikacji na iOS przesunęła się w stronę App Store.

Firefox wypuścił Firefox OS w 2013 roku. Miał być systemem operacyjnym typu open source do uruchamiania aplikacji internetowych jako aplikacji natywnych na urządzeniach mobilnych, z interfejsem HTML5 zbudowanym z Gaia. Rozwój Firefox OS zakończył się w 2016 roku.

Copy paste: https://en.wikipedia.org/wiki/Progressive_web_application

## Minimalne wymagania (wg. pwabuilder.com)

1. Bezpiecznie . Bezpieczne połączenie (HTTPS) w Twojej witrynie zapewnia, że ​​cały ruch jest tak samo bezpieczny jak aplikacja natywna. Bezpieczny punkt końcowy umożliwia również pracownikowi usług bezpieczne podejmowanie działań w imieniu aplikacji.
2. Manifest standardowy . Witryna powinna być kontrolowana przez manifest W3C, który określa doświadczenie i zachowanie Twojego PWA. Obejmuje to wszystko, od obrazów, przez język, po stronę początkową Twojej aplikacji internetowej.
INSTRUKCJE: https://www.w3.org/TR/appmanifest/
Niezależność od sieci . Progresywna aplikacja internetowa powinna mieć mechanizm (np. Poprzez Service Workera), który pomaga kontrolować ruch, gdy sieć nie istnieje lub nie jest niezawodna. Aplikacja powinna działać niezależnie od sieci.
Responsywność . Witryna powinna być responsywna na tabletach i urządzeniach mobilnych.
Cross-Browser . Witryna powinna działać w wielu przeglądarkach (np. Chrome, Edge, Firefox i Safari).

Głębokie linkowanie . Każda strona serwisu powinna mieć unikalny adres URL (poszczególne strony można głęboko połączyć poprzez adresy URL, np. W celu udostępnienia w mediach społecznościowych).

Szybki start zapewni narzędzia do spełnienia niektórych z powyższych wymagań, takich jak zbudowanie manifestu W3C i umożliwienie niezależności sieci. Jednak za spełnienie pozostałych wymagań odpowiada twórca witryny.
Źródło : http://docs.pwabuilder.com/what/is/a/pwa/2018/02/03/pwa-min-requirements.html

## Wymagania - wg Google Devs - rozszerzenie

Progresywny - działa dla każdego użytkownika, niezależnie od wyboru przeglądarki, przy użyciu zasad stopniowego ulepszania .
(Chodzi o to, że jak masz słabą przeglądarkę to appka się wyświetla, ale ma mniej funkcji - te możliwe do zrealizowania)
App-like - użytkownik czuje się jak aplikacja z interakcjami i nawigacją w stylu aplikacji.
Świeża - zawsze aktualna dzięki procesowi aktualizacji Service Worker.
Możliwość ponownego zaangażowania - możliwość korzystania z powiadomień push w celu utrzymania interakcji z użytkownikiem.
Możliwość instalacji - zapewnia ikony ekranu głównego bez korzystania z App Store.
Odwołaj się do manifestu aplikacji internetowej z co najmniej czterema kluczowymi właściwościami: name, short_name, start_url i display (z wartością standalone lub fullscreen)
Ikona co najmniej 144 × 144 duża w formacie PNG.
Korzystanie z grafiki wektorowej, która jest nieskończenie skalowalna i wymaga mniejszych rozmiarów plików.


## TECHNOLOGIE

### Manifest
Web app manifest jest W3C Szczegółowy wyznaczającą JSON -na oczywisty (zwykle oznaczone manifest.json) , aby zapewnić projektantom scentralizowanego miejsca do wprowadzenia metadanych związanych z aplikacji WWW obejmującej:
Nazwa aplikacji internetowej
Linki do ikon aplikacji internetowej lub obiektów graficznych
Preferowany adres URL do uruchamiania lub otwierania aplikacji internetowej
Dane konfiguracyjne aplikacji internetowej
Domyślna orientacja aplikacji internetowej
Możliwość ustawienia trybu wyświetlania, np. Pełnego ekranu
Te metadane są kluczowe, aby aplikacja została dodana do ekranu głównego lub w inny sposób wymieniona obok aplikacji natywnych.

### Wsparcie iOS
iOS Safari częściowo implementuje manifesty, podczas gdy większość metadanych PWA można zdefiniować za pomocą rozszerzeń specyficznych dla Apple do metatagów. Te tagi umożliwiają programistom włączanie wyświetlania na pełnym ekranie, definiowanie ikon i ekranów powitalnych oraz określanie nazwy aplikacji. 

### WebAssembly
WebAssembly umożliwia uruchamianie wstępnie skompilowanego kodu w przeglądarce internetowej z prędkością bliską natywnej. W ten sposób biblioteki napisane w językach takich jak C można dodawać do aplikacji internetowych. Ze względu na koszt przekazywania danych z JavaScript do WebAssembly , krótkoterminowe zastosowania będą polegały głównie na przetwarzaniu liczb (takich jak rozpoznawanie głosu i widzenie komputerowe), a nie na całych aplikacjach.

### Przechowywanie danych
Konteksty wykonywania progresywnych aplikacji internetowych są rozładowywane, gdy tylko jest to możliwe, więc progresywne aplikacje internetowe muszą przechowywać większość długoterminowego stanu wewnętrznego (dane użytkownika, dynamicznie ładowane zasoby aplikacji) na jeden z następujących sposobów

### Web Storage
Główny artykuł: przechowywanie w Internecie
Web Storage to standardowy interfejs API W3C, który umożliwia przechowywanie wartości klucza w nowoczesnych przeglądarkach. Interfejs API składa się z dwóch obiektów, sessionStorage (który umożliwia przechowywanie tylko sesji, które jest wymazywane po zakończeniu sesji przeglądarki) i localStorage (które umożliwia przechowywanie, które utrzymuje się między sesjami). 

### Service workers
Service Worker to “pracownik sieciowy”, który implementuje programowalny sieciowy serwer proxy, który może odpowiadać na żądania WWW / HTTP głównego dokumentu. Jest w stanie sprawdzić dostępność zdalnego serwera i buforować zawartość, gdy ten serwer jest dostępny, i udostępniać ją później do dokumentu. Service workers, podobnie jak wszyscy inni pracownicy sieci, pracują niezależnie od głównego kontekstu dokumentu. Service workers mogą obsługiwać powiadomienia push i synchronizować dane w tle, buforować lub pobierać żądania zasobów, przechwytywać żądania sieciowe i otrzymywać scentralizowane aktualizacje niezależnie od dokumentu, który je zarejestrował, nawet gdy ten dokument nie jest załadowany. 
Service workers przechodzą przez trzyetapowy cykl rejestracji , instalacji i aktywacji . 

1. Rejestracja polega na przekazaniu przeglądarce lokalizacji service worker’a przygotowującego się do instalacji. 
2. Instalacja ma miejsce, gdy w przeglądarce nie ma zainstalowanego narzędzia Service Worker dla aplikacji sieci Web lub jeśli jest aktualizacja tego narzędzia. 
3. Aktywacja następuje, gdy wszystkie strony PWA są zamknięte, dzięki czemu nie ma konfliktu między poprzednią wersją a zaktualizowaną. Cykl życia pomaga również zachować spójność podczas przełączania między wersjami mechanizmu Service Worker, ponieważ tylko jeden Service Worker może być aktywny dla domeny.

### Indexed Database API 
Indexed Database API to standardowy interfejs API bazy danych W3C dostępny we wszystkich głównych przeglądarkach. Interfejs API jest obsługiwany przez nowoczesne przeglądarki i umożliwia przechowywanie obiektów JSON i dowolnych struktur reprezentowanych jako ciąg. Interfejs API indeksowanej bazy danych może być używany z biblioteką opakowującą zapewniającą dodatkowe konstrukcje wokół niego.


