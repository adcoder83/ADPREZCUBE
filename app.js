const pages = {
  home: `
    <section class="fade">
      <h1>Bienvenue sur le site du B-CUBE</h1>
      <p class="subtitle">
        Le Bureau des Élèves de l’ESTP Paris, campus de Troyes.<br>
        Nous connectons, organisons et innovons pour faire de chaque moment une expérience inoubliable au sein du campus !
      </p>
      <div class="home-cta">
        <a href="#" class="btn" data-page="events">Voir les événements à venir</a>
        <a href="#" class="btn outline" data-page="contact">Nous contacter</a>
      </div>
    </section>
  `,
  events: `
    <section class="fade">
      <h1>Événements à venir</h1>
      <div class="event-list">
        <div class="event-card">
          <div class="event-date">8/09/2025</div>
          <div>
            <h2>Journée d’Intégration</h2>
            <p class="event-place">Lieu : École</p>
            <p>Un moment clé pour accueillir les nouveaux étudiants, faire connaissance et lancer l’année dans une ambiance festive.</p>
          </div>
        </div>
        <div class="event-card next">
          <div class="event-date">Bientôt</div>
          <div>
            <h2>Prochains événements</h2>
            <p class="event-place">À venir</p>
            <p>Restez connectés, de nombreux événements sont en préparation pour la communauté B-CUBE !</p>
          </div>
        </div>
      </div>
    </section>
  `,
  avantages: `
    <section class="fade">
      <h1>Avantages Carte Cube</h1>
      <p class="subtitle">La carte Cube vous donne accès à de nombreux avantages :</p>
      <ul>
        <li>Réductions dans les bars et restaurants partenaires.</li>
        <li>Tarifs préférentiels pour les événements.</li>
        <li>Accès prioritaire aux activités sportives et culturelles.</li>
        <li>Promotions exclusives sur les goodies du BDE.</li>
      </ul>
    </section>
  `,
  partenariats: `
    <section class="fade">
      <h1>Partenariats</h1>
      <p class="subtitle">Nos partenaires et leurs offres :</p>
      <div class="event-list">
        <div class="event-card">
          <div class="event-date">Logo</div>
          <div>
            <h2>Partenaire 1</h2>
            <p>Réduction de 10% pour les membres.</p>
          </div>
        </div>
        <div class="event-card">
          <div class="event-date">Logo</div>
          <div>
            <h2>Partenaire 2</h2>
            <p>Offre spéciale pour les étudiants de l’ESTP.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  members: `
    <section class="fade">
      <h1>Notre équipe</h1>
      <div class="members-block">
        <h2>Bureau</h2>
        <div class="members-grid">
          <div class="member-card">
            <h3>Président</h3>
            <p>Adrien Rossi</p>
            <a href="mailto:adrien.rossi@estp.fr">adrien.rossi@estp.fr</a>
          </div>
          <div class="member-card">
            <h3>Vice-président</h3>
            <p>Arthur Paquet</p>
            <a href="mailto:arthur.paquet@estp.fr">arthur.paquet@estp.fr</a>
          </div>
          <div class="member-card">
            <h3>Trésorier</h3>
            <p>Hippolyte Penin-Jamin</p>
            <a href="mailto:hippolyte.peninjamin@estp.fr">hippolyte.peninjamin@estp.fr</a>
          </div>
          <div class="member-card">
            <h3>Vice-trésorier</h3>
            <p>Amine Handaoui</p>
            <a href="mailto:amine.handaoui@estp.fr">amine.handaoui@estp.fr</a>
          </div>
          <div class="member-card">
            <h3>Secrétaire</h3>
            <p>Rania Hanafi</p>
            <a href="mailto:rania.hanafi@estp.fr">rania.hanafi@estp.fr</a>
          </div>
        </div>
        <h2>Pôle organisation</h2>
        <div class="members-grid">
          <div class="member-card">
            <p>Fabio Domingues</p>
            <a href="mailto:fabio.dominguespires@estp.fr">fabio.dominguespires@estp.fr</a>
          </div>
          <div class="member-card">
            <p>Louise Jarson</p>
            <a href="mailto:louise.jarson@estp.fr">louise.jarson@estp.fr</a>
          </div>
        </div>
        <h2>Pôle communication</h2>
        <div class="members-grid">
          <div class="member-card">
            <p>Gregoire Fischer</p>
            <a href="mailto:gregoire.fischer@estp.fr">gregoire.fischer@estp.fr</a>
          </div>
        </div>
        <h2>Pôle événementiel</h2>
        <div class="members-grid">
          <div class="member-card">
            <p>Flora Parfait</p>
            <a href="mailto:flora.parfait@estp.fr">flora.parfait@estp.fr</a>
          </div>
          <div class="member-card">
            <p>Antoine Pogoda</p>
            <a href="mailto:antoine.pogoda@estp.fr">antoine.pogoda@estp.fr</a>
          </div>
          <div class="member-card">
            <p>Rémi Lekeux</p>
            <a href="mailto:remi.lekeux@estp.fr">remi.lekeux@estp.fr</a>
          </div>
          <div class="member-card">
            <p>Sara Laghrissi</p>
            <a href="mailto:sara.laghrissi@estp.fr">sara.laghrissi@estp.fr</a>
          </div>
        </div>
        <h2>Pôle sponsoring</h2>
        <div class="members-grid">
          <div class="member-card">
            <p>Dorian Beauvallet</p>
            <a href="mailto:dorian.beauvallet@estp.fr">dorian.beauvallet@estp.fr</a>
          </div>
          <div class="member-card">
            <p>Lothaire Colin-Adrenz</p>
            <a href="mailto:lothaire.colinandrez@estp.fr">lothaire.colinandrez@estp.fr</a>
          </div>
          <div class="member-card">
            <p>Argan Guillemot</p>
            <a href="mailto:argan.guillemot@estp.fr">argan.guillemot@estp.fr</a>
          </div>
        </div>
      </div>
      <p class="join-text">Envie de rejoindre l’équipe ? <a href="#" data-page="contact" class="inline-link">Contacte-nous</a> !</p>
    </section>
  `,
  contact: `
    <section class="fade">
      <h1>Contact</h1>
      <form id="contactForm" autocomplete="off">
        <label for="name">Nom</label>
        <input type="text" name="name" id="name" required>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="5" required></textarea>
        <button type="submit" class="btn">Envoyer</button>
        <div id="formMsg" style="margin-top:12px;"></div>
      </form>
    </section>
  `
};

// Gestion de la navigation dynamique (y compris les liens insérés dynamiquement)
function setupNav() {
  document.querySelectorAll('nav a, .btn, .inline-link').forEach(link => {
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
}

function loadPage(page) {
  document.getElementById('content').innerHTML = pages[page];
  setupNav(); // Réactive les liens dynamiques insérés dans le DOM
  if (page === "contact") {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('formMsg').innerHTML = "<span style='color:var(--green);font-weight:500;'>Merci pour votre message ! Nous vous répondrons rapidement.</span>";
      form.reset();
    });
  }
}

function setActiveNav(page) {
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === page);
  });
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
  loadPage('home');
  setupNav();
});
