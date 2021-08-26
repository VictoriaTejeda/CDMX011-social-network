/* eslint-disable import/no-cycle */
import { home } from './components/home.js';
// eslint-disable-next-line import/no-cycle
import { logIn } from './components/logIn.js';
import { signUp } from './components/signUp.js';

// const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/logIn': logIn,
  '/signUp': signUp,
};

export const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root'); // la agregué
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

// let component = routes[window.location.pathname];

window.onpopstate = () => {
  const rootDiv = document.getElementById('root'); // la agregué
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
  // component = routes[window.location.pathname];
  // rootDiv.appendChild(component());
};
// const inicializar = () => {
// };
// rootDiv.appendChild(routes[window.location.pathname]());
export const render = () => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('que_gordos');
  window.onpopstate();
  // inicializar();
  return rootDiv;
};
