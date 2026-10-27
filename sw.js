// Service worker do Meu Planner: permite instalar o app e abri-lo sem internet.
// A página vem da rede quando há conexão (sempre a versão mais nova) e do aparelho quando não há.
// Mude VERSION a cada publicação: quem estiver com o app aberto recebe o aviso "Nova versão disponível".
const VERSION = '2026-10-27-1';
const CACHE = 'meu-planner-' + VERSION;
const SHELL = [
  './', './index.html', './privacidade.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png', './icons/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('meu-planner-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// A página pede para a versão nova assumir quando a pessoa toca em "Atualizar".
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });

const keep = (req, res) => {
  if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
  return res;
};

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  // Login do Google e Google Drive passam direto: nunca ficam guardados no aparelho.
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => keep(req, res))
        .catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }
  // Ícones e demais arquivos: responde do aparelho na hora e atualiza em segundo plano.
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => keep(req, res)).catch(() => hit);
    return hit || net;
  }));
});
