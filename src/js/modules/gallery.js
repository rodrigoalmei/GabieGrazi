export function setupGallery(items) {
  const root = document.querySelector("[data-gallery]");
  if (!root || !items?.length) return;

  const image = root.querySelector("[data-gallery-image]");
  const title = root.querySelector("[data-gallery-title]");
  const caption = root.querySelector("[data-gallery-caption]");
  const thumbnails = root.querySelector("[data-gallery-thumbnails]");
  const prev = root.querySelector("[data-gallery-prev]");
  const next = root.querySelector("[data-gallery-next]");

  let activeIndex = 0;
  let timerId = null;

  function render(index) {
    const item = items[index];
    activeIndex = index;
    image.src = item.src;
    image.alt = item.alt;
    title.textContent = item.title;
    caption.textContent = item.caption;

    const buttons = thumbnails.querySelectorAll("button");
    buttons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function goTo(index) {
    const normalized = (index + items.length) % items.length;
    render(normalized);
  }

  function restartAutoplay() {
    window.clearInterval(timerId);
    timerId = window.setInterval(() => {
      goTo(activeIndex + 1);
    }, 4200);
  }

  thumbnails.innerHTML = items.map((item, index) => `
    <button
      class="gallery-thumb"
      type="button"
      data-gallery-index="${index}"
      aria-label="Abrir foto ${index + 1}"
      aria-pressed="false"
    >
      <img src="${item.thumb}" alt="${item.alt}" />
    </button>
  `).join("");

  thumbnails.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      goTo(Number(button.dataset.galleryIndex));
      restartAutoplay();
    });
  });

  prev.addEventListener("click", () => {
    goTo(activeIndex - 1);
    restartAutoplay();
  });

  next.addEventListener("click", () => {
    goTo(activeIndex + 1);
    restartAutoplay();
  });

  root.addEventListener("mouseenter", () => window.clearInterval(timerId));
  root.addEventListener("mouseleave", restartAutoplay);

  render(activeIndex);
  restartAutoplay();
}
