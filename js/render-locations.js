import { locations } from './db/locations.js';
import { markupLocations } from './markup/markup-locations.js';


$(document).ready(function () {
  const containerLocations = $('.location__list');
  if (containerLocations) {
    containerLocations.html(markupLocations(locations));
  }
})