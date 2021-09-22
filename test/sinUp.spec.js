/**
 * @jest-environment jsdom
 */
import './globals/fibase.js';
import { render } from '../src/main.js';

describe('Clic en el boton signUp', () => {
  let rootdiv = document.createElement('div');
  rootdiv.setAttribute('id', 'root');
  document.body.appendChild(rootdiv);
  render();
  document.querySelector('.btn_sign_up').click();
  rootdiv = document.getElementById('root');
  test('Test sobre sign up', () => {
    const titulo = document.getElementsByClassName('title_signup')[0].textContent;
    expect(titulo).toBe('Regístrate');
  });
});
