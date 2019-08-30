export function adjustHeight(element, height) {
  element.style.height = `${height}px`;
}

export function importTestimonials() {
  const testimonialsContext = require.context('../assets/content/testimonials/', true, /\.json$/);
  const testimonialFiles = testimonialsContext.keys().map((filename) => testimonialsContext(filename));
  return testimonialFiles;
}
