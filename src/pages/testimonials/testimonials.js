import '../../assets/css/main.scss';
import '../../assets/css/pages/_testimonials.scss';

// JS imports
import { commonJS } from '../../javascript/commonJS.js';

const mainContainer = new commonJS();

// load all testimonials
const testimonialsContext = require.context('../../assets/content/testimonials/', true, /\.json$/);
const testimonialFiles = testimonialsContext.keys().map((filename) => testimonialsContext(filename));

const testiContainer = document.getElementById('testimonial-container');
testimonialFiles.forEach((t) => {
  testiContainer.appendChild(createTestimonial(t));
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

