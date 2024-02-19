export function markupLocations(data) {
  return data.map(
    ({id, city }) => `
<li class="d-flex align-items-start justify-content-center m-3 location__item" data-id="${id}">
<img src="images/map-pin.svg" class="location__pin pe-1 pe-lg-4" alt="pin" />
<p class="text-white location__name" data-i18n=${city}></p>
</li>

`
  );
}
