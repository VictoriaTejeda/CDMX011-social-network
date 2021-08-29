/* eslint-disable import/no-cycle */
import { home } from './components/home.js';
// eslint-disable-next-line import/no-cycle
import { logIn } from './components/logIn.js';
import { signUp } from './components/signUp.js';

export const routes = {
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
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.onpopstate = () => {
  const rootDiv = document.getElementById('root');
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

export const render = () => {
  const rootDiv = document.createElement('div');
  window.onpopstate();
  // console.log(window.onpopstate());
  return rootDiv;
};
