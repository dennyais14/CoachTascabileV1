const CACHE='coach-tascabile-v2';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.json','./assets/icon-192.png','./assets/icon-512.png','./assets/trazioni.png','./assets/panca_piana.png','./assets/rematore1.png','./assets/shoulder_press.png','./assets/goblet_squat.png','./assets/bulgarian_split_squat.png','./assets/rdl.png','./assets/alzate_laterali.png','./assets/pushup.png','./assets/dip.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
