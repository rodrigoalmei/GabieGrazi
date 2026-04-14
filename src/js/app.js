import { siteData } from "../data/site-data.js";
import { siteConfig } from "./config.js";
import { startCountdown } from "./modules/countdown.js";
import { setupAudio } from "./modules/audio.js";
import { setupGallery } from "./modules/gallery.js";
import { setupNavigation, setupReveal } from "./modules/navigation.js";
import {
  renderFoodGroups,
  renderHosting,
  renderNavigation,
  renderSimpleList,
  renderTags,
  renderTourism
} from "./modules/renderers.js";
import { createIframeSrc, toDirectionsLink, toMapsLink } from "./modules/utils.js";

document.querySelector("[data-hero-description]").textContent = siteData.heroDescription;
document.querySelector("[data-flight-summary]").textContent = siteData.flightSummary;
document.querySelector("[data-flight-contact]").textContent = siteData.flightContact;
document.querySelector("[data-hosting-summary]").textContent =
  "As melhores regiões para se hospedar são: Altiplano, Cabo Branco, Tambaú, Manaíra, Aeroclube, Bessa e Jardim Oceania.";

const closingMessageRoot = document.querySelector("[data-closing-message]");
closingMessageRoot.innerHTML = `
  <div class="closing-message-stack">
    <strong class="closing-message-title">${siteData.closingMessageTitle ?? ""}</strong>
    <p class="closing-message-subtitle">${siteData.closingMessageSubtitle ?? ""}</p>
    <p class="closing-message-intro">${siteData.closingMessageIntro ?? siteData.closingMessage}</p>
    ${(siteData.closingMessageBody ?? [])
      .map(
        (paragraph) => `
      <p class="closing-message-paragraph">${paragraph}</p>
    `
      )
      .join("")}
  </div>
`;

document.querySelector("[data-confirmacao-link]").href = siteData.confirmacaoLink;
document.querySelector("[data-map-iframe]").src = createIframeSrc(siteData.location.mapQuery);
document.querySelector("[data-location-link]").href = toMapsLink(siteData.location.mapQuery);
document.querySelector("[data-route-link]").href = toDirectionsLink(siteData.location.mapQuery);

const galleryItems = [
  {
    src: "./assets/images/gallery/site-14.jpeg",
    thumb: "./assets/images/gallery/site-14.jpeg",
    alt: "Grazielle em foto descontraida"
  },
  {
    src: "./assets/images/gallery/site-12.jpeg",
    thumb: "./assets/images/gallery/site-12.jpeg",
    alt: "Gabrielle em foto descontraida com vestido vermelho"
  },
  {
    src: "./assets/images/gallery/site-13.jpeg",
    thumb: "./assets/images/gallery/site-13.jpeg",
    alt: "Gabrielle e Grazielle em foto com jalecos"
  },
  {
    src: "./assets/images/gallery/site-10.jpg",
    thumb: "./assets/images/gallery/site-10.jpg",
    alt: "Gabrielle e Grazielle em foto descontraida em embarcacao"
  },
  {
    src: "./assets/images/gallery/site-9.jpeg",
    thumb: "./assets/images/gallery/site-9.jpeg",
    alt: "Gabrielle e Grazielle com imagem religiosa em foto de estudio"
  },
  {
    src: "./assets/images/gallery/site-11.jpeg",
    thumb: "./assets/images/gallery/site-11.jpeg",
    alt: "Gabrielle e Grazielle abracadas em foto de estudio"
  },
  {
    src: "./assets/images/gallery/site-7.jpeg",
    thumb: "./assets/images/gallery/site-7.jpeg",
    alt: "Grazielle segurando bandeira azul em foto de estudio"
  },
  {
    src: "./assets/images/gallery/site-4.jpeg",
    thumb: "./assets/images/gallery/site-4.jpeg",
    alt: "Gabrielle e Grazielle segurando bandeira azul em foto de estudio",
    imagePosition: "top center",
    thumbFit: "contain",
    thumbPosition: "top center"
  },
  {
    src: "./assets/images/gallery/site-8.jpg",
    thumb: "./assets/images/gallery/site-8.jpg",
    alt: "Gabrielle e Grazielle com os pais em foto de formatura"
  },
  {
    src: "./assets/images/gallery/site-3.jpg",
    thumb: "./assets/images/gallery/site-3.jpg",
    alt: "Gabrielle e Grazielle posando juntas em foto casual"
  },
  {
    src: "./assets/images/gallery/site-2.jpg",
    thumb: "./assets/images/gallery/site-2.jpg",
    alt: "Gabrielle e Grazielle em retrato elegante"
  },
  {
    src: "./assets/images/gallery/site-1.png",
    thumb: "./assets/images/gallery/site-1.png",
    alt: "Ilustracao de Gabrielle e Grazielle com becas de formatura"
  }
];

renderNavigation(siteData.navigation, document.querySelector("[data-nav]"));
renderTags(siteData.hostingAreas, document.querySelector("[data-hosting-areas]"));
renderHosting(siteData.hosting, document.querySelector("[data-hosting-list]"));
renderSimpleList(siteData.beauty, document.querySelector("[data-beauty-list]"));
renderSimpleList(siteData.barbers, document.querySelector("[data-barber-list]"));
renderFoodGroups(siteData.foodGroups, document.querySelector("[data-food-groups]"));
renderTourism(siteData.tourism, document.querySelector("[data-tourism-list]"));

startCountdown(new Date(siteData.eventDate), document.querySelector("[data-countdown]"));
setupNavigation();
setupReveal();
setupGallery(galleryItems);
setupAudio(siteConfig);
