import { inicializar } from './components/utils.js';

export const render = () => {
  const rootDiv = document.createElement('div');
  inicializar();
  return rootDiv;
};
