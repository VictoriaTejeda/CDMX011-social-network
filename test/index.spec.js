/**
 * @jest-environment jsdom
 */

import { render } from '../src/component.js';

describe('Coleccion de test sobre el DOM', () => {
  let rootdiv = document.createElement('div');
  rootdiv.setAttribute('id', 'root');
  document.body.appendChild(rootdiv);
  render();
  rootdiv = document.getElementById('root');
  test('Test sobre render', () => {
    console.log(rootdiv.outerHTML);
    const titulo = document.getElementsByClassName('title')[0].textContent;
    console.log(titulo);
    expect(rootdiv.outerHTML).toBe('<div id="root"><div class="section_home"><h1 class="title">Boo!</h1><p class="slogan">Aquí se respira el miedo...cuentame tu historia.</p><div class="container_btn"><button class="btn_sign_up">Regístrate</button><button class="btn_log_in">Inicia sesión</button></div></div></div>');
    expect(titulo).toBe('Boo!');
  });
});
