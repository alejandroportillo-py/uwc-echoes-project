/* ============================================================
   MAP.JS
   Estructura preparada para integrar la Google Maps JavaScript API.
   NO se incluye una API key real. Ver README.md, sección
   "Cómo conectar Google Maps".
   ============================================================ */

// -----------------------------------------------------------
// PASO 1 — Cargar la API de Google Maps en HTML/mural.html con:
// <script src="https://maps.googleapis.com/maps/api/js?key=INSERT_API_KEY_HERE&callback=initUWCMap" async defer></script>
// -----------------------------------------------------------

// PASO 2 — Ubicación de referencia (sin coordenadas inventadas).
// Reemplazar con las coordenadas reales del Parque de Santa Ana
// una vez confirmadas.
const MURAL_LOCATION = {
  name: 'Parque de Santa Ana, Santa Ana, Costa Rica',
  lat: null, // INSERT REAL LATITUDE HERE
  lng: null, // INSERT REAL LONGITUDE HERE
};

// PASO 3 — Esta función se ejecuta automáticamente como "callback"
// de la Google Maps API una vez que el script anterior carga.
function initUWCMap() {
  const mapEl = document.getElementById('google-map-placeholder');
  if (!mapEl || typeof google === 'undefined') return;

  // INSERT MAP CONFIGURATION HERE
  const map = new google.maps.Map(mapEl, {
    center: { lat: MURAL_LOCATION.lat, lng: MURAL_LOCATION.lng },
    zoom: 16,
  });

  // INSERT MARKER HERE
  new google.maps.Marker({
    position: { lat: MURAL_LOCATION.lat, lng: MURAL_LOCATION.lng },
    map,
    title: MURAL_LOCATION.name,
  });
}

// Mientras la API real no esté conectada, dejamos visible el
// placeholder textual definido en HTML/mural.html.
