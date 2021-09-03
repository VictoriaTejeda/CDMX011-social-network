/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { logOutUser } from '../lib/utils.js';

export const home = () => {
  document.body.style.backgroundImage = 'url(../images/home.png)';
  const theBody = document.querySelector('body');
  const divHome = document.createElement('div');
  const namePage = document.createElement('h1');
  const slogan = document.createElement('p');
  const containerButton = document.createElement('div');
  const buttonSignUp = document.createElement('button');
  const buttonLogIn = document.createElement('button');
  const buttonLogOut = document.createElement('button');

  divHome.classList.add('section_home');
  theBody.classList.add('home_body');
  namePage.classList.add('title');
  slogan.classList.add('slogan');
  containerButton.classList.add('container_btn');
  buttonSignUp.classList.add('btn_sign_up');
  buttonLogIn.classList.add('btn_log_in');
  buttonLogOut.classList.add('btn_log_in');

  buttonSignUp.textContent = 'Regístrate';
  buttonLogIn.textContent = 'Inicia sesión';
  buttonLogOut.textContent = 'Cerrar sesión';
  namePage.innerHTML = 'Boo!';
  slogan.innerHTML = 'Aquí se respira el miedo...cuentame tu historia.';

  buttonLogOut.addEventListener('click', () => {
    logOutUser();
  });
  buttonSignUp.addEventListener('click', () => onNavigate('/signUp'));
  buttonLogIn.addEventListener('click', () => onNavigate('/logIn'));

  divHome.appendChild(namePage);
  divHome.appendChild(slogan);
  divHome.appendChild(containerButton);
  containerButton.appendChild(buttonSignUp);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      containerButton.appendChild(buttonLogOut);
    } else {
      containerButton.appendChild(buttonLogIn);
    }
  });

  return divHome;
};
