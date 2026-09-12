/* ============================================================
   TEAM.JS
   Para agregar/quitar/editar miembros del equipo, modifica
   ÚNICAMENTE el array TEAM_MEMBERS. El resto se genera solo.
   No se inventan nombres reales: usar placeholders hasta tener
   la información definitiva.
   ============================================================ */

const TEAM_MEMBERS = [
  { name: '[TEAM MEMBER NAME]', country: '[COUNTRY]', role: '[ROLE]', photo: 'Assets/Images/Team/member-01.jpg' },
  { name: '[TEAM MEMBER NAME]', country: '[COUNTRY]', role: '[ROLE]', photo: 'Assets/Images/Team/member-02.jpg' },
  { name: '[TEAM MEMBER NAME]', country: '[COUNTRY]', role: '[ROLE]', photo: 'Assets/Images/Team/member-03.jpg' },
  { name: '[TEAM MEMBER NAME]', country: '[COUNTRY]', role: '[ROLE]', photo: 'Assets/Images/Team/member-04.jpg' },
  { name: '[TEAM MEMBER NAME]', country: '[COUNTRY]', role: '[ROLE]', photo: 'Assets/Images/Team/member-05.jpg' },
  { name: '[TEAM MEMBER NAME]', country: '[COUNTRY]', role: '[ROLE]', photo: 'Assets/Images/Team/member-06.jpg' },
  { name: '[TEAM MEMBER NAME]', country: '[COUNTRY]', role: '[ROLE]', photo: 'Assets/Images/Team/member-07.jpg' },
  { name: '[TEAM MEMBER NAME]', country: '[COUNTRY]', role: '[ROLE]', photo: 'Assets/Images/Team/member-08.jpg' },
  { name: '[TEAM MEMBER NAME]', country: '[COUNTRY]', role: '[ROLE]', photo: 'Assets/Images/Team/member-09.jpg' },
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
