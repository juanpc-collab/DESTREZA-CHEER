'use strict';

/* ---------- Datos ---------- */
const PRODUCTS = [
  { id: 1,  cat: 'componentes',  art: 'ram',      brand: 'Corsair',  name: 'Vengeance 16 GB DDR5 6000 MHz',      spec: 'Memoria RAM · CL36 · 1 módulo', price: 289900,  color: '#22d3ee' },
  { id: 2,  cat: 'componentes',  art: 'ram',      brand: 'Kingston', name: 'Fury Beast 32 GB (2x16) DDR4 3600',  spec: 'Memoria RAM · Kit dual channel', price: 359900,  color: '#34f5a0' },
  { id: 3,  cat: 'componentes',  art: 'cpu',      brand: 'AMD',      name: 'Ryzen 7 7800X3D',                    spec: '8 núcleos · AM5 · 3D V-Cache',   price: 1649900, color: '#ff8a3d' },
  { id: 4,  cat: 'componentes',  art: 'cpu',      brand: 'AMD',      name: 'Ryzen 5 7600',                       spec: '6 núcleos · AM5 · 5.1 GHz',      price: 899900,  color: '#ff8a3d' },
  { id: 5,  cat: 'componentes',  art: 'cpu',      brand: 'Intel',    name: 'Core i7-14700K',                     spec: '20 núcleos · LGA1700 · 5.6 GHz', price: 1599900, color: '#3b82f6' },
  { id: 6,  cat: 'componentes',  art: 'cpu',      brand: 'Intel',    name: 'Core i5-13400F',                     spec: '10 núcleos · LGA1700',           price: 779900,  color: '#3b82f6' },
  { id: 7,  cat: 'componentes',  art: 'ssd',      brand: 'Samsung',  name: 'SSD NVMe 980 Pro 1 TB',              spec: 'PCIe 4.0 · 7000 MB/s',           price: 459900,  color: '#34f5a0' },
  { id: 8,  cat: 'componentes',  art: 'gpu',      brand: 'NVIDIA',   name: 'GeForce RTX 4060 8 GB',              spec: 'DLSS 3 · Ray tracing',           price: 1399900, color: '#76e04a' },
  { id: 9,  cat: 'computadores', art: 'laptop',   brand: 'Spinal',   name: 'Forge 15 Portátil Gamer',            spec: 'Ryzen 7 · 16 GB · RTX 4050',     price: 4299900, color: '#22d3ee' },
  { id: 10, cat: 'computadores', art: 'desktop',  brand: 'Spinal',   name: 'Core R5 PC de escritorio',           spec: 'Ryzen 5 · 16 GB · SSD 1 TB',     price: 3199900, color: '#3b82f6' },
  { id: 11, cat: 'perifericos',  art: 'keyboard', brand: 'Redragon', name: 'Teclado mecánico 75 %',              spec: 'Switch rojo · RGB · Inalámbrico', price: 249900,  color: '#34f5a0' },
  { id: 12, cat: 'perifericos',  art: 'mouse',    brand: 'Logitech', name: 'Mouse inalámbrico 26K DPI',          spec: 'Sensor óptico · 70 h batería',    price: 189900,  color: '#22d3ee' },
  { id: 13, cat: 'perifericos',  art: 'monitor',  brand: 'LG',       name: 'Monitor 27" QHD 165 Hz',             spec: 'IPS · 1 ms · FreeSync',          price: 1099900, color: '#3b82f6' },
  { id: 14, cat: 'perifericos',  art: 'headset',  brand: 'HyperX',   name: 'Audífonos gamer 7.1',                spec: 'Micrófono desmontable · USB',     price: 219900,  color: '#ff8a3d' },
];

/* ---------- Ilustraciones SVG (sin imágenes externas) ---------- */
const ART = {
  ram: '<rect x="6" y="26" width="108" height="34" rx="3"/><path d="M6 44h108M16 60v8M26 60v8M36 60v8M46 60v8M56 60v8M66 60v8M76 60v8M86 60v8M96 60v8M106 60v8"/><rect x="16" y="31" width="16" height="9" rx="1"/><rect x="38" y="31" width="16" height="9" rx="1"/><rect x="60" y="31" width="16" height="9" rx="1"/><rect x="82" y="31" width="16" height="9" rx="1"/>',
  cpu: '<rect x="30" y="18" width="60" height="54" rx="5"/><rect x="42" y="30" width="36" height="30" rx="3"/><path d="M40 10v8M52 10v8M64 10v8M76 10v8M40 72v8M52 72v8M64 72v8M76 72v8M22 30h8M22 42h8M22 54h8M90 30h8M90 42h8M90 54h8"/>',
  gpu: '<rect x="8" y="24" width="104" height="38" rx="4"/><circle cx="38" cy="43" r="13"/><circle cx="82" cy="43" r="13"/><path d="M38 33v20M28 43h20M82 33v20M72 43h20M20 62v6h26v-6"/>',
  ssd: '<rect x="14" y="22" width="92" height="46" rx="4"/><rect x="24" y="31" width="24" height="14" rx="2"/><rect x="54" y="31" width="24" height="14" rx="2"/><path d="M24 55h36M96 28v34"/>',
  laptop: '<rect x="24" y="12" width="72" height="46" rx="4"/><path d="M8 64h104l-6 8H14zM44 36h32"/>',
  desktop: '<rect x="34" y="8" width="52" height="74" rx="4"/><circle cx="60" cy="34" r="12"/><path d="M60 26v16M52 34h16M44 62h32M44 70h20"/>',
  keyboard: '<rect x="6" y="22" width="108" height="46" rx="5"/><path d="M16 34h8M30 34h8M44 34h8M58 34h8M72 34h8M86 34h8M100 34h4M16 46h4M26 46h8M40 46h8M54 46h8M68 46h8M82 46h8M96 46h8M24 58h72"/>',
  mouse: '<rect x="40" y="10" width="40" height="68" rx="20"/><path d="M60 10v26M40 36h40M60 20v8"/>',
  monitor: '<rect x="12" y="10" width="96" height="56" rx="4"/><path d="M60 66v12M40 78h40M20 56h30"/>',
  headset: '<path d="M22 54V44a38 38 0 0 1 76 0v10"/><rect x="14" y="48" width="18" height="26" rx="6"/><rect x="88" y="48" width="18" height="26" rx="6"/><path d="M32 70q0 10 20 10"/>',
  wrench: '<path d="M76 14a20 20 0 0 0-22 26L18 76l8 8 36-36a20 20 0 0 0 26-22L76 40l-8-8z"/>',
};
const svg = (name) =>
  `<svg viewBox="0 0 120 90" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ART[name]}</svg>`;

/* ---------- Utilidades ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = (n) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

const Toast = (() => {
  const el = $('#toast'); let t;
  return (msg) => { el.textContent = msg; el.classList.add('show'); clearTimeout(t); t = setTimeout(() => el.classList.remove('show'), 2600); };
})();

/* ---------- Catálogo ---------- */
const Catalog = (() => {
  const grid = $('#grid');
  let current = 'todos';

  const card = (p) => `
    <article class="card glass" style="--c:${p.color}">
      <div class="art">${svg(p.art)}</div>
      <div class="card-body">
        <span class="brand-tag">${p.brand}</span>
        <h3>${p.name}</h3>
        <p class="spec">${p.spec}</p>
        <div class="card-foot">
          <span class="price">${money(p.price)}</span>
          <button class="btn primary" data-add="${p.id}" aria-label="Agregar ${p.name} al carrito">Agregar</button>
        </div>
      </div>
    </article>`;

  function render(filter = current) {
    current = filter;
    const list = filter === 'todos' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter);
    grid.innerHTML = list.length ? list.map(card).join('') : '<p class="empty">No hay productos en esta categoría.</p>';
    $$('.chip-btn').forEach((b) => b.classList.toggle('is-active', b.dataset.filter === filter));
  }

  function init() {
    render();
    // Cualquier elemento con data-filter (nav, categorías, chips) filtra el catálogo
    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-filter]');
      if (!t) return;
      render(t.dataset.filter);
      if (!t.matches('a')) $('#catalogo').scrollIntoView({ behavior: 'smooth' });
      Nav.close();
    });
    $$('[data-art]').forEach((el) => (el.innerHTML = svg(el.dataset.art)));
  }
  return { init };
})();

/* ---------- Carrito ---------- */
const Cart = (() => {
  const panel = $('#cart'), list = $('#cartList'), count = $('#cartCount'), total = $('#cartTotal');
  const items = new Map(); // id -> cantidad

  function render() {
    let sum = 0, qty = 0;
    list.innerHTML = '';
    items.forEach((q, id) => {
      const p = PRODUCTS.find((x) => x.id === id);
      sum += p.price * q; qty += q;
      const li = document.createElement('li');
      li.innerHTML = `<span>${p.name}<br><small>${q} × ${money(p.price)}</small></span><strong>${money(p.price * q)}</strong><button class="rm" data-rm="${id}" aria-label="Quitar ${p.name}">✕</button>`;
      list.append(li);
    });
    if (!qty) list.innerHTML = '<li><span>Tu carrito está vacío. Agrega productos del catálogo.</span></li>';
    count.textContent = qty; total.textContent = money(sum);
  }

  const toggle = (open) => { panel.hidden = !(open ?? panel.hidden); };

  function init() {
    render();
    document.addEventListener('click', (e) => {
      const add = e.target.closest('[data-add]'), rm = e.target.closest('[data-rm]');
      if (add) {
        const id = +add.dataset.add;
        items.set(id, (items.get(id) || 0) + 1);
        render(); Toast('Agregado al carrito');
      }
      if (rm) { items.delete(+rm.dataset.rm); render(); }
    });
    $('#cartBtn').addEventListener('click', () => toggle());
    $('#cartClose').addEventListener('click', () => toggle(false));
    $('#checkout').addEventListener('click', () => {
      if (!items.size) return Toast('Agrega al menos un producto');
      items.clear(); render(); toggle(false); Toast('Pedido recibido. Te contactaremos pronto');
    });
  }
  return { init };
})();

/* ---------- Registro / Ingreso ---------- */
const Rules = {
  MIN_PASS: 8,
  // Proveedores de correo aceptados. Agrega o quita dominios aquí.
  DOMAINS: ['gmail.com', 'outlook.com', 'hotmail.com', 'live.com', 'yahoo.com', 'icloud.com'],

  name(v) {
    v = v.trim();
    if (v.length < 2) return 'Escribe tu nombre (mínimo 2 letras).';
    if (!/^[\p{L}][\p{L}\s'.-]*$/u.test(v)) return 'El nombre solo puede tener letras y espacios.';
    return '';
  },
  email(v) {
    v = v.trim().toLowerCase();
    if (!v) return 'Escribe tu correo.';
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(v)) return 'El formato del correo no es válido.';
    const domain = v.split('@')[1];
    if (!this.DOMAINS.includes(domain)) return `Usa un correo @${this.DOMAINS.slice(0, 3).join(', @')} u otro proveedor válido.`;
    return '';
  },
  passChecks(v) {
    return { len: v.length > this.MIN_PASS, letter: /[A-Za-z]/.test(v), num: /\d/.test(v), space: v.length > 0 && !/\s/.test(v) };
  },
  pass(v) {
    const c = this.passChecks(v);
    if (!v) return 'Escribe una contraseña.';
    if (!c.len) return `La contraseña debe tener más de ${this.MIN_PASS} caracteres.`;
    if (!c.letter || !c.num) return 'Combina letras y números.';
    if (!c.space) return 'La contraseña no puede tener espacios.';
    return '';
  },
};

const Auth = (() => {
  const dlg = $('#authDialog'), form = $('#authForm'), msg = $('.form-msg', form), rulesEl = $('#passRules');
  let mode = 'register';

  const errEl = (name) => $(`[data-err="${name}"]`, form);

  function showError(name, text) {
    const input = form.elements[name];
    errEl(name).textContent = text;
    input.classList.toggle('invalid', !!text);
    input.classList.toggle('valid', !text && !!input.value);
    input.setAttribute('aria-invalid', text ? 'true' : 'false');
  }

  // En "ingresar" solo se comprueba que haya datos; las reglas estrictas son para crear cuenta
  function check(name) {
    const v = form.elements[name].value;
    let err = '';
    if (name === 'nombre' && mode === 'register') err = Rules.name(v);
    if (name === 'email') err = mode === 'register' ? Rules.email(v) : (v.trim() ? '' : 'Escribe tu correo.');
    if (name === 'pass') err = mode === 'register' ? Rules.pass(v) : (v ? '' : 'Escribe tu contraseña.');
    showError(name, err);
    return !err;
  }

  function updateRules() {
    const c = Rules.passChecks(form.elements.pass.value);
    $$('[data-rule]', rulesEl).forEach((li) => li.classList.toggle('ok', c[li.dataset.rule]));
  }

  function setMode(m) {
    mode = m;
    const reg = m === 'register';
    $('#authTitle').textContent = reg ? 'Crear cuenta' : 'Ingresar';
    $('#authSubmit').textContent = reg ? 'Registrarse' : 'Ingresar';
    $('#authSwitch').textContent = reg ? '¿Ya tienes cuenta? Ingresar' : '¿Eres nuevo? Crear cuenta';
    $$('[data-only="register"]').forEach((el) => (el.hidden = !reg));
    form.elements.pass.autocomplete = reg ? 'new-password' : 'current-password';
    reset();
  }

  function reset() {
    form.reset();
    $$('input', form).forEach((i) => i.classList.remove('invalid', 'valid'));
    $$('.field-err', form).forEach((e) => (e.textContent = ''));
    msg.textContent = ''; msg.className = 'form-msg';
    updateRules();
  }

  function submit(e) {
    e.preventDefault();
    const fields = mode === 'register' ? ['nombre', 'email', 'pass'] : ['email', 'pass'];
    const results = fields.map(check);
    if (results.includes(false)) {
      msg.className = 'form-msg error'; msg.textContent = 'Corrige los campos marcados para continuar.';
      form.elements[fields[results.indexOf(false)]].focus();
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const first = (d.nombre || d.email.split('@')[0]).trim().split(/\s+/)[0];
    const label = $('#auth');
    label.textContent = '';
    const span = document.createElement('span');
    span.className = 'user'; span.textContent = `Hola, ${first}`;
    label.append(span);
    dlg.close(); reset();
    Toast(mode === 'register' ? 'Cuenta creada' : 'Sesión iniciada');
  }

  function init() {
    document.addEventListener('click', (e) => {
      const b = e.target.closest('[data-auth]');
      if (b) { setMode(b.dataset.auth); dlg.showModal(); }
    });
    $('#authSwitch').addEventListener('click', () => setMode(mode === 'register' ? 'login' : 'register'));
    $('#authClose').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    form.addEventListener('submit', submit);
    // Validación en vivo: al salir del campo, y la lista de requisitos mientras se escribe
    ['nombre', 'email', 'pass'].forEach((n) => form.elements[n].addEventListener('blur', () => check(n)));
    ['nombre', 'email', 'pass'].forEach((n) => form.elements[n].addEventListener('input', () => {
      if (form.elements[n].classList.contains('invalid')) check(n);
    }));
    form.elements.pass.addEventListener('input', updateRules);
    setMode('register');
  }
  return { init };
})();

/* ---------- Asesoría ---------- */
const Advice = (() => {
  function init() {
    const form = $('#advice'), msg = $('.form-msg', form);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      if (!isEmail(email)) { form.email.classList.add('invalid'); msg.className = 'form-msg error'; msg.textContent = 'Escribe un correo válido.'; return; }
      form.email.classList.remove('invalid');
      msg.className = 'form-msg'; msg.textContent = `Listo. Te escribiremos a ${email} con una recomendación para ${form.uso.value.toLowerCase()}.`;
      form.reset();
    });
  }
  return { init };
})();

/* ---------- Navegación móvil ---------- */
const Nav = (() => {
  const nav = $('#nav'), btn = $('#menuBtn');
  const close = () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
  function init() {
    btn.addEventListener('click', () => btn.setAttribute('aria-expanded', nav.classList.toggle('open')));
    $$('a', nav).forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { close(); $('#cart').hidden = true; } });
  }
  return { init, close };
})();

/* ---------- Arranque ---------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  [Nav, Catalog, Cart, Auth, Advice].forEach((m) => m.init());
});
