import '../../assets/css/main.scss';
import '../../assets/css/pages/_contact.scss';

// JS imports
import { commonJS } from '../../javascript/commonJS.js';

const mainContainer = new commonJS(false);
setupMap();

function setupMap() {
  const loadGoogleMapsApi = require('load-google-maps-api');
  const mapContainer = document.getElementById('map');
  // The location of carter brown law offices
  var uluru = {
    lat: -25.344,
    lng: 131.036
  };
  // The map, centered at carter brown law
  // var map = new googleMaps.Map( mapContainer, {
  //   zoom: 4,
  //   center: uluru
  // });
  loadGoogleMapsApi({key: 'AIzaSyCkS58fwUabI3HKffisb7dyOGuR3XRmqFo'}).then((googleMaps) => {
    // console.log(mapContainer);
    new googleMaps.Map(mapContainer, {
      zoom: 4,
      center: uluru
    });
  }).catch(function (error) {
    console.error(error)
  });
}
