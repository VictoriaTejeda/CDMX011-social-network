// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../index.js';

export const signUp = () => {
  document.body.style.background = "url('signUp.png')";
  const divSignUp = document.createElement('div');
  const formSignUp = document.createElement('form');
  const br = document.createElement('br');
  const labelEmail = document.createElement('label');
  const labelPassword = document.createElement('label');
  const labelConfirm = document.createElement('label');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const confirmPassword = document.createElement('input');
  const buttonSignup = document.createElement('button');
  const buttonReturn = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  const emailLabel = document.createTextNode('E-mail');
  const passwordLabel = document.createTextNode('Password');
  const confirmLabel = document.createTextNode('Confirm password');

  formSignUp.setAttribute('id', 'signUpForm');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'emailSigUp');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('id', 'idSignUp');
  confirmPassword.setAttribute('type', 'password');
  confirmPassword.setAttribute('id', 'idConfirmSignUp');
  buttonSignup.setAttribute('type', 'submit');
  buttonSignup.setAttribute('id', 'submitSignUp');

  labelEmail.setAttribute('for', 'emailSigUp');
  labelEmail.setAttribute('id', 'signUpEmail');
  labelPassword.setAttribute('for', 'idSignUp');
  labelPassword.setAttribute('id', 'signUpId');
  labelConfirm.setAttribute('for', 'idConfirmSignUp');
  labelConfirm.setAttribute('id', 'signUpConfirmId');

  buttonReturn.classList.add('btn_return');
  buttonGoogle.classList.add('btn_google');

  buttonSignup.textContent = 'Sing Up';
  buttonReturn.textContent = 'Home';
  buttonGoogle.textContent = 'Sign Up with Google';

  buttonReturn.addEventListener('click', () => onNavigate('/'));

  labelEmail.appendChild(emailLabel);
  labelPassword.appendChild(passwordLabel);
  labelConfirm.appendChild(confirmLabel);

  formSignUp.appendChild(labelEmail);
  formSignUp.appendChild(br.cloneNode());
  formSignUp.appendChild(inputEmail);
  formSignUp.appendChild(br.cloneNode());
  formSignUp.appendChild(labelPassword);
  formSignUp.appendChild(br.cloneNode());
  formSignUp.appendChild(inputPassword);
  formSignUp.appendChild(br.cloneNode());
  formSignUp.appendChild(labelConfirm);
  formSignUp.appendChild(br.cloneNode());
  formSignUp.appendChild(confirmPassword);
  formSignUp.appendChild(br.cloneNode());
  formSignUp.appendChild(buttonSignup);
  formSignUp.appendChild(br.cloneNode());
  formSignUp.appendChild(buttonGoogle);

  divSignUp.appendChild(buttonReturn);
  divSignUp.appendChild(formSignUp);

  return divSignUp;
};
