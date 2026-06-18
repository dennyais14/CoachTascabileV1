const VERSION = '11';
const STORE = {
  sets: 'coach_v11_sets',
  measures: 'coach_v11_measures',
  history: 'coach_v11_history',
  loads: 'coach_v11_loads'
};

const workouts = [
  {
    id:'upper-a', name:'Upper A — priorità petto pesante', focus:'Petto + schiena controllata', meta:'Petto all’inizio. Dorso ridotto per liberare recupero.',
    exercises:[
      ex('panca-piana-manubri','Panca piana manubri','petto','4','8–12','90–120s','16 kg/mano','Scapole addotte e depresse, petto alto, discesa 2–3 sec, fermo leggero in basso.'),
      ex('push-up','Push-up','petto','3','8–15','75–90s','corpo libero','Fermati con 1–2 reps in riserva. Quando fai 3×15 pulite, aggiungi zaino leggero o una serie.'),
      ex('croci-cavo-manubri','Croci al cavo o manubri','petto','2','12–20','60–75s','leggero','Allungamento controllato, gomiti morbidi, chiudi senza perdere il petto alto.'),
      ex('rematore-manubrio','Rematore manubrio 1 braccio','dorso','3','8–12/lato','90s','18–20 kg','Gomito vicino al fianco, busto stabile, non ruotare per tirare più peso.'),
      ex('trazioni-prone','Trazioni prone / pulldown','dorso','3','6–10','120s','BW o 25–35 kg cavo','Petto verso la barra, scapole attive, ROM pulita prima della zavorra.'),
      ex('alzate-laterali','Alzate laterali','spalle','3','12–20','60s','5–6 kg','Movimento pulito, no slancio. Polso neutro e stop circa a spalle orizzontali.'),
      ex('pushdown-fune','Pushdown tricipiti fune','tricipiti','2','10–15','60s','10–15 kg cavo','Gomiti fermi, estensione completa, non spingere con le spalle.'),
      ex('hanging-knee-raise','Hanging knee raise','core','3','8–15','60s','corpo libero','Bacino in retroversione, evita dondolio e slancio.')
    ]
  },
  {
    id:'lower-a', name:'Lower A — gambe + core', focus:'Quadricipiti/glutei', meta:'Seduta gambe solida, senza extra collo integrati.',
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
    id:'upper-b', name:'Upper B — dorso/spalle/braccia', focus:'Schiena + spalle', meta:'Giornata senza volume petto diretto: aiuta recupero e postura.',
    exercises:[
      ex('pulldown','Lat machine / pulldown','dorso','4','10–15','90s','25–35 kg cavo','Tira i gomiti verso il basso, non dietro al collo. Petto alto.'),
      ex('rematore-cavo','Rematore al cavo basso','dorso','4','10–15','90s','20–30 kg cavo','Scapole indietro, petto alto, niente slancio lombare.'),
      ex('shoulder-press','Shoulder press manubri','spalle','4','8–12','90s','9 kg/mano','Chiudi sopra la testa senza iperestendere la schiena.'),
      ex('face-pull','Face pull','spalle','3','12–20','60s','5–10 kg cavo','Tira verso fronte/occhi, gomiti alti, lento.'),
      ex('rear-delt-fly','Rear delt fly','spalle','3','12–20','60s','3–5 kg/mano','Braccia quasi tese, scapole stabili, niente slancio.'),
      ex('curl-barra','Curl barra corta/manubri','bicipiti','3','8–12','60–75s','12–18 kg','Polsi neutri, gomiti fermi, evita swing.'),
      ex('estensioni-tricipiti','Estensioni tricipiti al cavo','tricipiti','2','10–15','60s','leggero/mod.','Controlla la fase eccentrica e non aprire i gomiti.')
    ]
  },
  {
    id:'lower-b', name:'Lower B — posterior chain + core', focus:'Femorali/glutei/addome', meta:'Catena posteriore, core e stabilità.',
    exercises:[
      ex('rdl-pesante','Romanian deadlift pesante','posteriori','4','8–12','120s','18–22 kg/mano','Priorità alla tecnica: anche indietro, schiena neutra, peso vicino alle gambe.'),
      ex('hip-thrust','Hip thrust / glute bridge','glutei','4','10–15','90s','24 kg','Pausa 1 sec in alto. Se facile usa zaino o manubrio più stabile.'),
      ex('step-up','Step-up su panca','gambe','3','8–12/gamba','75–90s','6–8 kg/mano','Sali controllando il ginocchio, non spingere troppo con la gamba a terra.'),
      ex('sliding-curl','Sliding leg curl','posteriori','3','8–12','75–90s','corpo libero','Bacino alto, estendi lentamente, richiama coi femorali.'),
      ex('calf-raise','Calf raise 1 gamba','polpacci','4','12–20','60s','BW + 16–24 kg','Pausa in alto e allungamento in basso.'),
      ex('cable-crunch','Cable crunch','core','3','12–20','60s','12–20 kg cavo','Chiudi costole verso bacino, non tirare solo con le braccia.'),
      ex('pallof-press','Pallof press','core','3','10–15/lato','45–60s','elastico/cavo','Resisti alla rotazione, bacino fermo, addome attivo.')
    ]
  },
  {
    id:'upper-c', name:'Upper C — priorità petto alto + volume', focus:'Petto alto + spalle/braccia', meta:'Seconda seduta petto. Volume diretto settimanale totale circa 17 serie.',
    exercises:[
      ex('panca-inclinata','Panca inclinata 30° manubri','petto','4','8–12','90–120s','14–16 kg/mano','Petto alto, scapole stabili, non trasformare in shoulder press.'),
      ex('push-up-rialzati','Push-up piedi rialzati','petto','2','8–15','75–90s','corpo libero','Spingi controllato, busto rigido, fermati prima che la tecnica crolli.'),
      ex('dip-assistiti','Dip assistiti/controllati','petto','2','6–10','90s','assistiti/BW','Inclinati leggermente avanti, spalle basse, ROM senza fastidio.'),
      ex('pulldown-stretto','Pulldown presa stretta','dorso','3','10–12','90s','25–35 kg cavo','Movimento controllato, gomiti verso il basso, petto alto.'),
      ex('rematore-cavo-leggero','Rematore cavo leggero','dorso','2','12–15','75–90s','medio','Solo mantenimento dorso: non trasformarlo in una seduta schiena pesante.'),
      ex('alzate-laterali','Alzate laterali','spalle','3','12–20','60s','5–6 kg','Meglio leggere e pulite che pesanti e sporche.'),
      ex('curl-inclinato','Curl manubri o cavo','bicipiti','2','8–12','60s','moderato','Gomiti stabili, fase negativa controllata.'),
      ex('pushdown-fune','Pushdown tricipiti fune','tricipiti','2','10–15','60s','10–15 kg cavo','Gomiti fermi, estensione completa.')
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

const dietPlan = [
  day(1,'Upper A',true,['Yogurt greco 250 g + whey 30 g + pane 60 g con eritritolo/cannella','Pasta 75 g + pollo/tacchino 160 g + verdure + pecorino 10 g','Merenda: yogurt 70 g + whey 30 g + uovo cotto/pastorizzato con eritritolo','Riso 80 g crudo oppure alternativa + uova/albumi o carne magra + verdure']),
  day(2,'Lower A',true,['Crêpe dolce: farina 50 g + albumi 200 g + latte/ acqua + eritritolo','Riso 80 g + manzo magro 150 g o seitan 180 g + verdure','Yogurt greco 200 g + frutta','Patate 300 g + pollo 170 g + verdure + olio 10 g']),
  day(3,'Recupero',false,['Yogurt greco 250 g + frutta + pane 40–60 g','Pasta 70 g + 2 uova + albumi 150 g + verdure','Whey 30 g + banana o pane 50 g','Polenta cotta 300 g + tacchino 170 g + verdure']),
  day(4,'Upper B',true,['Pane 80 g + yogurt greco 250 g + cacao amaro/eritritolo','Noodles 75 g crudi + pollo 170 g + verdure saltate','Merenda dolce proteica: yogurt 70 g + whey + uovo cotto/pastorizzato','Riso 80 g + uova/albumi o carne magra + verdure']),
  day(5,'Lower B',false,['Crêpe dolce proteica oppure yogurt + pane','Pasta 80 g + tacchino 170 g + pecorino 10 g + verdure','Whey 30 g + frutta','Patate 300–350 g + pollo 170–200 g + verdure']),
  day(6,'Upper C',true,['Yogurt greco 250–300 g + pane 60 g + miele/eritritolo se vuoi dolce','Riso 80 g + pollo 170 g + verdure','Merenda: whey + yogurt oppure uovo cotto/pastorizzato','Pasta 70 g o polenta 300 g + proteina magra + verdure']),
  day(7,'Recupero',false,['Colazione dolce leggera: yogurt + frutta + pane 40 g','Piatto libero controllato: carbo equivalente + proteina 150–180 g','Yogurt greco 200 g o whey','Cena semplice: patate/polenta + uova/albumi + verdure']),
  day(8,'Upper A',true,['Yogurt greco 250 g + whey + pane 60 g','Pasta 75 g + pollo 170 g + verdure','Merenda proteica dolce','Riso 80 g o patate 300 g + tacchino/uova + verdure']),
  day(9,'Lower A',true,['Crêpe dolce proteica','Riso 80 g + carne magra 150–180 g o seitan','Yogurt + frutta','Polenta cotta 300–350 g + pollo/tacchino + verdure']),
  day(10,'Recupero',false,['Yogurt greco 250 g + pane 50 g','Pasta 70 g + uova/albumi + verdure','Whey 30 g','Patate 300 g + proteina magra']),
  day(11,'Upper B',true,['Pane 70–80 g + yogurt greco 250 g','Noodles 75 g crudi + pollo/tacchino + verdure','Merenda yogurt+whey oppure uovo cotto/pastorizzato','Riso 80 g + proteina magra + verdure']),
  day(12,'Lower B',false,['Crêpe dolce o yogurt + pane','Pasta 80 g + tacchino + pecorino 10 g','Whey + frutta','Patate 300–350 g + pollo 170–200 g']),
  day(13,'Upper C',true,['Yogurt greco + whey + pane','Riso 80 g + pollo 170 g + verdure','Merenda dolce proteica','Polenta 300 g o pasta 70 g + uova/albumi']),
  day(14,'Recupero',false,['Colazione dolce controllata','Carbo equivalente + proteina + verdure','Yogurt greco o whey','Cena semplice e leggera con patate/polenta/riso equivalente'])
];
function day(n,focus,sweet,meals){ return {n,focus,sweet,meals}; }

const carbs = [
  {id:'riso-crudo', name:'Riso crudo', kcal:360, note:'peso a crudo'},
  {id:'pasta-cruda', name:'Pasta cruda', kcal:350, note:'peso a crudo'},
  {id:'noodles-crudi', name:'Noodles crudi', kcal:360, note:'peso a crudo'},
  {id:'pane', name:'Pane', kcal:270, note:'peso pronto'},
  {id:'patate-cotte', name:'Patate cotte/lesse', kcal:85, note:'peso cotto'},
  {id:'polenta-cotta', name:'Polenta cotta', kcal:85, note:'peso cotto'},
  {id:'farina-polenta', name:'Farina per polenta secca', kcal:360, note:'peso a crudo'},
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
  'hanging-knee-raise':'assets/hanging_knee_raise.png'
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
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('service-worker.js?v=11').catch(()=>{}); }
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
  renderToday(); renderWorkouts(); renderExtra(); renderLibrary(); renderDiet(); renderCarbTool(); renderProgress();
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
function findExercise(id){ return workouts.flatMap(d=>d.exercises).find(e=>e.id===id) || workouts[0].exercises[0]; }
function findDay(id){ return workouts.find(d=>d.id===id) || workouts[0]; }

function exerciseImage(id){ return exerciseImages[id] || ''; }
function posterGuide(id){ return posterGuides.find(p=>p.id===id); }
function mediaFigure(id,kind,name,cls='exercise-visual'){ const img=exerciseImage(id); return img ? `<img class="${cls}" src="${img}" alt="${name}" loading="lazy" />` : `<div class="tech-figure">${svgFigure(kind)}</div>`; }

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

function renderLibrary(){
  const q=($('#searchExercises').value||'').toLowerCase().trim();
  const seen=new Map();
  workouts.flatMap(d=>d.exercises).forEach(e=>{ if(!seen.has(e.id)) seen.set(e.id,e); });
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
function currentDayForExercise(exId){ return workouts.find(d=>d.exercises.some(e=>e.id===exId))?.id || workouts[state.selectedDay].id; }
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
  const rows=[
    ['Riso crudo 80 g','Pasta cruda 80–85 g','Patate cotte 330–350 g','Polenta cotta 330–350 g','Farina polenta 80 g'],
    ['Pasta cruda 70 g','Riso crudo 68–72 g','Patate cotte 285–300 g','Polenta cotta 285–300 g','Pane 90 g'],
    ['Patate cotte 300 g','Pasta cruda 70–75 g','Riso crudo 70 g','Polenta cotta 300 g','Noodles crudi 70 g'],
    ['Polenta cotta 300 g','Pasta cruda 70–75 g','Riso crudo 70 g','Patate cotte 300 g','Farina polenta 60–65 g secca']
  ];
  $('#quickCarbTable').innerHTML=`<table><thead><tr><th>Nel piano</th><th colspan="4">Alternative pratiche</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function bindProgress(){
  $('#addMeasure').addEventListener('click',addMeasure);
  $('#addHistory').addEventListener('click',addHistory);
  $('#resetProgress').addEventListener('click',()=>{ if(confirm('Azzero misure, cronologia, carichi e serie completate?')){ Object.values(STORE).forEach(k=>localStorage.removeItem(k)); renderAll(); toast('Dati azzerati.'); } });
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
