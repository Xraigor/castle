'use strict';
(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
      <h1>
        <div class="actor">
          <span>Restaurant is ${actor.name}.</span></br>
          <span>Price is from ${actor.minPrice}&#8364 to ${actor.maxPrice}&#8364.</span></br>
          <span>Rating  ${actor.rating}.</span>
        </div>
      </h1>

      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const buttonName = document.querySelector('#searchName');

  buttonName.addEventListener('click', function onClick () {
    let resto = SEARCHING.getInput();
    let actors = SEARCHING.findRestaurant(resto.name);

    render(actors);

    return;
  });

  const buttonDetail = document.querySelector('#searchDetail');

    buttonDetail.addEventListener('click', function onClick () {
      const resto = SEARCHING.getInput();
      const actors = SEARCHING.findDetails(resto.minPrice, resto.maxPrice, resto.minRating);

      render(actors);

      return;
    });
})();