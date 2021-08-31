// eslint-disable-next-line import/no-cycle
import { logOutUser, authStateChanged } from '../lib/utils.js';

const wallBody = document.querySelector('body');
const welcome = document.createElement('p');
const divWall = document.createElement('div');
document.body.style.backgroundImage = 'url(../images/deskHome.png)';
welcome.textContent = 'Favor de iniciar sesión';
welcome.setAttribute('id', 'wall');
wallBody.classList.add('wall-body');

export const wall = () => {
  if (authStateChanged()) {
    divWall.innerHTML = '';
    console.log('estoy logueado desde wall');
    const btnLogOut = document.createElement('button');

    welcome.textContent = 'Haz iniciado sesión';
    btnLogOut.textContent = 'Cerrar sesión';

    btnLogOut.addEventListener('click', () => {
      logOutUser();
    });

    btnLogOut.classList.add('btn_log_out');
    divWall.appendChild(btnLogOut);
  }

  divWall.appendChild(welcome);

  return divWall;
};
