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
            <img src="img/patinoire-3-seines.png" alt="Logo Patinoire des 3 Seines">
          </div>
          <div class="avantage-desc">
            <h3>Patinoire des 3 Seines</h3>
            <p>Entrée à <b>4,50€</b> au lieu de 5,80€.</p>
            <small>Sur présentation de la carte Cube à l’accueil.</small>
          </div>
        </div>
        <div class="avantage-partenaire">
          <div class="avantage-logo">
            <img src="img/mcarthur-glen.png" alt="Logo McArthur Glen">
          </div>
          <div class="avantage-desc">
            <h3>Magasins d'usines McArthur Glen</h3>
            <p>Accès au <b>pass VIP</b> à l’accueil en présentant la carte Cube.</p>
            <small>Donne des réductions et avantages exclusifs dans les boutiques partenaires.</small>
          </div>
        </div>
        <div class="avantage-partenaire">
          <div class="avantage-logo">
            <img src="img/father-and-sons.png" alt="Logo Father and Sons">
          </div>
          <div class="avantage-desc">
            <h3>Father and Sons</h3>
            <p>Deux fois par an, pendant une semaine : <b>costume + chemise + cravate pour seulement 2€</b>.</p>
            <small>Dates communiquées par le BDE. Offre réservée aux détenteurs de la carte Cube.</small>
          </div>
        </div>
        <div class="avantage-partenaire">
          <div class="avantage-logo">
            <img src="img/five-pizza.png" alt="Logo Five Pizza">
          </div>
          <div class="avantage-desc">
            <h3>Five Pizza</h3>
            <p>Pour une pizza achetée, <b>une boisson offerte</b>.</p>
            <small>Valable toute l’année sur présentation de la carte Cube.</small>
          </div>
        </div>
        <div class="avantage-partenaire">
          <div class="avantage-logo">
            <img src="img/burger-king.png" alt="Logo Burger King">
          </div>
          <div class="avantage-desc">
            <h3>Burger King</h3>
            <p><b>-10%</b> sur une commande par jour.</p>
            <small>Sur présentation de la carte Cube à la caisse.</small>
          </div>
        </div>
        <div class="avantage-partenaire">
          <div class="avantage-logo">
            <img src="img/anousti-fast-food.png" alt="Logo Anousti Fast Food">
          </div>
          <div class="avantage-desc">
            <h3>Anousti Fast Food</h3>
            <p><b>Boisson offerte</b> sur le menu kebab, pita et tacos.</p>
            <small>Offre valable uniquement avec la carte Cube.</small>
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
