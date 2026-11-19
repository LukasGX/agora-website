# Funkstation & Smart City Lindau

Projektseite des P-Seminars Physik 2026/27 am Bodensee-Gymnasium Lindau.

Das Seminar (16 Schülerinnen und Schüler der 11. Jahrgangsstufe) baut zwei Projekte:

1. **LoRaWAN-Gateway-System** – Sensoren messen Umweltdaten (Bodenseewasser, Luftqualität,
   Temperatur, Luftfeuchtigkeit, Licht, Lärm) und senden sie per LoRaWAN an ein Gateway auf dem
   Schulgelände. Das Gateway hängt am The Things Network und steht auch anderen in der Region
   offen. Die Messwerte werden über einen Webserver veröffentlicht.
2. **Funkstation** – eine Station mit Funkgeräten und Antennen auf dem Schulgelände, mit WebSDR
   (Funkempfang im Browser) und geplanten Funkkontakten zu Neumayer III, Polarstern und zur ISS.

Fachlich unterstützt der Deutsche Amateur-Radio-Club (DARC) e. V. Die Umsetzung hängt von
Projektverlauf, technischer Machbarkeit und Finanzierung ab.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Start: Überblick über beide Projekte |
| `lorawan.html` | Projekt 1: LoRaWAN-Gateway-System |
| `funkstation.html` | Projekt 2: Funkstation |
| `ueber-uns.html` | Team, Unterstützung, Kontakt |
| `kalender.html` | Projektkalender |
| `impressum.html`, `datenschutz.html`, `404.html` | Rechtliches und Fehlerseite |

## Aufbau

Statische Seiten ohne Build-Schritt und ohne Abhängigkeiten.

```
assets/css/tokens.css     Farben, Schriftgrößen, Abstände
assets/css/base.css       Reset, Typografie, Kopf- und Fußzeile, Buttons
assets/css/content.css    Seitenkopf, Leitung mit Abschnitten, Bausteine
assets/css/home.css       Hero und Projektkacheln der Startseite
assets/css/kalender.css   Kalender
assets/js/site.js         Mobiles Menü, mitwachsende Leitung
assets/js/kalender.js     Kalenderlogik
assets/fonts/             Archivo und IBM Plex Mono, lokal ausgeliefert
server.py                 Statischer Server und Kalender-API
```

Kopf- und Fußzeile stehen in jeder HTML-Datei. Wer die Navigation ändert, ändert sie in allen
Seiten. Die Gestaltungsregeln stehen in [DESIGN.md](DESIGN.md).

## Lokal starten

```sh
python server.py 8000
```

Der Server liefert die Seiten und die Kalender-API unter `/api/events` aus. Die Termine liegen in
`data/events.json`; die Datei entsteht beim ersten Schreiben und gehört nicht zum Repository.
Für den Zugriff aus dem lokalen Netz:

```sh
HOST=0.0.0.0 python server.py 8000
```

Ist die API nicht erreichbar, speichert der Kalender in `localStorage`; die Termine bleiben dann
nur in diesem Browser. Der Schreibzugriff auf die API ist offen. Vor einem öffentlichen Betrieb
sollte sie durch Authentifizierung, Rate-Limits oder einen vorgeschalteten Proxy geschützt werden.
