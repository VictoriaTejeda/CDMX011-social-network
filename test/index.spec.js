/*
 * @jest-environment jsdom
*/
import { home } from '../src/components/home';

describe('Coleccion de test sobre el DOM', () => {
  let rootdiv = document.createElement('div');
  rootdiv.setAttribute('id', 'root');
  document.body.appendChild(rootdiv);
  home();
  rootdiv = document.getElementById('root');
  const divEsperado = document.createElement('div');
  divEsperado.innerHTML = `
<div class="section_home"><h1 class="title">Boo!</h1><p class="slogan">Aquí se respira el miedo...cuentame tu historia.</p><div class="container_btn"><button class="btn_sign_up">Regístrate</button><button class="btn_log_in">Inicia sesión</button></div></div>
`;
  test('Test sobre render', () => {
    console.log(rootdiv.outerHTML);
    expect(rootdiv.outerHTML).toBe(divEsperado.outerHTML);
  });
});
