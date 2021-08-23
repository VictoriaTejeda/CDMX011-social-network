// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../index.js';

export const logIn = () => {
  const divLogIn = document.createElement('div');
  const buttonLogIn = document.createElement('button');
  buttonLogIn.classList.add('btn_login');
  const buttonReturn = document.createElement('button');
  buttonReturn.classList.add('btn_return');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('btn_google');

  buttonGoogle.textContent = 'Google';
  buttonReturn.textContent = 'Home';
  buttonLogIn.textContent = 'Log in';

  // buttonGoogle.addEventListener('click', () => onNavigate('/Signup'));FALTA RUTA DE BOTON GOOGLE
  buttonReturn.addEventListener('click', () => onNavigate('/'));

  divLogIn.appendChild(buttonLogIn);
  divLogIn.appendChild(buttonReturn);
  divLogIn.appendChild(buttonGoogle);

  return divLogIn;
};
