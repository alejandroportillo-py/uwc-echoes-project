/* ============================================================
   TEAM.JS
   Para agregar/quitar/editar miembros del equipo, modifica
   ÚNICAMENTE el array TEAM_MEMBERS. El resto se genera solo.
   No se inventan nombres reales: usar placeholders hasta tener
   la información definitiva.
   ============================================================ */

const TEAM_MEMBERS = [
  { name: '[Kianny]', country: '[Costa Rica]', role: '[Design of the interactive digital presentation]', photo: 'Assets/Images/Team/kianny.jpeg' },
  { name: '[Marcelo]', country: '[Costa Rica]',role: '[Creation of the project website]', photo: 'Assets/Images/Team/marcelo.jpeg' },
  { name: '[Enid]', country: '[Costa Rica]',role: '[Connection to the UWC sustainability framework]', photo: 'Assets/Images/Team/enid.jpeg' },
  { name: '[Rebecca]', country: '[Italy]',role: '[Comedic dramatization of the pitch]', photo: 'Assets/Images/Team/rebecca.jpeg' },
  { name: '[Sofia]', country: '[Colombia]',role: '[Direction of structured ideation For the presentation]', photo: 'Assets/Images/Team/sofia.jpeg' },
  { name: '[Mung]', country: '[Myanmar]',role: '[Design of team identity and uniform]', photo: 'Assets/Images/Team/mung.jpeg' },
  { name: '[Anahi]', country: '[Kenya]',role: '[Local-Santa Ana context analysis]', photo: 'Assets/Images/Team/anahi.jpeg' },
  { name: '[Mafer]', country: '[El Salvador]',role: '[Production of the promotional video]', photo: 'Assets/Images/Team/mafer.jpeg' },
];

function renderTeam() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;

  grid.innerHTML = TEAM_MEMBERS.map((member) => `
    <article class="card team-card">
      <div class="card-media">
        <img src="${member.photo}" alt="${member.name}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'card-placeholder-text\\'>[ADD PHOTO]</span>'">
      </div>
      <div class="card-body">
        <p class="team-name">${member.name}</p>
        <p class="team-role">${member.role}</p>
        <p class="team-country">${member.country}</p>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderTeam);
