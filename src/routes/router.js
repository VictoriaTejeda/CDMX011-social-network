import Header from '../templates/Header.js';
import singUp from '../pages/singUp.js';
import logIn from '../pages/logIn.js';
import home from '../pages/home.js';

const routes = {
  '/': home(),
  '/singup': singUp(),
  '/login': logIn(),
};
// Se inyecta una vista por default al cargar la  pagina
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const router = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  console.log('soy pathname' + pathname);
  console.log('soy window' + window.location.origin + pathname);
  // Inyectar vista
  rootDiv.innerHTML = routes[pathname];
};

// Inyectar Template La diferencia en tre vista y template es que el template
// Se carga la primera vez y no cambia y la vista puede cargar se varias veces
// Incluso cambiar de una vista a otra en pocas palabras la vista es mas dinamica
const headerTemplate = null || document.getElementById('header');
headerTemplate.innerHTML = Header();

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

export default router;
