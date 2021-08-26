/**
 * @jest-environment jsdom
 */

import { render } from '../src/index.js';

describe('Coleccion de test sobre el DOM de home', () => {
  let rootdiv = document.createElement('div');
  rootdiv.setAttribute('id', 'root');
  document.body.appendChild(rootdiv);
  render();
  rootdiv = document.getElementById('root');
  test('Test sobre title', () => {
    const titulo = document.getElementsByClassName('title')[0].textContent;
    // console.log(titulo, slogan);
    expect(titulo).toBe('Boo!');
  });

  test('Test sobre slogan', () => {
    const slogan = document.getElementsByClassName('slogan')[0].textContent;
    // console.log(titulo, slogan);
    expect(slogan).toBe('Aquí se respira el miedo...cuentame tu historia.');
  });

  test('Test sobre buttons', () => {
    const divButtons = document.querySelector('.container_btn');
    // console.log(divButtons.outerHTML);
    expect(divButtons.outerHTML).toBe('<div class="container_btn"><button class="btn_sign_up">Regístrate</button><button class="btn_log_in">Inicia sesión</button></div>');
  });
});

describe('Coleccion de test sobre el DOM de signUp', () => {
  let rootdiv = document.createElement('div');
  rootdiv.setAttribute('id', 'root');
  document.body.appendChild(rootdiv);
  render('/signUp');
  rootdiv = document.getElementById('root');
  test('Test sobre title', () => {
    const titulo = document.getElementsByClassName('title_signup')[0].textContent;
    console.log(titulo);
    // console.log(titulo, slogan);
    expect(titulo).toBe('Regístrate');
  });
});
