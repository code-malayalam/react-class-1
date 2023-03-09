const playSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><polygon points="4 4 4 20 20 12 4 4" fill="#222222"></polygon></svg>`;

export function createPlayButton(container) {
  container.innerHTML += `
                        <button class="play_btn">${playSVG}</button>
                         `;
  const playButton = container.querySelector(".play_btn");
  container.addEventListener("mouseenter", () => {
    playButton.style.display = "none";
  });

  container.addEventListener("mouseleave", () => {
    playButton.style.display = "flex";
  });
}
