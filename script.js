const images = [
  {
    id: 1,
    url: "https://viagemeturismo.abril.com.br/wp-content/uploads/2017/05/istock-533960357-1.jpg",
  },
  {
    id: 2,
    url: "https://www.lookatporto.pt/wp-content/uploads/2020/06/lookatporto.jpg",
  },
  {
    id: 3,
    url: "https://www.portugal-live.net/images/rotator/321-porto-a.jpg",
  },
  {
    id: 4,
    url: "https://viago.ca/wp-content/uploads/2017/11/portugal-porto-1.jpg",
  },
  {
    id: 5,
    url: "https://media.gazetadopovo.com.br/haus/2019/11/porto-portugal-frederique-voisin-demery-flickr-d754cf60.jpg",
  },
];

const containerItems = document.querySelector("#container-items");

const loadImages = (images, container) => {
  images.forEach((image) => {
    // Observe o operador (+=) para que ele acumule os conteúdos (image) e não substitua (caso colocássemos só ()=) )
    container.innerHTML += ` 
            <div class="item">
            <img src="${image.url}"
            </div>
        `;
  });
};

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
  containerItems.appendChild(items[0]); // appendChild pega insere o elemento na última posição do array. Assim, o elemento 0 vai para a última posição.
  items =
    document.querySelectorAll(
      ".item"
    ); /*  Precisamos atualizar o array de items para quando chamarmos novamente a função 'previous', ela continuar
    girando as imagens de onde parou. */
};

const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items =
    document.querySelectorAll(
      ".item"
    ); /*  Precisamos atualizar o array de items para quando chamarmos novamente a função 'previous', ela continuar
    girando as imagens de onde parou. */
};

document.querySelector("#previous").addEventListener("click", next);
document.querySelector("#next").addEventListener("click", previous);
