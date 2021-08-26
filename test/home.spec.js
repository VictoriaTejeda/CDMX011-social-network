/**
 * @jest-environment jsdom
 */

import { render } from '../src/main.js';

describe('Coleccion de test sobre el DOM de home', () => {
  let rootdiv = document.createElement('div');
  rootdiv.setAttribute('id', 'root');
  document.body.appendChild(rootdiv);
  render();
  rootdiv = document.getElementById('root');
  test('Test sobre title', () => {
    const titulo = document.getElementsByClassName('title')[0].textContent;
    expect(titulo).toBe('Boo!');
  });

  test('Test sobre slogan', () => {
    const slogan = document.getElementsByClassName('slogan')[0].textContent;
    expect(slogan).toBe('Aquí se respira el miedo...cuentame tu historia.');
  });

  test('Test sobre buttons', () => {
    const divButtons = document.querySelector('.container_btn');
    expect(divButtons.outerHTML).toBe('<div class="container_btn"><button class="btn_sign_up">Regístrate</button><button class="btn_log_in">Inicia sesión</button></div>');
  });
});
