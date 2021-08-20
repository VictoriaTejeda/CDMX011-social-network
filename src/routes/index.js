/* eslint-disable prefer-const */
import Header from '../templates/header.js';
import home from '../pages/home.js';
import Character from '../pages/Character.js';
import Error404 from '../pages/Error404.js';
import getHash from '../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes.js';

const routes = {
  '/': home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  // eslint-disable-next-line prefer-const
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export default router;
