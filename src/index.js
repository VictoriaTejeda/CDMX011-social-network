import home from './pages/home.js';
import singUp from './pages/singUp.js';
import logIn from './pages/logIn.js';
import router from './routes/router.js';

// Inicio de Eventos de los hiperviculos del menu
window.addEventListener('click', () => {
  if (window.location.pathname === '/') {
    home.template();
  }
  if (window.location.pathname === '/logIn') {
    logIn.template();
    // console.log(logIn.template());
  }
  if (window.location.pathname === '/singUp') {
    singUp.template();
  }
});

window.addEventListener('load', () => {
  if (window.location.pathname === '/') {
    home.template();
  }
  if (window.location.pathname === '/logIn') {
    logIn.template();
    // console.log(logIn.template());
  }
  if (window.location.pathname === '/singUp') {
    singUp.template();
  }
});

document.getElementById('logIn').addEventListener('click', (e) => {
  e.preventDefault();
  router('/logIn');
});

document.getElementById('home').addEventListener('click', (e) => {
  e.preventDefault();
  router('/');
});

document.getElementById('singUp').addEventListener('click', (e) => {
  e.preventDefault();
  router('/singUp');
});
// Fin de eventos de los hipervinculos del menu
