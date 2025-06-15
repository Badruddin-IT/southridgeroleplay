document.addEventListener("DOMContentLoaded", () => {
  // Target audio
  const audio = document.getElementById("bg-music");

  // Fungsi untuk mencoba play
  const tryPlay = () => {
    if (audio && audio.paused) {
      audio.play().catch((err) => {
        console.warn("Autoplay ditolak, menunggu interaksi pengguna...");
      });
    }
  };

  // Coba langsung mainkan saat DOM siap
  tryPlay();

  // Jika pengguna klik/scroll/touch, coba lagi play
  ["click", "touchstart", "scroll"].forEach(evt => {
    window.addEventListener(evt, () => {
      tryPlay();
    }, { once: true });
  });
});