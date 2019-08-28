// FILE PURPOSE: contains common functionality between all pages
import { StubHelper } from './stubHelper.js';
import { adjustHeight } from './helpers.js';

export class commonJS {
  constructor() {
    this.mainContainer = document.getElementsByTagName('main')[0];
    
    this.setupNav()

    // here during development
    let stubber = new StubHelper(this.mainContainer);
    stubber.stub(5);
    return this.mainContainer;
  }

  setupNav() {
    // menu js probably needs to be global
    const navBtn = document.getElementById('nav-btn');
    const navItemsWrap = document.getElementById('nav-items-wrap');
    const height = document.getElementById('nav-items').clientHeight

    adjustHeight(navItemsWrap, 0);

    // function that expands the navbar
    navBtn.addEventListener('click', () => {
      // animate the burger
      if (navBtn.classList.contains('active')) {
        navBtn.classList.remove('active');
      }
      else {
        navBtn.classList.add('active');
      }

      // collapse items
      if (navItemsWrap.classList.contains('items-closed')) {
        adjustHeight(navItemsWrap, height);
        navItemsWrap.classList.remove('items-closed');
      }
      else {
        navItemsWrap.classList.add('items-closed');
        adjustHeight(navItemsWrap, 0);
      }
    });
  }
}
