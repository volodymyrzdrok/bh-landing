export function markupLocations(data) {


  return data.map(({ name, img, url_menu, url_all_info,url_to_map})=>`<li >
  <img class="w-100 mb-4" src="images/locations/${img}" alt=${name} />
  <div class="d-flex justify-content-between px-4 px-md-0">
    <a href=${url_all_info} class="fw-m text-uppercase" data-i18n=${name}></a>
    <div class="d-flex align-items-center gap-4 pe-lg-2">
      <a
        href=${url_menu}
        class="text-uppercase text-decoration-underline fs-10 color-grey"
        data-i18n="menu"
      ></a>
      <a
        href=${url_to_map}
        class="text-uppercase fs-10 color-grey d-none d-lg-block"
        data-i18n="look_map"
      ></a>
      <a href=${url_to_map}> <img style="width: 12px" src="images/map-pin.svg" alt="map-pin" /></a>
    </div>
  </div>
</li>`);
}
