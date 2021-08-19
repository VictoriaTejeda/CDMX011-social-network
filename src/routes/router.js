import logIn from '../pages/logIn.js';
import home from '../pages/home.js';
import singUp from '../pages/singUp.js';

const routes = {
  '/': home,
  '/singUp': singUp,
  '/logIn': logIn,
};

const router = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
};

window.onpopstate = () => {
  routes[
    window.location.pathname
  ].template();
};

export default router;
