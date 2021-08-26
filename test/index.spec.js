/*
 * @jest-environment jsdom
*/
import { render } from '../src/index.js';

describe('Coleccion de test sobre el DOM', () => {
  let divRoot = document.createElement('div');
  divRoot.setAttribute('id', 'root');
  document.body.appendChild(divRoot);
  render();
  divRoot = document.getElementById('root');
  test('Test sobre render', () => {
    const titulo = document.getElementsByClassName('title')[0].textContent;
    console.log(titulo);
    expect(titulo).toBe('Boo!');
  });
});
