import '../../../node_modules/tiny-slider/src/tiny-slider.scss';
import '../../assets/css/main.scss';
import '../../assets/css/pages/_index.scss';

// JS imports
import { importTestimonials } from '../../javascript/helpers.js';
import { commonJS } from '../../javascript/commonJS.js';
import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider.js';

const mainContainer = new commonJS();

const testimonialFiles = importTestimonials();
const testiContainer = document.getElementById('testimonials-container');
const numTestimonials = testimonialFiles.length;

// testimonialFiles.forEach((t) => {
//   testiContainer.appendChild(createTestimonial(t));
// });
for (let i = 0; i < numTestimonials; i++) {
  testiContainer.appendChild(createTestimonial(testimonialFiles[i]));
}


const slider = tns({
  // container: '#testimonials-container',
  container: testiContainer,
  items: 1,
  slideBy: 'page',
  autoplay: true,
  speed: 400,
  controls: false,
  navPosition: 'bottom',
  mouseDrag: true,
  autoplayButtonOutput: false
});

function createTestimonial(t) {
  // create elements
  const tElement = document.createElement('div');
  const tText = document.createElement('p');
  const tAuthor = document.createElement('p');
  
  // add styles
  tElement.classList.add('testimonial');
  tAuthor.classList.add('testimonial-author');

  // add content
  tText.innerHTML = t.text;
  tAuthor.innerHTML = '~ ' + t.author;
  
  // append things
  tElement.appendChild(tText);
  tElement.appendChild(tAuthor);

  return tElement;
}
