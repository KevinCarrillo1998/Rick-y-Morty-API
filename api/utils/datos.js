const cardGenerator = object => {
  const card = document.createElement('article');
  card.classList.add('card')
  card.innerHTML = `
    <div class="card-image">
      <img class="img-fluid" src="${object.image}" alt="imagen de ${object.name}">
    </div>
    <div class="card-body">
      <h3>${object.name}</h3>
      <p>${object.species}</p>
      <p>${object.origin.name}</p>
      <br>
      <span class="${object.status.toLowerCase()}">${object.status}</span>
    </div>
  `;
  return card;
}