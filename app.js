const pages = {
  home: `
    <section class="fade">
      <h1>Bienvenue sur le site du B-CUBE</h1>
      <p class="subtitle">
        Le Bureau des Élèves de l’ESTP Paris, campus de Troyes.<br>
        Nous connectons, organisons et innovons pour faire de chaque moment une expérience inoubliable au sein du campus !
      </p>
    </section>
  `,
  avantages: `
    <section class="fade">
      <h1>Avantages Carte Cube</h1>
      <p class="subtitle">Présente ta carte Cube et bénéficie de ces avantages :</p>
      <div class="avantages-list">
        <div class="avantage-partenaire">
          <div class="avantage-logo">
            <!-- Remplace le src par le chemin/nom de ton vrai logo -->
            <img src="img/bar-du-coin.png" alt="Logo Bar du Coin">
          </div>
          <div class="avantage-desc">
            <h3>Bar du Coin</h3>
            <p>Happy hour toute la soirée sur présentation de la carte Cube + 10% sur toutes les consos !</p>
          </div>
        </div>
        <div class="avantage-partenaire">
          <div class="avantage-logo">
            <img src="img/pizza-max.png" alt="Logo Pizza Max">
          </div>
          <div class="avantage-desc">
            <h3>Pizza Max</h3>
            <p>1 pizza achetée = 1 soda offert à emporter, valable tous les jours.</p>
          </div>
        </div>
        <div class="avantage-partenaire">
          <div class="avantage-logo">
            <img src="img/sport2000.png" alt="Logo Sport 2000">
          </div>
          <div class="avantage-desc">
            <h3>Sport 2000</h3>
            <p>15% de remise sur tout le magasin (hors promotions en cours et soldes).</p>
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
    </section>
  `
};

// Navigation dynamique
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

function setupMobileMenu() {
  const menuBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  if (menuBtn && navList) {
    menuBtn.onclick = () => {
      navList.classList.toggle('open');
    };
    navList.querySelectorAll('a').forEach(link => {
      link.onclick = () => navList.classList.remove('open');
    });
  }
}

function loadPage(page) {
  document.getElementById('content').innerHTML = pages[page];
  setupNav();
  setupMobileMenu();
}

function setActiveNav(page) {
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === page);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  loadPage('home');
  setupNav();
  setupMobileMenu();
});
