const exercises = {
  pullup:{name:'Trazioni presa prona', short:'Trazioni', image:'assets/trazioni.png', setup:'Scapole attive, addome contratto, gambe ferme.', grip:'Presa prona, poco più larga delle spalle.', concentric:'Tira il petto verso la sbarra e porta il mento sopra la barra.', eccentric:'Scendi lentamente fino a quasi distendere i gomiti mantenendo controllo.', startWeight:'Corpo libero', rest:'120 sec', tip:'Se chiudi 4x10 con controllo, prova micro-progressioni o fermo in alto.'},
  dbBench:{name:'Panca piana con manubri', short:'Panca piana', image:'assets/panca_piana.png', setup:'Scapole addotte, petto alto, piedi ben piantati.', grip:'Presa neutra o semi-pronata, polsi dritti.', concentric:'Spingi i manubri verso l’alto.', eccentric:'Scendi lentamente fino a sentire allungamento sul petto.', startWeight:'16 kg per mano', rest:'90 sec', tip:'Se arrivi a 4x12 pulito, sali di 1–2 kg per mano.'},
  row1:{name:'Rematore 1 braccio', short:'Rematore 1 braccio', image:'assets/rematore1.png', setup:'Un ginocchio e una mano sulla panca, schiena neutra.', grip:'Presa neutra.', concentric:'Tira il gomito verso il fianco.', eccentric:'Abbassa il manubrio in controllo fino ad allungare il dorsale.', startWeight:'18 kg', rest:'90 sec'},
  pushup:{name:'Push-up', short:'Push-up', image:'assets/pushup.png', setup:'Corpo in linea, addome e glutei contratti.', grip:'Mani poco oltre la larghezza delle spalle.', concentric:'Spingi il pavimento e torna su.', eccentric:'Scendi lentamente portando il petto verso il pavimento.', startWeight:'Corpo libero', rest:'75 sec'},
  lateralRaise:{name:'Alzate laterali', short:'Alzate laterali', image:'assets/alzate_laterali.png', setup:'Busto fermo, spalle basse, addome attivo.', grip:'Presa neutra, gomiti leggermente piegati.', concentric:'Alza le braccia fino circa alla linea delle spalle.', eccentric:'Scendi lentamente senza slancio.', startWeight:'6 kg per mano', rest:'60 sec'},
  ropePushdown:{name:'Pushdown tricipiti con fune', short:'Pushdown tricipiti', image:'assets/pushdown_tricipiti.png', setup:'Gomiti vicini al busto, petto aperto, spalle basse.', grip:'Presa neutra sulla fune.', concentric:'Spingi la fune verso il basso distendendo i gomiti.', eccentric:'Risali lentamente fino a riportare gli avambracci verso il petto.', startWeight:'12–18 kg sul tuo setup', rest:'60 sec'},
  kneeRaise:{name:'Hanging knee raise', short:'Knee raise', image:'assets/hanging_knee_raise.png', setup:'Appenditi senza dondolare, scapole attive.', grip:'Presa comoda sulla sbarra.', concentric:'Porta le ginocchia verso il petto arrotolando il bacino.', eccentric:'Distendi lentamente le gambe evitando slancio.', startWeight:'Corpo libero', rest:'60 sec'},
  gobletSquat:{name:'Goblet squat', short:'Goblet squat', image:'assets/goblet_squat.png', setup:'Piedi poco oltre le spalle, punte leggermente fuori.', grip:'Manubrio stretto al petto.', concentric:'Spingi il pavimento e risali.', eccentric:'Scendi con anche indietro e ginocchia in linea con i piedi.', startWeight:'24 kg', rest:'90 sec'},
  bulgarian:{name:'Bulgarian split squat', short:'Bulgarian split squat', image:'assets/bulgarian_split_squat.png', setup:'Piede posteriore su panca, busto leggermente inclinato.', grip:'Corpo libero o manubri ai lati.', concentric:'Spingi con il piede anteriore e risali.', eccentric:'Scendi in controllo.', startWeight:'8 kg per mano', rest:'90 sec'},
  rdl:{name:'Romanian deadlift con manubri', short:'RDL', image:'assets/rdl.png', setup:'Schiena neutra, ginocchia morbide, anche indietro.', grip:'Presa neutra ai lati delle cosce.', concentric:'Spingi le anche avanti e torna in alto.', eccentric:'Scendi facendo hip hinge con i manubri vicino alle gambe.', startWeight:'18 kg per mano', rest:'120 sec'},
  reverseLunge:{name:'Affondi indietro', short:'Affondi indietro', image:'assets/affondi_indietro.png', setup:'Petto alto, busto stabile.', grip:'Manubri ai lati o corpo libero.', concentric:'Spingi con il piede anteriore e torna in piedi.', eccentric:'Fai un passo indietro e scendi in controllo.', startWeight:'8 kg per mano', rest:'75 sec'},
  calfRaise:{name:'Calf raise', short:'Calf raise', image:'assets/calf_raise.png', setup:'Appoggio stabile, ginocchia morbide.', grip:'Eventuale manubrio in una mano, sostegno con l’altra.', concentric:'Sali sulle punte con pausa in alto.', eccentric:'Scendi lentamente fino al massimo allungamento.', startWeight:'Corpo libero o 16 kg', rest:'45 sec'},
  plank:{name:'Plank', short:'Plank', image:'assets/plank.png', setup:'Corpo in linea, addome e glutei attivi.', grip:'Avambracci o mani a terra.', concentric:'Mantieni tensione e respira.', eccentric:'Non cedere con bacino o spalle.', startWeight:'Corpo libero', rest:'45 sec'},
  pulldown:{name:'Lat machine / Pulldown', short:'Pulldown', image:'assets/lat_machine_pulldown.png', setup:'Petto alto, leggera inclinazione indietro.', grip:'Presa prona o neutra comoda.', concentric:'Tira la barra verso la parte alta del petto.', eccentric:'Rilascia lentamente fino ad allungare il dorsale.', startWeight:'20–30 kg sul tuo setup', rest:'90 sec'},
  cableRow:{name:'Rematore al cavo basso', short:'Low row', image:'assets/rematore_cavo_basso.png', setup:'Schiena neutra, petto aperto.', grip:'Presa stretta o neutra.', concentric:'Tira il manico verso l’ombelico.', eccentric:'Ritorno controllato in proiezione avanti.', startWeight:'20–30 kg sul tuo setup', rest:'75 sec'},
  shoulderPress:{name:'Shoulder press', short:'Shoulder press', image:'assets/shoulder_press.png', setup:'Glutei e addome contratti, polsi neutri.', grip:'Presa neutra o leggermente prona.', concentric:'Spingi i manubri sopra la testa.', eccentric:'Scendi lentamente fino all’altezza delle spalle.', startWeight:'9 kg per mano', rest:'90 sec'},
  facePull:{name:'Face pull', short:'Face pull', image:'assets/face_pull.png', setup:'Petto alto, spalle basse.', grip:'Presa neutra sulla fune.', concentric:'Tira la fune verso il viso aprendo i gomiti.', eccentric:'Ritorna lentamente senza perdere postura.', startWeight:'8–12 kg sul tuo setup', rest:'60 sec'},
  curl:{name:'Curl con barra corta', short:'Curl barra corta', image:'assets/curl_barra_corta.png', setup:'Gomiti fermi, petto alto.', grip:'Presa supina sulla barra corta.', concentric:'Fletti i gomiti e solleva la barra.', eccentric:'Scendi lentamente fino quasi a distendere le braccia.', startWeight:'10–14 kg totali', rest:'60 sec'},
  rearDelt:{name:'Rear delt fly', short:'Rear delt fly', image:'assets/rear_delt_fly.png', setup:'Busto inclinato, schiena neutra.', grip:'Presa neutra.', concentric:'Apri le braccia in fuori stringendo dietro le spalle.', eccentric:'Ritorna lentamente alla posizione iniziale.', startWeight:'4–6 kg per mano', rest:'60 sec'},
  hipThrust:{name:'Hip thrust / Glute bridge', short:'Hip thrust', image:'assets/hip_thrust.png', setup:'Spalle appoggiate, piedi alla larghezza delle anche.', grip:'Eventuale peso sul bacino.', concentric:'Spingi con i talloni e porta il bacino in alto.', eccentric:'Scendi lentamente mantenendo tensione sui glutei.', startWeight:'24 kg', rest:'90 sec'},
  stepUp:{name:'Step-up su panca', short:'Step-up', image:'assets/step_up_panca.png', setup:'Piede ben appoggiato sulla panca, busto alto.', grip:'Manubri ai lati o corpo libero.', concentric:'Spingi con la gamba sopra la panca e sali.', eccentric:'Scendi lentamente senza lasciarti cadere.', startWeight:'8 kg per mano', rest:'75 sec'},
  legCurl:{name:'Sliding leg curl', short:'Sliding leg curl', image:'assets/sliding_leg_curl.png', setup:'Supino, talloni su sliders o asciugamani.', grip:'Mani a terra per stabilità.', concentric:'Porta i talloni verso i glutei sollevando il bacino.', eccentric:'Distendi lentamente le gambe senza perdere il ponte.', startWeight:'Corpo libero', rest:'60 sec'},
  cableCrunch:{name:'Cable crunch', short:'Cable crunch', image:'assets/cable_crunch.png', setup:'In ginocchio al cavo alto, bacino fermo.', grip:'Mani alla fune vicino alla testa.', concentric:'Fletti la colonna portando il torace verso il basso.', eccentric:'Ritorna lentamente all’estensione controllata.', startWeight:'12–18 kg sul tuo setup', rest:'45 sec'},
  pallof:{name:'Pallof press', short:'Pallof press', image:'assets/pallof_press.png', setup:'In piedi laterale al cavo, addome forte.', grip:'Due mani sulla maniglia.', concentric:'Spingi le mani avanti senza ruotare il busto.', eccentric:'Riporta le mani al petto lentamente.', startWeight:'6–10 kg sul tuo setup', rest:'45 sec'},
  inclineBench:{name:'Panca inclinata 30° manubri', short:'Panca inclinata', image:'assets/panca_piana.png', setup:'Panca a 30°, scapole addotte, petto alto.', grip:'Presa neutra o semi-pronata.', concentric:'Spingi i manubri verso l’alto.', eccentric:'Scendi lentamente senza perdere assetto.', startWeight:'14 kg per mano', rest:'90 sec'},
  dips:{name:'Dip alle parallele', short:'Dip', image:'assets/dip.png', setup:'Spalle depresse, petto aperto, busto leggermente avanti.', grip:'Presa neutra sulle parallele.', concentric:'Spingi sulle parallele e distendi i gomiti.', eccentric:'Scendi lentamente finché mantieni il controllo.', startWeight:'Corpo libero / assistito', rest:'90 sec'},
  hammerCurl:{name:'Hammer curl con manubri', short:'Hammer curl', image:'assets/hammer_curl.png', setup:'In piedi, petto alto, gomiti vicini al busto.', grip:'Presa neutra, pollici verso l’alto.', concentric:'Fletti i gomiti e solleva i manubri senza slancio.', eccentric:'Scendi lentamente fino a quasi distendere le braccia.', startWeight:'8–10 kg per mano', rest:'60 sec', tip:'Ottimo per brachioradiale e presa. Quando chiudi 3x12, aumenta di 1–2 kg.'},
  wristCurl:{name:'Wrist curl seduto', short:'Wrist curl', image:'assets/wrist_curl.png', setup:'Avambracci ben appoggiati, muovi solo i polsi.', grip:'Presa supina con manubri leggeri.', concentric:'Chiudi i polsi verso l’alto.', eccentric:'Riporta lentamente i polsi in basso.', startWeight:'4–6 kg per mano', rest:'45 sec', tip:'Movimento piccolo e controllato, niente slancio.'},
  reverseWristCurl:{name:'Reverse wrist curl', short:'Reverse wrist curl', image:'assets/reverse_wrist_curl.png', setup:'Avambracci appoggiati, gomiti stabili.', grip:'Presa prona con carico leggero.', concentric:'Estendi i polsi verso l’alto.', eccentric:'Scendi lentamente in controllo.', startWeight:'2–4 kg per mano', rest:'45 sec', tip:'Usa carichi leggeri: la qualità conta più del peso.'},
  farmerHold:{name:'Farmer hold', short:'Farmer hold', image:'assets/farmer_hold.png', setup:'In piedi, petto alto, scapole basse, addome attivo.', grip:'Presa neutra forte sui manubri.', concentric:'Solleva i manubri e mantieni la posizione stringendo forte.', eccentric:'Abbassa i manubri in controllo.', startWeight:'18–24 kg per mano', rest:'60 sec', tip:'Se la presa cede troppo presto, spezza in blocchi da 20–30 sec e costruisci da lì.'},
  reverseCurlBar:{name:'Reverse curl con barra corta', short:'Reverse curl', image:'assets/reverse_curl_bar.png', setup:'In piedi, gomiti vicini al corpo, niente slancio.', grip:'Presa prona sulla barra corta.', concentric:'Fletti i gomiti e porta la barra verso il petto.', eccentric:'Scendi lentamente fino quasi a distendere le braccia.', startWeight:'8–12 kg totali', rest:'60 sec', tip:'Tieni i polsi stabili: il focus è su avambraccio e brachioradiale.'},
  pronationSupination:{name:'Prono-supinazione con manubrio', short:'Prono-supinazione', image:'assets/prono_supinazione.png', setup:'Gomito a 90°, vicino al busto, movimento lento.', grip:'Manubrio leggero tenuto da un’estremità.', concentric:'Ruota l’avambraccio fino a portare il palmo in su.', eccentric:'Torna lentamente al palmo in giù.', startWeight:'2–4 kg', rest:'45 sec', tip:'Lavora soprattutto in controllo: è un esercizio di qualità e stabilità.'},
  deadHang:{name:'Dead hang alla sbarra', short:'Dead hang', image:'assets/dead_hang.png', setup:'Appenditi con scapole attive e addome contratto.', grip:'Presa comoda sulla sbarra.', concentric:'Porta il corpo in sospensione attiva e mantieni la presa.', eccentric:'Termina la tenuta e scendi in controllo.', startWeight:'Corpo libero', rest:'60 sec', tip:'Non andare sempre al cedimento: lascia 5–10 sec di margine nelle prime settimane.'},
  fingerExtensions:{name:'Estensioni dita con elastico', short:'Estensioni dita', image:'assets/finger_extensions.png', setup:'Polso neutro, dita raccolte dentro l’elastico.', grip:'Elastico leggero attorno alle dita.', concentric:'Apri le dita contro la resistenza dell’elastico.', eccentric:'Ritorna lentamente alla chiusura.', startWeight:'Elastico leggero', rest:'30–45 sec', tip:'Ottimo per bilanciare tutto il lavoro di presa.'},
  chinTuck:{name:'Chin tuck', short:'Chin tuck', image:'assets/chin_tuck.png', setup:'Colonna lunga, sguardo orizzontale, spalle rilassate.', grip:'Nessuna impugnatura.', concentric:'Porta delicatamente il mento indietro senza guardare in basso.', eccentric:'Torna lentamente alla posizione neutra.', startWeight:'Corpo libero', rest:'30 sec', tip:'È un movimento piccolo: pensa a fare un “doppio mento” leggero e controllato.'},
  neckIsoFront:{name:'Isometria frontale del collo', short:'Iso collo frontale', image:'assets/neck_iso_front.png', setup:'Collo neutro, spalle basse, addome attivo.', grip:'Mano appoggiata sulla fronte.', concentric:'Spingi la testa in avanti contro la mano senza muoverti.', eccentric:'Rilascia lentamente la pressione.', startWeight:'30–60% della tua forza', rest:'30 sec', tip:'Deve essere una pressione moderata, non massimale.'},
  neckIsoRear:{name:'Isometria posteriore del collo', short:'Iso collo posteriore', image:'assets/neck_iso_rear.png', setup:'Collo neutro, petto alto, spalle rilassate.', grip:'Mani dietro la testa.', concentric:'Spingi la testa indietro contro le mani senza estendere il collo.', eccentric:'Rilascia lentamente la pressione.', startWeight:'30–60% della tua forza', rest:'30 sec', tip:'Mantieni il mento neutro: non iperestendere il collo.'},
  neckIsoSide:{name:'Isometria laterale del collo', short:'Iso collo laterale', image:'assets/neck_iso_side.png', setup:'Testa dritta, busto fermo.', grip:'Mano sul lato della testa.', concentric:'Spingi la testa contro la mano senza inclinarti.', eccentric:'Rilascia lentamente e ripeti dall’altro lato.', startWeight:'30–60% della tua forza', rest:'30 sec', tip:'Eseguila su entrambi i lati con la stessa durata.'},
  shrug:{name:'Shrug con manubri', short:'Shrug', image:'assets/shrug.png', setup:'In piedi, petto alto, braccia distese.', grip:'Presa neutra sui manubri.', concentric:'Solleva le spalle verso l’alto e mantieni 1 secondo.', eccentric:'Scendi lentamente senza ruotare le spalle.', startWeight:'18–24 kg per mano', rest:'60 sec', tip:'Pensa a salire dritto verso l’alto, non a fare cerchi con le spalle.'}
};

const guideCards = [
  {id:'guideForearmsA', type:'guide', name:'Guida avambracci A', short:'Hammer curl · Wrist curl · Reverse wrist curl', image:'assets/guida_avambracci_a_full.png', category:'Guida riassuntiva', setup:'Mini routine A per gli avambracci.', grip:'2 volte a settimana, come finisher di 8–12 minuti.', concentric:'Hammer curl 3x10–12, Wrist curl 2–3x15–20, Reverse wrist curl 2–3x15–20.', eccentric:'Chiudi con Farmer hold 3x30–45 secondi.', tip:'Se hai poco tempo, fai Hammer curl + Farmer hold.'},
  {id:'guideForearmsB', type:'guide', name:'Guida avambracci B', short:'Farmer hold · Reverse curl · Prono-supinazione', image:'assets/guida_avambracci_b_full.png', category:'Guida riassuntiva', setup:'Mini routine B per gli avambracci.', grip:'2 volte a settimana, in un giorno upper diverso dalla routine A.', concentric:'Reverse curl 3x10–15, Prono-supinazione 2x12–15/lato.', eccentric:'Chiudi con Dead hang 3x20–40 sec e Estensioni dita 2x20–30.', tip:'Questa routine punta molto su presa e rotatori dell’avambraccio.'},
  {id:'guideNeckA', type:'guide', name:'Guida collo base', short:'Dead hang · Estensioni dita · Chin tuck', image:'assets/guida_deadhang_chintuck_full.png', category:'Guida riassuntiva', setup:'Poster con dead hang, estensioni dita e chin tuck.', grip:'Usalo come guida rapida per la tecnica.', concentric:'Il chin tuck è l’esercizio base di controllo cervicale.', eccentric:'Non usare il collo fino al dolore.', tip:'Il collo va allenato con gradualità.'},
  {id:'guideNeckIso', type:'guide', name:'Guida isometrie collo', short:'Frontale · Posteriore · Laterale', image:'assets/guida_collo_isometrie_full.png', category:'Guida riassuntiva', setup:'Poster delle isometrie per il collo.', grip:'2 volte a settimana.', concentric:'2–3 serie da 10–20 sec per direzione.', eccentric:'Intensità 30–60%, niente massimali.', tip:'Interrompi se compaiono dolore, vertigini o formicolio.'},
  {id:'guideSummary', type:'guide', name:'Riepilogo avambracci e collo', short:'Routine A/B e routine collo', image:'assets/guida_riepilogo_avambracci_collo_full.png', category:'Guida riassuntiva', setup:'Poster riepilogativo con routine complete.', grip:'Ottimo da consultare rapidamente sul telefono.', concentric:'Riassume giorni, serie e ripetizioni.', eccentric:'Usalo come promemoria settimanale.', tip:'È il poster più pratico da tenere aperto durante l’allenamento.'}
];

const workouts = [
  {id:'Upper A', summary:'Petto / dorso + avambracci A', note:'Giornata base upper con finisher avambracci. Se il tempo è poco, fai almeno Hammer curl + Farmer hold.', exercises:[
    {id:'pullup',sets:'4',reps:'6–10',rest:120,block:'main'}, {id:'dbBench',sets:'4',reps:'8–12',rest:90,block:'main'}, {id:'row1',sets:'4',reps:'8–12 / lato',rest:90,block:'main'}, {id:'pushup',sets:'3',reps:'8–15',rest:75,block:'main'}, {id:'lateralRaise',sets:'4',reps:'12–20',rest:60,block:'main'}, {id:'ropePushdown',sets:'3',reps:'10–15',rest:60,block:'main'}, {id:'kneeRaise',sets:'3',reps:'8–15',rest:60,block:'main'},
    {id:'hammerCurl',sets:'3',reps:'10–12',rest:60,block:'extra',label:'Extra avambracci A'}, {id:'wristCurl',sets:'2–3',reps:'15–20',rest:45,block:'extra',label:'Extra avambracci A'}, {id:'reverseWristCurl',sets:'2–3',reps:'15–20',rest:45,block:'extra',label:'Extra avambracci A'}, {id:'farmerHold',sets:'3',reps:'30–45 sec',rest:60,block:'extra',label:'Extra avambracci A'}]},
  {id:'Lower A', summary:'Gambe + collo A', note:'Il blocco collo A è breve: eseguilo con pressione moderata e tecnica pulita.', exercises:[
    {id:'gobletSquat',sets:'4',reps:'10–15',rest:90,block:'main'}, {id:'bulgarian',sets:'4',reps:'8–12 / gamba',rest:90,block:'main'}, {id:'rdl',sets:'4',reps:'8–12',rest:120,block:'main'}, {id:'reverseLunge',sets:'3',reps:'10 / gamba',rest:75,block:'main'}, {id:'calfRaise',sets:'4',reps:'12–20',rest:45,block:'main'}, {id:'plank',sets:'3',reps:'45–75 sec',rest:45,block:'main'},
    {id:'chinTuck',sets:'2–3',reps:'10 reps con tenuta 3–5 sec',rest:30,block:'extra',label:'Extra collo A'}, {id:'neckIsoFront',sets:'2–3',reps:'10–20 sec',rest:30,block:'extra',label:'Extra collo A'}, {id:'neckIsoRear',sets:'2–3',reps:'10–20 sec',rest:30,block:'extra',label:'Extra collo A'}, {id:'neckIsoSide',sets:'2–3',reps:'10–20 sec / lato',rest:30,block:'extra',label:'Extra collo A'}]},
  {id:'Upper B', summary:'Dorso / spalle / braccia', note:'Giornata upper più classica, senza extra collo: concentra qui il lavoro base.', exercises:[
    {id:'pullup',sets:'5',reps:'5–8',rest:120,block:'main'}, {id:'pulldown',sets:'4',reps:'10–15',rest:90,block:'main'}, {id:'cableRow',sets:'4',reps:'10–15',rest:75,block:'main'}, {id:'shoulderPress',sets:'4',reps:'8–12',rest:90,block:'main'}, {id:'facePull',sets:'3–4',reps:'12–20',rest:60,block:'main'}, {id:'curl',sets:'3',reps:'10–15',rest:60,block:'main'}, {id:'rearDelt',sets:'3',reps:'12–20',rest:60,block:'main'}]},
  {id:'Lower B', summary:'Posterior chain / core + collo B', note:'Ripeti il collo 2 volte a settimana. Qui aggiungi anche gli shrug per trapezi e aspetto collo-spalle.', exercises:[
    {id:'hipThrust',sets:'4',reps:'8–12',rest:90,block:'main'}, {id:'stepUp',sets:'4',reps:'8–12 / gamba',rest:75,block:'main'}, {id:'legCurl',sets:'3',reps:'10–15',rest:60,block:'main'}, {id:'gobletSquat',sets:'3',reps:'12–15',rest:90,block:'main'}, {id:'calfRaise',sets:'4',reps:'12–20',rest:45,block:'main'}, {id:'cableCrunch',sets:'3',reps:'12–20',rest:45,block:'main'}, {id:'pallof',sets:'3',reps:'10–15 / lato',rest:45,block:'main'},
    {id:'chinTuck',sets:'2',reps:'10 reps con tenuta 3–5 sec',rest:30,block:'extra',label:'Extra collo B'}, {id:'neckIsoFront',sets:'2',reps:'10–20 sec',rest:30,block:'extra',label:'Extra collo B'}, {id:'neckIsoRear',sets:'2',reps:'10–20 sec',rest:30,block:'extra',label:'Extra collo B'}, {id:'neckIsoSide',sets:'2',reps:'10–20 sec / lato',rest:30,block:'extra',label:'Extra collo B'}, {id:'shrug',sets:'3',reps:'10–15',rest:60,block:'extra',label:'Extra collo B'}]},
  {id:'Upper C', summary:'Petto / spalle + avambracci B', note:'Se vuoi introdurre i dip, usali assistiti. Il finisher avambracci B è ottimo per presa e rotazioni.', exercises:[
    {id:'inclineBench',sets:'4',reps:'8–12',rest:90,block:'main'}, {id:'dips',sets:'3',reps:'5–8 assistite o controllate',rest:90,block:'main'}, {id:'pulldown',sets:'4',reps:'8–12',rest:90,block:'main'}, {id:'cableRow',sets:'4',reps:'10–12',rest:75,block:'main'}, {id:'shoulderPress',sets:'3',reps:'8–12',rest:90,block:'main'}, {id:'facePull',sets:'3',reps:'12–20',rest:60,block:'main'}, {id:'ropePushdown',sets:'3',reps:'10–15',rest:60,block:'main'},
    {id:'reverseCurlBar',sets:'3',reps:'10–15',rest:60,block:'extra',label:'Extra avambracci B'}, {id:'pronationSupination',sets:'2',reps:'12–15 / lato',rest:45,block:'extra',label:'Extra avambracci B'}, {id:'deadHang',sets:'3',reps:'20–40 sec',rest:60,block:'extra',label:'Extra avambracci B'}, {id:'fingerExtensions',sets:'2',reps:'20–30',rest:30,block:'extra',label:'Extra avambracci B'}]}
];

const progressKey = 'coach-tascabile-v6-progress';
const measureKey = 'coach-tascabile-v6-measures';
const historyKey = 'coach-tascabile-v6-history';
let progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
let measures = JSON.parse(localStorage.getItem(measureKey) || '[]');
let historyLog = JSON.parse(localStorage.getItem(historyKey) || '[]');
const trackKey = 'coach-tascabile-v7-workout-tracking';
let workoutTracking = JSON.parse(localStorage.getItem(trackKey) || '{}');
const trackItems = {};

const dietPlan = [
 {day:1,week:'week1',kcal:'2100–2200',protein:'160 g', meals:[['Colazione','Yogurt greco 250 g + pane 60 g + frutta + caffè.'],['Pranzo','Pasta 80 g con ceci 120 g, poco pecorino 10–15 g.'],['Spuntino','Frutta + yogurt greco 150 g.'],['Cena','Uova 2 + albumi 150 g, riso 70 g secco o patate 300 g.']]},
 {day:2,week:'week1',kcal:'2100–2200',protein:'160 g', meals:[['Colazione','Yogurt greco 250 g + avena 40 g + banana.'],['Pranzo','Riso 90 g secco con lenticchie 150 g e pecorino 10 g.'],['Spuntino','Pane 50 g + yogurt greco 170 g.'],['Cena','Pollo 170 g oppure tofu 220 g + polenta 300 g cotta + frutta.']]},
 {day:3,week:'week1',kcal:'2100–2300',protein:'155–170 g', meals:[['Colazione','Yogurt greco 250 g + pane 70 g + miele 10 g.'],['Pranzo','Pasta 80 g con ricotta magra o yogurt greco salato, pecorino 10 g.'],['Spuntino','Frutta + 20 g frutta secca.'],['Cena','Ceci 180 g + riso 70 g secco + 2 uova o albumi 200 g.']]},
 {day:4,week:'week1',kcal:'2100–2200',protein:'160 g', meals:[['Colazione','Yogurt greco 300 g + avena 35 g + mela.'],['Pranzo','Pasta 75 g con ceci 150 g e pecorino 15 g.'],['Spuntino','Pane 50 g + yogurt greco 150 g.'],['Cena','Tacchino o pollo 160 g, patate 350 g, frutta.']]},
 {day:5,week:'week1',kcal:'2100–2300',protein:'160 g', meals:[['Colazione','Yogurt greco 250 g + pane 60 g + frutta.'],['Pranzo','Riso 90 g secco con fagioli/ceci 150 g, olio 5 g, pecorino 10 g.'],['Spuntino','Yogurt greco 170 g + banana.'],['Cena','Omelette: 2 uova + albumi 200 g, polenta 300 g cotta.']]},
 {day:6,week:'week1',kcal:'2200 circa',protein:'155–165 g', meals:[['Colazione','Yogurt greco 300 g + avena 40 g + frutta.'],['Pranzo','Pasta 90 g con ceci 120 g, pecorino 15 g.'],['Spuntino','Pane 60 g + yogurt greco 150 g.'],['Cena','Manzo magro 150 g o seitan 200 g + riso 70 g secco + frutta.']]},
 {day:7,week:'week1',kcal:'2000–2150',protein:'155 g', meals:[['Colazione','Yogurt greco 250 g + pane 60 g + frutta.'],['Pranzo','Insalata di riso 80 g secco con ceci 150 g, mais poco, pecorino 10 g.'],['Spuntino','Frutta + yogurt.'],['Cena','Uova 2 + albumi 200 g + patate 300 g.']]},
 {day:8,week:'week2',kcal:'2100–2200',protein:'160 g', meals:[['Colazione','Yogurt greco 250 g + avena 40 g + banana.'],['Pranzo','Pasta 80 g con lenticchie 150 g e pecorino 10–15 g.'],['Spuntino','Pane 50 g + yogurt greco 170 g.'],['Cena','Pollo/tacchino 160 g o tofu 220 g + riso 70 g secco.']]},
 {day:9,week:'week2',kcal:'2100–2200',protein:'160 g', meals:[['Colazione','Yogurt greco 300 g + pane 60 g + frutta.'],['Pranzo','Riso 90 g secco con ceci 150 g, spezie, pecorino 10 g.'],['Spuntino','Frutta + yogurt greco 150 g.'],['Cena','Omelette albumi 250 g + 1 uovo + polenta 300 g cotta.']]},
 {day:10,week:'week2',kcal:'2100–2300',protein:'160 g', meals:[['Colazione','Yogurt greco 250 g + avena 45 g + mela.'],['Pranzo','Pasta 85 g con ceci 120 g e pecorino 15 g.'],['Spuntino','Pane 50 g + frutta.'],['Cena','Legumi 180 g + riso 70 g secco + yogurt greco salato o uova.']]},
 {day:11,week:'week2',kcal:'2100–2200',protein:'155–165 g', meals:[['Colazione','Yogurt greco 300 g + pane 50–60 g.'],['Pranzo','Pasta 75 g con sugo semplice e pecorino 15 g + yogurt a lato.'],['Spuntino','Frutta + yogurt greco 150 g.'],['Cena','Tacchino 160 g o seitan 200 g + patate 350 g.']]},
 {day:12,week:'week2',kcal:'2200 circa',protein:'160 g', meals:[['Colazione','Yogurt greco 250 g + avena 40 g + banana.'],['Pranzo','Riso 90 g secco con ceci/lenticchie 150 g.'],['Spuntino','Pane 60 g + yogurt greco 170 g.'],['Cena','Uova 2 + albumi 200 g + polenta 300 g cotta.']]},
 {day:13,week:'week2',kcal:'2100–2300',protein:'160 g', meals:[['Colazione','Yogurt greco 300 g + pane 60 g + frutta.'],['Pranzo','Pasta 90 g con ceci 120 g, pecorino 15 g.'],['Spuntino','Frutta + 20 g frutta secca.'],['Cena','Pollo 160 g o tofu 220 g + riso 70 g secco.']]},
 {day:14,week:'week2',kcal:'2000–2150',protein:'155 g', meals:[['Colazione','Yogurt greco 250 g + avena 35 g + frutta.'],['Pranzo','Riso o pasta 80 g con legumi 150 g e pecorino 10 g.'],['Spuntino','Yogurt greco 170 g + frutta.'],['Cena','Omelette 2 uova + albumi 200 g + patate 300 g.']]}];

function getRecord(id){ if(!progress[id]) progress[id]={weight:'',notes:'',topRange:false}; return progress[id]; }
function saveProgress(){ localStorage.setItem(progressKey, JSON.stringify(progress)); }
function saveMeasures(){ localStorage.setItem(measureKey, JSON.stringify(measures)); }
function saveHistory(){ localStorage.setItem(historyKey, JSON.stringify(historyLog)); }
function rangeHighFromReps(str){ const nums=(str||'').match(/\d+/g); return nums?nums[nums.length-1]:''; }
function formatBadge(v){ return `<span class="badge">${v}</span>`; }
function makeTrackKey(dayId, index, item){
  return `${dayId.replace(/\s+/g,'_')}__${index}__${item.id}`;
}
function registerTrackItem(dayId, index, item){
  const key = makeTrackKey(dayId, index, item);
  trackItems[key] = {dayId, index, item};
  return key;
}
function parseHighNumber(str){
  const nums = String(str||'').match(/\d+/g);
  return nums ? Number(nums[nums.length-1]) : 1;
}
function parseFirstNumber(str){
  const nums = String(str||'').match(/\d+/g);
  return nums ? Number(nums[0]) : 1;
}
function parseSetCount(sets){
  return Math.max(1, parseHighNumber(sets));
}
function parseRepTarget(reps){
  const s = String(reps||'').toLowerCase();
  if(s.includes('sec') && !s.includes('reps')){
    const sec = parseHighNumber(s);
    return {target: Math.max(1, Math.ceil(sec/5)), unit:'blocchi da 5 sec', display:`${sec} sec`};
  }
  const target = s.includes('reps') ? parseFirstNumber(s) : parseHighNumber(s);
  return {target: Math.max(1, target), unit:'ripetizioni', display:`${target} reps`};
}
function getTrackRecord(key){
  const meta = trackItems[key];
  if(!meta) return {sets:[]};
  const setCount = parseSetCount(meta.item.sets);
  if(!workoutTracking[key]) workoutTracking[key] = {sets: Array(setCount).fill(0)};
  if(!Array.isArray(workoutTracking[key].sets)) workoutTracking[key].sets = Array(setCount).fill(0);
  while(workoutTracking[key].sets.length < setCount) workoutTracking[key].sets.push(0);
  if(workoutTracking[key].sets.length > setCount) workoutTracking[key].sets = workoutTracking[key].sets.slice(0,setCount);
  return workoutTracking[key];
}
function saveTracking(){
  localStorage.setItem(trackKey, JSON.stringify(workoutTracking));
}
function isTrackComplete(key){
  const meta = trackItems[key];
  if(!meta) return false;
  const rec = getTrackRecord(key);
  const repInfo = parseRepTarget(meta.item.reps);
  return rec.sets.length > 0 && rec.sets.every(v => Number(v) >= repInfo.target);
}
function actionButtonsHTML(key, item){
  const complete = isTrackComplete(key);
  return `<div class="today-actions">
    <button class="detail-btn" data-open="${item.id}">Dettagli</button>
    <button class="rest-btn" data-rest="${item.rest}">Recupero</button>
    <button class="track-btn ${complete?'complete':''}" data-track="${key}">${complete?'Completo':'Segna'}</button>
  </div>`;
}
function exerciseCardHTML(item, showButtons=true, dayId='Giorno', index=0){
  const ex = exercises[item.id];
  const key = registerTrackItem(dayId, index, item);
  return `<article class="today-item"><div class="today-top"><img class="thumb" src="${ex.image}" alt="${ex.name}"><div class="today-meta"><h4>${ex.name}</h4><div class="exercise-meta">${formatBadge(`${item.sets} serie`)}${formatBadge(item.reps)}${formatBadge(`${item.rest} sec`)}</div></div></div>${showButtons?actionButtonsHTML(key,item):''}</article>`;
}
function groupWorkoutExercises(exList){ const groups=[]; exList.forEach(it=>{ const key=it.block||'main'; let grp=groups.find(g=>g.key===key && g.label===(it.label||'')); if(!grp){ grp={key,label:it.label||'',items:[]}; groups.push(grp);} grp.items.push(it); }); return groups; }
function renderTodayWorkout(workout){
  const wrap = document.getElementById('todayWorkout');
  let globalIndex = 0;
  wrap.innerHTML = groupWorkoutExercises(workout.exercises).map(g=>`<section><div class="block-label ${g.key==='main'?'main':'extra'}">${g.key==='main'?'Blocco base':(g.label||'Extra')}</div><div class="today-list">${g.items.map(it=>exerciseCardHTML(it, true, workout.id, globalIndex++)).join('')}</div></section>`).join('') + `<p class="workout-note">${workout.note||''}</p>`;
}
function renderWorkoutDays(){
  const wrap=document.getElementById('workoutDays');
  wrap.innerHTML=workouts.map(day=>{
    let globalIndex = 0;
    return `<section class="workout-shell"><div class="section-head"><div><p class="mini">${day.summary}</p><h3>${day.id}</h3></div></div>${groupWorkoutExercises(day.exercises).map(g=>`<div class="block-label ${g.key==='main'?'main':'extra'}">${g.key==='main'?'Blocco base':(g.label||'Extra')}</div><div class="workout-day-list">${g.items.map(it=>{ const key=registerTrackItem(day.id, globalIndex++, it); const ex=exercises[it.id]; return `<article class="exercise-card"><h4>${ex.name}</h4><div class="exercise-meta">${formatBadge(`${it.sets} serie`)}${formatBadge(it.reps)}${formatBadge(`${it.rest} sec`)}</div><div class="actions"><button class="detail-btn" data-open="${it.id}">Dettagli</button><button class="rest-btn" data-rest="${it.rest}">Recupero</button><button class="track-btn ${isTrackComplete(key)?'complete':''}" data-track="${key}">${isTrackComplete(key)?'Completo':'Segna'}</button></div></article>`; }).join('')}</div>`).join('')}<p class="workout-note">${day.note||''}</p></section>`;
  }).join('');
}
function renderGuideHighlights(){ const wrap=document.getElementById('guideHighlights'); if(!wrap) return; wrap.innerHTML=guideCards.map(g=>`<article class="library-card guide"><img src="${g.image}" alt="${g.name}"><div class="library-head"><div class="library-title"><p class="mini">Guida</p><h3>${g.name}</h3><p>${g.short}</p></div></div><div class="actions"><button class="detail-btn" data-open-guide="${g.id}">Apri poster</button></div></article>`).join(''); }
function renderExerciseLibrary(filter=''){ const wrap=document.getElementById('exerciseLibrary'); const f=filter.trim().toLowerCase(); const list=Object.entries(exercises).filter(([id,ex])=>`${ex.name} ${ex.short}`.toLowerCase().includes(f)||!f); wrap.innerHTML=list.map(([id,ex])=>`<article class="library-card"><img src="${ex.image}" alt="${ex.name}"><div class="library-head"><div class="library-title"><p>Recupero ${ex.rest}</p><h3>${ex.name}</h3><p>Peso iniziale: ${ex.startWeight}</p></div></div><div class="exercise-chip-row"><span class="badge">${ex.short}</span><span class="badge">${ex.rest}</span></div><div class="actions"><button class="detail-btn" data-open="${id}">Scheda completa</button></div></article>`).join(''); }
function openExerciseModal(id){ const ex=exercises[id]; if(!ex) return; document.getElementById('modalEyebrow').textContent='Esercizio'; document.getElementById('modalTitle').textContent=ex.name; document.getElementById('modalContent').innerHTML=`<div class="modal-grid"><img src="${ex.image}" alt="${ex.name}"><div class="exercise-chip-row"><span class="badge">Peso iniziale: ${ex.startWeight}</span><span class="badge">Recupero: ${ex.rest}</span></div><div class="detail-grid"><div class="detail-card"><h4>Impostazione</h4><p>${ex.setup}</p></div><div class="detail-card"><h4>Impugnatura</h4><p>${ex.grip}</p></div><div class="detail-card"><h4>Concentrica</h4><p>${ex.concentric}</p></div><div class="detail-card"><h4>Eccentrica</h4><p>${ex.eccentric}</p></div></div><div class="note-card"><h4>Nota coach</h4><p>${ex.tip || 'Usa tecnica pulita e progressione graduale.'}</p></div></div>`; document.getElementById('exerciseModal').showModal(); }
function openGuideModal(id){ const g=guideCards.find(x=>x.id===id); if(!g) return; document.getElementById('modalEyebrow').textContent='Poster guida'; document.getElementById('modalTitle').textContent=g.name; document.getElementById('modalContent').innerHTML=`<div class="modal-grid"><img class="guide-full" src="${g.image}" alt="${g.name}"><div class="exercise-chip-row"><span class="badge">${g.category}</span><span class="badge">${g.short}</span></div><div class="detail-grid"><div class="detail-card"><h4>Uso consigliato</h4><p>${g.setup}</p></div><div class="detail-card"><h4>Frequenza</h4><p>${g.grip}</p></div><div class="detail-card"><h4>Contenuto</h4><p>${g.concentric}</p></div><div class="detail-card"><h4>Chiusura</h4><p>${g.eccentric}</p></div></div><div class="note-card"><h4>Nota coach</h4><p>${g.tip}</p></div></div>`; document.getElementById('exerciseModal').showModal(); }

function polarToCartesian(cx, cy, r, angleDeg){
  const a = (angleDeg - 90) * Math.PI / 180;
  return {x: cx + r * Math.cos(a), y: cy + r * Math.sin(a)};
}
function describeArc(cx, cy, r, startAngle, endAngle){
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}
function repPieHTML(key, setIndex, value, target, unit){
  const slices = [];
  const cx=50, cy=50, r=47;
  for(let i=0;i<target;i++){
    const start = i * 360 / target;
    const end = (i+1) * 360 / target;
    const done = i < value;
    slices.push(`<path class="rep-slice ${done?'done':'todo'}" data-pie="${key}" data-set="${setIndex}" data-rep="${i+1}" d="${describeArc(cx,cy,r,start,end)}"></path>`);
  }
  return `<svg class="rep-pie" viewBox="0 0 100 100" role="button" aria-label="Serie ${setIndex+1}: ${value} di ${target}">
    ${slices.join('')}
    <circle cx="50" cy="50" r="25" fill="#fff" stroke="rgba(148,163,184,.25)"></circle>
    <text class="pie-center" x="50" y="45">${value}/${target}</text>
    <text class="pie-sub" x="50" y="58">${unit.includes('sec')?'tempo':'reps'}</text>
  </svg>`;
}
function openTrackingModal(key){
  const meta = trackItems[key];
  if(!meta) return;
  const ex = exercises[meta.item.id];
  const rec = getTrackRecord(key);
  const repInfo = parseRepTarget(meta.item.reps);
  document.getElementById('modalEyebrow').textContent = 'Segna serie';
  document.getElementById('modalTitle').textContent = ex.name;
  const complete = isTrackComplete(key);
  document.getElementById('modalContent').innerHTML = `<div class="track-overview">
    <div class="track-head-card">
      <p class="rep-note"><strong>${meta.dayId}</strong> · ${meta.item.sets} serie · target: ${meta.item.reps}</p>
      <div class="exercise-chip-row"><span class="badge">Clicca uno spicchio per segnare le ripetizioni</span><span class="badge">${repInfo.unit}</span></div>
    </div>
    ${complete?'<div class="track-complete-banner">Esercizio completato ✅</div>':''}
    <div class="track-grid">
      ${rec.sets.map((v,i)=>`<div class="set-card"><div class="set-top"><h4>Serie ${i+1}</h4><small>${v}/${repInfo.target} ${repInfo.unit}</small></div><div class="pie-wrap">${repPieHTML(key,i,Number(v),repInfo.target,repInfo.unit)}<div class="rep-controls"><p class="rep-note">Tocca uno spicchio: gli spicchi fino a quel punto diventano verdi.</p><div class="mini-actions"><button class="secondary" data-adjust="${key}" data-set="${i}" data-delta="-1">-1</button><button data-adjust="${key}" data-set="${i}" data-delta="1">+1</button><button class="secondary" data-fillset="${key}" data-set="${i}">Serie completa</button></div></div></div></div>`).join('')}
    </div>
    <div class="track-summary"><strong>Stato:</strong> ${complete?'completo':'in corso'} · quando tutte le ruote sono verdi il pulsante diventa “Completo”.</div>
  </div>`;
  document.getElementById('exerciseModal').showModal();
}
function updateSetValue(key, setIndex, value){
  const meta = trackItems[key];
  if(!meta) return;
  const rec = getTrackRecord(key);
  const target = parseRepTarget(meta.item.reps).target;
  rec.sets[setIndex] = Math.max(0, Math.min(target, value));
  saveTracking();
  openTrackingModal(key);
  renderTodayWorkout(workouts.find(w=>w.id===meta.dayId)||workouts[0]);
  renderWorkoutDays();
}
function initTrackingEvents(){
  document.body.addEventListener('click', e=>{
    const slice = e.target.closest('[data-pie]');
    if(slice){
      updateSetValue(slice.dataset.pie, Number(slice.dataset.set), Number(slice.dataset.rep));
    }
    const adj = e.target.closest('[data-adjust]');
    if(adj){
      const key=adj.dataset.adjust, set=Number(adj.dataset.set), delta=Number(adj.dataset.delta);
      const rec=getTrackRecord(key);
      updateSetValue(key,set,Number(rec.sets[set]||0)+delta);
    }
    const fill = e.target.closest('[data-fillset]');
    if(fill){
      const key=fill.dataset.fillset, set=Number(fill.dataset.set);
      const meta=trackItems[key];
      updateSetValue(key,set,parseRepTarget(meta.item.reps).target);
    }
  });
}

function initOpeners(){
  document.body.addEventListener('click',e=>{
    const btn=e.target.closest('[data-open]');
    const gbtn=e.target.closest('[data-open-guide]');
    const trackBtn=e.target.closest('[data-track]');
    const restBtn=e.target.closest('[data-rest]');
    if(btn) openExerciseModal(btn.dataset.open);
    if(gbtn) openGuideModal(gbtn.dataset.openGuide);
    if(trackBtn) openTrackingModal(trackBtn.dataset.track);
    if(restBtn){
      timerSeconds = timerRemaining = Number(restBtn.dataset.rest);
      updateTimerDisplay();
      document.querySelectorAll('.preset').forEach(b=>b.classList.toggle('active', Number(b.dataset.seconds)===timerSeconds));
      activateTab('timer');
      if(timerInt){ clearInterval(timerInt); timerInt=null; }
      document.getElementById('startTimer').click();
    }
    const nav=e.target.closest('.nav-btn');
    if(nav) activateTab(nav.dataset.tab);
    const qnav=e.target.closest('.quick-nav');
    if(qnav) activateTab(qnav.dataset.targettab);
  });
}
function activateTab(tab){ document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.id===`tab-${tab}`)); document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab)); window.scrollTo({top:0,behavior:'smooth'}); }
function initDayPicker(){ const picker=document.getElementById('dayPicker'); picker.innerHTML=workouts.map(w=>`<option value="${w.id}">${w.id}</option>`).join(''); const current=workouts[0]; document.getElementById('todayTitle').textContent=current.id; renderTodayWorkout(current); picker.addEventListener('change',()=>{ const workout=workouts.find(w=>w.id===picker.value)||workouts[0]; document.getElementById('todayTitle').textContent=workout.id; renderTodayWorkout(workout); }); }
function initSearch(){ const input=document.getElementById('searchExercises'); input.addEventListener('input',()=>renderExerciseLibrary(input.value)); }
let timerSeconds=90, timerRemaining=90, timerInt=null; function formatTime(sec){ const m=String(Math.floor(sec/60)).padStart(2,'0'); const s=String(sec%60).padStart(2,'0'); return `${m}:${s}`; } function updateTimerDisplay(){ document.getElementById('timerDisplay').textContent=formatTime(timerRemaining); }
function initTimer(){ document.querySelectorAll('.preset').forEach(btn=>btn.addEventListener('click',()=>{ document.querySelectorAll('.preset').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); timerSeconds=timerRemaining=Number(btn.dataset.seconds); updateTimerDisplay(); })); document.getElementById('startTimer').onclick=()=>{ if(timerInt) return; timerInt=setInterval(()=>{ timerRemaining--; updateTimerDisplay(); if(timerRemaining<=0){ clearInterval(timerInt); timerInt=null; timerRemaining=0; updateTimerDisplay(); } },1000); }; document.getElementById('pauseTimer').onclick=()=>{ clearInterval(timerInt); timerInt=null; }; document.getElementById('resetTimer').onclick=()=>{ clearInterval(timerInt); timerInt=null; timerRemaining=timerSeconds; updateTimerDisplay(); }; updateTimerDisplay(); }
function adviceForRecord(rec){ return rec.topRange ? ['up','Aumenta peso'] : ['keep','Mantieni']; }
function renderProgress(){ const wrap=document.getElementById('progressTable'); wrap.innerHTML=Object.entries(exercises).map(([id,ex])=>{ const rec=getRecord(id); const related=workouts.flatMap(w=>w.exercises).find(e=>e.id===id); const high=related?rangeHighFromReps(related.reps):''; const [cls,txt]=adviceForRecord(rec); return `<div class="progress-row v5"><div><strong>${ex.short}</strong><div class="small">Target iniziale: ${ex.startWeight}${high?` · range alto: ${high}`:''}</div></div><input data-field="weight" data-id="${id}" value="${rec.weight||''}" aria-label="Peso ${ex.name}"><input data-field="notes" data-id="${id}" value="${rec.notes||''}" placeholder="note / reps"><div><label class="check-line"><input type="checkbox" data-field="topRange" data-id="${id}" ${rec.topRange?'checked':''}> range alto completato</label><span class="advice ${cls}">${txt}</span></div></div>`; }).join(''); wrap.querySelectorAll('input').forEach(inp=>inp.onchange=()=>{ const rec=getRecord(inp.dataset.id); rec[inp.dataset.field]=inp.type==='checkbox'?inp.checked:inp.value; saveProgress(); }); }
function renderDiet(filter='all'){ const wrap=document.getElementById('dietList'); const list=dietPlan.filter(d=>filter==='all'||d.week===filter); wrap.innerHTML=list.map(d=>`<article class="diet-card"><h3>Giorno ${d.day}</h3><div class="meal-grid">${d.meals.map(m=>`<div class="meal"><strong>${m[0]}</strong>${m[1]}</div>`).join('')}</div><div class="diet-summary"><span>${d.kcal}</span><span>${d.protein}</span></div></article>`).join(''); }
function bindDietFilters(){ document.querySelectorAll('.diet-filter').forEach(btn=>btn.onclick=()=>{ document.querySelectorAll('.diet-filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); renderDiet(btn.dataset.dietfilter); }); }
function renderMeasurements(){ const list=document.getElementById('measureList'); const canvas=document.getElementById('measureChart'); list.innerHTML=measures.slice(-5).reverse().map(m=>`<div class="mini-row"><div><strong>${m.weight} kg</strong> · ${m.waist} cm</div><small>${m.date}</small></div>`).join('') || '<p class="muted">Aggiungi la prima misurazione.</p>'; const ctx=canvas.getContext('2d'); canvas.width=canvas.clientWidth*devicePixelRatio; canvas.height=170*devicePixelRatio; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); ctx.clearRect(0,0,canvas.clientWidth,170); ctx.fillStyle='#f8fbff'; ctx.fillRect(0,0,canvas.clientWidth,170); const data=measures.slice(-10); ctx.strokeStyle='rgba(148,163,184,.35)'; ctx.lineWidth=1; for(let y=30;y<160;y+=32){ ctx.beginPath(); ctx.moveTo(12,y); ctx.lineTo(canvas.clientWidth-12,y); ctx.stroke(); } if(data.length<2){ ctx.fillStyle='#64748b'; ctx.font='14px system-ui'; ctx.fillText('Servono almeno 2 misurazioni per il grafico.',18,88); return; } const weights=data.map(d=>Number(d.weight)), waists=data.map(d=>Number(d.waist)); function draw(vals,color,label,offset){ const min=Math.min(...vals), max=Math.max(...vals), pad=max===min?1:(max-min)*.15; ctx.strokeStyle=color; ctx.lineWidth=3; ctx.beginPath(); vals.forEach((v,i)=>{ const x=18+i*(canvas.clientWidth-36)/(vals.length-1); const y=145-((v-(min-pad))/(max-min+pad*2))*115; if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y); }); ctx.stroke(); ctx.fillStyle=color; ctx.font='12px system-ui'; ctx.fillText(label,18,18+offset); } draw(weights,'#2563eb','Peso',0); draw(waists,'#7c3aed','Girovita',16); }
function addMeasure(){ const w=document.getElementById('measureWeight'), waist=document.getElementById('measureWaist'); if(!w.value||!waist.value){ alert('Inserisci peso e girovita.'); return; } measures.push({date:new Date().toLocaleDateString('it-IT'), weight:Number(w.value), waist:Number(waist.value)}); saveMeasures(); w.value=''; waist.value=''; renderMeasurements(); }
function renderHistory(){ const day=document.getElementById('historyDay'), list=document.getElementById('historyList'); if(day.options.length===0) day.innerHTML=workouts.map(w=>`<option value="${w.id}">${w.id}</option>`).join(''); list.innerHTML=historyLog.slice(-8).reverse().map(h=>`<div class="mini-row"><div><strong>${h.day}</strong><br><small>${h.notes||'Allenamento registrato'}</small></div><small>${h.date}</small></div>`).join('') || '<p class="muted">Nessun allenamento registrato.</p>'; }
function addHistory(){ const d=document.getElementById('historyDay'), n=document.getElementById('historyNotes'); historyLog.push({date:new Date().toLocaleDateString('it-IT'), day:d.value, notes:n.value}); saveHistory(); n.value=''; renderHistory(); }
function initProgressExtras(){ document.getElementById('addMeasure').onclick=addMeasure; document.getElementById('addHistory').onclick=addHistory; document.getElementById('resetProgress').onclick=()=>{ if(confirm('Vuoi azzerare i carichi salvati?')){ progress={}; saveProgress(); renderProgress(); } }; renderMeasurements(); renderHistory(); }
function initModal(){ document.getElementById('closeModal').onclick=()=>document.getElementById('exerciseModal').close(); document.getElementById('exerciseModal').addEventListener('click',e=>{ const rect=e.currentTarget.getBoundingClientRect(); if(e.clientY<rect.top||e.clientY>rect.bottom||e.clientX<rect.left||e.clientX>rect.right){ e.currentTarget.close(); } }); }
function initInstall(){ let deferredPrompt=null; const btn=document.getElementById('installBtn'); window.addEventListener('beforeinstallprompt',e=>{ e.preventDefault(); deferredPrompt=e; btn.classList.remove('hidden'); }); btn.onclick=async()=>{ if(!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; btn.classList.add('hidden'); }; }
function registerSW(){ if('serviceWorker' in navigator){ navigator.serviceWorker.register('service-worker.js').catch(()=>{}); } }
function initMetrics(){ const metric=document.getElementById('metricExercises'); if(metric) metric.textContent=Object.keys(exercises).length; }
function init(){ initTrackingEvents(); initMetrics(); initDayPicker(); renderWorkoutDays(); renderGuideHighlights(); renderExerciseLibrary(); initSearch(); initOpeners(); initTimer(); renderProgress(); renderDiet(); bindDietFilters(); initProgressExtras(); initModal(); initInstall(); registerSW(); }
document.addEventListener('DOMContentLoaded', init);
