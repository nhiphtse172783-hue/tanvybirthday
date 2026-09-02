/* ==========================================================================
   BIRTHDAY — SHARED RUNTIME
   Cursor light, the transition veil (the little glowing thread between
   pages), the audio toggle, and small utilities every page reuses.
   ========================================================================== */

const PAGE_ORDER = [
  'index.html','page2.html','page7.html','page9.html','page10.html'
];

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) document.documentElement.classList.add('reduced-motion');

const lerp = (a, b, n) => a + (b - a) * n;

/* -------------------------------------------------------------- cursor */
function initCursor(){
  if (prefersReduced || window.matchMedia('(hover: none)').matches) return;
  const dot = document.createElement('div');
  const glow = document.createElement('div');
  dot.className = 'cursor-dot';
  glow.className = 'cursor-glow';
  document.body.append(dot, glow);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let gx = mx, gy = my;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function raf(){
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    gx = lerp(gx, mx, .16); gy = lerp(gy, my, .16);
    glow.style.left = gx + 'px'; glow.style.top = gy + 'px';
    requestAnimationFrame(raf);
  }
  raf();

  document.querySelectorAll('a, button, .magnetic').forEach(el => {
    el.addEventListener('mouseenter', () => glow.style.transform = 'translate(-50%,-50%) scale(1.6)');
    el.addEventListener('mouseleave', () => glow.style.transform = 'translate(-50%,-50%) scale(1)');
  });
}

/* ------------------------------------------------------- page veil ---- */
function initVeil(){
  const veil = document.createElement('div');
  veil.className = 'veil';
  veil.innerHTML = '<div class="veil-spark"></div>';
  document.body.appendChild(veil);

  // reveal current page (light contracts away, unless flagged to skip)
  requestAnimationFrame(() => {
    veil.style.setProperty('--vx', '50%');
    veil.style.setProperty('--vy', '50%');
    veil.classList.add('veil-reveal');
  });

  return veil;
}

function goTo(href, originEvent){
  const veil = document.querySelector('.veil') || initVeil();
  let vx = '50%', vy = '50%';
  if (originEvent && originEvent.clientX){
    vx = originEvent.clientX + 'px';
    vy = originEvent.clientY + 'px';
  }
  veil.style.setProperty('--vx', vx);
  veil.style.setProperty('--vy', vy);
  veil.classList.remove('veil-reveal');
  veil.classList.add('veil-cover');
  const delay = prefersReduced ? 30 : 900;
  setTimeout(() => { window.location.href = href; }, delay);
}

function wireNav(){
  document.querySelectorAll('[data-go]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      goTo(el.getAttribute('data-go'), e);
    });
  });
}

/* ------------------------------------------------------------- audio -- */
function initAudio(){
  const btn = document.querySelector('.sound-toggle');
  if (!btn) return;
  const audio = new Audio();
  let ready = false;

  audio.loop = true;
  audio.volume = 0;
  audio.src = birthdayConfig.music;

  audio.addEventListener('canplaythrough', () => { ready = true; }, { once:true });
  audio.addEventListener('error', () => { btn.setAttribute('hidden',''); }, { once:true });

  const stored = localStorage.getItem('bday-sound');
  let on = stored === 'on';

  function paint(){
    btn.innerHTML = on
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M16.5 8.5a5 5 0 010 7"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 9v6h4l5 5V4L8 9H4z"/><line x1="16" y1="9" x2="21" y2="14"/><line x1="21" y1="9" x2="16" y2="14"/></svg>';
    btn.setAttribute('aria-label', on ? 'Mute music' : 'Play music');
  }
  paint();

  function fadeTo(target, ms=1200){
    const start = audio.volume, t0 = performance.now();
    function step(t){
      const p = Math.min(1, (t - t0) / ms);
      audio.volume = lerp(start, target, p);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (on){
    audio.play().then(() => fadeTo(.35)).catch(() => { on = false; paint(); });
  }

  btn.addEventListener('click', () => {
    on = !on;
    localStorage.setItem('bday-sound', on ? 'on' : 'off');
    if (on){ audio.play().then(() => fadeTo(.35)).catch(()=>{}); }
    else { fadeTo(0, 500); setTimeout(() => audio.pause(), 520); }
    paint();
  });

  window.__bdaudio = { audio, fadeTo };
}

/* --------------------------------------------------------- progress --- */
function initProgress(){
  const el = document.querySelector('.progress');
  if (!el) return;
  const current = el.dataset.page ? parseInt(el.dataset.page, 10) : 1;
  el.innerHTML = PAGE_ORDER.map((_, i) =>
    `<i class="${i + 1 === current ? 'is-current' : ''}"></i>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initVeil();
  initCursor();
  wireNav();
  initAudio();
  initProgress();
});
