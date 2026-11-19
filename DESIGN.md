# Gestaltung

Ruhiges Blau als Fläche, Papierweiß als Schrift, Gelb als kleiner Akzent. Keine Rundungen, keine
Schatten, keine Verläufe. Ordnung entsteht durch Linien, Abstände und Schriftgrößen.

Alle Werte stehen als Custom Properties in [assets/css/tokens.css](assets/css/tokens.css).
Komponenten verwenden diese Tokens statt eigener Farb- und Abstandswerte.

## Farbe

| Token | Wert | Verwendung |
|---|---|---|
| `--blue` | `#1226c9` | Seitenhintergrund, Funkstation-Termine |
| `--blue-deep` | `#0c1a96` | Kacheln, Hinweise, Fußzeile |
| `--blue-light` | `#2f45e0` | Hover auf Projektkacheln |
| `--paper` | `#f2f0e7` | Schrift auf Blau, Kalenderfläche |
| `--ink` | `#0a0a0b` | Schrift auf Papier, ausgewählter Tag, Meilensteine |
| `--signal` | `#e9ff00` | Aktiver Menüpunkt, Knoten auf der Leitung, Workshop-Termine |
| `--lavender` | `#cfd8ff` | LoRaWAN-Termine |

Gelb ist nie Textfarbe auf Papier und nie eine große Fläche.

## Schrift

- **Archivo** für Überschriften und Fließtext. `h1` und `h2` in Versalien, Gewicht 900.
- **IBM Plex Mono** für Beschriftungen (`.label`), Navigation, Buttons und Uhrzeiten.
- Größen von `--text-xs` (13 px) bis `--text-hero`. Kein Text ist kleiner als 13 px.
- Fließtext höchstens `--measure` (66 Zeichen) breit.

## Abstände

Eine Skala von `--space-1` (4 px) bis `--space-9` (112 px). Abschnitte haben oben und unten
`--space-8`, Kacheln innen `--space-5` oder `--space-6`.

## Bausteine

| Klasse | Datei | Zweck |
|---|---|---|
| `.btn`, `.btn--solid` | base.css | Schaltflächen |
| `.label` | base.css | Kleine Rubrik in Mono |
| `.page-head` | content.css | Kopf einer Unterseite: Rubrik, `h1`, Einleitung |
| `.track`, `.section` | content.css | Leitung am rechten Rand mit Abschnitten; die Rubrik steht rechts der Linie |
| `.fact-list` | content.css | Begriff und Erklärung in Zeilen |
| `.steps` | content.css | Nummerierte Schritte |
| `.card-grid`, `.card` | content.css | Gleichrangige kurze Punkte |
| `.notice` | content.css | Hinweis mit gelber Kante |

## Kalender

Papierfläche auf Blau. Die Kategorie eines Termins ist seine Füllfarbe: LoRaWAN Lavendel,
Funkstation Blau, Workshops Gelb, Meilensteine Schwarz. Kalenderwochen stehen in einer eigenen
Spalte links. Unter 720 px ersetzt eine Terminliste das Monatsraster.
