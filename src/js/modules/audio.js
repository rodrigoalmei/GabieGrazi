export function setupAudio(config) {
  const audio = document.querySelector("#event-audio");
  const button = document.querySelector("[data-audio-toggle]");
  if (!audio || !button) return;

  audio.src = config.audioSrc;
  audio.loop = true;

  async function toggleAudio() {
    try {
      if (audio.paused) {
        await audio.play();
        button.textContent = "Pausar trilha sonora";
      } else {
        audio.pause();
        button.textContent = "Ativar trilha sonora";
      }
    } catch {
      button.textContent = "Arquivo de áudio não encontrado";
    }
  }

  button.addEventListener("click", toggleAudio);

  if (config.enableAutoMusic) {
    window.addEventListener("load", async () => {
      try {
        await audio.play();
        button.textContent = "Pausar trilha sonora";
      } catch {
        button.textContent = "Ativar trilha sonora";
      }
    }, { once: true });
  }
}
