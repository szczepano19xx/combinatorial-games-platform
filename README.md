# Combinatorix

Combinatorix - platforma do badania różnych algorytmów SI dla gier kombinatorycznych tworzona w ramach projektu
zaliczeniowego na przedmiocie _Wprowadzenie do teorii gier_.

## Uruchomienie aplikacji we własnym środowisku

Uwaga! Proszę stosować _node.js_ w wersji co najmniej 16.

1. Pobranie repozytorium.
2. Uruchomienie komendy `npm install`.
3. Uruchomienie komendy `npx gulp`, która powinna uruchomić proces budowania przystosowany do dalszego rozwoju.
4. Uruchomienie w przeglądarce pliku `index.html` z katalogu `dist`.

## Dodanie gry

1. Utworzenie katalogu w ścieżce `src/games` z nazwą odpowiadającą grze.
2. Skopiowanie plików z folderu `_template`.
3. Wpisanie nazwy gry w pliki `config.json`.
4. W pliku `authors.md` (format Markdown) wpisujemy notatkę dotyczącą oryginalnych autorów gry i implementacji.
5. W pliku `description.md` wpisujemy opis i zasady gry.
6. Uzupełnienie pozostałych plików wg etapu realizacji projektu.

Wszystkie obrazki w plikach MD należy ładować ze ścieżki `images/nazwa gry/nazwa pliku obrazka`. Z kolei w pliku CSS
wczytujemy ze ścieżki `../../images/nazwa gry/nazwa pliku obrazka`.

### Podstawowa wersja gry (gracz i gracz losowy)

1. W pliku `game.logic.js` uzupełniamy:
    1. `generateInitialState`,
    2. `generateMoves`,
    3. `generateStateAfterMove`,
    4. `isStateTerminal`.
2. W pliku `game.visualization.js` uzupełniamy:
    1. `drawState`,
    2. `handleHumanTurn`,
    3. `getTruePlayerName`,
    4. `getReadableMoveDescription`,
    5. `getReadableWinnerName`.

W celu wizualizacji planszy można użyć również pliku `game.css`.

Do dyspozycji są biblioteki [Bootstrap 5.3.2](https://getbootstrap.com/), [JQuery 3.7.1](https://jquery.com/) oraz
[JQUery UI 1.13.2](https://jqueryui.com/).
