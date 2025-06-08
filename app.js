const pages = {
  home: `
    <section class="fade">
      <h1>Bienvenue sur ADPREZCUBE</h1>
      <p>
        ADPREZCUBE est une communauté dynamique dédiée à l'organisation d'événements, à la connexion entre membres et au partage d'idées innovantes.
      </p>
      <p>
        Rejoignez-nous pour découvrir nos prochains événements, rencontrer nos membres, et participer à nos activités !
      </p>
      <a class="btn" href="#" data-page="events">Voir les événements</a>
    </section>
  `,
  events: `
    <section class="fade">
      <h1>Événements à venir</h1>
      <ul>
        <li>
          <h2>Journée Innovation</h2>
          <p>Date : 21/06/2025 — Lieu : Salle Polyvalente</p>
          <p>Une journée dédiée à l'innovation et à la créativité. Ateliers, conférences, networking…</p>
        </li>
        <li>
          <h2>Soirée Jeux</h2>
          <p>Date : 12/07/2025 — Lieu : Café des Arts</p>
          <p>Venez vous amuser et rencontrer les autres membres de la communauté dans une ambiance conviviale !</p>
        </li>
      </ul>
      <p style="margin-top:2em;color:var(--kaki);">D'autres événements sont à venir. Restez connectés !</p>
    </section>
  `,
  members: `
    <section class="fade">
      <h1>Nos Membres</h1>
      <div style="display: flex; gap: 32px; flex-wrap: wrap; margin-top: 32px;">
        <div style="flex: 1 1 220px; background: var(--grey); border-radius: 14px; padding: 18px;">
          <h2>Alex</h2>
          <p>Fondateur & Président</p>
        </div>
        <div style="flex: 1 1 220px; background: var(--grey); border-radius: 14px; padding: 18px;">
          <h2>Samira</h2>
          <p>Responsable Événements</p>
        </div>
        <div style="flex: 1 1 220px; background: var(--grey); border-radius: 14px; padding: 18px;">
          <h2>Karim</h2>
          <p>Communication</p>
        </div>
        <div style="flex: 1 1 220px; background: var(--grey); border-radius: 14px; padding: 18px;">
          <h2>Julie</h2>
          <p>Trésorière</p>
        </div>
      </div>
      <p style="margin-top:2em;color:var(--kaki);">Envie de rejoindre l’équipe ? Contacte-nous !</p>
    </section>
  `,
  contact: `
    <section class="fade">
      <h1>Contact</h1>
      <form id="contactForm" autocomplete="off">
        <label>Nom</label>
        <input type="text" name="name" required>
        <label>Email</label>
        <input type="email" name="email" required>
        <label>Message</label>
        <textarea name="message" rows="5" required></textarea>
        <button type="submit">Envoyer</button>
        <div id="formMsg" style="margin-top:12px;"></div>
      </form>
    </section>
  `
};

// Navigation dynamique
document.querySelectorAll('nav a, .btn').forEach(link => {
  link.addEventListener('click', function(e) {
    const page = this.getAttribute('data-page');
    if (page && pages[page]) {
      e.preventDefault();
      loadPage(page);
      setActiveNav(page);
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  });
});

function loadPage(page) {
  const content = document.getElementById('content');
  content.innerHTML = pages[page];
  if (page === 'contact') setupContactForm();
}

function setActiveNav(page) {
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector('nav a[data-page="'+page+'"]');
  if (activeLink) activeLink.classList.add('active');
}

// Formulaire de contact (simulation d'envoi)
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = "Message envoyé ! Merci pour votre contact.";
    form.reset();
  };
}

// Initialisation
window.addEventListener('DOMContentLoaded', () => {
  loadPage('home');
  setActiveNav('home');
});
