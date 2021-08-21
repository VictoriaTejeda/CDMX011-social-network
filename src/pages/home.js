// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../index.js';

export const home = () => {
  const divHome = document.createElement('div');
  const buttonSignUp = document.createElement('button');
  buttonSignUp.classList.add('signup');
  const buttonLogIn = document.createElement('button');
  buttonLogIn.classList.add('login');

  buttonSignUp.textContent = 'Sign Up';
  buttonLogIn.textContent = 'Log In';

  buttonSignUp.addEventListener('click', () => onNavigate('/signUp'));
  buttonLogIn.addEventListener('click', () => onNavigate('/logIn'));

  divHome.appendChild(buttonSignUp);
  divHome.appendChild(buttonLogIn);

  return divHome;
};
