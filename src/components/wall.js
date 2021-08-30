import { logOutUser } from '../lib/logInFb.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const wall = () => {
  const wallBody = document.querySelector('body');
  const welcome = document.createElement('p');
  const divWall = document.createElement('div');
  const btnLogOut = document.createElement('button');

  document.body.style.backgroundImage = 'url(../images/deskHome.png)';
  welcome.textContent = 'Haz iniciado sesión';
  btnLogOut.textContent = 'Cerrar sesión';

  btnLogOut.addEventListener('click', () => {
    logOutUser();
    onNavigate('/');
  });

  welcome.setAttribute('id', 'wall');
  wallBody.classList.add('wall-body');
  btnLogOut.classList.add('btn_log_out');

  divWall.appendChild(btnLogOut);
  divWall.appendChild(welcome);

  return divWall;
};
