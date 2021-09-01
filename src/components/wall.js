/* eslint-disable import/no-cycle */
import { logOutUser } from '../lib/utils.js';

export const wall = () => {
  document.body.style.backgroundImage = 'url(../images/deskHome.png)';
  const wallBody = document.querySelector('body');
  const divWall = document.createElement('div');
  const welcome = document.createElement('p');
  const btnLogOut = document.createElement('button');

  welcome.textContent = 'Haz iniciado sesión';
  btnLogOut.textContent = 'Cerrar sesión';

  welcome.setAttribute('id', 'wall');
  wallBody.classList.add('wall-body');
  btnLogOut.classList.add('btn_log_out');

  btnLogOut.addEventListener('click', () => {
    logOutUser();
  });

  divWall.appendChild(btnLogOut);
  divWall.appendChild(welcome);

  return divWall;
};
