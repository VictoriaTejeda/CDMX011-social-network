// eslint-disable-next-line import/no-cycle
import { logOutUser } from '../lib/utils.js';

const wallBody = document.querySelector('body');
const welcome = document.createElement('p');
const divWall = document.createElement('div');
document.body.style.backgroundImage = 'url(../images/deskHome.png)';
welcome.textContent = 'Favor de iniciar sesión';
welcome.setAttribute('id', 'wall');
wallBody.classList.add('wall-body');

export const wall = () => {
  console.log('entro a wall');

  divWall.appendChild(welcome);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('logueado desde authStateChanged');
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
    } else {
      console.log('no logueado desde authStateChanged');
    }
  });

  return divWall;
};
