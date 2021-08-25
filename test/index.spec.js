/**
 * @jest-environment jsdom
 */

// boton en Login en home
test('test del boton en log in', () => {
  document.body.innerHTML = `
  <div id="root"> <button class="btn_log_in">Inicia sesión</button></div>
  `;
  const btnLogin = document.getElementsByClassName('btn_log_in');
  const divRoot = document.getElementById('root');
  btnLogin.click();
  expect(divRoot.outerHTML).toBe('<section class="div_login"><nav><ul><li><a href="#"><i class="fas fa-home" aria-hidden="true"></i></a></li></ul></nav><h1 class="title_login">Iniciar sesion</h1><form class="sub_contenedor"><label>Correo electronico</label><input type="text"><label>Contraseña</label><input type="password"><button class="btn_login">Iniciar sesion</button><h4 class="tag_or">-o-</h4><button class="btn_google"><div><span>Iniciar sesion con </span><img src="../images/logo_google.png"></div></button></form></section>');
});
