/* ============================================================
   MAIN.JS — punto de entrada, tareas comunes a todas las páginas
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Marca el link de navegación activo según la página actual
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
