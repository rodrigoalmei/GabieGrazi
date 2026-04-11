export function setupAudio(config) {
  const audio = document.querySelector("#event-audio");
  const playlist = config.audioPlaylist ?? [];
  if (!audio || !playlist.length) return;

  let trackIndex = 0;
  audio.autoplay = true;
  audio.setAttribute("autoplay", "");

  function setTrack(index) {
    trackIndex = (index + playlist.length) % playlist.length;
    audio.src = playlist[trackIndex];
    audio.load();
  }

  async function tryPlay() {
    try {
      await audio.play();
      return true;
    } catch {
      return false;
    }
  }

  async function startPlayback() {
    setTrack(trackIndex);
    const started = await tryPlay();
    if (started) return;

    const resumeOnInteraction = async () => {
      await tryPlay();
    };

    ["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
      window.addEventListener(eventName, resumeOnInteraction, { once: true });
    });
  }

  audio.addEventListener("ended", async () => {
    setTrack(trackIndex + 1);
    await tryPlay();
  });

  if (config.enableAutoMusic) {
    if (document.readyState === "complete") {
      startPlayback();
      return;
    }

    window.addEventListener("DOMContentLoaded", startPlayback, { once: true });
    window.addEventListener("load", startPlayback, { once: true });
  }
}
