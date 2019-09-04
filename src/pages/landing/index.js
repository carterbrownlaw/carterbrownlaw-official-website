import '../../../node_modules/tiny-slider/src/tiny-slider.scss';
import '../../assets/css/main.scss';
import '../../assets/css/pages/_index.scss';

// JS imports
import { commonJS } from '../../javascript/commonJS.js';
import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider.js';

const mainContainer = new commonJS();
const testimonials = require('../../assets/content/testimonials/index.json');
const testiContainer = document.getElementById('testimonials-container');

testimonials.all.forEach((t) => {
  testiContainer.appendChild(createTestimonial(t));
});

const slider = tns({
  container: testiContainer,
  items: 1,
  slideBy: 'page',
  autoplay: true,
  speed: 600,
  controls: false,
  navPosition: 'bottom',
  mouseDrag: true,
  gutter: 10,
  autoplayButtonOutput: false
});

function createTestimonial(t) {
  // create elements
  const tWrap = document.createElement('div');
  const tElement = document.createElement('div');
  const tText = document.createElement('p');
  const tAuthor = document.createElement('p');
  
  // add styles
  tWrap.classList.add('t-wrap');
  tElement.classList.add('testimonial');
  tText.classList.add('testimonial-text');
  tAuthor.classList.add('testimonial-author');

  // add content
  tText.innerHTML = t.text;
  tAuthor.innerHTML = '~ ' + t.author;
  
  // append things
  tElement.appendChild(tText);
  tElement.appendChild(tAuthor);
  tWrap.appendChild(tElement);

  return tWrap;
}
