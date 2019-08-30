export class StubHelper {
  constructor(parent) {
    this.parent = parent;
  }
  
  stub(n) {
    for (let i = 0; i < n; i++) {
      let div = document.createElement('div');
      div.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      div.style.margin = '1em';
      this.parent.appendChild(div);
    }
  }
}
