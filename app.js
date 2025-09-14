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
    let html = "";
    switch (page) {
      case "home":
        html = `
          <div class="fade">
            <h1>Bienvenue au B-CUBE</h1>
            <p class="subtitle">Votre BDE à l'ESTP Troyes.</p>
            <div class="home-cta">
              <a href="#" data-page="avantages" class="btn">Voir les avantages</a>
              <a href="#" data-page="partenariats" class="btn outline">Nos partenariats</a>
            </div>
          </div>
        `;
        content.innerHTML = html;
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
            <p class="subtitle">Nos partenaires avec leurs offres :</p>
            <div class="partner-list">
              <div class="partner-card">
                <img src="https://via.placeholder.com/100x100" alt="Logo partenaire 1">
                <div>
                  <h2>Partenaire 1</h2>
                  <p>Réduction de 10% pour les membres.</p>
                </div>
              </div>
              <div class="partner-card">
                <img src="https://via.placeholder.com/100x100" alt="Logo partenaire 2">
                <div>
                  <h2>Partenaire 2</h2>
                  <p>Offre spéciale étudiants ESTP.</p>
                </div>
              </div>
            </div>
          </div>
        `;
        break;

      case "events":
        content.innerHTML = `<div class="fade"><h1>Événements</h1><p>...</p></div>`;
        break;

      case "membres":
        content.innerHTML = `<div class="fade"><h1>Membres</h1><p>...</p></div>`;
        break;

      case "contact":
        content.innerHTML = `<div class="fade"><h1>Contact</h1><p>Nous contacter à : <a href="mailto:b-cube@estp.fr">b-cube@estp.fr</a></p></div>`;
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

  // Initial load
  loadPage("home");
});
