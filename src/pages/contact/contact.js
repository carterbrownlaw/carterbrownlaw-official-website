import '../../assets/css/main.scss';
import '../../assets/css/pages/_contact.scss';

// JS imports
import { commonJS } from '../../javascript/commonJS.js';

const mainContainer = new commonJS();
setupMap();

function setupMap() {
  const loadGoogleMapsApi = require('load-google-maps-api');
  const mapContainer = document.getElementById('map');
  // The location of carter brown law offices
  var officeLoc = {
    lat: 39.044898,
    lng: -122.915438
  };

  // load google maps
  loadGoogleMapsApi({key: 'AIzaSyCkS58fwUabI3HKffisb7dyOGuR3XRmqFo'}).then((googleMaps) => {
    // load map
    const map = new googleMaps.Map(mapContainer, {
      zoom: 16.5,
      center: officeLoc,
      disableDefaultUI: true
    });
    // place marker
    const marker = new googleMaps.Marker({position: officeLoc, map: map});
  }).catch(function (error) {
    console.error(error)
  });
}
