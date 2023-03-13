export const generateAboutEtsy = (etsy) => {
  const whatWeDo = document.querySelector(".what-we-do");
  const arrayOfEtsyContents = etsy.map(elem => {
    const etsyContent = `
    <div class="community">
      <h3 class="community-title">${elem.title}</h3>
        <div class="community-content">
          <span class="prev-content">${elem.content}</span>
          <span class="style">${elem.contentPart}</span>
        </div>
    </div>

    `
    return etsyContent
  })
  whatWeDo.innerHTML = arrayOfEtsyContents.join('')
};
