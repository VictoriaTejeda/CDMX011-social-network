/* eslint-disable import/no-cycle */
import { home } from './home.js';
// eslint-disable-next-line import/no-cycle
import { logIn } from './logIn.js';
import { signUp } from './signUp.js';

const routes = {
  '/': home,
  '/logIn': logIn,
  '/signUp': signUp,
};

export const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root');
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

window.onpopstate = () => {
  // eslint-disable-next-line no-console
  const rootDiv = document.getElementById('root');
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

export const inicializar = () => {
  window.onpopstate();
};
