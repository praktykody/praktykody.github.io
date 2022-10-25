# GIT - system kontroli wersji
Rozproszony system kontroli wersji. Stworzył go Linus Torvalds jako narzędzie wspomagające rozwój jądra Linux. 

## Systemy kontroli wersji
<div class="standardWrapper">
  <div>
  (ang. version/revision control system) – oprogramowanie służące do śledzenia zmian głównie w kodzie źródłowym oraz pomocy programistom w łączeniu zmian dokonanych w plikach przez wiele osób w różnym czasie.
  </div>
  <div>

  ![Version Control System Scheme](../images/version_control_systems_scheme.svg)
  </div>
</div>

## Historia GIT'a
<div class="standardWrapper">
<div>
Prace nad Gitem rozpoczęły się po tym, jak BitKeeper, używany wtedy do rozwoju Linuksa, przestał być darmowy dla projektów o otwartym kodzie źródłowym. Torvalds szukał rozproszonego systemu kontroli wersji, który mógłby być użyty zamiast BitKeepera, głównymi kryteriami wyboru były:

1. System powinien być rozproszony.
2. System powinien być chroniony przed błędami w repozytorium (przypadkowymi, jak awaria twardego dysku, jak i złośliwymi, wprowadzonymi przez kogoś).
3. System powinien być szybki.

Pierwszy punkt wyeliminował wszystko prócz Monotone'a, a trzeci punkt wyeliminował wszystko, więc Torvalds postanowił napisać własny system kontroli wersji.
</div>
<div>

  ![Linus Torvalds](../images/linustorvalds.jpg)
  
  [Linus Torvalds on GitHub](https://github.com/torvalds)
</div>
</div>



## Instalacja GIT'a
Pobierz instalkę ze strony
[git-scm.com](https://git-scm.com/download/win)
i przeprowadź instalację z domyślnymi ustawieniami, poza domyślnym edytorem, który możesz zmienić na VSC 🙃

![GIT installation](../images/github_installation.webp)

## Rozwiązania oparte na technologii GIT

<div class="standardWrapper">
  <div>
    Jako rozproszony system kontroli wersji, Git nie wymaga odrębnej aplikacji serwerowej. Istnieją jednak pakiety rozszerzające oryginalne oprogramowanie, przede wszystkim o kontrolę dostępu, wsparcie dla zarządzania wieloma repozytoriami, czy interfejs WWW. Przykłady niektórych popularnych projektów to 
    <ul>
      <li>GitHub</li>
      <li>Bitbucket</li>
      <li>GitLab</li>
      <li>Git Daemon</li>
      <li>Gitolite</li>
    </ul>
  </div>
  <div>
    <img src="../images/octocat.webp" alt="GitHub Octocat">
  </div>
</div>