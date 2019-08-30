// FILE PURPOSE: contains common functionality between all pages
import { adjustHeight } from './helpers.js';

export class commonJS {
  constructor() {
    this.mainContainer = document.getElementsByTagName('main')[0];
    this.activePage = this.mainContainer.id;
    
    this.setupNav()

    return this.mainContainer;
  }

  setupNav() {
    const navBtn = document.getElementById('nav-btn');
    const navItemsWrap = document.getElementById('nav-items-wrap');
    const height = document.getElementById('nav-items').clientHeight

    // visual selection of nav-item
    const activeNavItem = document.getElementById(`nav-item-${this.activePage}`);
    activeNavItem.style.borderBottom = '2px solid rgba(198, 172, 143, 1)';

    // collapse the navbar items
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
