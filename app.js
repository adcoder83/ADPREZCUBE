const avantagesCube = [
  {
    title: "Patinoire des 3 Seines",
    description: "Entrée à 4,50€ au lieu de 5,80€.",
    conditions: "Sur présentation de la carte Cube à l’accueil.",
    logo: "" // Pas de logo officiel trouvé, à compléter si disponible (site: https://patinoire3seine.fr)
  },
  {
    title: "McArthur Glen",
    description: "Accès au pass VIP à l’accueil en présentant la carte Cube (donne des réductions et avantages exclusifs dans les boutiques partenaires).",
    conditions: "Sur présentation de la carte Cube à l'accueil.",
    logo: "https://seeklogo.com/vector-logo/548755/mcarthurglen"
  },
  {
    title: "Father and Sons",
    description: "Deux fois par an, pendant une semaine, costumes + chemise + cravate pour seulement 2€.",
    conditions: "Dates communiquées par le BDE. Offre réservée aux détenteurs de la carte Cube.",
    logo: "https://brandfetch.com/fatherandsons.fr" // Style guide et médias officiels sur cette URL
  },
  {
    title: "Five Pizza",
    description: "Pour une pizza achetée, une boisson offerte.",
    conditions: "Valable toute l’année sur présentation de la carte Cube.",
    logo: "https://commons.wikimedia.org/wiki/File:Pie_Five_Pizza_logo_2019.png" // Logo Pie Five Pizza (à remplacer si autre enseigne locale)
  },
  {
    title: "Burger King",
    description: "-10% sur une commande par jour.",
    conditions: "Sur présentation de la carte Cube à la caisse.",
    logo: "https://seeklogo.com/vector-logo/23687/burger-king"
  },
  {
    title: "Anousti Fast Food",
    description: "Boisson offerte sur le menu kebab, menu pita et menu tacos.",
    conditions: "Offre valable uniquement avec la carte Cube.",
    logo: "" // Logo non trouvé (site : http://anousti.fr/), à compléter si obtenu
  }
];

// Affichage dynamique dans la page avantages
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
        ${avantagesCube.map(avantage => `
          <div class="avantage-partenaire">
            <div class="avantage-logo">
              ${avantage.logo
                ? `<img src="${avantage.logo}" alt="Logo ${avantage.title}">`
                : `<div style="width:74px;height:74px;background:#f2f2f2;display:flex;align-items:center;justify-content:center;border-radius:12px;color:#888;font-size:0.9em;">Logo</div>`
              }
            </div>
            <div class="avantage-desc">
              <h3>${avantage.title}</h3>
              <p>${avantage.description}</p>
              <small>${avantage.conditions}</small>
            </div>
          </div>
        `).join('')}
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
