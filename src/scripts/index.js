import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
 
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});
 
window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});

// import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
// import '../styles/style.css';
// import '../styles/responsive.css';
// console.log("Selamat Pagi");


// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// menu.addEventListener('click', function (event) {
//     drawer.classList.toggle('open');
//     event.stopPropagation();
// });

// hero.addEventListener('click', function () {
//     drawer.classList.remove('open');
// });

// main.addEventListener('click', function () {
//     drawer.classList.remove('open');
// });

// window.addEventListener('hashchange', () => {
//   app.renderPage();
// });
 
// window.addEventListener('load', () => {
//   app.renderPage();
// });
