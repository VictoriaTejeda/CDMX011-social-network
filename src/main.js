// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import router from './routes/index.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
myFunction();
