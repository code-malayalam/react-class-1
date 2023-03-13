
  export  function createDiscoverContainer(dItems) {
      const list = document.querySelector(".bubbleList");
      const arrayOfDiscoverItems = dItems.map((item) => {
        const discoverContents = `
        <li class="shopping-list"> 
          <img src="${item.url}" alt="image" class="imgCategories">
          <p class="title">${item.text}</p>
        </li>
        `
        return discoverContents
      })
      list.innerHTML = arrayOfDiscoverItems.join('')
    }
