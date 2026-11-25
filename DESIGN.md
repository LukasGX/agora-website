# Gestaltung

Ruhiges Blau als Fläche, Papierweiß als Schrift, Gelb als kleiner Akzent. Flache Flächen ohne
Verläufe, abgerundete Ecken nach der Tailwind-Skala, eine einzige Bewegungskurve.

Die Regeln folgen dem Skill `.claude/skills/landing-page-design`. Abweichungen sind bewusst
und unten markiert. Alle Werte stehen als Custom Properties in
[assets/css/tokens.css](assets/css/tokens.css); Komponenten verwenden nur diese.

## Farbe

| Token | Wert | Verwendung |
|---|---|---|
| `--blue` | `#1226c9` | Seitenhintergrund, Funkstation-Termine |
| `--blue-deep` | `#0c1a96` | Karten, Projekt 2, Fußzeile |
| `--paper` | `#f2f0e7` | Schrift auf Blau, Kalenderfläche, Hauptbutton |
| `--ink` | `#0a0a0b` | Schrift auf Papier und Lavendel, ausgewählter Tag |
| `--signal` | `#e9ff00` | Knoten auf der Leitung, Schrittnummern, Hinweise, Workshop-Termine |
| `--lavender` | `#cfd8ff` | Projekt 1 (LoRaWAN), LoRaWAN-Termine |

Projekt 1 ist überall Lavendel, Projekt 2 dunkles Blau, auf der Startseite wie im Kalender.
Gelb ist nie Textfarbe auf Papier und nie eine große Fläche.

**Abweichung:** Der Skill sieht dunkle Neutraltöne als Hintergrund vor. Das Blau bleibt, weil es
das Erkennungszeichen des Projekts ist.

## Schrift

- **Archivo** für Überschriften, Fließtext und Buttons. Höchstens Gewicht 700, Überschriften 600.
- **IBM Plex Mono** nur für Rubriken (`.label`), Kalenderwochen und Uhrzeiten.
- Größen nur aus der Tailwind-Skala (`--text-xs` 12 px bis `--text-6xl` 60 px), jeweils mit
  der zugehörigen Zeilenhöhe. Überschriften rücken auf schmalen Bildschirmen eine Stufe tiefer.
- Benannte Textstile in [base.css](assets/css/base.css): `h1` = Heading 1, `h2` = Heading 3,
  `h3` = Heading 5, dazu `.heading-*`, `.title-*`, `.lead` (Title 2), `.label` (Caption 1).
- Überschriften im Satzanfang groß, ohne Versalien. `text-wrap: balance` für Überschriften,
  `pretty` für Fließtext.
- Keine Bindestriche im selbst formulierten Text („LoRaWAN Gateway System").

**Abweichung:** Der Skill empfiehlt Geist, Manrope oder Poppins. Archivo und IBM Plex Mono
bleiben auf Wunsch.

## Abstände und Radien

- Abstände nur aus `--space-0` bis `--space-900` (0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96 px).
- Buttons: 8 px oben und unten, 12 px seitlich, mindestens 44 px hoch.
- Radien: `--radius-sm` 4, `-lg` 8 (Buttons, Felder), `-xl` 12, `-2xl` 16 (Karten, Kalender),
  `-3xl` 24 (Projektkarten), `-full` (Navigation, Punkte).
- Verschachtelt gilt innen = außen − Abstand, wenn das Ergebnis größer als 2 ist.
- Rahmen immer ringsum, nie nur an einer Seite einer Karte.

## Bewegung

- Eine Kurve: `--ease` = `cubic-bezier(0.22, 1, 0.36, 1)`. 500 ms für Bewegung, 300 ms für
  Farbe, 700 ms für Reveals.
- Abschnitte (`[data-reveal]`) steigen einmal um 32 px auf, ausgelöst per IntersectionObserver.
- Der Leitsatz (`[data-words]`) wird Wort für Wort hell, sobald jedes Wort 70 % der
  Fensterhöhe passiert.
- `prefers-reduced-motion` schaltet Bewegung ab und zeigt den Leitsatz sofort ganz.

## Bausteine

| Klasse | Datei | Zweck |
|---|---|---|
| `.site-header` | base.css | Schwebende Navigation; auf dem Handy Vollbildmenü |
| `.btn`, `.btn--solid` | base.css | Buttons, optional mit Pfeil (`.icon`, Phosphor) |
| `.page-head` | content.css | Kopf einer Unterseite |
| `.track`, `.section` | content.css | Leitung am rechten Rand; die Rubrik steht rechts der Linie |
| `.tagline` | content.css | Großer Leitsatz mit Wort-Reveal |
| `.fact-list`, `.steps`, `.card-grid`, `.notice`, `.faq` | content.css | Inhaltsbausteine |
| `.project--lorawan`, `.project--funk` | home.css | Die zwei Projektkarten |

Icons kommen aus Phosphor und stehen als Inline-SVG im HTML.

## Kalender

Papierfläche mit 16 px Radius auf Blau. Die Kategorie eines Termins ist seine Füllfarbe:
LoRaWAN Lavendel, Funkstation Blau, Workshops Gelb, Meilensteine Schwarz. Kalenderwochen stehen
in einer eigenen Spalte links. Unter 720 px ersetzt eine Terminliste das Monatsraster.
