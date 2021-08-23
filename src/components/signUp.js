// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../index.js';

export const signUp = () => {
  const divSignUp = document.createElement('div');
  const buttonSignup = document.createElement('button');
  buttonSignup.classList.add('btn_signup');
  const buttonReturn = document.createElement('button');
  buttonReturn.classList.add('btn_return');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('btn_google');

  buttonSignup.textContent = 'Sing Up';
  buttonReturn.textContent = 'Home';
  buttonGoogle.textContent = 'Registrate con Google';

  buttonReturn.addEventListener('click', () => onNavigate('/'));

  divSignUp.appendChild(buttonSignup);
  divSignUp.appendChild(buttonReturn);
  divSignUp.appendChild(buttonGoogle);

  return divSignUp;
};
