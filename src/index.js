/* eslint-disable import/no-cycle */
import { home } from './components/home.js';
// eslint-disable-next-line import/no-cycle
import { logIn } from './components/logIn.js';
import { signUp } from './components/signUp.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/logIn': logIn,
  '/signUp': signUp,
};

export const onNavigate = (pathname) => {
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

let component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  component = routes[window.location.pathname];
  rootDiv.appendChild(component());
};

rootDiv.appendChild(routes[window.location.pathname]());
