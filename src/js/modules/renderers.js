import { createInstagramLink, createMapsQuery, toMapsLink } from "./utils.js";

function cardActions(item) {
  const actions = [];
  if (item.handle) {
    actions.push(`<a class="mini-link" href="${createInstagramLink(item.handle)}" target="_blank" rel="noreferrer">Instagram</a>`);
  }
  actions.push(`<a class="mini-link" href="${toMapsLink(createMapsQuery(item.name, item.address))}" target="_blank" rel="noreferrer">Ver no mapa</a>`);
  return actions.join("");
}

export function renderNavigation(items, container) {
  container.innerHTML = items.map((item) => `<a href="#${item.id}" class="nav-link">${item.label}</a>`).join("");
}

export function renderTags(items, container) {
  container.innerHTML = items.map((item) => `<span class="tag">${item}</span>`).join("");
}

export function renderHosting(items, container) {
  container.innerHTML = items.map((item) => `
    <article class="place-card reveal">
      <h3>${item.name}</h3>
      ${item.handle ? `<p class="handle">${item.handle}</p>` : ""}
      <p>${item.address}</p>
      ${item.note ? `<p class="note">${item.note}</p>` : ""}
      <div class="card-actions">${cardActions(item)}</div>
    </article>
  `).join("");
}

export function renderSimpleList(items, container) {
  container.innerHTML = `
    <ul class="clean-list">
      ${items.map((item) => `
        <li>
          <strong>${item.name}</strong>
          <a href="${createInstagramLink(item.handle)}" target="_blank" rel="noreferrer">${item.handle}</a>
        </li>
      `).join("")}
    </ul>
  `;
}

export function renderFoodGroups(groups, container) {
  container.innerHTML = groups.map((group) => `
    <article class="category-card reveal">
      <div class="category-header">
        <h3>${group.title}</h3>
        <span>${group.items.length} sugestões</span>
      </div>
      <div class="category-items">
        ${group.items.map((item) => `
          <div class="category-item">
            <div>
              <strong>${item.name}</strong>
              ${item.note ? `<p>${item.note}</p>` : ""}
            </div>
            <div class="item-links">
              ${item.handle ? `<a href="${createInstagramLink(item.handle)}" target="_blank" rel="noreferrer">${item.handle}</a>` : ""}
              <a href="${toMapsLink(createMapsQuery(item.name))}" target="_blank" rel="noreferrer">mapa</a>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

export function renderTourism(items, container) {
  container.innerHTML = items.map((item) => `
    <article class="tour-card reveal">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="tour-meta">
        <div>
          <span>Como ir</span>
          <strong>${item.howToGo}</strong>
        </div>
        <div>
          <span>Base</span>
          <strong>${item.place}</strong>
        </div>
        <div>
          <span>Melhor horário</span>
          <strong>${item.bestTime}</strong>
        </div>
      </div>
      <a class="mini-link" href="${toMapsLink(createMapsQuery(item.title, item.place))}" target="_blank" rel="noreferrer">Abrir no mapa</a>
    </article>
  `).join("");
}
