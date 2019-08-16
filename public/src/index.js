import App from './components/app/App.js';

const body = document.getElementById('root');
const app = new App();

const dom = app.renderDOM();

body.appendChild(dom);