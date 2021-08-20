import router from './routes/router.js';

// Inicio de Eventos de los hiperviculos del menu

document.addEventListener('click', (e) => {
  if (e.target.getAttribute('id') === 'back') {
    router('/');
  } else if (e.target.getAttribute('id') === 'singUp') {
    router('/singUp');
  } else if (e.target.getAttribute('id') === 'logIn') {
    router('/logIn');
  }
});

// Fin de eventos de los hipervinculos del menu
