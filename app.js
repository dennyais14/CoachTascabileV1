const VERSION = '17';
const STORE = {
  sets: 'coach_v11_sets',
  measures: 'coach_v11_measures',
  history: 'coach_v11_history',
  loads: 'coach_v11_loads'
};

const workouts = [
  {
    id:'upper-a', name:'Upper A — petto forza + schiena + tricipite', focus:'Petto forza + schiena + capo lungo tricipite', meta:'Petto all’inizio, dorso mantenuto e tricipite più completo con lavoro sopra la testa.',
    exercises:[
      ex('panca-piana-manubri','Panca piana manubri','petto','4','8–12','90–120s','16 kg/mano','Scapole addotte e depresse, petto alto, discesa 2–3 secondi, fermo leggero in basso.'),
      ex('ring-pushup','Ring push-up / Push-up','petto/tricipiti','3','8–12','75–90s','corpo libero/anelli','Se hai gli anelli usa ring push-up controllati; altrimenti push-up classici. Quando chiudi 3×12 pulite, aumenta difficoltà.'),
      ex('croci-cavo-manubri','Croci al cavo o manubri','petto','2','12–20','60–75s','leggero','Allungamento controllato, gomiti morbidi, non usare carico eccessivo.'),
      ex('rematore-manubrio','Rematore manubrio 1 braccio','dorso','3','8–12/lato','90s','18–20 kg','Gomito vicino al fianco, busto stabile, non ruotare per tirare più peso.'),
      ex('trazioni-prone','Trazioni prone / pulldown','dorso','3','6–10','120s','BW o 25–35 kg cavo','Petto verso la barra, scapole attive, ROM pulita prima della zavorra.'),
      ex('alzate-laterali','Alzate laterali','spalle','3','12–20','60s','5–6 kg','Movimento pulito, no slancio. Sono importanti per spalle più larghe.'),
      ex('pushdown-fune','Pushdown tricipiti fune','tricipiti','2','10–15','60s','10–15 kg cavo','Gomiti fermi, estensione completa, non spingere con le spalle.'),
      ex('overhead-triceps','Estensioni tricipiti sopra la testa','tricipiti capo lungo','2','12–15','60–75s','manubrio/cavo leggero','Focus capo lungo: braccia sopra la testa, gomiti stretti, allungamento controllato senza dolore al gomito.'),
      ex('hanging-knee-raise','Hanging knee raise','core','3','8–15','60s','corpo libero','Bacino in retroversione, evita dondolio e slancio.')
    ]
  },
  {
    id:'lower-a', name:'Lower A — gambe + core', focus:'Quadricipiti/glutei + core', meta:'Mantenimento serio delle gambe senza renderle il focus estetico principale.',
    exercises:[
      ex('goblet-squat','Goblet squat','gambe','4','10–15','90–120s','24 kg','Discesa controllata 3 sec se il carico è facile, busto alto, ginocchia stabili.'),
      ex('bulgarian-split-squat','Bulgarian split squat','gambe','4','8–12/gamba','90s','8–10 kg/mano','Prima stabilità e profondità, poi carico. Spingi con tutta la pianta del piede.'),
      ex('rdl-manubri','Romanian deadlift manubri','posteriori','4','8–12','120s','18–20 kg/mano','Anche indietro, schiena neutra, senti femorali e glutei.'),
      ex('affondi-indietro','Affondi indietro','gambe','3','10/gamba','75–90s','6–8 kg/mano','Passo controllato, ginocchio stabile, niente rimbalzi.'),
      ex('calf-raise','Calf raise 1 gamba','polpacci','4','12–20','60s','BW + 16–24 kg','Pausa in alto e allungamento in basso.'),
      ex('plank','Plank','core','3','45–75s','60s','corpo libero','Addome contratto, glutei attivi, non collassare con la lombare.')
    ]
  },
  {
    id:'upper-b', name:'Upper B — dorso/spalle/braccia', focus:'Schiena + spalle + braccia', meta:'Giornata chiave per postura, spalle larghe, fisico a V e sviluppo diretto di bicipiti/tricipiti.',
    exercises:[
      ex('pulldown','Lat machine / pulldown','dorso','4','10–15','90s','25–35 kg cavo','Tira i gomiti verso il basso, non dietro al collo. Petto alto.'),
      ex('rematore-cavo','Rematore al cavo basso','dorso','3','10–15','90s','20–30 kg cavo','Scapole indietro, petto alto, niente slancio lombare.'),
      ex('ring-row','Ring row agli anelli','dorso/bicipiti','2','8–15','75–90s','corpo libero/anelli','Se hai gli anelli, usa questo come richiamo tecnico: corpo rigido e tira gli anelli al petto.'),
      ex('shoulder-press','Shoulder press manubri','spalle','3','8–12','90s','9 kg/mano','Chiudi sopra la testa senza iperestendere la schiena.'),
      ex('alzate-laterali','Alzate laterali','spalle','3','12–20','60s','5–6 kg','Fondamentali per spalle più larghe: leggere, controllate, senza slancio.'),
      ex('face-pull','Face pull','spalle posteriori','3','12–20','60s','5–10 kg cavo','Tira verso fronte/occhi, gomiti alti, lento.'),
      ex('rear-delt-fly','Rear delt fly','spalle posteriori','2','12–20','60s','3–5 kg/mano','Braccia quasi tese, scapole stabili, niente slancio.'),
      ex('curl-barra','Curl barra corta/manubri','bicipiti','3','8–12','60–75s','12–18 kg','Polsi neutri, gomiti fermi, evita swing.'),
      ex('hammer-curl','Hammer curl manubri','bicipiti/brachiale','2','10–12','60s','8–12 kg/mano','Presa neutra, gomiti fermi: utile per braccio più pieno e brachiale.'),
      ex('estensioni-tricipiti','Estensioni tricipiti al cavo','tricipiti','2','10–15','60s','leggero/mod.','Controlla la fase eccentrica e non aprire i gomiti.'),
      ex('overhead-triceps','Estensioni tricipiti sopra la testa','tricipiti capo lungo','2','12–15','60–75s','manubrio/cavo leggero','Secondo richiamo capo lungo: senti allungamento dietro il braccio, senza stressare il gomito.')
    ]
  },
  {
    id:'lower-b', name:'Lower B — posterior chain + core', focus:'Femorali/glutei/addome', meta:'Catena posteriore, core e stabilità: mantenimento completo senza spostare il focus estetico dalle upper.',
    exercises:[
      ex('rdl-pesante','Romanian deadlift pesante','posteriori','4','8–12','120s','18–22 kg/mano','Priorità alla tecnica: anche indietro, schiena neutra, peso vicino alle gambe.'),
      ex('hip-thrust','Hip thrust / Glute bridge','glutei','4','10–15','90s','24 kg','Pausa 1 sec in alto. Se facile usa zaino o manubrio più stabile.'),
      ex('step-up','Step-up su panca','gambe','3','8–12/gamba','75–90s','6–8 kg/mano','Sali controllando il ginocchio, non spingere troppo con la gamba a terra.'),
      ex('sliding-curl','Sliding leg curl','posteriori','3','8–12','75–90s','corpo libero','Bacino alto, estendi lentamente, richiama coi femorali.'),
      ex('calf-raise','Calf raise 1 gamba','polpacci','4','12–20','60s','BW + 16–24 kg','Pausa in alto e allungamento in basso.'),
      ex('cable-crunch','Cable crunch','core','3','12–20','60s','12–20 kg cavo','Chiudi costole verso bacino, non tirare solo con le braccia.'),
      ex('pallof-press','Pallof press','core','3','10–15/lato','45–60s','elastico/cavo','Resisti alla rotazione, bacino fermo, addome attivo.')
    ]
  },
  {
    id:'upper-c', name:'Upper C — petto alto + spalle/braccia', focus:'Petto alto + spalle/braccia', meta:'Seconda seduta petto: mantiene il focus su petto alto ma rinforza anche bicipiti, tricipiti e stabilità agli anelli.',
    exercises:[
      ex('panca-inclinata','Panca inclinata 30° manubri','petto','4','8–12','90–120s','14–16 kg/mano','Petto alto, scapole stabili, non trasformare in shoulder press.'),
      ex('ring-pushup','Ring push-up / Push-up piedi rialzati','petto/tricipiti','2','8–12','75–90s','corpo libero/anelli','Se hai gli anelli usa ring push-up; altrimenti push-up piedi rialzati.'),
      ex('dip-assistiti','Dip assistiti/controllati','petto/tricipiti','2','6–10','90s','assistiti/BW','Inclinati leggermente avanti, spalle basse, ROM senza fastidio. Ring dip solo più avanti.'),
      ex('pulldown-stretto','Pulldown presa stretta','dorso','3','10–12','90s','25–35 kg cavo','Movimento controllato, gomiti verso il basso, petto alto.'),
      ex('rematore-cavo-leggero','Rematore cavo leggero','dorso','2','12–15','75–90s','medio','Solo mantenimento dorso: non trasformarlo in una seduta schiena pesante.'),
      ex('alzate-laterali','Alzate laterali','spalle','3','12–20','60s','5–6 kg','Meglio leggere e pulite che pesanti e sporche.'),
      ex('curl-inclinato','Curl manubri o cavo','bicipiti','3','8–12','60s','moderato','Gomiti stabili, fase negativa controllata.'),
      ex('curl-inclinato-extra','Curl inclinato/cavo leggero','bicipiti','2','10–15','60s','leggero/mod.','Richiamo di pompaggio: controllo e allungamento, non cercare carichi massimali.'),
      ex('pushdown-fune','Pushdown tricipiti fune','tricipiti','2','10–15','60s','10–15 kg cavo','Gomiti fermi, estensione completa.'),
      ex('overhead-triceps','Estensioni tricipiti sopra la testa','tricipiti capo lungo','2','12–20','60–75s','manubrio/cavo leggero','Terzo richiamo capo lungo: più controllo che peso.'),
      ex('ring-support-hold','Support hold agli anelli','stabilità/tricipiti','2','10–25s','60s','corpo libero/anelli','Opzionale se hai gli anelli: braccia tese, spalle basse, anelli vicini al corpo.')
    ]
  }
];

function ex(id,name,group,sets,reps,rest,load,note){ return {id,name,group,sets:Number(sets),reps,rest,restSeconds:parseRest(rest),load,note}; }
function parseRest(rest){ const m=String(rest).match(/(\d+)/g); if(!m) return 90; return Number(m[Math.min(1,m.length-1)]) || Number(m[0]); }

const extraPlans = [
  {
    title:'Extra leggero A — equilibrio avambracci/collo', time:'10–14 min', frequency:'0–1 volta/settimana',
    items:[
      'Estensioni dita con elastico — 2×20–30',
      'Reverse wrist curl leggero — 2×15–20',
      'Prono-supinazione leggera — 2×12–15 per lato',
      'Chin tuck — 2×8–12 lente',
      'Isometria collo frontale/laterale — 2×15–20 sec'
    ],
    note:'Scopo: salute articolare e controllo, non aumentare volume.'
  },
  {
    title:'Extra B — solo se recuperi benissimo', time:'12–18 min', frequency:'massimo 1 volta/settimana',
    items:[
      'Dead hang moderato — 2×20–40 sec',
      'Shrug manubri — 2×12–15 controllate',
      'Reverse wrist curl leggero — 2×15–20',
      'Isometria posteriore collo — 2×15–20 sec',
      'Mobilità polso + collo — 2 min'
    ],
    note:'Evita carichi massimali. Se avambraccio si congestiona molto, salta la seduta.'
  }
];


const vacationWorkouts = [
  {
    id:'vac-upper-a', name:'Vacanza Upper A — petto/spalle/tricipiti + dorso', focus:'Corpo libero + elastici', meta:'Seduta base da vacanza: spinta, tirata e braccia con esercizi semplici ma efficaci.',
    exercises:[
      ex('vac-pushup-slow','Push-up lento','petto','4','8–15','75–90s','corpo libero','Discesa lenta 3 secondi, corpo rigido e 0–3 reps in riserva.'),
      ex('vac-pike-pushup','Pike push-up','spalle','3','6–12','75–90s','corpo libero','Ottimo richiamo per spalle e parte alta del petto.'),
      ex('vac-band-row','Rematore con elastico','dorso','4','12–20','75–90s','elastico medio/forte','Tira i gomiti indietro e mantieni il petto aperto.'),
      ex('vac-band-pulldown','Pulldown con elastico','dorso','3','12–20','60–75s','elastico ancorato in alto','Pensa a portare i gomiti verso il basso e le scapole in tasca.'),
      ex('vac-band-overhead-triceps','Estensioni tricipiti sopra la testa con elastico','tricipiti','3','12–20','60s','elastico','Molto utile per il capo lungo del tricipite.'),
      ex('vac-band-curl','Curl bicipiti con elastico','bicipiti','3','12–20','60s','elastico','Chiudi bene il bicipite e controlla la discesa.'),
      ex('vac-plank','Plank','core','3','30–60 sec','45–60s','corpo libero','Core attivo, glutei contratti e schiena neutra.')
    ]
  },
  {
    id:'vac-lower-a', name:'Vacanza Lower A — gambe + core', focus:'Gambe, glutei, femorali, addome', meta:'Per le gambe usa tempo lento, lavoro unilaterale e serie vicine al cedimento tecnico.',
    exercises:[
      ex('vac-slow-squat','Squat corpo libero lento','gambe','4','15–30','60–75s','corpo libero','Scendi controllato, fermo breve in basso e risalita pulita.'),
      ex('vac-bulgarian-split-squat','Bulgarian split squat','gambe','4','8–15/gamba','75–90s','sedia/letto','Una delle migliori scelte in vacanza per quadricipiti e glutei.'),
      ex('vac-reverse-lunge','Affondi indietro','gambe','3','10–20/gamba','60–75s','corpo libero','Passo indietro controllato e spinta dal piede davanti.'),
      ex('vac-hip-thrust','Hip thrust / Glute bridge','glutei','4','15–30','60s','corpo libero','Pausa in alto di 1 secondo e glutei contratti.'),
      ex('vac-towel-leg-curl','Leg curl con asciugamano','femorali','3','8–15','75s','asciugamano + pavimento liscio','Ottimo per i femorali se non hai macchine o manubri.'),
      ex('vac-single-leg-calf-raise','Calf raise 1 gamba','polpacci','4','15–30','45–60s','corpo libero','Massima escursione e pausa in alto.'),
      ex('vac-reverse-crunch','Reverse crunch','addome','3','12–20','45–60s','corpo libero','Retroversione del bacino e niente slanci.'),
      ex('vac-side-plank','Side plank','obliqui','2','30–45 sec/lato','45s','corpo libero','Linea pulita e bacino alto.')
    ]
  },
  {
    id:'vac-upper-b', name:'Vacanza Upper B — dorso/braccia/spalle', focus:'Dorso, braccia e spalle', meta:'Seduta ideale se vuoi mantenere il focus estetico anche in vacanza.',
    exercises:[
      ex('vac-band-row','Rematore con elastico','dorso','4','12–20','75–90s','elastico medio/forte','Mantieni petto aperto e chiusura breve dietro.'),
      ex('vac-band-face-pull','Face pull con elastico','spalle posteriori','3','15–25','60s','elastico','Ottimo per postura, retro spalle e cuffia.'),
      ex('vac-band-pulldown','Pulldown con elastico','dorso','3','12–20','60–75s','elastico ancorato in alto','Usa ROM pulita e controllo in discesa.'),
      ex('vac-band-pushup','Push-up con elastico','petto','3','8–15','75–90s','elastico attorno alla schiena','Ottima variante più intensa dei push-up normali.'),
      ex('vac-band-hammer-curl','Hammer curl con elastico','bicipiti/avambraccio','3','12–20','60s','elastico','Neutro, controllato, senza slanci.'),
      ex('vac-band-pushdown','Pushdown tricipiti con elastico','tricipiti','3','12–20','60s','elastico ancorato in alto','Gomiti fermi e completa estensione.'),
      ex('vac-band-overhead-triceps','Estensioni tricipiti sopra la testa con elastico','tricipiti','3','12–20','60s','elastico','Ancora lavoro utile per il capo lungo.'),
      ex('vac-pallof-press','Pallof press con elastico','core','3','10–15/lato','45–60s','elastico','Anti-rotazione: non farti trascinare di lato.')
    ]
  },
  {
    id:'vac-lower-b', name:'Vacanza Lower B + pump', focus:'Gambe, core e richiamo braccia/spalle', meta:'Seduta facoltativa: se cammini molto o sei stanco puoi saltarla.',
    exercises:[
      ex('vac-step-up','Step-up','gambe','3','10–15/gamba','60–75s','gradino/sedia stabile','Spingi con la gamba sopra e controlla la discesa.'),
      ex('vac-slow-squat','Squat corpo libero lento','gambe','3','15–25','60s','corpo libero','Versione più leggera di richiamo.'),
      ex('vac-hip-thrust','Hip thrust / Glute bridge','glutei','3','12–20','60s','corpo libero','Pausa in alto e addome attivo.'),
      ex('vac-pallof-press','Pallof press con elastico','core','3','10–15/lato','45–60s','elastico','Stabilità del tronco.'),
      ex('vac-slow-mountain-climber','Mountain climber lento','core','3','20–40 totali','45s','corpo libero','Movimento lento e controllato, non cardio caotico.'),
      ex('vac-band-curl','Curl bicipiti con elastico','bicipiti','2','15–25','45–60s','elastico','Richiamo pump finale.'),
      ex('vac-band-pushdown','Pushdown tricipiti con elastico','tricipiti','2','15–25','45–60s','elastico','Richiamo pump finale.'),
      ex('vac-band-face-pull','Face pull con elastico','spalle posteriori','2','15–25','45–60s','elastico','Piccolo richiamo posturale.')
    ]
  }
];

const vacationQuickPlans = [
  {
    id:'vac-quick-a', name:'Vacanza rapida A — 25–30 min', focus:'Upper veloce', meta:'Quando hai poco tempo ma vuoi dare uno stimolo completo alla parte alta.',
    exercises:[
      ex('vac-pushup','Push-up','petto','4','max tecnico','60–75s','corpo libero','Serie vicine al cedimento tecnico, forma sempre pulita.'),
      ex('vac-band-row','Rematore con elastico','dorso','4','15–20','60–75s','elastico','Remata controllata.'),
      ex('vac-pike-pushup','Pike push-up','spalle','3','8–12','60–75s','corpo libero','Lavoro spalle senza pesi.'),
      ex('vac-band-curl','Curl bicipiti con elastico','bicipiti','3','15–20','45–60s','elastico','Pompa controllata.'),
      ex('vac-band-overhead-triceps','Estensioni tricipiti sopra la testa con elastico','tricipiti','3','15–20','45–60s','elastico','Allungamento controllato.'),
      ex('vac-plank','Plank','core','3','40–60 sec','45s','corpo libero','Core solido.')
    ]
  },
  {
    id:'vac-quick-b', name:'Vacanza rapida B — 25–30 min', focus:'Lower veloce', meta:'Per stimolare le gambe con poco tempo e zero attrezzatura pesante.',
    exercises:[
      ex('vac-bulgarian-split-squat','Bulgarian split squat','gambe','4','10–15/gamba','75s','sedia/letto','Tieni controllo e ROM buona.'),
      ex('vac-slow-squat','Squat corpo libero lento','gambe','3','20–30','60s','corpo libero','Tempo lento.'),
      ex('vac-hip-thrust','Hip thrust / Glute bridge','glutei','4','20','45–60s','corpo libero','Pausa in alto.'),
      ex('vac-towel-leg-curl','Leg curl con asciugamano','femorali','3','8–15','75s','asciugamano','Lento e controllato.'),
      ex('vac-single-leg-calf-raise','Calf raise 1 gamba','polpacci','4','20','45s','corpo libero','Massima escursione.'),
      ex('vac-reverse-crunch','Reverse crunch','addome','3','15–20','45s','corpo libero','Chiusura addominale vera.')
    ]
  }
];

const furnitureAlternatives = {
  id:'vac-furniture', name:'Alternative con mobili', focus:'Soluzioni pratiche da hotel, casa vacanze o appartamento', meta:'Usa solo mobili stabili, non pieghevoli, non in vetro e che non scivolino. Se il supporto si muove, scegli l’alternativa con elastico.',
  exercises:[
    ex('vac-table-australian-row','Australian pull-up al tavolo','dorso','3','6–15','75–120s','tavolo molto stabile','Ottima alternativa per la schiena se non hai sbarra o elastici.'),
    ex('vac-incline-pushup','Push-up inclinato su tavolo o sedia','petto','3','10–20','60–75s','tavolo/sedia stabile','Più alto è il supporto, più l’esercizio è facile.'),
    ex('vac-chair-dip','Dip su sedia','tricipiti','2','8–15','60–75s','sedia/panca stabile','Da usare con cautela: se senti fastidio alle spalle, riduci ROM o scegli altro.')
  ]
};

const vacationPlan3Days = [
  'Giorno 1: Vacanza Upper A',
  'Giorno 2: Vacanza Lower A',
  'Giorno 3: Vacanza Upper B',
  'Nei giorni liberi: camminata, mobilità e recupero'
];

const dietPlan = [
  day(1,'Upper A · circa 2000 kcal',true,['Yogurt greco 0–2% 250 g + whey 30 g + pane 50 g + frutta 200 g','Pollo/tacchino 180–200 g oppure tonno naturale 150–170 g sgocciolato + pasta secca 70 g + verdure 300 g + olio EVO 10 g','Yogurt greco 200 g + whey 20 g + frutta 200–300 g','Proteina magra 180–200 g oppure merluzzo/nasello 250 g + patate 300 g + verdure 300 g + olio EVO 10 g']),
  day(2,'Lower A · circa 2000 kcal',true,['Colazione alternativa: pane 70 g + 2 uova intere + yogurt greco 0–2% 150 g + frutta 150–200 g','Tacchino 180–200 g + riso secco 70–75 g + verdure 300 g + olio EVO 10 g','Fiocchi di latte 200 g + frutta 150–200 g','Manzo magro 150–180 g + polenta cotta 250–300 g + verdure 300 g + olio EVO 10 g']),
  day(3,'Riposo · 1850–1950 kcal',false,['Yogurt greco 250 g + whey 30 g + pane 40 g + frutta 200 g','Uova 2 + albumi 200 g + pasta secca 60 g oppure patate 250–300 g + verdure 300 g + olio EVO 10 g','Whey in acqua 30 g + frutta 200 g','Proteina magra 180–200 g + verdure 300–400 g + pane 50–60 g oppure polenta 200–250 g + olio EVO 10 g']),
  day(4,'Upper B · circa 2000 kcal',true,['Yogurt greco 0–2% 250 g + whey 30 g + pane 50 g + frutta 200 g','Pollo/tacchino 180–200 g + noodles secchi 65–70 g + verdure 300 g + olio EVO 10 g','Yogurt greco 250 g + frutta 200 g','Mozzarella light 125 g + tonno naturale 100 g sgocciolato + pane 60 g + verdure 300 g + olio EVO 0–5 g']),
  day(5,'Lower B · circa 2000 kcal',true,['Colazione alternativa: pane 70 g + 2 uova + yogurt greco 150 g + frutta 150–200 g','Macinato magro per polpette 180 g + pasta secca 70 g + verdure 300 g + olio EVO 10 g','Yogurt greco 200 g + whey 20 g + fragole 300 g','Sgombro/sardine 140 g sgocciolati + pane 50–60 g o patate 200–250 g + verdure 300–400 g + olio EVO 0 g']),
  day(6,'Upper C · circa 2000 kcal',true,['Yogurt greco 250 g + whey 30 g + pane 50 g + frutta 200 g','Nasello/merluzzo 250 g + riso secco 70–75 g oppure riso cotto 210–230 g + verdure 300 g + olio EVO 10 g','Mozzarella light 125 g + frutta 150 g','Burger veg proteico 160–200 g + pane 50–70 g + verdure 300 g + olio EVO 0–5 g']),
  day(7,'Riposo · 1850–1950 kcal',false,['Yogurt greco 250 g + whey 30 g + pane 40 g + frutta 200 g','Pollo/tacchino 180–200 g + patate 250–300 g + verdure 300 g + olio EVO 10 g','Yogurt greco 200 g oppure whey 30 g + frutta 150–250 g','Ceci 150–200 g o lenticchie 180–220 g + pollo/tacchino 100–150 g o albumi 200 g + verdure 300 g + olio EVO 10 g + pane max 30–40 g']),
  day(8,'Upper A · circa 2000 kcal',true,['Yogurt greco 0–2% 250 g + whey 30 g + pane 50 g + frutta 200 g','Tonno naturale 160 g sgocciolato + pasta secca 70 g + verdure 300 g + olio EVO 10 g','Fiocchi di latte 200 g + frutta 150–200 g','Tacchino/pollo 200 g + patate 300 g + verdure 300 g + olio EVO 10 g']),
  day(9,'Lower A · circa 2000 kcal',true,['Colazione alternativa: pane 70 g + 2 uova + yogurt greco 150 g + frutta 150–200 g','Pollo/tacchino 180–200 g + polenta cotta 300 g + verdure 300 g + olio EVO 10 g','Yogurt greco 200 g + whey 20 g + frutta 200–300 g','Tonno all’olio 120–140 g sgocciolato + riso secco 60–65 g + verdure 300 g + olio EVO 0 g']),
  day(10,'Riposo · 1850–1950 kcal',false,['Yogurt greco 250 g + whey 30 g + pane 40 g + frutta 200 g','Uova 2 + albumi 200 g + pasta secca 60 g + verdure 300 g + olio EVO 10 g','Whey in acqua 30 g + frutta 200 g','Proteina magra 180–200 g + verdure 300–400 g + patate 200–250 g + olio EVO 10 g']),
  day(11,'Upper B · circa 2000 kcal',true,['Yogurt greco 250 g + whey 30 g + pane 50 g + frutta 200 g','Manzo magro 150–180 g + pasta secca 70 g + verdure 300 g + olio EVO 10 g','Yogurt greco 250 g + frutta 200 g','Nasello surgelato 250 g + patate 300 g + verdure 300 g + olio EVO 10 g']),
  day(12,'Lower B · circa 2000 kcal',true,['Yogurt greco 250 g + whey 30 g + pane 50 g + frutta 200 g','Tacchino 180–200 g + riso secco 70–75 g + verdure 300 g + grana/pecorino 20–25 g al posto dell’olio','Mozzarella light 125 g + frutta 150 g','Fiocchi di latte 250 g + pane 70–80 g + verdure 300 g']),
  day(13,'Upper C · circa 2000 kcal',true,['Yogurt greco 0–2% 250 g + whey 30 g + pane 50 g + frutta 200 g','Pollo 180 g oppure tonno naturale 160 g + pasta 70 g + verdure 300 g + olio EVO 10 g','Yogurt greco 200 g + whey 20 g + frutta 200–300 g','Burger veg proteico 160–200 g + patate 300 g oppure pane 50–70 g + verdure 300 g + olio EVO 0–5 g']),
  day(14,'Riposo · 1850–1950 kcal',false,['Yogurt greco 250 g + whey 30 g + pane 40 g + frutta 200 g','Pollo/tacchino 180–200 g + riso secco 60 g o patate 250–300 g + verdure 300 g + olio EVO 10 g','Yogurt greco 200 g oppure fiocchi di latte 200 g + frutta 150–250 g','Proteina magra 180–200 g + verdure 300–400 g + pane 50–60 g o polenta 200–250 g + olio EVO 10 g'])
];
function day(n,focus,sweet,meals){ return {n,focus,sweet,meals}; }

const carbs = [
  {id:'pasta-cruda', name:'Pasta secca', kcal:350, note:'peso a crudo/secco'},
  {id:'riso-crudo', name:'Riso secco', kcal:360, note:'peso a crudo/secco'},
  {id:'riso-cotto', name:'Riso cotto', kcal:130, note:'peso già cotto'},
  {id:'noodles-crudi', name:'Noodles secchi', kcal:360, note:'peso a crudo/secco'},
  {id:'noodles-cotti', name:'Noodles cotti', kcal:120, note:'peso già cotto'},
  {id:'pane', name:'Pane', kcal:270, note:'peso pronto'},
  {id:'patate-cotte', name:'Patate cotte/lesse', kcal:85, note:'peso cotto'},
  {id:'polenta-cotta', name:'Polenta cotta', kcal:85, note:'peso cotto'},
  {id:'farina-polenta', name:'Farina per polenta secca', kcal:360, note:'peso a crudo/secco'},
  {id:'avena', name:'Avena', kcal:380, note:'peso a crudo'}
];

const exerciseImages = {
  'panca-piana-manubri':'assets/panca_piana.png',
  'panca-inclinata':'assets/panca_piana.png',
  'push-up':'assets/pushup.png',
  'push-up-rialzati':'assets/pushup.png',
  'croci-cavo-manubri':'assets/panca_piana.png',
  'dip-assistiti':'assets/dip.png',
  'rematore-manubrio':'assets/rematore1.png',
  'trazioni-prone':'assets/trazioni.png',
  'pulldown':'assets/lat_machine_pulldown.png',
  'pulldown-stretto':'assets/lat_machine_pulldown.png',
  'rematore-cavo':'assets/rematore_cavo_basso.png',
  'rematore-cavo-leggero':'assets/rematore_cavo_basso.png',
  'goblet-squat':'assets/goblet_squat.png',
  'bulgarian-split-squat':'assets/bulgarian_split_squat.png',
  'rdl-manubri':'assets/rdl.png',
  'rdl-pesante':'assets/rdl.png',
  'affondi-indietro':'assets/affondi_indietro.png',
  'calf-raise':'assets/calf_raise.png',
  'plank':'assets/plank.png',
  'hip-thrust':'assets/hip_thrust.png',
  'step-up':'assets/step_up_panca.png',
  'sliding-curl':'assets/sliding_leg_curl.png',
  'cable-crunch':'assets/cable_crunch.png',
  'pallof-press':'assets/pallof_press.png',
  'shoulder-press':'assets/shoulder_press.png',
  'face-pull':'assets/face_pull.png',
  'rear-delt-fly':'assets/rear_delt_fly.png',
  'alzate-laterali':'assets/alzate_laterali.png',
  'curl-barra':'assets/curl_barra_corta.png',
  'curl-inclinato':'assets/curl_barra_corta.png',
  'pushdown-fune':'assets/pushdown_tricipiti.png',
  'estensioni-tricipiti':'assets/pushdown_tricipiti.png',
  'hanging-knee-raise':'assets/hanging_knee_raise.png',
  'overhead-triceps':'assets/overhead_triceps_extension.png',
  'overhead-triceps-cable':'assets/overhead_triceps_cable.png',
  'ring-row':'assets/ring_row.png',
  'ring-pushup':'assets/ring_pushup.png',
  'ring-support-hold':'assets/ring_support_hold.png',
  'hammer-curl':'assets/hammer_curl.png',
  'curl-inclinato-extra':'assets/curl_barra_corta.png',
  'vac-pushup-slow':'assets/vac_pushup_slow.png',
  'vac-pike-pushup':'assets/vac_pike_pushup.png',
  'vac-band-row':'assets/vac_band_row.png',
  'vac-band-pulldown':'assets/vac_band_pulldown.png',
  'vac-band-overhead-triceps':'assets/vac_band_overhead_triceps.png',
  'vac-band-curl':'assets/vac_band_biceps_curl.png',
  'vac-slow-squat':'assets/vac_slow_squat.png',
  'vac-bulgarian-split-squat':'assets/vac_bulgarian_split_squat.png',
  'vac-band-face-pull':'assets/vac_band_face_pull.png',
  'vac-band-hammer-curl':'assets/vac_band_hammer_curl.png',
  'vac-band-pushdown':'assets/vac_band_pushdown.png',
  'vac-band-pushup':'assets/vac_band_pushup.png',
  'vac-reverse-lunge':'assets/vac_reverse_lunge.png',
  'vac-hip-thrust':'assets/vac_hip_thrust.png',
  'vac-towel-leg-curl':'assets/vac_towel_leg_curl.png',
  'vac-single-leg-calf-raise':'assets/vac_single_leg_calf_raise.png',
  'vac-pushup':'assets/vac_pushup.png',
  'vac-decline-pushup':'assets/vac_decline_pushup.png',
  'vac-step-up':'assets/vac_step_up.png',
  'vac-plank':'assets/vac_plank.png',
  'vac-side-plank':'assets/vac_side_plank.png',
  'vac-reverse-crunch':'assets/vac_reverse_crunch.png',
  'vac-pallof-press':'assets/vac_pallof_press.png',
  'vac-slow-mountain-climber':'assets/vac_slow_mountain_climber.png',
  'vac-table-australian-row':'assets/vac_australian_table_row.png',
  'vac-incline-pushup':'assets/vac_incline_pushup_table_chair.png',
  'vac-chair-dip':'assets/vac_chair_dip.png',
};

const posterGuides = [
  {id:'guideForearmsA', name:'Guida avambracci A', short:'Hammer curl · Wrist curl · Reverse wrist curl', image:'assets/guida_avambracci_a_full.png', area:'avambracci', use:'Mini routine A per gli avambracci.', frequency:'0–1 volta/settimana', content:'Hammer curl 3×10–12, Wrist curl 2–3×15–20, Reverse wrist curl 2–3×15–20, chiusura con Farmer hold 3×30–45 sec.', tip:'Usala solo se vuoi un richiamo tecnico: non serve spingere forte in questa fase.'},
  {id:'guideForearmsB', name:'Guida avambracci B', short:'Farmer hold · Reverse curl · Prono-supinazione', image:'assets/guida_avambracci_b_full.png', area:'avambracci', use:'Mini routine B per presa e controllo.', frequency:'0–1 volta/settimana', content:'Reverse curl 3×10–15, Prono-supinazione 2×12–15/lato, Dead hang 3×20–40 sec, Estensioni dita 2×20–30.', tip:'Se senti l’avambraccio già grosso o affaticato, meglio tenerla molto leggera o saltarla.'},
  {id:'guideNeckA', name:'Guida collo base', short:'Dead hang · Estensioni dita · Chin tuck', image:'assets/guida_deadhang_chintuck_full.png', area:'collo', use:'Poster rapido con i fondamentali leggeri per postura e controllo.', frequency:'quando vuoi', content:'Chin tuck, dead hang moderato ed estensioni dita come richiamo di equilibrio.', tip:'Il collo non va forzato: intensità moderata e stop immediato se compare fastidio.'},
  {id:'guideNeckIso', name:'Guida isometrie collo', short:'Frontale · Posteriore · Laterale', image:'assets/guida_collo_isometrie_full.png', area:'collo', use:'Poster delle isometrie del collo.', frequency:'0–1 volta/settimana', content:'2–3 serie da 10–20 sec per direzione, intensità 30–60%.', tip:'Ottimo come riferimento visivo, non come lavoro urgente da inserire sempre.'},
  {id:'guideSummary', name:'Riepilogo avambracci e collo', short:'Routine A/B e routine collo', image:'assets/guida_riepilogo_avambracci_collo_full.png', area:'extra', use:'Poster riepilogativo con routine complete.', frequency:'consultazione libera', content:'Riassume giorni, serie e progressioni leggere per avambracci e collo.', tip:'Tieni aperto questo poster se vuoi un colpo d’occhio unico su tutta la parte extra.'}
];

const exerciseGuides = {
  'panca-piana-manubri': guide('Panca piana manubri','petto',['Scapole addotte e depresse','Piedi stabili, petto alto','Discesa lenta 2–3 secondi','Gomiti circa 45–60°'],['Non rimbalzare in basso','Non perdere le scapole','Non trasformarla in spinta di spalle']),
  'panca-inclinata': guide('Panca inclinata 30° manubri','petto',['Inclinazione moderata, circa 30°','Petto alto e scapole stabili','Manubri scendono verso alto petto'],['Inclinazione troppo alta','Gomiti troppo larghi','Spinta corta senza controllo']),
  'push-up': guide('Push-up','petto',['Corpo rigido','Mani sotto/al poco fuori le spalle','Scendi controllato','Spingi via il pavimento'],['Bacino che crolla','Mezze ripetizioni','Testa in avanti']),
  'push-up-rialzati': guide('Push-up piedi rialzati','petto',['Piedi su rialzo stabile','Linea corpo compatta','Scendi verso alto petto'],['Rialzo troppo alto','Spalle che salgono alle orecchie']),
  'croci-cavo-manubri': guide('Croci al cavo o manubri','petto',['Braccia morbide','Allungamento controllato','Chiudi davanti al petto senza sbattere'],['Carico troppo alto','Gomiti che cambiano angolo a ogni rep']),
  'dip-assistiti': guide('Dip assistiti/controllati','petto',['Spalle basse','Leggera inclinazione avanti','ROM senza dolore','Risalita controllata'],['Scendere troppo se dà fastidio','Spalle chiuse in avanti','Rimbalzo in basso']),
  'rematore-manubrio': guide('Rematore manubrio','dorso',['Schiena neutra','Gomito verso fianco','Pausa breve in chiusura'],['Rotazione del busto','Tirare solo con bicipite']),
  'trazioni-prone': guide('Trazioni / pulldown','dorso',['Scapole attive','Petto verso la barra','Controllo in discesa'],['Mezze reps','Collo in avanti','Slancio eccessivo']),
  'pulldown': guide('Pulldown','dorso',['Gomiti verso il basso','Petto alto','Presa comoda'],['Tirare dietro il collo','Schiena che dondola']),
  'pulldown-stretto': guide('Pulldown presa stretta','dorso',['Gomiti stretti','Tira verso alto petto','Scapole depresse'],['Inclinarsi troppo indietro','Usare solo le braccia']),
  'rematore-cavo': guide('Rematore cavo','dorso',['Petto alto','Scapole chiudono','Fase negativa controllata'],['Strappare con lombare','Spalle alle orecchie']),
  'rematore-cavo-leggero': guide('Rematore cavo leggero','dorso',['Esecuzione pulita','Volume di mantenimento','Non cercare record'],['Carico troppo alto','Perdere recupero del petto']),
  'goblet-squat': guide('Goblet squat','gambe',['Manubrio vicino al petto','Ginocchia seguono piedi','Discesa controllata'],['Talloni che si alzano','Schiena che si chiude']),
  'bulgarian-split-squat': guide('Bulgarian split squat','gambe',['Piede davanti stabile','Scendi verticale','Controlla ginocchio'],['Passo troppo corto','Rimbalzo in basso']),
  'rdl-manubri': guide('Romanian deadlift','posteriori',['Anche indietro','Schiena neutra','Manubri vicini alle gambe'],['Piegare troppo le ginocchia','Arrotondare la schiena']),
  'rdl-pesante': guide('Romanian deadlift pesante','posteriori',['Tecnica prima del carico','Tensione femorali','Core attivo'],['Cercare profondità perdendo schiena','Carico che scappa in avanti']),
  'affondi-indietro': guide('Affondi indietro','gambe',['Passo indietro controllato','Ginocchio stabile','Spingi con piede davanti'],['Rimbalzo','Crollo laterale del ginocchio']),
  'calf-raise': guide('Calf raise','polpacci',['Pausa in alto','Allungamento in basso','ROM completa'],['Saltellare','Mezze ripetizioni veloci']),
  'plank': guide('Plank','core',['Costole giù','Glutei attivi','Respira corto e controllato'],['Lombare che cede','Spalle passive']),
  'hip-thrust': guide('Hip thrust','glutei',['Pausa in alto','Mento leggermente rientrato','Spingi con talloni'],['Iperestendere la schiena','Piedi troppo lontani']),
  'step-up': guide('Step-up','gambe',['Panca stabile','Controlla salita e discesa','Ginocchio allineato'],['Spinta eccessiva con gamba sotto','Cadere in discesa']),
  'sliding-curl': guide('Sliding leg curl','posteriori',['Bacino alto','Estendi lento','Richiama coi femorali'],['Bacino che cade','Tirare con lombare']),
  'cable-crunch': guide('Cable crunch','core',['Costole verso bacino','Bacino stabile','Braccia ferme'],['Tirare solo con braccia','Sedersi indietro']),
  'pallof-press': guide('Pallof press','core',['Resisti alla rotazione','Braccia avanti','Bacino fermo'],['Ruotare il busto','Spalle contratte']),
  'shoulder-press': guide('Shoulder press','spalle',['Core attivo','Traiettoria verticale','Scendi controllato'],['Iperestensione lombare','Spinta asimmetrica']),
  'face-pull': guide('Face pull','spalle',['Tira verso occhi','Gomiti alti','Extraruota leggero'],['Carico eccessivo','Tirare al petto']),
  'rear-delt-fly': guide('Rear delt fly','spalle',['Braccia quasi tese','Movimento piccolo e pulito','Pausa in apertura'],['Slancio','Trapezio dominante']),
  'alzate-laterali': guide('Alzate laterali','spalle',['Gomito morbido','Stop a livello spalle','Controllo totale'],['Dondolare','Polsi troppo alti']),
  'curl-barra': guide('Curl barra/manubri','bicipiti',['Gomiti fermi','Polsi neutri','Negativa lenta'],['Swing con schiena','Spalle avanti']),
  'curl-inclinato': guide('Curl manubri/cavo','bicipiti',['Allungamento controllato','Gomiti fermi','Carico gestibile'],['Accorciare ROM','Slancio']),
  'pushdown-fune': guide('Pushdown fune','tricipiti',['Gomiti fermi','Apri la fune in basso','Controlla ritorno'],['Spalle avanti','Dondolio']),
  'estensioni-tricipiti': guide('Estensioni tricipiti','tricipiti',['Gomiti controllati','Negativa lenta','Estendi senza dolore'],['Aprire troppo i gomiti','Carico fuori controllo']),
  'hanging-knee-raise': guide('Hanging knee raise','core',['Bacino in retroversione','Movimento controllato','Scapole attive'],['Dondolare','Sollevare solo le gambe']),
  'overhead-triceps': guide('Estensioni tricipiti sopra la testa con manubrio','tricipiti',['Braccia sopra la testa','Gomiti stretti e fermi','Scendi lentamente in allungamento','Estendi senza inarcare la schiena'],['Carico troppo alto','Gomiti che si aprono','Dolore al gomito o alla spalla']),
  'overhead-triceps-cable': guide('Estensioni tricipiti sopra la testa al cavo','tricipiti',['Usa la fune e stai stabile','Gomiti stretti vicino alla testa','Allunga dietro la testa con controllo','Estendi senza slanci del busto'],['Carico eccessivo','Aprire i gomiti','Compensare con la schiena']),
  'ring-row': guide('Ring row agli anelli','dorso',['Corpo rigido','Tira gli anelli al petto','Scapole indietro e basse','Regola difficoltà inclinando il corpo'],['Bacino che cade','Tirare solo con bicipiti','Spalle alle orecchie']),
  'ring-pushup': guide('Ring push-up','petto',['Anelli bassi e stabili','Corpo in linea','Scendi controllato','Spingi senza perdere scapole'],['Profondità eccessiva subito','Gomiti troppo larghi','Bacino che crolla']),
  'ring-support-hold': guide('Support hold agli anelli','stabilità',['Braccia tese','Spalle depresse','Anelli vicini al corpo','Respira e resta fermo'],['Spalle alle orecchie','Gomiti piegati','Oscillare troppo']),
  'hammer-curl': guide('Hammer curl','bicipiti',['Presa neutra','Gomiti fermi','Negativa controllata'],['Swing con schiena','Polsi che cedono','Spalle avanti']),
  'curl-inclinato-extra': guide('Curl inclinato/cavo leggero','bicipiti',['Allungamento controllato','Gomiti stabili','Ritmo lento'],['Carico eccessivo','Accorciare ROM','Dondolare']),
};
function guide(name,kind,cues,errors){ return {name,kind,cues,errors}; }

let state = {
  selectedDay: 0,
  timerSeconds: 90,
  timerRemaining: 90,
  timerEnd: null,
  timerId: null,
  timerRunning: false,
  timerPaused: false,
  audioReady: false,
  audioCtx: null,
  wakeLock: null,
  guided: null
};

const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>Array.from(root.querySelectorAll(s));
const save = (k,v)=>localStorage.setItem(k,JSON.stringify(v));
const load = (k,fb)=>{ try{return JSON.parse(localStorage.getItem(k)) ?? fb}catch{return fb} };

function init(){
  registerServiceWorker();
  bindNavigation();
  bindTimer();
  bindDiet();
  bindProgress();
  renderAll();
  setupInstallPrompt();
  document.addEventListener('visibilitychange', handleVisibility);
}

function registerServiceWorker(){
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('service-worker.js?v=17').catch(()=>{}); }
}

function bindNavigation(){
  $$('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>showTab(btn.dataset.tab)));
  $$('.quick-nav').forEach(btn=>btn.addEventListener('click',()=>showTab(btn.dataset.targettab)));
  $('#dayPicker').addEventListener('change',e=>{state.selectedDay=Number(e.target.value); renderToday();});
  $('#searchExercises').addEventListener('input',renderLibrary);
  $('#closeModal').addEventListener('click',()=>$('#exerciseModal').close());
  $('#closeGuided').addEventListener('click',()=>$('#guidedModal').close());
}
function showTab(tab){
  $$('.tab').forEach(s=>s.classList.remove('active'));
  $(`#tab-${tab}`)?.classList.add('active');
  $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderAll(){
  const picker=$('#dayPicker');
  const historyDay=$('#historyDay');
  picker.innerHTML=workouts.map((d,i)=>`<option value="${i}">${d.name}</option>`).join('');
  historyDay.innerHTML=workouts.map(d=>`<option value="${d.name}">${d.name}</option>`).join('');
  renderToday(); renderWorkouts(); renderVacation(); renderExtra(); renderLibrary(); renderDiet(); renderCarbTool(); renderProgress();
}
function renderToday(){
  const day=workouts[state.selectedDay];
  $('#todayTitle').textContent=day.name;
  $('#todayWorkout').innerHTML=day.exercises.map(e=>exerciseCard(e,day.id)).join('');
  bindExerciseButtons($('#todayWorkout'));
}
function renderWorkouts(){
  $('#workoutDays').innerHTML=workouts.map(day=>`
    <article class="day-card">
      <p class="mini">${day.focus}</p>
      <h3>${day.name}</h3>
      <div class="day-meta">${day.meta}</div>
      <div class="day-exercises">${day.exercises.map(e=>exerciseCard(e,day.id)).join('')}</div>
    </article>`).join('');
  bindExerciseButtons($('#workoutDays'));
}
function exerciseCard(e,dayId){
  const done = getDoneSets(dayId,e.id);
  const allDone = done.length >= e.sets;
  const img = exerciseImage(e.id);
  return `<article class="exercise-card has-preview" data-ex="${e.id}" data-day="${dayId}">
    <div class="exercise-main with-preview">
      ${img ? `<img class="exercise-preview" src="${img}" alt="${e.name}" loading="lazy" />` : ''}
      <div class="exercise-info">
        <h4>${e.name}</h4>
        <div class="exercise-meta">
          <span class="tag">${e.sets} serie</span>
          <span class="tag">${e.reps}</span>
          <span class="tag green">${e.rest}</span>
        </div>
        <p class="exercise-load">Peso iniziale: ${e.load}</p>
      </div>
    </div>
    <p class="exercise-note">${e.note}</p>
    <div class="series-row">
      <span class="series-label">Serie completate</span>
      <div class="series-tracker" aria-label="Serie completate">${seriesDots(dayId,e.id,e.sets)}</div>
    </div>
    <div class="exercise-actions">
      <button class="details-btn" data-ex="${e.id}">Dettagli</button>
      <button class="rest-btn" data-seconds="${e.restSeconds}">Recupero</button>
      <button class="mark-btn ${allDone?'complete':''}" data-day="${dayId}" data-ex="${e.id}">${allDone?'Completo':'Segna serie'}</button>
      <button class="primary guide-btn" data-day="${dayId}" data-ex="${e.id}">Serie guidata</button>
    </div>
  </article>`;
}
function seriesDots(dayId,exId,sets){
  const done = getDoneSets(dayId,exId);
  return Array.from({length:sets},(_,i)=>`<button class="series-dot small ${done.includes(i)?'done':''}" data-day="${dayId}" data-ex="${exId}" data-set="${i}" aria-label="Serie ${i+1}">${i+1}</button>`).join('');
}
function bindExerciseButtons(root=document){
  $$('#resetWeeklySets',root).forEach(btn=>btn.addEventListener('click',resetWeeklySets));
  $$('.details-btn',root).forEach(b=>b.addEventListener('click',()=>openExercise(b.dataset.ex)));
  $$('.rest-btn',root).forEach(b=>b.addEventListener('click',()=>{showTab('timer'); setTimer(Number(b.dataset.seconds)); startTimer();}));
  $$('.mark-btn',root).forEach(b=>b.addEventListener('click',()=>markNextSet(b.dataset.day,b.dataset.ex)));
  $$('.guide-btn',root).forEach(b=>b.addEventListener('click',()=>openGuided(b.dataset.day,b.dataset.ex)));
  $$('.series-dot',root).forEach(b=>b.addEventListener('click',()=>toggleSet(b.dataset.day,b.dataset.ex,Number(b.dataset.set))));
}
function getSetStore(){ return load(STORE.sets,{}); }
function getDoneSets(dayId,exId){ return getSetStore()[`${dayId}:${exId}`] || []; }
function setDoneSets(dayId,exId,sets){ const s=getSetStore(); s[`${dayId}:${exId}`]=sets.sort((a,b)=>a-b); save(STORE.sets,s); }
function toggleSet(dayId,exId,setIndex){
  const done=getDoneSets(dayId,exId);
  const next=done.includes(setIndex)?done.filter(x=>x!==setIndex):[...done,setIndex];
  setDoneSets(dayId,exId,next); refreshWorkoutRenders();
}
function markNextSet(dayId,exId){
  const exercise=findExercise(exId); const done=getDoneSets(dayId,exId);
  const nextIndex=Array.from({length:exercise.sets},(_,i)=>i).find(i=>!done.includes(i));
  if(nextIndex===undefined){ setDoneSets(dayId,exId,[]); toast('Serie azzerate per questo esercizio.'); }
  else { setDoneSets(dayId,exId,[...done,nextIndex]); toast(`Serie ${nextIndex+1} completata.`); }
  refreshWorkoutRenders();
}
function refreshWorkoutRenders(){ renderToday(); renderWorkouts(); if(state.guided) updateGuidedContent(); }
function allExerciseCollections(){ return [...workouts, ...vacationWorkouts, ...vacationQuickPlans, furnitureAlternatives]; }
function findExercise(id){ return allExerciseCollections().flatMap(d=>d.exercises).find(e=>e.id===id) || workouts[0].exercises[0]; }
function findDay(id){ return workouts.find(d=>d.id===id) || workouts[0]; }

function exerciseImage(id){ return exerciseImages[id] || ''; }
function posterGuide(id){ return posterGuides.find(p=>p.id===id); }
function mediaFigure(id,kind,name,cls='exercise-visual'){ const img=exerciseImage(id); return img ? `<img class="${cls}" src="${img}" alt="${name}" loading="lazy" />` : `<div class="tech-figure">${svgFigure(kind)}</div>`; }

function dualGuideBlock(primaryId, secondaryId){
  const primary = exerciseGuides[primaryId] || {name: primaryId, cues:[], errors:[]};
  const secondary = exerciseGuides[secondaryId] || {name: secondaryId, cues:[], errors:[]};
  return `
    <div class="dual-guide-grid">
      <article class="dual-guide-card">
        <p class="mini">Opzione senza anelli</p>
        <h4>${primary.name}</h4>
        ${mediaFigure(primaryId,'petto',primary.name,'modal-hero-image inline-guide-image')}
        <ul class="tight-list">${primary.cues.slice(0,4).map(x=>`<li>${x}</li>`).join('')}</ul>
      </article>
      <article class="dual-guide-card">
        <p class="mini">Opzione con anelli</p>
        <h4>${secondary.name}</h4>
        ${mediaFigure(secondaryId,'petto',secondary.name,'modal-hero-image inline-guide-image')}
        <ul class="tight-list">${secondary.cues.slice(0,4).map(x=>`<li>${x}</li>`).join('')}</ul>
      </article>
    </div>`;
}

function renderExtra(){
  $('#extraPlans').innerHTML=`
    <div class="extra-grid">
      ${extraPlans.map((p,idx)=>`
        <article class="extra-card">
          <p class="mini">${p.frequency}</p>
          <h3>${p.title}</h3>
          <span class="tag green">${p.time}</span>
          <ol>${p.items.map(i=>`<li>${i}</li>`).join('')}</ol>
          <p class="exercise-note">${p.note}</p>
          <div class="exercise-actions"><button class="primary" onclick="toast('Extra ${idx+1} segnato come promemoria: fai solo se recuperi bene.')">Segna promemoria</button></div>
        </article>`).join('')}
    </div>
    <div class="extra-posters-block">
      <div class="section-head compact">
        <div>
          <p class="mini">Poster illustrati</p>
          <h3>Guide visive ripristinate</h3>
        </div>
        <p class="muted">Le immagini della v8 sono state re-inserite qui nella v10.</p>
      </div>
      <div class="library-grid poster-grid">
        ${posterGuides.map(g=>`
          <article class="library-card poster-card">
            <img class="library-thumb" src="${g.image}" alt="${g.name}" loading="lazy" />
            <h4>${g.name}</h4>
            <p>${g.short}</p>
            <div class="exercise-meta"><span class="tag">${g.area}</span><span class="tag green">${g.frequency}</span></div>
            <div class="exercise-actions"><button class="poster-btn" data-poster="${g.id}">Apri poster</button></div>
          </article>`).join('')}
      </div>
    </div>`;
  $$('.poster-btn', $('#extraPlans')).forEach(b=>b.addEventListener('click',()=>openPoster(b.dataset.poster)));
}

function renderVacation(){
  const card = day => `
    <article class="day-card">
      <p class="mini">${day.focus}</p>
      <h3>${day.name}</h3>
      <div class="day-meta">${day.meta}</div>
      <div class="day-exercises">${day.exercises.map(e=>exerciseCard(e,day.id)).join('')}</div>
    </article>`;
  $('#vacationDays').innerHTML = vacationWorkouts.map(card).join('');
  $('#vacationQuick').innerHTML = vacationQuickPlans.map(card).join('');
  $('#vacationFurniture').innerHTML = card(furnitureAlternatives);
  $('#vacation3days').innerHTML = `
    <article class="info-card soft">
      <h4>Versione 3 giorni</h4>
      <ul class="clean-list">${vacationPlan3Days.map(x=>`<li>${x}</li>`).join('')}</ul>
      <p class="muted">Se sei molto attivo in vacanza, questa è la scelta più realistica.</p>
    </article>`;
  bindExerciseButtons($('#vacationDays'));
  bindExerciseButtons($('#vacationQuick'));
  bindExerciseButtons($('#vacationFurniture'));
  bindExerciseButtons($('#vacation3days'));
}

function renderLibrary(){
  const q=($('#searchExercises').value||'').toLowerCase().trim();
  const seen=new Map();
  allExerciseCollections().flatMap(d=>d.exercises).forEach(e=>{ if(!seen.has(e.id)) seen.set(e.id,e); });
  const list=[...seen.values()].filter(e=>!q || `${e.name} ${e.group} ${e.note}`.toLowerCase().includes(q));
  $('#exerciseLibrary').innerHTML=list.map(e=>`
    <article class="library-card">
      ${mediaFigure(e.id,e.group,e.name,'library-thumb')}
      <h4>${e.name}</h4>
      <p>${e.group} · ${e.sets}×${e.reps} · recupero ${e.rest}</p>
      <div class="exercise-actions"><button class="details-btn" data-ex="${e.id}">Apri guida</button></div>
    </article>`).join('');
  bindExerciseButtons($('#exerciseLibrary'));
}
function openExercise(id){
  const e=findExercise(id); const g=exerciseGuides[id] || guide(e.name,e.group,['Controlla la tecnica','Mantieni 1–2 reps in riserva'],['Non forzare se senti dolore']);
  $('#modalTitle').textContent=g.name;
  $('#modalEyebrow').textContent=g.kind;
  if(id==='overhead-triceps'){
    $('#modalContent').innerHTML=`
      <div class="exercise-meta"><span class="tag">${e.sets}×${e.reps}</span><span class="tag green">${e.rest}</span><span class="tag warn">${e.load}</span></div>
      <p class="guided-sub">Per questo esercizio puoi usare sia il manubrio sia il cavo con fune. Qui sotto trovi entrambe le infografiche per scegliere la variante che preferisci.</p>
      ${dualGuideBlock('overhead-triceps','overhead-triceps-cable')}
      <div class="modal-section"><h4>Quando scegliere il manubrio</h4><p>Usalo se vuoi una variante semplice da fare in casa, con setup rapido e buon allungamento del capo lungo del tricipite.</p></div>
      <div class="modal-section"><h4>Quando scegliere il cavo</h4><p>Usalo se hai la carrucola: la tensione resta più continua e può risultare più comodo controllare il movimento con la fune.</p></div>
      <div class="modal-section"><h4>Cose da fare in entrambe</h4><ul>${[...new Set([...(exerciseGuides['overhead-triceps']?.cues||[]), ...(exerciseGuides['overhead-triceps-cable']?.cues||[])])].slice(0,6).map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div class="modal-section"><h4>Errori da evitare in entrambe</h4><ul>${[...new Set([...(exerciseGuides['overhead-triceps']?.errors||[]), ...(exerciseGuides['overhead-triceps-cable']?.errors||[])])].map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div class="exercise-actions"><button class="primary" onclick="openGuided('${currentDayForExercise(id)}','${id}')">Avvia serie guidata</button></div>`;
    $('#exerciseModal').showModal();
    return;
  }
  if(id==='ring-pushup'){
    $('#modalContent').innerHTML=`
      <div class="exercise-meta"><span class="tag">${e.sets}×${e.reps}</span><span class="tag green">${e.rest}</span><span class="tag warn">${e.load}</span></div>
      <p class="guided-sub">Puoi scegliere la variante che preferisci: se fai push-up classici guarda la guida push-up; se usi gli anelli guarda la guida ring push-up.</p>
      ${dualGuideBlock('push-up','ring-pushup')}
      <div class="modal-section"><h4>Quando scegliere il push-up classico</h4><p>Usalo se non monti gli anelli, se vuoi una variante più semplice o se vuoi concentrarti sulla tecnica base.</p></div>
      <div class="modal-section"><h4>Quando scegliere il ring push-up</h4><p>Usalo se hai gli anelli e vuoi più instabilità, più controllo scapolare e un lavoro più impegnativo per petto e tricipiti.</p></div>
      <div class="modal-section"><h4>Errori da evitare in entrambe</h4><ul>${[...new Set([...(exerciseGuides['push-up']?.errors||[]), ...(exerciseGuides['ring-pushup']?.errors||[])])].map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div class="exercise-actions"><button class="primary" onclick="openGuided('${currentDayForExercise(id)}','${id}')">Avvia serie guidata</button></div>`;
    $('#exerciseModal').showModal();
    return;
  }
  $('#modalContent').innerHTML=`
    ${mediaFigure(id,g.kind,g.name,'modal-hero-image')}
    <div class="exercise-meta"><span class="tag">${e.sets}×${e.reps}</span><span class="tag green">${e.rest}</span><span class="tag warn">${e.load}</span></div>
    <p class="guided-sub">${e.note}</p>
    <div class="modal-section"><h4>Cose da fare</h4><ul>${g.cues.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="modal-section"><h4>Errori da evitare</h4><ul>${g.errors.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="exercise-actions"><button class="primary" onclick="openGuided('${currentDayForExercise(id)}','${id}')">Avvia serie guidata</button></div>`;
  $('#exerciseModal').showModal();
}
function openPoster(id){
  const g=posterGuide(id); if(!g) return;
  $('#modalTitle').textContent=g.name;
  $('#modalEyebrow').textContent='Poster illustrato';
  $('#modalContent').innerHTML=`
    <img class="modal-hero-image poster-hero" src="${g.image}" alt="${g.name}" loading="lazy" />
    <div class="exercise-meta"><span class="tag">${g.area}</span><span class="tag green">${g.frequency}</span></div>
    <p class="guided-sub">${g.short}</p>
    <div class="modal-section"><h4>Uso consigliato</h4><p>${g.use}</p></div>
    <div class="modal-section"><h4>Contenuto</h4><p>${g.content}</p></div>
    <div class="modal-section"><h4>Nota coach</h4><p>${g.tip}</p></div>`;
  $('#exerciseModal').showModal();
}
function currentDayForExercise(exId){ return allExerciseCollections().find(d=>d.exercises.some(e=>e.id===exId))?.id || workouts[state.selectedDay].id; }
function svgFigure(kind){
  const color='currentColor';
  const base=`<svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke="${color}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity=".9">`;
  const end='</g></svg>';
  if(kind==='petto') return base+`<path d="M68 118h164"/><path d="M90 118c18-42 101-42 120 0"/><circle cx="116" cy="76" r="18"/><circle cx="184" cy="76" r="18"/><path d="M116 94v42M184 94v42"/><path d="M86 139h128"/>`+end;
  if(kind==='dorso') return base+`<path d="M150 35v105"/><path d="M80 58c36 24 104 24 140 0"/><path d="M94 78c20 38 92 38 112 0"/><path d="M110 136h80"/>`+end;
  if(kind==='gambe'||kind==='posteriori'||kind==='glutei') return base+`<circle cx="150" cy="35" r="14"/><path d="M150 50v52"/><path d="M150 102l-42 48"/><path d="M150 102l52 45"/><path d="M118 151h-28M202 148h28"/><path d="M130 76h40"/>`+end;
  if(kind==='spalle') return base+`<circle cx="150" cy="44" r="17"/><path d="M150 62v66"/><path d="M102 88l48-16 48 16"/><path d="M102 88l-30 36M198 88l30 36"/>`+end;
  if(kind==='core') return base+`<path d="M78 110h144"/><path d="M102 90h96"/><circle cx="150" cy="56" r="17"/><path d="M150 73v58"/><path d="M112 132h76"/>`+end;
  return base+`<circle cx="150" cy="42" r="17"/><path d="M150 60v78"/><path d="M104 82h92"/><path d="M124 144h52"/>`+end;
}

function openGuided(dayId,exId){
  if ($('#exerciseModal').open) $('#exerciseModal').close();
  state.guided={dayId,exId};
  updateGuidedContent();
  $('#guidedModal').showModal();
}
function updateGuidedContent(){
  if(!state.guided) return;
  const {dayId,exId}=state.guided; const e=findExercise(exId); const done=getDoneSets(dayId,exId);
  const next=Array.from({length:e.sets},(_,i)=>i).find(i=>!done.includes(i));
  const complete=next===undefined;
  $('#guidedTitle').textContent=e.name;
  $('#guidedEyebrow').textContent=findDay(dayId).name;
  $('#guidedContent').innerHTML=`
    <div class="guided-box">
      <div class="guided-dots">${Array.from({length:e.sets},(_,i)=>`<span class="series-dot ${done.includes(i)?'done':''}">${i+1}</span>`).join('')}</div>
      <p class="guided-sub">${complete?'Tutte le serie completate.':`Prossima serie: ${next+1} di ${e.sets}. Range consigliato: ${e.reps}. Recupero: ${e.rest}.`}</p>
      <div class="guided-count">${complete?'✓':`${next+1}/${e.sets}`}</div>
      <p class="guided-sub">${e.note}</p>
      ${complete?`<button class="guided-primary" onclick="finishGuided()">Chiudi esercizio</button>`:`<button class="guided-primary" onclick="completeGuidedSet()">Serie completata</button>`}
    </div>`;
}
function completeGuidedSet(){
  if(!state.guided) return;
  const {dayId,exId}=state.guided; const e=findExercise(exId); const done=getDoneSets(dayId,exId);
  const next=Array.from({length:e.sets},(_,i)=>i).find(i=>!done.includes(i));
  if(next===undefined){ updateGuidedContent(); return; }
  setDoneSets(dayId,exId,[...done,next]);
  refreshWorkoutRenders();
  const after=getDoneSets(dayId,exId);
  if(after.length>=e.sets){ beep(); toast('Esercizio completato.'); updateGuidedContent(); return; }
  $('#guidedModal').close();
  showTab('timer');
  $('#timerTitle').textContent=`Recupero — ${e.name}`;
  $('#timerHint').textContent='Quando il recupero termina, torni automaticamente alla schermata dell’esercizio.';
  setTimer(e.restSeconds);
  startTimer(()=>{ openGuided(dayId,exId); $('#timerTitle').textContent='Recupero'; $('#timerHint').textContent='Scegli il recupero e premi Avvia. Con schermo bloccato il browser può sospendere l’app: usa “Tieni schermo acceso” quando disponibile.'; });
}
function finishGuided(){ state.guided=null; $('#guidedModal').close(); }

function bindTimer(){
  $$('.preset').forEach(btn=>btn.addEventListener('click',()=>{ setTimer(Number(btn.dataset.seconds)); $$('.preset').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }));
  $('#startTimer').addEventListener('click',()=>startTimer());
  $('#pauseTimer').addEventListener('click',pauseTimer);
  $('#resetTimer').addEventListener('click',()=>resetTimer());
  $('#soundTestBtn').addEventListener('click',()=>{ unlockAudio(); beep(); toast('Suono attivato.'); });
  $('#notifyBtn').addEventListener('click',requestNotifications);
  $('#wakeLockBtn').addEventListener('click',toggleWakeLock);
  updateTimerDisplay();
}
function setTimer(sec){ state.timerSeconds=sec; state.timerRemaining=sec; state.timerEnd=null; updateTimerDisplay(); }
function startTimer(onDone){
  unlockAudio();
  if(state.timerRunning) return;
  state.timerRunning=true; state.timerPaused=false; state.timerEnd=Date.now()+state.timerRemaining*1000; state.onTimerDone=onDone || null;
  requestWakeLock(false);
  tickTimer();
}
function pauseTimer(){
  if(!state.timerRunning) return;
  state.timerRunning=false; state.timerPaused=true; clearTimeout(state.timerId);
  if(state.timerEnd) state.timerRemaining=Math.max(0,Math.ceil((state.timerEnd-Date.now())/1000));
  updateTimerDisplay();
}
function resetTimer(sec=state.timerSeconds){
  state.timerRunning=false; state.timerPaused=false; clearTimeout(state.timerId); state.timerRemaining=sec; state.timerEnd=null; updateTimerDisplay();
}
function tickTimer(){
  clearTimeout(state.timerId);
  if(!state.timerRunning || !state.timerEnd) return;
  state.timerRemaining=Math.max(0,Math.ceil((state.timerEnd-Date.now())/1000));
  updateTimerDisplay();
  if(state.timerRemaining<=0){
    state.timerRunning=false; beep(); vibrate(); showDoneNotification();
    const cb=state.onTimerDone; state.onTimerDone=null;
    if(cb) setTimeout(cb,450);
    return;
  }
  state.timerId=setTimeout(tickTimer,250);
}
function updateTimerDisplay(){
  const m=String(Math.floor(state.timerRemaining/60)).padStart(2,'0');
  const s=String(state.timerRemaining%60).padStart(2,'0');
  $('#timerDisplay').textContent=`${m}:${s}`;
  const pct=state.timerSeconds?((state.timerSeconds-state.timerRemaining)/state.timerSeconds)*100:0;
  $('.timer-ring')?.style.setProperty('--progress',`${pct}%`);
}
function handleVisibility(){
  if(state.timerRunning && state.timerEnd){ tickTimer(); }
  if(document.visibilityState==='visible' && state.wakeLock){ requestWakeLock(false); }
}
function unlockAudio(){
  try{
    if(!state.audioCtx) state.audioCtx=new (window.AudioContext||window.webkitAudioContext)();
    if(state.audioCtx.state==='suspended') state.audioCtx.resume();
    state.audioReady=true;
  }catch{}
}
function beep(){
  try{
    unlockAudio(); const ctx=state.audioCtx; if(!ctx) return;
    [0,.18,.36].forEach((offset)=>{
      const osc=ctx.createOscillator(); const gain=ctx.createGain();
      osc.type='sine'; osc.frequency.setValueAtTime(880,ctx.currentTime+offset);
      gain.gain.setValueAtTime(.0001,ctx.currentTime+offset);
      gain.gain.exponentialRampToValueAtTime(.32,ctx.currentTime+offset+.02);
      gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+offset+.13);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime+offset); osc.stop(ctx.currentTime+offset+.14);
    });
  }catch{}
}
function vibrate(){ if(navigator.vibrate) navigator.vibrate([220,80,220]); }
function requestNotifications(){
  if(!('Notification' in window)){ toast('Notifiche non supportate da questo browser.'); return; }
  Notification.requestPermission().then(p=>toast(p==='granted'?'Notifiche attivate.':'Notifiche non autorizzate.'));
}
function showDoneNotification(){
  if('Notification' in window && Notification.permission==='granted'){
    try{ new Notification('Recupero finito', {body:'Torna alla serie successiva.', icon:'assets/icon-192.png'}); }catch{}
  }
}
async function requestWakeLock(showToast=true){
  try{
    if(!('wakeLock' in navigator)){ if(showToast) toast('Wake Lock non disponibile su questo browser.'); return; }
    state.wakeLock=await navigator.wakeLock.request('screen');
    state.wakeLock.addEventListener('release',()=>{});
    $('#wakeLockBtn').textContent='Schermo attivo';
    if(showToast) toast('Schermo mantenuto acceso finché l’app resta aperta.');
  }catch(err){ if(showToast) toast('Non posso impedire il blocco schermo su questo dispositivo.'); }
}
async function toggleWakeLock(){
  if(state.wakeLock && !state.wakeLock.released){ await state.wakeLock.release(); state.wakeLock=null; $('#wakeLockBtn').textContent='Tieni schermo acceso'; toast('Wake Lock disattivato.'); }
  else requestWakeLock(true);
}

function bindDiet(){
  $$('.diet-filter').forEach(btn=>btn.addEventListener('click',()=>{ $$('.diet-filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); renderDiet(btn.dataset.dietfilter); }));
}
function renderDiet(filter='all'){
  const list=dietPlan.filter(d=>filter==='all'||(filter==='week1'?d.n<=7:filter==='week2'?d.n>7:d.sweet));
  $('#dietList').innerHTML=list.map(d=>`
    <article class="diet-day">
      <p class="mini">Giorno ${d.n} · ${d.focus}</p><h3>${d.sweet?'Allenamento':'Recupero'} ${d.sweet?'· più carbo attorno alla seduta':''}</h3>
      ${['Colazione','Pranzo','Merenda','Cena'].map((meal,i)=>`<div class="meal"><strong>${meal}</strong><p>${d.meals[i]}</p></div>`).join('')}
    </article>`).join('');
}
function bindCarbInputs(){ ['swapFrom','swapTo','swapGrams'].forEach(id=>$('#'+id).addEventListener('input',renderSwap)); }
function renderCarbTool(){
  const opts=carbs.map(c=>`<option value="${c.id}">${c.name} (${c.note})</option>`).join('');
  $('#swapFrom').innerHTML=opts; $('#swapTo').innerHTML=opts;
  $('#swapFrom').value='riso-crudo'; $('#swapTo').value='pasta-cruda'; $('#swapGrams').value='80';
  bindCarbInputs(); renderSwap(); renderQuickCarbTable();
}
function renderSwap(){
  const from=carbs.find(c=>c.id===$('#swapFrom').value); const to=carbs.find(c=>c.id===$('#swapTo').value);
  const grams=Number($('#swapGrams').value)||0; const kcal=grams*from.kcal/100; const toGrams=kcal/(to.kcal/100);
  $('#swapResult').innerHTML=`<strong>${grams} g di ${from.name}</strong> ≈ <strong>${Math.round(toGrams)} g di ${to.name}</strong><br><span class="muted">Energia stimata: circa ${Math.round(kcal)} kcal. ${from.note} → ${to.note}.</span>`;
}
function renderQuickCarbTable(){
  const lunchRows=[
    ['Pasta secca 70 g','base pranzo'],
    ['Riso secco 70–75 g','equivalente'],
    ['Riso cotto 210–230 g','equivalente'],
    ['Patate 300–350 g','equivalente'],
    ['Polenta cotta 300 g','equivalente'],
    ['Farina per polenta secca 65–70 g','equivalente'],
    ['Pane 90–100 g','equivalente'],
    ['Noodles secchi 65–70 g','equivalente'],
    ['Noodles cotti 180–220 g','equivalente']
  ];
  const dinnerRows=[
    ['Patate 300 g','base cena'],
    ['Pasta secca 60 g','alternativa'],
    ['Riso secco 60–65 g','alternativa'],
    ['Riso cotto 180–200 g','alternativa'],
    ['Polenta cotta 250–300 g','alternativa'],
    ['Pane 70–80 g','alternativa'],
    ['Noodles secchi 60 g','alternativa']
  ];
  $('#quickCarbTable').innerHTML=`
    <table>
      <thead><tr><th colspan="2">Alternative ai 70 g di pasta secca — pranzo</th></tr></thead>
      <tbody>${lunchRows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</tbody>
      <thead><tr><th colspan="2">Alternative ai 300 g di patate — cena</th></tr></thead>
      <tbody>${dinnerRows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</tbody>
    </table>`;
}
function bindProgress(){
  $('#addMeasure').addEventListener('click',addMeasure);
  $('#addHistory').addEventListener('click',addHistory);
  $('#resetProgress').addEventListener('click',()=>{ if(confirm('Azzero misure, cronologia, carichi e serie completate?')){ Object.values(STORE).forEach(k=>localStorage.removeItem(k)); renderAll(); toast('Dati azzerati.'); } });
  $$('#resetWeeklySets').forEach(btn=>btn.addEventListener('click',resetWeeklySets));
}
function resetWeeklySets(){
  if(confirm('Azzerare solo le serie completate della settimana? Misure, carichi e cronologia restano salvati.')){
    localStorage.removeItem(STORE.sets);
    refreshWorkoutRenders();
    renderProgress();
    toast('Serie settimanali azzerate.');
  }
}
function addMeasure(){
  const weight=Number($('#measureWeight').value); const waist=Number($('#measureWaist').value);
  if(!weight&&!waist){ toast('Inserisci peso o girovita.'); return; }
  const list=load(STORE.measures,[]); list.unshift({date:new Date().toLocaleDateString('it-IT'),weight,waist}); save(STORE.measures,list.slice(0,30));
  $('#measureWeight').value=''; $('#measureWaist').value=''; renderProgress(); toast('Misura salvata.');
}
function addHistory(){
  const day=$('#historyDay').value; const notes=$('#historyNotes').value.trim();
  const list=load(STORE.history,[]); list.unshift({date:new Date().toLocaleDateString('it-IT'),day,notes}); save(STORE.history,list.slice(0,40)); $('#historyNotes').value=''; renderProgress(); toast('Allenamento registrato.');
}
function renderProgress(){
  const measures=load(STORE.measures,[]); const history=load(STORE.history,[]); const loads=load(STORE.loads,{});
  $('#measureList').innerHTML=measures.slice(0,8).map(m=>`<div class="mini-item">${m.date} · Peso ${m.weight||'-'} kg · Vita ${m.waist||'-'} cm</div>`).join('') || '<div class="mini-item">Nessuna misura salvata.</div>';
  $('#historyList').innerHTML=history.slice(0,8).map(h=>`<div class="mini-item">${h.date} · ${h.day}${h.notes?' · '+escapeHtml(h.notes):''}</div>`).join('') || '<div class="mini-item">Nessun allenamento registrato.</div>';
  renderChart(measures);
  const unique=[...new Map(workouts.flatMap(d=>d.exercises).map(e=>[e.id,e])).values()];
  $('#progressTable').innerHTML=`<table class="progress-table"><thead><tr><th>Esercizio</th><th>Carico attuale</th><th>Range alto?</th></tr></thead><tbody>${unique.map(e=>`
    <tr><td>${e.name}<br><span class="muted">${e.sets}×${e.reps}</span></td><td><input value="${loads[e.id]||''}" placeholder="es. 16 kg" data-loadid="${e.id}" /></td><td><button class="ghost small" data-high="${e.id}">Completato</button></td></tr>`).join('')}</tbody></table>`;
  $$('[data-loadid]').forEach(inp=>inp.addEventListener('change',()=>{ const l=load(STORE.loads,{}); l[inp.dataset.loadid]=inp.value; save(STORE.loads,l); toast('Carico salvato.'); }));
  $$('[data-high]').forEach(btn=>btn.addEventListener('click',()=>toast('Se hai chiuso tutte le serie al limite alto con tecnica pulita, aumenta poco il carico la prossima volta.')));
}
function renderChart(measures){
  const canvas=$('#measureChart'); const ctx=canvas.getContext('2d'); const w=canvas.width=canvas.clientWidth*devicePixelRatio; const h=canvas.height=170*devicePixelRatio; ctx.clearRect(0,0,w,h);
  ctx.scale(devicePixelRatio,devicePixelRatio); const W=canvas.clientWidth,H=170;
  ctx.strokeStyle='rgba(255,255,255,.12)'; ctx.lineWidth=1; for(let i=1;i<4;i++){ctx.beginPath();ctx.moveTo(0,i*H/4);ctx.lineTo(W,i*H/4);ctx.stroke();}
  const pts=measures.slice(0,12).reverse().filter(m=>m.weight);
  if(pts.length<2){ ctx.fillStyle='rgba(255,255,255,.45)'; ctx.font='13px system-ui'; ctx.fillText('Inserisci almeno 2 pesate per vedere il grafico.',14,86); return; }
  const vals=pts.map(p=>p.weight); const min=Math.min(...vals)-1,max=Math.max(...vals)+1;
  ctx.strokeStyle='#38bdf8'; ctx.lineWidth=3; ctx.beginPath();
  pts.forEach((p,i)=>{ const x=14+i*(W-28)/(pts.length-1); const y=H-18-((p.weight-min)/(max-min))*(H-36); if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y); }); ctx.stroke();
}
function escapeHtml(str){ return str.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function setupInstallPrompt(){
  let deferred;
  window.addEventListener('beforeinstallprompt',e=>{ e.preventDefault(); deferred=e; $('#installBtn').classList.remove('hidden'); });
  $('#installBtn').addEventListener('click',async()=>{ if(!deferred) return; deferred.prompt(); await deferred.userChoice; deferred=null; $('#installBtn').classList.add('hidden'); });
}
function toast(msg){
  const old=$('.toast'); if(old) old.remove();
  const el=document.createElement('div'); el.className='toast'; el.textContent=msg; document.body.appendChild(el); setTimeout(()=>el.remove(),2600);
}

window.openGuided=openGuided; window.completeGuidedSet=completeGuidedSet; window.finishGuided=finishGuided; window.openPoster=openPoster; window.toast=toast;
window.addEventListener('load',init);
