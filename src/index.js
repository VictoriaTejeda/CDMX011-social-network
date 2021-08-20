import router from './routes/router.js';

// Inicio de Eventos de los hiperviculos del menu

document.addEventListener('click', (e) => {
  if (e.target.getAttribute('id') === 'back') {
    router('/');
  } else if (e.target.getAttribute('id') === 'singup') {
    router('/singup');
  } else if (e.target.getAttribute('id') === 'login') {
    router('/login');
  }
});
// Fin de eventos de los hipervinculos del menu
