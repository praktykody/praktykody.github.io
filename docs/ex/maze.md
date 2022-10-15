# MAZE GAME

<iframe src="src_html/maze.html" style="min-height:40vh;border:none;z-index:1;"></iframe>

Stwórz grę wg przykładu.

Gra powinna się rozpoczynać od przyciśnięcia przycisku “start”, a kończyć, po nakierowaniu kursora na pole “meta”. Po “najechaniu” na czerwoną barierkę tracisz życie, a kiedy ich zabraknie, wyświetlić powinien się alert(“game over”) - to samo po przekroczeniu czasu. 


1. Stwórz .game + CSS
2. Stwórz wall w js



## 1. Stwórz gamePlane - miejsce na grę

Stwórz
<div class="gamePlane"></div>
I sformatuj go tak, aby zajmował równą część strony (w CSS)

## 2. makeWall() - czyli funkcja do tworzenia scian

Utwórz tag &lt;script>, a w środku utwórz funkcję makeWall() przyjmującą wartości:

 function makeWall(w,h,x,y){ // pobieranie wartości: szerokość, wysokość, x, y
      const wall = document.createElement("div"); // tworzenie tagu "div"
      wall.className = "wall"; // dodawanie do niego class="wall"
      wall.style.width = w+"vw"; // ustalanie jego szerokości
      wall.style.height = h+"vh"; // ustalanie jego wysokości
      wall.style.marginLeft = x+"vw"; // ustalenie punktu X (poziomo)
      wall.style.marginTop = y+"vh"; // ustalanie punktu Y (pionowo)
      document.querySelector(".gamePlane").append(wall); // przypinanie 
    }

makeWall() - wykonaj funkcję

Dzięki funkcji makeWall możesz stworzyć ściankę i dołączyć ją do istniejącego gamePlan’u. Aby wykonać taką ściankę wywołaj funkcję:
makeWall(10,10,10,10);

TIP: Jeśli nie widzisz ścianki w gamePlanie, ustaw jej background-color w CSS

.wall{
  background-color:red;
}

## 3. Więcej ścian
Aby ściany nie nachodziły na siebie wzajemnie, ustaw klasie .wall pozycję absolutną, a .gamePlane pozycję relatywną.
Następnie stwórz tablicę, dzięki której będziesz mógł/mogła generować całą mapę na poziom:

const stage = [
      [20,5,0,0],
      [15,5,0,10],
      [5,25,10,10],
      [5,25,20,0],
      [30,5,10,30],
      [20,5,20,20]
    ];
Do obsługi tablicy potrzebna jest jeszcze funkcja z pętlą generującą ściany:
  function makeStage(stage){
      for(const w of stage){
        makeWall(w[0],w[1],w[2],w[3]);
      }
    }
## 4. Wywołaj funkcję generującą ściany:
Po ustawieniu tablicy i funkcji generującej 
ściany z tablicy - wywołaj ją:


makeStage(stage);
## 5. Pola start i meta
Pola start i meta będą kolejnymi ścianami mapy - więc tworzymy je w makeWall():
function makeWall(w,h,x,y,type = "wall")
type = “” oznacza, że jeśli parametr type nie zostanie podany (jak w przypadku dotychczasowych walli), to zmienna type będzie zawierałą wartość “wal” w środku funkcji. Jeśli natomiast parametr zostanie podany (np start albo meta, to type przyjmie tą wartość).
Wewnątrz funkcji zmień więc dodawanie klasy elementu na jego typ:
wall.className = type;

## 6. Start i meta w CSS

Aby poprawnie widzieć wszyskie pola, każde z nich musi mieć pozycję absolutną (dzięki czemu będzie się opierał na relatywnym gamePlane), natomiast każdy może mieć inny kolor:

.wall,.start,.meta{
      position:absolute;
    }
    .wall{
      background-color:red;
    }
    .start{
      background-color:green;  
    }
    .meta{
      background-color:blue;    
    }

## 7. Start i meta w makeStage

Aby od razu widzieć zmiany, zaktualizuj funkcję makeStage()w taki sposób, aby przyjmowała nie tylko 4 wartości odpowiedzialne za wielkość i pozycję, ale też za typ:
 for(const w of stage){
    makeWall(w[0],w[1],w[2],w[3],w[4]);
 }

## 8. Start i meta w tablicy stage
Wszystko gotowe, wystarczy teraz ustawić pola start i meta w odpowiednich miejscach, a jako 5 wartość dopisać typ ściany:
    const stage = [
      [10,10,0,0,"start"],
      [20,5,0,0],
      [15,5,0,10],
      [5,25,10,10],
      [5,25,20,0],
      [30,5,10,30],
      [20,5,20,20],
      [10,5,30,25,"meta"]
    ];

## 9. Mechanika gry


Teraz najważniejsze - mechanika. Całość oprzemy na obiekcie game -pakujemy do niego 3 funkcje odpowiedzialne za grę:
	init() - ładowanie gry przy ładowaniu strony
	start() - co ma się dziać po kliknięciu na pole “start” 
	end() - funkcja kończąca grę albo z wygraną, albo z przegraną

+ funkcję initButtons() generującą 
przyciski 
+ obiekt buttons:{} którym będziemy 
zmieniać przyciski (aktywne, nieaktywne)
+ gamePlane - obiekt DOM, aby szybciej
do niego się odnosić (zamiast 
document.querySelector(“.gamePlane”))  

    const game = {
      gamePlane: document.querySelector(".gamePlane"),
      buttons:{},
      initButtons(){},
      init(){},
      start(){},
      end(){}
    }


## 10. Funkcja strzałkowa

Standardową funkcję możemy przerobić na “szybszą” strzałkową funkcję wg poniższego schematu:
    function test(v){
      console.log(v)
    }

    const test = (v) => {
      console.log(v)
    }

## 11. game.initButtons()
Tą funkcję tworzymy, aby łatwo odnosić się do pól .wall, .meta i .start. Funkcja ta aktualizuje przyciski w obiekcie game.buttons. Wymaga 3 działań:
game.buttons.start = this.gamePlane.querySelector(".start");
Powyższa linia dodaje button start do game.buttons - analogicznie będzie z button .meta.
Natomiast .wall wymaga odniesienia się do wszystkich elementów, dlatego odnosimy się do nich za pomocą pętli for:
        

        game.buttons.walls = (func = () => {}) => {
          for(const w of this.gamePlane.querySelectorAll(".wall")){
            w.onmouseover = () => {func()}
          }
        }

## 12. game.init()

To funkcja inicjująca grę - ustawiająca elementy, zanim gra się zacznie. Ta funkcja będzie też domyślnie wywoływana jako pierwsza. Odpowiada za:
- Tworzymy pierwszą mapę - makeStage(stage)
- Inicjujemy przyciski wywołując stworzoną już funkcję initButtons
- Aktywujemy przycisk “start”, aby można było “odpalić” grę

init(){
        makeStage(stage);
        this.initButtons();
        this.buttons.start.onclick = () => { game.start() };
 }

## 13. game.start()

To funkcja odpowiadająca za wystartowanie gry. Po jej wywołaniu będziemy już grać. Odpowiada za:
- Wyłącznie przycisku “start” (bo już zaczęliśmy)
- Włączenie detekcji ścian (żeby po nakierowaniu na nie gra się kończyła)
- Włączenie przycisku meta (żeby po nakierowaniu dało się wygrać)

start(){
        this.buttons.start.onclick = () => {};
        this.buttons.walls(() => {game.end(false)});
        this.buttons.meta.onmouseover = () => {game.end(true);}
 }


## 14. game.end(boolean = false)

Funkcja kończąca grę - pobierająca parametr boolean, który z wartością true wygrywa grę, a false - przegrywa. Dodatkowo, po przegranej grze:
Aktywujemy pole start - aby dało się zagrać ponownie
- Dezaktywujemy pole meta
 i wallsy, żeby nie dało się
 ponownie kończyć
- Wyświetlamy info o wygranej/przegranej

      end(boolean = false){
        this.buttons.start.onclick = () => game.start();
        this.buttons.meta.onmouseover = () => {};
        this.buttons.walls();
        if(boolean){
          console.log("WYGRAŁEŚ!")
        }else{
          console.log("PRZEGRAŁEŚ!")
        }
      }

## 15. game.lives - inicjacja

Najpierw tworzymy DOM, w którym życia będą się pojawiać, a następnie zadeklarujemy domyślną ilość żyć i stworzymy metodę przywracającą konkretną ich ilość, jednocześnie wyświetlając.

lives:{
        dom:document.createElement("div"),
        init(){
          this.valueRestore();
          this.dom.className = "lives";
          this.dom.innerHTML = this.value;
          game.gamePlane.append(this.dom);          
        },
        valueRestore(v = 3){
          this.value = v;
          this.dom.innerHTML = this.value;
        }
	}

## 16. game.lives - wygląd i podpięce

Pole musi się wyróżniać i środkować tekst wewnątrz. Musi też mieć określone miejsce i wielkość. Ponadto musi być w pozycji absolutnej, aby dobrze dostosować się do gamePlanu. 
Aby życia pojawiły się w grze, dodaj do game.init(): 

.lives{
      border:2px dashed blue;
      position:absolute;
      right:0;
      top:0;
      width:10vw;
      height:10vh;
      display:flex;
      justify-content:center;
      align-items:center;
    }

this.lives.init();

## 17. Zmniejszanie żyć i kończenie gry

Następnie do game.lives dodajemy metodę, przez którą życia będą się zmniejszać, a jeśli będą mniejsze niż 1 to gra będzie się kończyć

Metodę tą musimy podpiąć wtedy, 
kiedy w trakcie gry użytkownik nakieruje
kursor na walla w game.start - tam też 
przywracamy domyślną ilość żyć przy 
starcie:

this.lives.valueRestore();
this.buttons.walls(() => {
	game.lives.decrease()
});

decrease(){
  if(this.value > 1){
    this.value--;
    this.dom.innerHTML = this.value;
  }else{
    game.end(false);
  }
 }

## 18. game.time - czas gry

Game.time jest zasadniczo podobne do game.lives, więc inicjujemy je w ten sam sposób. W stylu jednak musimy przesunąć DOM względem lives.

.lives,.time{...}
.time{
      border:2px dashed green;
      right:10vw;
}


 	time:{
        dom:document.createElement("div"),
        init(){
          this.valueRestore();
          this.dom.className = "time";
          this.dom.innerHTML = this.value;
          game.gamePlane.append(this.dom);          
        },
        valueRestore(v = 5){
          this.value = v;
          this.dom.innerHTML = this.value;
        }
 	}

## 19. game.time - wyświetlanie

Analogicznie , aby wyświetlić czas w gamePlanie, wywołaj metodę w game.init()

this.time.init();

## 20. game.time.start()
Aby odliczać czas - stwórz interwał, który będzie obniżał wartośc time.value co 1s (1000ms). Włącz odliczanie w game.start():

this.time.valueRestore();
this.time.start();


, a wyłącz w game.end():

clearInterval(this.time.interval);

start(){
          this.interval = setInterval(() => {
            this.value--;
            this.valueRestore(this.value);
            if(this.value == 0){
              game.end(false);
            }
          }, 1000);
        }
## 21. game.popup


Dobrze stworzyć popup, który będzie informował o zasadach i postępach w grze.
popup:{
 dom : document.createElement("div"),
 init(){},
 update(title = "", desc = "", buttons = []){},
 close(){},
 butts:[]
}


## 22. game.popup.init()

Przy inicjowaniu popup’u - dopinamy DOM do gamePlanu, a następnie tworzymy 3 miejsca - na tytuł, opis i przyciski:
init(){
  game.gamePlane.append(this.dom);
  this.dom.className = "popup";
  this.title = document.createElement("h2");
  this.desc = document.createElement("p");
  this.buttons = document.createElement("span");
  this.dom.append(this.title);
  this.dom.append(this.desc);
  this.dom.append(this.buttons);
},

## 23. game.popup

Dobrze stworzyć popup, który będzie informował o zasadach i postępach w grze.
popup:{
 dom : document.createElement("div"),
 init(){},
 update(title = "", desc = "", buttons = []){},
 close(){},
 butts:[]
}

## 24. game.popup.init()

Przy inicjowaniu popup’u - dopinamy DOM do gamePlanu, a następnie tworzymy 3 miejsca - na tytuł, opis i przyciski:
init(){
  game.gamePlane.append(this.dom);
  this.dom.className = "popup";
  this.title = document.createElement("h2");
  this.desc = document.createElement("p");
  this.buttons = document.createElement("span");
  this.dom.append(this.title);
  this.dom.append(this.desc);
  this.dom.append(this.buttons);
},

## 25. game.popup.close()

To metoda do “znikania” popupu - wystarczy zmienić display jego głównego elementu DOM, na none:


	close(){
     this.dom.style.display = "none";
   }

## 26. game.popup.butts[ … ]
Tutaj deklarujemy tablicę przycisków, które mają się wyświetlać. Definiujemy jak mają się wyświetlać i co mają robić po ich kliknięciu:

butts:[
          ["again","Play again",()=>{game.popup.close()}],
          ["yes","YES",()=>{game.popup.close()}]
        ]

## 27. game.popup.update( … )
To najważniejsza metoda popupu - to nią będziemy wyświetlać (display:flex) i zmieniać wartości w nim zawarte. 
update(title = "",desc = "",buttons = []){
  this.title.innerHTML = title;
  this.desc.innerHTML = desc;
  this.buttons.innerHTML = "";
  for(const bInfo of this.butts){
    if(buttons.includes(bInfo[0])){
      const bt = document.createElement("button");
      bt.innerHTML = bInfo[1];
      bt.onclick = bInfo[2];
      this.buttons.append(bt);
    }
  }
  this.dom.style.display = "flex";
}

## 28. game.popup CSS
Żeby ładnie się nam popup wyświetlał - wystarczy parę stylów CSS:

    .popup{
      background-color:rgba(0, 0, 0, 0.8);
      color:#fff;
      width:100%;
      height:100%;
      z-index:1;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .popup h2{
      margin:0;
    }
    .popup p{
      max-width:70%;
      text-align:center;
    }

## 29. game.popup - wywoływanie


## Wywołujemy popup w paru miejsach. Na pewno przy ładowaniu, czyli game.init():
this.popup.update("Welcome","In this game, you must[...]",["yes"]);
Po wygranej w game.end():
this.popup.update("YOU WIN","What's next?",["again"]);
        
i po przegranej (też w game.end()):
this.popup.update("YOU LOSE","What's next?",["again"]);
        

## 30. Więcej poziomów - game.stage

Aby stworzyć więcej poziomów - stwórz więcej map w stages zamiast stage.

    const stages = [
      [
        [10,10,0,0,"start"],
        [20,5,0,0],
        [15,5,0,10],
        [5,25,10,10],
        [5,25,20,0],
        [30,5,10,30],
        [20,5,20,20],
        [10,5,30,25,"meta"]
      ],
      [
        [10,10,35,70,"start"],
        [5,70,30,10],
        [5,70,45,10],
        [10,10,30,0],
        [15,5,40,0],
        [5,75,55,0],
        [25,5,55,70],
        [25,1,50,79],
        [10,5,70,75,"meta"]
      ],
    ];


## 31. game.stage


Po stworzeniu poziomów, stwórz zmienną, która będzie wpływała na wyświetlane stage w game{}: stage:0, gdzie 0 jest domyślną wartością (pierwszą planszą). Następnie w game.init() dodaj generowanie map ze zemiennej this.stage: makeStage(stages[this.stage]); oraz zaraz na początku wyczyść gamePlane zawsze przy wywoływaniu game.init() : this.gamePlane.innerHTML = ""; - zapobiegnie to wyświetlaniu wielu map na raz.

## 32. game.stage a game.popup

W game.popup.butts musimy stworzyć przyciski nawigujące na następny stage i do gry od nowa: 
  ["next","NEXT STAGE",()=>{game.stage++;game.init();game.popup.close()}],
  ["fromBegin","PLAY FROM BEGINING",()=>{game.stage=0;game.init();game.popup.close()}]
Poza tym, w popup.init, trzeba każdorazowo wyczyścić this.dom.innerHTML = "";  - czyli to samo, co zrobiliśmy w game.init(), z tego samego powodu.

## 33. Wygrywanie / przegrywanie - game.stage

Skoro mamy już stworzony popup, zmieńmy game.end tak, żeby odpowiednie przyciski pojawiały się w odpowienich momentach:
        
	   if(boolean){
          if(this.stage >= stages.length-1){
            this.popup.update("CONGRATULATIONS!","You win all the game.",["again","fromBegin"]);
          }else{
            this.popup.update("YOU WIN","What's next?",["again","next","fromBegin"]);
          }
        }else{
          this.popup.update("YOU LOSE","What's next?",["again","fromBegin"]);
        }

## 34. Popraw wygląd gry - CSS

