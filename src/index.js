import { render } from './main.js';
import { fireBase } from './lib/firebase.js';

document.getElementById('root').appendChild(render());
fireBase();
