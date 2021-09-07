/* eslint-disable import/no-cycle */
import { home } from './components/home.js';
import { logIn } from './components/logIn.js';
import { signUp } from './components/signUp.js';
import { wall } from './components/wall.js';
import { CreatePost } from './components/post/CreatePost.js';

const rootDiv = document.getElementById('root');
export const routes = {
  '/': home,
  '/logIn': logIn,
  '/signUp': signUp,
  '/wall': wall,
  '/add': CreatePost,
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
  rootDiv.appendChild(routes[window.location.pathname]());
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    onNavigate('/wall');
    console.log('Toy Logeado');
  } else {
    onNavigate('/');
    console.log('No Logueado');
  }
});

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (!user && ((window.location.pathname !== '/') || (window.location.pathname !== '/signUp') || (window.location.pathname !== '/logIn'))) {
      onNavigate('/');
    }
  });
  rootDiv.appendChild(routes[window.location.pathname]());
};

export const render = () => {
  window.onpopstate();
  // console.log(window.onpopstate());
  return rootDiv;
};
