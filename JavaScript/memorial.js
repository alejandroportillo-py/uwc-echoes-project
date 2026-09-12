/* ============================================================
   MEMORIAL.JS
   El Memorial y las Memorias son una sola sección con pestañas
   por categoría. No existe pestaña "All" ni "Memories": cada
   pestaña muestra ÚNICAMENTE lo que le corresponde.
   "Browse by place" solo aparece dentro de la pestaña Places.

   Para agregar contenido nuevo: añade un objeto a MEMORIAL_ITEMS.
   No se inventan fechas, personas ni fotografías reales: usar
   placeholders hasta tener el contenido definitivo.
   ============================================================ */

const CATEGORIES = [
  { id: 'people', label: 'People', intro: 'Faces and voices of the community: alumni, staff and friends who lived the campus every day.' },
  { id: 'places', label: 'Places', intro: 'The corners of the campus that held everyday life, from dorms to gardens.' },
  { id: 'events', label: 'Events', intro: 'Gatherings, celebrations and milestones that marked the calendar year after year.' },
  { id: 'traditions', label: 'Traditions', intro: 'The rituals passed down between generations of students.' },
  { id: 'art', label: 'Art', intro: 'Murals, installations and creative work made on and for the campus.' },
  { id: 'culture', label: 'Culture', intro: 'The customs, languages and everyday exchanges of an international community.' },
  { id: 'community', label: 'Community', intro: 'Moments of collective identity, service and belonging.' },
  { id: 'student-life', label: 'Student Life', intro: 'The routines, friendships and small rituals of daily life on campus.' },
];

const PLACES = ['Dorms', 'Classrooms', 'Cafeteria', 'Gardens', 'Sports', 'Common Areas'];

const MEMORIAL_ITEMS = [
  // PEOPLE
  { category: 'people', title: '[Alumni Name]', meta: 'Class of [YEAR]', desc: '[Add testimonial or short story about this person.]', image: 'Assets/Images/Memorial/people-01.jpg' },
  { category: 'people', title: '[Staff Member Name]', meta: '[Role at UWC]', desc: '[Add memory or reflection.]', image: 'Assets/Images/Memorial/people-02.jpg' },
  { category: 'people', title: '[Alumni Name]', meta: 'Class of [YEAR]', desc: '[Add testimonial or short story about this person.]', image: 'Assets/Images/Memorial/people-03.jpg' },

  // PLACES
  { category: 'places', place: 'Dorms', title: '[Dorm Name]', meta: 'Dorms', desc: '[Add story about this dorm.]', image: 'Assets/Images/Memorial/places-01.jpg' },
  { category: 'places', place: 'Classrooms', title: '[Classroom / Building]', meta: 'Classrooms', desc: '[Add memory about this classroom.]', image: 'Assets/Images/Memorial/places-02.jpg' },
  { category: 'places', place: 'Cafeteria', title: '[The Cafeteria]', meta: 'Cafeteria', desc: '[Add memory about the cafeteria.]', image: 'Assets/Images/Memorial/places-03.jpg' },
  { category: 'places', place: 'Gardens', title: '[The Gardens]', meta: 'Gardens', desc: '[Add memory about the gardens.]', image: 'Assets/Images/Memorial/places-04.jpg' },
  { category: 'places', place: 'Sports', title: '[Sports Field]', meta: 'Sports', desc: '[Add memory about the sports area.]', image: 'Assets/Images/Memorial/places-05.jpg' },
  { category: 'places', place: 'Common Areas', title: '[Common Room]', meta: 'Common Areas', desc: '[Add memory about this common area.]', image: 'Assets/Images/Memorial/places-06.jpg' },

  // EVENTS
  { category: 'events', title: '[Event Name]', meta: '[Add date]', desc: '[Add description of this event.]', image: 'Assets/Images/Memorial/events-01.jpg' },
  { category: 'events', title: '[Event Name]', meta: '[Add date]', desc: '[Add description of this event.]', image: 'Assets/Images/Memorial/events-02.jpg' },

  // TRADITIONS
  { category: 'traditions', title: '[Tradition Name]', meta: '[Since year, if known]', desc: '[Add description of this tradition.]', image: 'Assets/Images/Memorial/traditions-01.jpg' },
  { category: 'traditions', title: '[Tradition Name]', meta: '[Since year, if known]', desc: '[Add description of this tradition.]', image: 'Assets/Images/Memorial/traditions-02.jpg' },

  // ART
  { category: 'art', title: '[Artwork / Mural Title]', meta: '[Artist or class year]', desc: '[Add description of this artwork.]', image: 'Assets/Images/Memorial/art-01.jpg' },
  { category: 'art', title: '[Artwork / Mural Title]', meta: '[Artist or class year]', desc: '[Add description of this artwork.]', image: 'Assets/Images/Memorial/art-02.jpg' },

  // CULTURE
  { category: 'culture', title: '[Cultural Moment]', meta: '[Add context]', desc: '[Add description of this cultural moment.]', image: 'Assets/Images/Memorial/culture-01.jpg' },
  { category: 'culture', title: '[Cultural Moment]', meta: '[Add context]', desc: '[Add description of this cultural moment.]', image: 'Assets/Images/Memorial/culture-02.jpg' },

  // COMMUNITY
  { category: 'community', title: '[Community Moment]', meta: '[Add context]', desc: '[Add description of this moment.]', image: 'Assets/Images/Memorial/community-01.jpg' },
  { category: 'community', title: '[Community Moment]', meta: '[Add context]', desc: '[Add description of this moment.]', image: 'Assets/Images/Memorial/community-02.jpg' },

  // STUDENT LIFE
  { category: 'student-life', title: '[Student Life Moment]', meta: '[Add context]', desc: '[Add description of this moment.]', image: 'Assets/Images/Memorial/student-life-01.jpg' },
  { category: 'student-life', title: '[Student Life Moment]', meta: '[Add context]', desc: '[Add description of this moment.]', image: 'Assets/Images/Memorial/student-life-02.jpg' },
];

let activeCategory = 'people';
let activePlace = null;

function renderTabs() {
  const tabsEl = document.getElementById('memorialTabs');
  if (!tabsEl) return;
  tabsEl.innerHTML = CATEGORIES.map((cat) => `
    <button class="memorial-tab ${cat.id === activeCategory ? 'is-active' : ''}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  tabsEl.querySelectorAll('.memorial-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      activePlace = null;
      renderTabs();
      renderPanel();
    });
  });
}

function renderPlaceFilter() {
  const filterEl = document.getElementById('placeFilter');
  if (!filterEl) return;

  if (activeCategory !== 'places') {
    filterEl.classList.remove('is-visible');
    filterEl.innerHTML = '';
    return;
  }

  filterEl.classList.add('is-visible');
  filterEl.innerHTML = PLACES.map((place) => `
    <button class="chip ${place === activePlace ? 'is-active' : ''}" data-place="${place}">${place}</button>
  `).join('');

  filterEl.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      activePlace = activePlace === chip.dataset.place ? null : chip.dataset.place;
      renderPlaceFilter();
      renderGrid();
    });
  });
}

function renderPanel() {
  const category = CATEGORIES.find((c) => c.id === activeCategory);
  const headEl = document.getElementById('panelHead');
  if (headEl && category) {
    headEl.innerHTML = `<h2>${category.label}</h2><p class="lead">${category.intro}</p>`;
  }
  renderPlaceFilter();
  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById('memorialGrid');
  if (!grid) return;

  let items = MEMORIAL_ITEMS.filter((item) => item.category === activeCategory);
  if (activeCategory === 'places' && activePlace) {
    items = items.filter((item) => item.place === activePlace);
  }

  if (items.length === 0) {
    grid.innerHTML = `<p class="memorial-empty">[Add content for this category]</p>`;
    return;
  }

  grid.innerHTML = items.map((item, i) => `
    <article class="card memorial-card" data-index="${i}" tabindex="0">
      <div class="card-media">
        <img src="${item.image}" alt="${item.title}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'card-placeholder-text\\'>[ADD PHOTO]</span>'">
      </div>
      <div class="card-body">
        <p class="card-meta">${item.meta}</p>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.memorial-card').forEach((card) => {
    card.addEventListener('click', () => openLightbox(items[Number(card.dataset.index)]));
  });
}

/* ---------- Lightbox ---------- */
function openLightbox(item) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.querySelector('.lightbox-media').innerHTML =
    `<img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'card-placeholder-text\\'>[ADD PHOTO]</span>'">`;
  lightbox.querySelector('.lightbox-body').innerHTML =
    `<p class="card-meta">${item.meta}</p><h3>${item.title}</h3><p>${item.desc}</p>`;
  lightbox.classList.add('is-open');
}

function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('is-open');
}

/* ---------- Leave Your Echo form ---------- */
function initEchoForm() {
  const form = document.getElementById('echoForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // -----------------------------------------------------------
    // INSERT API CONFIGURATION HERE
    // Aquí se conectará el envío del formulario a un backend/API
    // (por ejemplo: fetch('/api/echoes', { method: 'POST', body })).
    // Por ahora no existe backend: solo se muestra confirmación local.
    // -----------------------------------------------------------
    const confirmEl = document.getElementById('echoFormConfirm');
    if (confirmEl) confirmEl.hidden = false;
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('memorialTabs')) return;
  renderTabs();
  renderPanel();
  initEchoForm();

  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
});
