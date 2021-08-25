// eslint-disable-next-line import/no-cycle
import { onNavigate } from './utils.js';

export const signUp = () => {
  document.body.style.backgroundImage = 'url(../images/signUp.png)';
  const theBody = document.querySelector('body');
  const tagNav = document.createElement('nav');
  const tagUl = document.createElement('ul');
  const tagLi = document.createElement('li');
  const tagHrefReturnHome = document.createElement('a');
  const tagI = document.createElement('i');
  const signUpTitle = document.createElement('h1');
  const sectionSignUp = document.createElement('section');
  const formSignUp = document.createElement('form');
  const labelEmail = document.createElement('label');
  const labelPassword = document.createElement('label');
  const labelConfirm = document.createElement('label');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const confirmPassword = document.createElement('input');
  const buttonSignup = document.createElement('button');
  const o = document.createElement('p');
  const btnGoogleSignUp = document.createElement('button');
  const imgGoogle = document.createElement('IMG');

  const passwordLabel = document.createTextNode('Contraseña');
  const confirmLabel = document.createTextNode('Confirmar contraseña');
  const emailLabel = document.createTextNode('Correo electrónico');

  theBody.classList.add('signUp-body');
  tagI.classList.add('fas', 'fa-home');
  signUpTitle.classList.add('title_signup');

  tagHrefReturnHome.setAttribute('href', '#');
  tagNav.setAttribute('id', 'signUpNav');
  tagUl.setAttribute('id', 'signUpUl');
  tagLi.setAttribute('id', 'signUpLi');

  sectionSignUp.setAttribute('id', 'signUpSection');
  formSignUp.setAttribute('id', 'signUpForm');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'emailSigUp');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('id', 'idSignUp');
  confirmPassword.setAttribute('type', 'password');
  confirmPassword.setAttribute('id', 'idConfirmSignUp');
  buttonSignup.setAttribute('type', 'submit');
  buttonSignup.setAttribute('id', 'submitSignUp');
  o.setAttribute('id', 'o');
  btnGoogleSignUp.setAttribute('id', 'btnGoogle');
  imgGoogle.setAttribute('src', '../images/logo_google.png');

  labelEmail.setAttribute('for', 'emailSigUp');
  labelEmail.setAttribute('id', 'signUpEmail');
  labelPassword.setAttribute('for', 'idSignUp');
  labelPassword.setAttribute('id', 'signUpId');
  labelConfirm.setAttribute('for', 'idConfirmSignUp');
  labelConfirm.setAttribute('id', 'signUpConfirmId');

  tagHrefReturnHome.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
    // ;
  });

  signUpTitle.textContent = 'Regístrate';
  buttonSignup.textContent = 'Regístrate';
  o.textContent = '-- o --';
  btnGoogleSignUp.textContent = 'Regístrate con Google';

  labelEmail.appendChild(emailLabel);
  labelPassword.appendChild(passwordLabel);
  labelConfirm.appendChild(confirmLabel);

  tagNav.appendChild(tagUl);
  tagUl.appendChild(tagLi);
  tagLi.appendChild(tagHrefReturnHome);
  tagHrefReturnHome.appendChild(tagI);

  formSignUp.appendChild(labelEmail);
  formSignUp.appendChild(inputEmail);
  formSignUp.appendChild(labelPassword);
  formSignUp.appendChild(inputPassword);
  formSignUp.appendChild(labelConfirm);
  formSignUp.appendChild(confirmPassword);
  formSignUp.appendChild(buttonSignup);
  formSignUp.appendChild(o);
  formSignUp.appendChild(btnGoogleSignUp);

  btnGoogleSignUp.appendChild(imgGoogle);

  sectionSignUp.appendChild(tagNav);
  sectionSignUp.appendChild(signUpTitle);
  sectionSignUp.appendChild(formSignUp);

  return sectionSignUp;
};
