document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      if (!page) return;
      setActiveLink(page);
      loadPage(page);
    });
  });

  function setActiveLink(page) {
    links.forEach(l => l.classList.remove("active"));
    const activeLink = document.querySelector(`nav a[data-page="${page}"]`);
    if (activeLink) activeLink.classList.add("active");
  }

  function loadPage(page) {
    switch (page) {
      case "home":
        content.innerHTML = `
          <div class="fade">
            <h1>Bienvenue au B-CUBE</h1>
            <p class="subtitle">Votre BDE à l'ESTP Troyes.</p>
            <div class="home-cta">
              <a href="#" data-page="avantages" class="btn">Voir les avantages</a>
              <a href="#" data-page="partenariats" class="btn outline">Nos partenariats</a>
            </div>
          </div>
        `;
        addCtaEvents();
        break;

      case "avantages":
        content.innerHTML = `
          <div class="fade">
            <h1>Avantages Carte Cube</h1>
            <p class="subtitle">La carte Cube vous donne accès à de nombreux avantages :</p>
            <ul>
              <li>Réductions dans les bars et restaurants partenaires.</li>
              <li>Tarifs préférentiels pour les événements.</li>
              <li>Accès prioritaire aux activités sportives et culturelles.</li>
              <li>Promotions exclusives sur les goodies du BDE.</li>
            </ul>
          </div>
        `;
        break;

      case "partenariats":
        content.innerHTML = `
          <div class="fade">
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
          </div>
        `;
        break;

      case "events":
        content.innerHTML = `
          <div class="fade">
            <h1>Événements</h1>
            <p class="subtitle">Voici les prochains événements organisés par le B-CUBE.</p>
            <div class="event-list">
              <div class="event-card">
                <div class="event-date">20/09</div>
                <div>
                  <h2>Soirée d’intégration</h2>
                  <p class="event-place">Campus ESTP Troyes</p>
                  <p>Une soirée pour accueillir les nouveaux étudiants.</p>
                </div>
              </div>
            </div>
          </div>
        `;
        break;

      case "members":
        content.innerHTML = `
          <div class="fade">
            <h1>Membres</h1>
            <p class="subtitle">Découvrez l’équipe du B-CUBE.</p>
            <div class="members-grid">
              <div class="member-card">
                <h3>Jean Dupont</h3>
                <p>Président</p>
                <a href="mailto:jean.dupont@estp.fr">jean.dupont@estp.fr</a>
              </div>
              <div class="member-card">
                <h3>Marie Martin</h3>
                <p>Vice-présidente</p>
                <a href="mailto:marie.martin@estp.fr">marie.martin@estp.fr</a>
              </div>
            </div>
          </div>
        `;
        break;

      case "contact":
        content.innerHTML = `
          <div class="fade">
            <h1>Contact</h1>
            <p class="subtitle">Écrivez-nous pour toute question :</p>
            <form>
              <label for="name">Nom</label>
              <input type="text" id="name" placeholder="Votre nom" required>
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Votre email" required>
              <label for="message">Message</label>
              <textarea id="message" rows="5" placeholder="Votre message" required></textarea>
              <button type="submit" class="btn">Envoyer</button>
            </form>
            <p class="join-text">📧 Email : <a href="mailto:b-cube@estp.fr" class="inline-link">b-cube@estp.fr</a></p>
            <p class="join-text">📱 Instagram : <a href="#" class="inline-link">@bcube_estp</a></p>
          </div>
        `;
        break;

      default:
        content.innerHTML = `<div class="fade"><h1>Page non trouvée</h1></div>`;
        break;
    }
  }

  function addCtaEvents() {
    const ctaLinks = document.querySelectorAll(".home-cta a");
    ctaLinks.forEach(cta => {
      cta.addEventListener("click", (e) => {
        e.preventDefault();
        const page = cta.getAttribute("data-page");
        if (!page) return;
        setActiveLink(page);
        loadPage(page);
      });
    });
  }

  // Charger la page d'accueil au lancement
  loadPage("home");
});
