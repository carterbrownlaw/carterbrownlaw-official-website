import '../../assets/css/main.scss';
import '../../assets/css/pages/_about.scss'

// JS imports
// import { StubHelper } from '../../javascript/stubHelper.js';
import { StubHelper } from '../../javascript/stubHelper.js';

let mainContainer = document.getElementsByTagName('main')[0];
let stubber = new StubHelper(mainContainer);
stubber.stub(5);
