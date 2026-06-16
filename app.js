
const exercises = {
  pullup:{name:'Trazioni presa prona', short:'Trazioni', image:'assets/trazioni.png', setup:'Scapole attive, addome contratto, gambe ferme.', grip:'Presa prona, poco più larga delle spalle.', concentric:'Tira il petto verso la sbarra e porta il mento sopra la barra.', eccentric:'Scendi lentamente fino a quasi distendere i gomiti mantenendo controllo.', startWeight:'Corpo libero', rest:'120 sec'},
  dbBench:{name:'Panca piana con manubri', short:'Panca piana', image:'assets/panca_piana.png', setup:'Scapole addotte, petto alto, piedi ben piantati.', grip:'Presa neutra o semi-pronata, polsi dritti.', concentric:'Spingi i manubri verso l’alto.', eccentric:'Scendi lentamente fino a sentire allungamento sul petto.', startWeight:'16 kg per mano', rest:'90 sec'},
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
  dips:{name:'Dip alle parallele', short:'Dip', image:'assets/dip.png', setup:'Spalle depresse, petto aperto, busto leggermente avanti.', grip:'Presa neutra sulle parallele.', concentric:'Spingi sulle parallele e distendi i gomiti.', eccentric:'Scendi lentamente finché mantieni il controllo.', startWeight:'Corpo libero / assistito', rest:'90 sec'}
};
const workouts=[
{id:'Upper A',exercises:[{id:'pullup',sets:'4',reps:'6–10',rest:120},{id:'dbBench',sets:'4',reps:'8–12',rest:90},{id:'row1',sets:'4',reps:'8–12',rest:90},{id:'pushup',sets:'3',reps:'quasi max',rest:75},{id:'lateralRaise',sets:'4',reps:'12–20',rest:60},{id:'ropePushdown',sets:'3',reps:'10–15',rest:60},{id:'kneeRaise',sets:'3',reps:'8–15',rest:60}]},
{id:'Lower A',exercises:[{id:'gobletSquat',sets:'4',reps:'10–15',rest:90},{id:'bulgarian',sets:'4',reps:'8–12 / gamba',rest:90},{id:'rdl',sets:'4',reps:'8–12',rest:120},{id:'reverseLunge',sets:'3',reps:'10 / gamba',rest:75},{id:'calfRaise',sets:'4',reps:'12–20',rest:45},{id:'plank',sets:'3',reps:'45–75 sec',rest:45}]},
{id:'Upper B',exercises:[{id:'pullup',sets:'5',reps:'5–8',rest:120},{id:'pulldown',sets:'4',reps:'10–15',rest:90},{id:'cableRow',sets:'4',reps:'10–15',rest:75},{id:'shoulderPress',sets:'4',reps:'8–12',rest:90},{id:'facePull',sets:'3',reps:'12–20',rest:60},{id:'curl',sets:'3',reps:'8–12',rest:60},{id:'rearDelt',sets:'3',reps:'12–20',rest:60}]},
{id:'Lower B',exercises:[{id:'rdl',sets:'4',reps:'6–10',rest:120},{id:'hipThrust',sets:'4',reps:'10–15',rest:90},{id:'stepUp',sets:'3',reps:'8–12 / gamba',rest:75},{id:'legCurl',sets:'3',reps:'8–15',rest:60},{id:'calfRaise',sets:'4',reps:'12–20',rest:45},{id:'cableCrunch',sets:'3',reps:'12–20',rest:45},{id:'pallof',sets:'3',reps:'10–12 / lato',rest:45}]},
{id:'Upper C',exercises:[{id:'inclineBench',sets:'4',reps:'8–12',rest:90},{id:'pushup',sets:'4',reps:'8–15',rest:75},{id:'pulldown',sets:'3',reps:'10–12',rest:90},{id:'cableRow',sets:'3',reps:'10–12',rest:75},{id:'lateralRaise',sets:'4',reps:'12–20',rest:60},{id:'dips',sets:'3',reps:'3–5 o assistite',rest:90},{id:'curl',sets:'3',reps:'10–15',rest:60},{id:'ropePushdown',sets:'3',reps:'10–15',rest:60}]}];

const storageKey='coach-tascabile-progress-v4';
let progress=JSON.parse(localStorage.getItem(storageKey)||'{}');
let deferredPrompt; let timerSeconds=90; let timeLeft=timerSeconds; let timerInterval;
function getRecord(id){if(!progress[id]) progress[id]={weight:exercises[id].startWeight,notes:'',completed:false}; return progress[id];}
function saveProgress(){localStorage.setItem(storageKey, JSON.stringify(progress)); renderProgress(); renderTodayWorkout(); renderWorkoutDays();}
function todayItemHtml(entry){const ex=exercises[entry.id]; const rec=getRecord(entry.id); return `<article class="today-item"><div class="today-top"><img class="thumb" src="${ex.image}" alt="${ex.name}"><div class="today-meta"><h4>${ex.name}</h4><div class="exercise-meta"><span class="badge">${entry.sets} serie</span><span class="badge">${entry.reps}</span><span class="badge">${entry.rest}s</span></div><p class="small">Peso iniziale: ${ex.startWeight}</p></div></div><div class="today-actions"><button class="detail-btn" data-detail="${entry.id}">Dettagli</button><button class="secondary rest-btn" data-rest="${entry.rest}">Recupero</button><button class="complete-btn ${rec.completed?'done':''}" data-complete="${entry.id}">${rec.completed?'Fatto':'Segna'}</button></div></article>`;}
function exerciseCardHtml(entry){const ex=exercises[entry.id]; const rec=getRecord(entry.id); return `<div class="exercise-card"><h4>${ex.name}</h4><div class="exercise-meta"><span class="badge">${entry.sets} serie</span><span class="badge">${entry.reps}</span><span class="badge">Rec. ${entry.rest}s</span><span class="badge">${ex.startWeight}</span></div><div class="actions"><button class="detail-btn" data-detail="${entry.id}">Dettagli</button><button class="secondary rest-btn" data-rest="${entry.rest}">Avvia recupero</button><button class="complete-btn ${rec.completed?'done':''}" data-complete="${entry.id}">${rec.completed?'Completato':'Segna come fatto'}</button></div></div>`;}
function bindActionButtons(root=document){root.querySelectorAll('[data-detail]').forEach(b=>b.onclick=()=>openExercise(b.dataset.detail));root.querySelectorAll('[data-rest]').forEach(b=>b.onclick=()=>{setTimer(Number(b.dataset.rest));switchTab('timer');startTimer();});root.querySelectorAll('[data-complete]').forEach(b=>b.onclick=()=>{const r=getRecord(b.dataset.complete);r.completed=!r.completed;saveProgress();});root.querySelectorAll('.quick-nav').forEach(b=>b.onclick=()=>switchTab(b.dataset.targettab));}
function renderTodayWorkout(){const picker=document.getElementById('dayPicker');const dayId=picker.value||workouts[0].id;const workout=workouts.find(w=>w.id===dayId);document.getElementById('todayTitle').textContent=workout.id;document.getElementById('todayWorkout').innerHTML=workout.exercises.map(todayItemHtml).join('');bindActionButtons(document.getElementById('todayWorkout'));}
function renderWorkoutDays(){const wrap=document.getElementById('workoutDays');wrap.innerHTML=workouts.map(day=>`<section class="workout-shell"><h3>${day.id}</h3><div class="workout-day-list">${day.exercises.map(exerciseCardHtml).join('')}</div></section>`).join('');bindActionButtons(wrap);}
function renderLibrary(filter=''){const items=Object.entries(exercises).filter(([,ex])=>ex.name.toLowerCase().includes(filter.toLowerCase()));const wrap=document.getElementById('exerciseLibrary');wrap.innerHTML=items.map(([id,ex])=>`<article class="library-card"><img src="${ex.image}" alt="${ex.name}"><div class="library-head"><div class="library-title"><h3>${ex.name}</h3><p>Peso iniziale: ${ex.startWeight}</p></div><button class="detail-btn" data-detail="${id}">Apri</button></div><div class="exercise-meta"><span class="badge">Rec. ${ex.rest}</span></div></article>`).join('');bindActionButtons(wrap);}
function openExercise(id){const ex=exercises[id];document.getElementById('modalTitle').textContent=ex.name;document.getElementById('modalContent').innerHTML=`<div class="modal-grid"><img src="${ex.image}" alt="${ex.name}"><div class="detail-grid"><div class="detail-card"><h4>Impostazione</h4><p>${ex.setup}</p></div><div class="detail-card"><h4>Impugnatura</h4><p>${ex.grip}</p></div><div class="detail-card"><h4>Concentrica</h4><p>${ex.concentric}</p></div><div class="detail-card"><h4>Eccentrica</h4><p>${ex.eccentric}</p></div></div><div class="note-card"><p><strong>Peso iniziale consigliato:</strong> ${ex.startWeight}<br><strong>Recupero tipico:</strong> ${ex.rest}<br><br>Aumenta il carico quando completi tutte le serie al limite alto del range con tecnica pulita.</p></div></div>`;document.getElementById('exerciseModal').showModal();}
function renderProgress(){const wrap=document.getElementById('progressTable');wrap.innerHTML=Object.entries(exercises).map(([id,ex])=>{const rec=getRecord(id);return `<div class="progress-row"><div><strong>${ex.short}</strong><div class="small">Target iniziale: ${ex.startWeight}</div></div><input data-field="weight" data-id="${id}" value="${rec.weight||''}" aria-label="Peso ${ex.name}"><input data-field="notes" data-id="${id}" value="${rec.notes||''}" placeholder="note / reps"></div>`;}).join('');wrap.querySelectorAll('input').forEach(inp=>inp.onchange=()=>{const rec=getRecord(inp.dataset.id);rec[inp.dataset.field]=inp.value;saveProgress();});}
function setTimer(seconds){timerSeconds=seconds;timeLeft=seconds;updateTimerDisplay();document.querySelectorAll('.preset').forEach(b=>b.classList.toggle('active',Number(b.dataset.seconds)===seconds));}
function updateTimerDisplay(){const m=String(Math.floor(timeLeft/60)).padStart(2,'0');const s=String(timeLeft%60).padStart(2,'0');document.getElementById('timerDisplay').textContent=`${m}:${s}`;}
function startTimer(){clearInterval(timerInterval);timerInterval=setInterval(()=>{timeLeft--;updateTimerDisplay();if(timeLeft<=0){clearInterval(timerInterval);timeLeft=0;updateTimerDisplay();if(navigator.vibrate)navigator.vibrate([250,120,250]);alert('Recupero finito!');}},1000);}
function pauseTimer(){clearInterval(timerInterval);} function resetTimer(){clearInterval(timerInterval);timeLeft=timerSeconds;updateTimerDisplay();}
function switchTab(name){document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));document.getElementById(`tab-${name}`).classList.add('active');document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));window.scrollTo({top:0,behavior:'smooth'});}
function init(){const picker=document.getElementById('dayPicker');picker.innerHTML=workouts.map(w=>`<option value="${w.id}">${w.id}</option>`).join('');picker.onchange=renderTodayWorkout;renderTodayWorkout();renderWorkoutDays();renderLibrary();renderProgress();updateTimerDisplay();document.querySelectorAll('.nav-btn').forEach(btn=>btn.onclick=()=>switchTab(btn.dataset.tab));document.getElementById('searchExercises').oninput=e=>renderLibrary(e.target.value);document.querySelectorAll('.preset').forEach(b=>b.onclick=()=>setTimer(Number(b.dataset.seconds)));document.getElementById('startTimer').onclick=startTimer;document.getElementById('pauseTimer').onclick=pauseTimer;document.getElementById('resetTimer').onclick=resetTimer;document.getElementById('closeModal').onclick=()=>document.getElementById('exerciseModal').close();document.getElementById('resetProgress').onclick=()=>{if(confirm('Vuoi davvero azzerare i dati salvati?')){localStorage.removeItem(storageKey);progress={};renderProgress();renderTodayWorkout();renderWorkoutDays();}};bindActionButtons(document);window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;document.getElementById('installBtn').classList.remove('hidden');});document.getElementById('installBtn').onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.getElementById('installBtn').classList.add('hidden');};if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js');}}
init();


// ----- V5: dieta, misure, cronologia, progressione automatica -----
const measureKey='coach-tascabile-measures-v5';
const historyKey='coach-tascabile-history-v5';
let measures=JSON.parse(localStorage.getItem(measureKey)||'[]');
let historyLog=JSON.parse(localStorage.getItem(historyKey)||'[]');

const dietPlan=[
 {day:1,week:'week1',kcal:'2100–2200',protein:'160 g', meals:[
  ['Colazione','Yogurt greco 250 g + pane 60 g + frutta + caffè.'],
  ['Pranzo','Pasta 80 g con ceci 120 g, poco pecorino 10–15 g, verdure minime o passata.'],
  ['Spuntino','Frutta + yogurt greco 150 g.'],
  ['Cena','Uova 2 + albumi 150 g, riso 70 g secco o patate 300 g, insalata/verdura semplice.']]},
 {day:2,week:'week1',kcal:'2100–2200',protein:'160 g', meals:[
  ['Colazione','Yogurt greco 250 g + fiocchi d’avena 40 g + banana.'],
  ['Pranzo','Riso 90 g secco con lenticchie 150 g e pecorino 10 g.'],
  ['Spuntino','Pane 50 g + yogurt greco 170 g.'],
  ['Cena','Petto di pollo 170 g oppure tofu 220 g + polenta 300 g cotta + frutta.']]},
 {day:3,week:'week1',kcal:'2100–2300',protein:'155–170 g', meals:[
  ['Colazione','Yogurt greco 250 g + pane 70 g + miele 10 g.'],
  ['Pranzo','Pasta 80 g con ricotta magra o yogurt greco salato, pecorino 10 g, frutta.'],
  ['Spuntino','Frutta + 20 g frutta secca.'],
  ['Cena','Ceci 180 g + riso 70 g secco + 2 uova o albumi 200 g.']]},
 {day:4,week:'week1',kcal:'2100–2200',protein:'160 g', meals:[
  ['Colazione','Yogurt greco 300 g + avena 35 g + mela.'],
  ['Pranzo','Pasta 75 g con ceci 150 g e pecorino 15 g.'],
  ['Spuntino','Pane 50 g + yogurt greco 150 g.'],
  ['Cena','Tacchino o pollo 160 g, patate 350 g, verdura semplice o frutta.']]},
 {day:5,week:'week1',kcal:'2100–2300',protein:'160 g', meals:[
  ['Colazione','Yogurt greco 250 g + pane 60 g + frutta.'],
  ['Pranzo','Riso 90 g secco con fagioli/ceci 150 g, olio 5 g, pecorino 10 g.'],
  ['Spuntino','Yogurt greco 170 g + banana.'],
  ['Cena','Omelette: 2 uova + albumi 200 g, polenta 300 g cotta.']]},
 {day:6,week:'week1',kcal:'2200 circa',protein:'155–165 g', meals:[
  ['Colazione','Yogurt greco 300 g + avena 40 g + frutta.'],
  ['Pranzo','Pasta 90 g con ceci 120 g, pecorino 15 g.'],
  ['Spuntino','Pane 60 g + yogurt greco 150 g.'],
  ['Cena','Manzo magro 150 g o seitan 200 g + riso 70 g secco + frutta.']]},
 {day:7,week:'week1',kcal:'2000–2150',protein:'155 g', meals:[
  ['Colazione','Yogurt greco 250 g + pane 60 g + frutta.'],
  ['Pranzo','Insalata di riso 80 g secco con ceci 150 g, mais poco, pecorino 10 g.'],
  ['Spuntino','Frutta + yogurt.'],
  ['Cena','Uova 2 + albumi 200 g + patate 300 g.']]},
 {day:8,week:'week2',kcal:'2100–2200',protein:'160 g', meals:[
  ['Colazione','Yogurt greco 250 g + avena 40 g + banana.'],
  ['Pranzo','Pasta 80 g con lenticchie 150 g e pecorino 10–15 g.'],
  ['Spuntino','Pane 50 g + yogurt greco 170 g.'],
  ['Cena','Pollo/tacchino 160 g o tofu 220 g + riso 70 g secco.']]},
 {day:9,week:'week2',kcal:'2100–2200',protein:'160 g', meals:[
  ['Colazione','Yogurt greco 300 g + pane 60 g + frutta.'],
  ['Pranzo','Riso 90 g secco con ceci 150 g, spezie, pecorino 10 g.'],
  ['Spuntino','Frutta + yogurt greco 150 g.'],
  ['Cena','Omelette albumi 250 g + 1 uovo + polenta 300 g cotta.']]},
 {day:10,week:'week2',kcal:'2100–2300',protein:'160 g', meals:[
  ['Colazione','Yogurt greco 250 g + avena 45 g + mela.'],
  ['Pranzo','Pasta 85 g con ceci 120 g e pecorino 15 g.'],
  ['Spuntino','Pane 50 g + frutta.'],
  ['Cena','Legumi 180 g + riso 70 g secco + yogurt greco salato o uova.']]},
 {day:11,week:'week2',kcal:'2100–2200',protein:'155–165 g', meals:[
  ['Colazione','Yogurt greco 300 g + pane 50–60 g.'],
  ['Pranzo','Pasta 75 g con sugo semplice e pecorino 15 g + yogurt a lato.'],
  ['Spuntino','Frutta + yogurt greco 150 g.'],
  ['Cena','Tacchino 160 g o seitan 200 g + patate 350 g.']]},
 {day:12,week:'week2',kcal:'2200 circa',protein:'160 g', meals:[
  ['Colazione','Yogurt greco 250 g + avena 40 g + banana.'],
  ['Pranzo','Riso 90 g secco con ceci/lenticchie 150 g.'],
  ['Spuntino','Pane 60 g + yogurt greco 170 g.'],
  ['Cena','Uova 2 + albumi 200 g + polenta 300 g cotta.']]},
 {day:13,week:'week2',kcal:'2100–2300',protein:'160 g', meals:[
  ['Colazione','Yogurt greco 300 g + pane 60 g + frutta.'],
  ['Pranzo','Pasta 90 g con ceci 120 g, pecorino 15 g.'],
  ['Spuntino','Frutta + 20 g frutta secca.'],
  ['Cena','Pollo 160 g o tofu 220 g + riso 70 g secco.']]},
 {day:14,week:'week2',kcal:'2000–2150',protein:'155 g', meals:[
  ['Colazione','Yogurt greco 250 g + avena 35 g + frutta.'],
  ['Pranzo','Riso/pasta 80 g con legumi 150 g e pecorino 10 g.'],
  ['Spuntino','Yogurt greco 170 g + frutta.'],
  ['Cena','Omelette 2 uova + albumi 200 g + patate 300 g.']]}
];

function rangeHighFromReps(str){
  const nums=(str||'').match(/\d+/g);
  if(!nums) return '';
  return nums[nums.length-1];
}
function adviceForRecord(rec){
  return rec.topRange ? ['up','Aumenta peso'] : ['keep','Mantieni'];
}
function renderProgress(){
  const wrap=document.getElementById('progressTable');
  if(!wrap) return;
  wrap.innerHTML=Object.entries(exercises).map(([id,ex])=>{
    const rec=getRecord(id);
    const related=workouts.flatMap(w=>w.exercises).find(e=>e.id===id);
    const high=related ? rangeHighFromReps(related.reps) : '';
    const [cls,txt]=adviceForRecord(rec);
    return `<div class="progress-row v5">
      <div><strong>${ex.short}</strong><div class="small">Target iniziale: ${ex.startWeight}${high?` · range alto: ${high}`:''}</div></div>
      <input data-field="weight" data-id="${id}" value="${rec.weight||''}" aria-label="Peso ${ex.name}">
      <input data-field="notes" data-id="${id}" value="${rec.notes||''}" placeholder="note / reps">
      <div>
        <label class="check-line"><input type="checkbox" data-field="topRange" data-id="${id}" ${rec.topRange?'checked':''}> range alto completato</label>
        <span class="advice ${cls}">${txt}</span>
      </div>
    </div>`;
  }).join('');
  wrap.querySelectorAll('input').forEach(inp=>inp.onchange=()=>{
    const rec=getRecord(inp.dataset.id);
    rec[inp.dataset.field]=inp.type==='checkbox' ? inp.checked : inp.value;
    saveProgress();
  });
}
function renderDiet(filter='all'){
  const wrap=document.getElementById('dietList');
  if(!wrap) return;
  const list=dietPlan.filter(d=>filter==='all'||d.week===filter);
  wrap.innerHTML=list.map(d=>`<article class="diet-card">
    <h3>Giorno ${d.day}</h3>
    <div class="meal-grid">${d.meals.map(m=>`<div class="meal"><strong>${m[0]}</strong>${m[1]}</div>`).join('')}</div>
    <div class="diet-summary"><span>${d.kcal}</span><span>${d.protein}</span></div>
  </article>`).join('');
}
function bindDietFilters(){
  document.querySelectorAll('.diet-filter').forEach(btn=>{
    btn.onclick=()=>{
      document.querySelectorAll('.diet-filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderDiet(btn.dataset.dietfilter);
    };
  });
}
function saveMeasures(){localStorage.setItem(measureKey,JSON.stringify(measures));}
function renderMeasurements(){
  const list=document.getElementById('measureList');
  const canvas=document.getElementById('measureChart');
  if(!list||!canvas) return;
  list.innerHTML=measures.slice(-5).reverse().map(m=>`<div class="mini-row"><div><strong>${m.weight} kg</strong> · ${m.waist} cm</div><small>${m.date}</small></div>`).join('') || '<p class="muted">Aggiungi la prima misurazione.</p>';
  const ctx=canvas.getContext('2d');
  const w=canvas.width=canvas.clientWidth*devicePixelRatio;
  const h=canvas.height=170*devicePixelRatio;
  ctx.scale(devicePixelRatio,devicePixelRatio);
  ctx.clearRect(0,0,canvas.clientWidth,170);
  ctx.fillStyle='#f8fbff'; ctx.fillRect(0,0,canvas.clientWidth,170);
  const data=measures.slice(-10);
  ctx.strokeStyle='rgba(148,163,184,.35)'; ctx.lineWidth=1;
  for(let y=30;y<160;y+=32){ctx.beginPath();ctx.moveTo(12,y);ctx.lineTo(canvas.clientWidth-12,y);ctx.stroke();}
  if(data.length<2){ctx.fillStyle='#64748b';ctx.font='14px system-ui';ctx.fillText('Servono almeno 2 misurazioni per il grafico.',18,88);return;}
  const weights=data.map(d=>Number(d.weight)); const waists=data.map(d=>Number(d.waist));
  function drawLine(vals,color,label,offset){
    const min=Math.min(...vals), max=Math.max(...vals);
    const pad=max===min?1:(max-min)*.15;
    ctx.strokeStyle=color; ctx.lineWidth=3; ctx.beginPath();
    vals.forEach((v,i)=>{
      const x=18 + i*(canvas.clientWidth-36)/(vals.length-1);
      const y=145 - ((v-(min-pad))/(max-min+pad*2))*115;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.stroke();
    ctx.fillStyle=color; ctx.font='12px system-ui'; ctx.fillText(label,18,18+offset);
  }
  drawLine(weights,'#2563eb','Peso',0);
  drawLine(waists,'#7c3aed','Girovita',16);
}
function addMeasure(){
  const w=document.getElementById('measureWeight'); const waist=document.getElementById('measureWaist');
  if(!w.value||!waist.value){alert('Inserisci peso e girovita.');return;}
  measures.push({date:new Date().toLocaleDateString('it-IT'),weight:Number(w.value),waist:Number(waist.value)});
  saveMeasures(); w.value=''; waist.value=''; renderMeasurements();
}
function saveHistory(){localStorage.setItem(historyKey,JSON.stringify(historyLog));}
function renderHistory(){
  const day=document.getElementById('historyDay'); const list=document.getElementById('historyList');
  if(!day||!list) return;
  if(day.options.length===0) day.innerHTML=workouts.map(w=>`<option value="${w.id}">${w.id}</option>`).join('');
  list.innerHTML=historyLog.slice(-8).reverse().map(h=>`<div class="mini-row"><div><strong>${h.day}</strong><br><small>${h.notes||'Allenamento registrato'}</small></div><small>${h.date}</small></div>`).join('') || '<p class="muted">Nessun allenamento registrato.</p>';
}
function addHistory(){
  const d=document.getElementById('historyDay'); const n=document.getElementById('historyNotes');
  historyLog.push({date:new Date().toLocaleDateString('it-IT'),day:d.value,notes:n.value});
  saveHistory(); n.value=''; renderHistory();
}
function initV5Extras(){
  renderDiet();
  bindDietFilters();
  renderMeasurements();
  renderHistory();
  const addM=document.getElementById('addMeasure'); if(addM) addM.onclick=addMeasure;
  const addH=document.getElementById('addHistory'); if(addH) addH.onclick=addHistory;
}
initV5Extras();

