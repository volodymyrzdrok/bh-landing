export function markupModalLocations(data) {
  const { city, address } = data;
  return `
    <div class="row">
      <div class="col-4 p-4 pe-1">
        <h3 class="locModal__title fw-m mb-3" data-i18n=${city} ></h3>
    <div>
    ${address
      .map(
        ({
          id,
          name,
          url,
        }) => `<a class="locModal-name__item" href="https://maps.app.goo.gl/${url}" target="_blank" data-target=${id} data-i18n=${name}>
    
  </a>`
      )
      .join("")}
      
    </div>
      </div>
      <div class="col-8">
        <div class="locModal-content">
        ${address
          .map(
            ({
              id,
              name,
            }) => `<div class="locModal-content__item" data-id=${id}>
        <img src="./images/locations/${name}.jpg" alt="${name}" />
      </div>`
          )
          .join("")}

          
      
        </div>
      </div>
    </div>`;
}
