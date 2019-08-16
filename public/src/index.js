import App from './components/app/App.js';

const wrapper = document.getElementById('wrapper');
const app = new App();

const dom = app.renderDOM();

wrapper.appendChild(dom);