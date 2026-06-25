const CACHE_NAME = 'coach-tascabile-v14-20260625';
const ASSETS = [
  './',
  './index.html?v=14',
  './styles.css?v=14',
  './app.js?v=14',
  './manifest.json',
  './assets/affondi_indietro.png',
  './assets/alzate_laterali.png',
  './assets/bulgarian_split_squat.png',
  './assets/cable_crunch.png',
  './assets/calf_raise.png',
  './assets/chin_tuck.png',
  './assets/curl_barra_corta.png',
  './assets/dead_hang.png',
  './assets/dip.png',
  './assets/face_pull.png',
  './assets/farmer_hold.png',
  './assets/finger_extensions.png',
  './assets/goblet_squat.png',
  './assets/guida_avambracci_a_full.png',
  './assets/guida_avambracci_b_full.png',
  './assets/guida_collo_isometrie_full.png',
  './assets/guida_deadhang_chintuck_full.png',
  './assets/guida_riepilogo_avambracci_collo_full.png',
  './assets/hammer_curl.png',
  './assets/hanging_knee_raise.png',
  './assets/hip_thrust.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/lat_machine_pulldown.png',
  './assets/neck_iso_front.png',
  './assets/neck_iso_rear.png',
  './assets/neck_iso_side.png',
  './assets/overhead_triceps_extension.png',
  './assets/pallof_press.png',
  './assets/panca_piana.png',
  './assets/plank.png',
  './assets/prono_supinazione.png',
  './assets/pushdown_tricipiti.png',
  './assets/pushup.png',
  './assets/rdl.png',
  './assets/rear_delt_fly.png',
  './assets/rematore1.png',
  './assets/rematore_cavo_basso.png',
  './assets/reverse_curl_bar.png',
  './assets/reverse_wrist_curl.png',
  './assets/ring_pushup.png',
  './assets/ring_row.png',
  './assets/ring_support_hold.png',
  './assets/shoulder_press.png',
  './assets/shrug.png',
  './assets/sliding_leg_curl.png',
  './assets/step_up_panca.png',
  './assets/trazioni.png',
  './assets/wrist_curl.png',
];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
      return response;
    }).catch(() => caches.match(event.request).then(match => match || caches.match('./index.html?v=14')))
  );
});
