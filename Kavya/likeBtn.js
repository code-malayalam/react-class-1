const heartSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" ></path></svg>`;

export function createLikeButton(container) {
  container.innerHTML += `
                        <button class="like_btn">${heartSVG}</button>
                        `;

  const likeButton = container.querySelector(".like_btn");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("active");
  });
}
