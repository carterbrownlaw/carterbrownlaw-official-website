import '../../assets/css/main.scss';
import '../../assets/css/pages/_about.scss'

// JS imports
// import { StubHelper } from '../../javascript/stubHelper.js';
import { StubHelper } from '../../javascript/stubHelper.js';

// menu js probably needs to be global
const navBtn = document.getElementById('nav-btn');
const navItems = document.getElementById('nav-items');
navBtn.addEventListener('click', () => {
  if (navBtn.classList.contains('active')) {
    navBtn.classList.remove('active');
    navItems.classList.remove('items-active');
    navItems.classList.add('items-hidden');
  }
  else {
    navBtn.classList.add('active');
    navItems.classList.remove('items-hidden');
    navItems.classList.add('items-active');
  }
});

console.log(navItems);
let mainContainer = document.getElementsByTagName('main')[0];
let stubber = new StubHelper(mainContainer);
stubber.stub(5);
