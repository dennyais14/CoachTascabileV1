COACH TASCABILE V7.1

Questa versione corregge il problema di cache per cui Safari/GitHub Pages poteva continuare a mostrare la v6 con il solo pulsante “Apri guida”.

Novità confermate:
- sotto ogni esercizio ci sono i tre pulsanti: Dettagli, Recupero, Segna
- “Segna” apre una schermata con ruote a spicchi per segnare le ripetizioni/serie
- quando tutte le serie sono complete, il pulsante diventa “Completo”
- cache-busting: index.html richiama app.js?v=7.1 e styles.css?v=7.1
- service worker aggiornato con cache coach-tascabile-v7-1

Come aggiornare GitHub Pages:
1) Decomprimi coach_tascabile_app_v7_1.zip.
2) Apri la cartella coach_tascabile_v7_1.
3) Carica su GitHub il contenuto interno della cartella, non la cartella intera.
4) Dopo l’upload apri il sito con ?v=7.1.
5) Se Safari mostra ancora la vecchia versione, elimina i dati sito di github.io o rimuovi e riaggiungi l’icona dalla schermata Home.
