// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../index.js';

export const home = () => {
  document.body.style.backgroundImage = 'url(../images/home.png)';
  const theBody = document.querySelector('body');
  const sectionHome = document.createElement('section');
  const namePage = document.createElement('h1');
  const slogan = document.createElement('p');
  const containerButton = document.createElement('div');
  const buttonSignUp = document.createElement('button');
  const buttonLogIn = document.createElement('button');

  sectionHome.classList.add('section_home');
  theBody.classList.add('home_body');
  namePage.classList.add('title');
  slogan.classList.add('slogan');
  containerButton.classList.add('container_btn');
  buttonSignUp.classList.add('btn_sign_up');
  buttonLogIn.classList.add('btn_log_in');

  buttonSignUp.textContent = 'Sign Up';
  buttonLogIn.textContent = 'Log In';
  namePage.innerHTML = 'Boo!';
  slogan.innerHTML = 'Aqui se respira el miedo...cuentame tu historia.';

  buttonSignUp.addEventListener('click', () => onNavigate('/signUp'));
  buttonLogIn.addEventListener('click', () => onNavigate('/logIn'));

  sectionHome.appendChild(namePage);
  sectionHome.appendChild(slogan);
  sectionHome.appendChild(containerButton);
  containerButton.appendChild(buttonSignUp);
  containerButton.appendChild(buttonLogIn);

  return sectionHome;
};
