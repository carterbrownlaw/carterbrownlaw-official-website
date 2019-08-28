import '../../assets/css/main.scss';
import '../../assets/css/pages/_index.scss';
import testImage from '../../assets/images/anchaya-F9ZPfbxCZT0-unsplash.jpg';

// JS imports
import { commonJS } from '../../javascript/commonJS.js';

const mainContainer = new commonJS;


function helloWorld() {
  const el = document.createElement('div');
  el.innerHTML = 'Hello World';
  return el;
}

function helloWorldImage() {
  const img = new Image();
  img.src = testImage;
  return img;
}

class testClass {
  constructor() {
    this.testValue = 'HelloClassWorld!'
  }

  printSomething() {
    const el = document.createElement('div');
    el.innerHTML = this.testValue;
    return el;
  }
}

mainContainer.appendChild(helloWorld());
const testingClasses = new testClass;
mainContainer.appendChild(testingClasses.printSomething());
// document.body.appendChild(helloWorldImage());
