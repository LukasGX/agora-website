# Funkstation & Smart City Lindau

Projektseite des P-Seminars Physik 2026/27 am Bodensee-Gymnasium Lindau.

Das Seminar (16 Schülerinnen und Schüler der 11. Jahrgangsstufe) baut zwei Projekte:

1. **LoRaWAN Gateway System** - Sensoren messen Umweltdaten (Bodenseewasser, Luftqualität,
   Temperatur, Luftfeuchtigkeit, Licht, Lärm) und senden sie per LoRaWAN an Gateways auf dem
   Schulgelände und im ganzen Stadtgebiet von Lindau. Die Gateways hängen am The Things Network
   und stehen auch anderen in der Region offen. Die Messwerte werden über einen Webserver
   veröffentlicht.
2. **Funkstation** - eine Station mit Funkgeräten und Antennen auf dem Schulgelände, mit WebSDR
   (Funkempfang im Browser), Satellitenfunk und geplanten Funkkontakten zu den
   Forschungsstationen Neumayer III und Polarstern.

Die Umsetzung hängt von Projektverlauf, technischer Machbarkeit und Finanzierung ab.

## Partner und Stand

| Partner                                   | Stand                                                                                                        |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Deutscher Amateur-Radio-Club (DARC) e. V. | Fachliche Unterstützung                                                                                      |
| Institut für Seenforschung, Langenargen   | Kontakt für die Messungen am See                                                                             |
| Rose Plastic                              | Unterstützung zugesagt. Wunsch: Gehäuse für die Sensoren. Der Umfang hängt von unserer Kostenaufstellung ab. |
| JT-elektronik GmbH, Lindau                | Positive Rückmeldung, persönliches Gespräch als nächster Schritt                                             |

JT-elektronik entwickelt und fertigt Inspektions- und Messsysteme (Kameratechnik, Sensorik,
Elektronik, Steuerungen, Messdatenverarbeitung). Mögliche Unterstützung:

- elektronische Bauteile, Kabel, Steckverbindungen oder Leiterplatten
- Beratung beim Anschluss der Sensoren an einen Mikrocontroller
- Hilfe bei Verarbeitung und Übertragung der Messdaten
- Beratung zu wetterfesten Gehäusen und Stromversorgung der Messkästen
- fachliche Betreuung durch einen Mitarbeiter
- eine eigene Platine für den Satellitenfunk

### Offene Punkte

- **Kostenaufstellung** erstellen. Rose Plastic und JT-elektronik brauchen eine konkrete Liste,
  um sagen zu können, wobei sie helfen.
- **Plan für JT-elektronik**: was wir bauen wollen und welche Materialien wir brauchen. Am besten
  mit einem konkreten Anwendungsfall, der vorher mitgeteilt wird.
- **Besuche vor Ort** bei beiden Firmen, auch zur Berufsorientierung. Bei Rose Plastic die
  Fertigung ansehen; eventuell eigene Gehäuse modellieren und dort fertigen.
- **Satellitenfunk** wird ein größeres Entwicklungsprojekt (Software Defined Radio ADALM Pluto,
  eventuell eigene Platine).

## Seiten

| Datei                                            | Inhalt                               |
| ------------------------------------------------ | ------------------------------------ |
| `index.html`                                     | Start: Überblick über beide Projekte |
| `lorawan.html`                                   | Projekt 1: LoRaWAN-Gateway-System    |
| `funkstation.html`                               | Projekt 2: Funkstation               |
| `ueber-uns.html`                                 | Team, Unterstützung, Kontakt         |
| `kalender.html`                                  | Projektkalender                      |
| `impressum.html`, `datenschutz.html`, `404.html` | Rechtliches und Fehlerseite          |

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
assets/img/team.jpg       Teamfoto (ohne Metadaten)
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
