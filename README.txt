COACH TASCABILE V9

Novità principali:
- Avambracci e collo spostati fuori dalla scheda principale: ora sono una scheda separata “Extra”, opzionale.
- La scheda principale resta su 5 giorni con focus petto 8 settimane e circa 17 serie dirette petto/settimana.
- Sezione Dieta aggiornata con convertitore porzioni: puoi scambiare riso, pasta, patate, polenta, pane, noodles, avena.
- La funzione “Segna” ora conta solo le serie completate: uno spicchio = una serie, non una ripetizione.
- Nuova “Serie guidata”: apri un esercizio, tocchi “Serie completata”, parte il timer recupero, poi la app torna alla serie successiva.
- Timer migliorato: pulsanti più visibili, più spazio sopra il menu basso, suono, vibrazione, prova suono, richiesta notifiche e pulsante “Tieni schermo acceso” quando supportato.
- Cache aggiornata a v9 per GitHub Pages.

Nota importante sul timer a schermo bloccato:
Una web app HTML/JS su Safari/iPhone può essere sospesa o rallentata quando lo schermo si blocca. La v9 usa il calcolo sull’orario reale, quindi al ritorno recupera il tempo corretto, e prova a usare Wake Lock se disponibile. Tuttavia un suono preciso a schermo completamente bloccato non è garantibile in una web app statica. Per la massima affidabilità lascia lo schermo acceso durante il recupero, oppure usa il pulsante “Tieni schermo acceso” se funziona sul tuo dispositivo.

Come aggiornare GitHub Pages:
1) Decomprimi coach_tascabile_app_v9.zip.
2) Entra nella cartella coach_tascabile_v9.
3) Carica su GitHub il contenuto interno della cartella, non la cartella intera.
4) index.html deve stare nella root del repository.
5) Dopo l’upload apri il sito con ?v=9 per evitare cache Safari.
6) Se Safari mostra ancora la vecchia versione, elimina i dati sito di github.io o rimuovi e riaggiungi l’icona dalla schermata Home.

File inclusi:
- index.html
- styles.css
- app.js
- manifest.json
- service-worker.js
- assets/icon-192.png
- assets/icon-512.png
