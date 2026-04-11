function createItem(label, value) {
  return `
    <div class="countdown-item">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `;
}

export function startCountdown(targetDate, container) {
  function update() {
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();
    if (distance <= 0) {
      container.innerHTML = `
        <div class="countdown-done">
          <strong>Chegou o grande dia.</strong>
          <span>Que seja uma noite inesquecível.</span>
        </div>
      `;
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);
    container.innerHTML = [
      createItem("dias", days),
      createItem("horas", hours),
      createItem("min", minutes),
      createItem("seg", seconds)
    ].join("");
  }
  update();
  window.setInterval(update, 1000);
}
