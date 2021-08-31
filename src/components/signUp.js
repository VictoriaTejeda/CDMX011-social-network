/* eslint-disable import/no-cycle */
import { fireBaseSignUp } from '../lib/signUpFb.js';
import { onNavigate } from '../main.js';

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
  const allReadyLogIn = document.createElement('p');
  const redirectLogIn = document.createElement('a');
  const LogIn = document.createElement('i');
  /* const btnGoogleSignUp = document.createElement('button');
  const imgGoogle = document.createElement('IMG');
  const btnGitSignUp = document.createElement('button');
  const imgGit = document.createElement('IMG'); */

  const passwordLabel = document.createTextNode('Contraseña');
  const confirmLabel = document.createTextNode('Confirmar contraseña');
  const emailLabel = document.createTextNode('Correo electrónico');

  tagHrefReturnHome.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });
  redirectLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/logIn');
  });

  buttonSignup.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailSigUp').value;
    const password = document.getElementById('idSignUp').value;
    fireBaseSignUp(email, password);
  });

  signUpTitle.classList.add('title_signup');
  theBody.classList.add('signUp-body');
  tagI.classList.add('fas', 'fa-home');
  allReadyLogIn.classList.add('logIn-redirect');

  tagHrefReturnHome.setAttribute('href', '#');
  tagNav.setAttribute('id', 'signUpNav');
  redirectLogIn.setAttribute('href', '#');

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
  /* btnGoogleSignUp.setAttribute('id', 'btnGoogle');
  imgGoogle.setAttribute('src', '../images/logo_google.png');
  btnGitSignUp.setAttribute('id', 'btnGit');
  imgGit.setAttribute('src', '../images/github.png'); */

  labelEmail.setAttribute('for', 'emailSigUp');
  labelPassword.setAttribute('for', 'idSignUp');
  labelConfirm.setAttribute('for', 'idConfirmSignUp');

  signUpTitle.textContent = 'Regístrate';
  buttonSignup.textContent = 'Regístrate';
  LogIn.textContent = 'Inicia sesión';
  allReadyLogIn.textContent = '¿Ya eres miembro? ';
  /* btnGoogleSignUp.textContent = 'Regístrate con';
  btnGitSignUp.textContent = 'Regístrate con'; */

  labelEmail.appendChild(emailLabel);
  labelPassword.appendChild(passwordLabel);
  labelConfirm.appendChild(confirmLabel);

  tagNav.appendChild(tagUl);
  tagUl.appendChild(tagLi);
  tagLi.appendChild(tagHrefReturnHome);
  tagHrefReturnHome.appendChild(tagI);
  allReadyLogIn.appendChild(redirectLogIn);
  redirectLogIn.appendChild(LogIn);

  formSignUp.appendChild(labelEmail);
  formSignUp.appendChild(inputEmail);
  formSignUp.appendChild(labelPassword);
  formSignUp.appendChild(inputPassword);
  formSignUp.appendChild(labelConfirm);
  formSignUp.appendChild(confirmPassword);
  formSignUp.appendChild(buttonSignup);
  formSignUp.appendChild(allReadyLogIn);
  /* formSignUp.appendChild(btnGoogleSignUp);
  formSignUp.appendChild(btnGitSignUp);

  btnGoogleSignUp.appendChild(imgGoogle);
  btnGitSignUp.appendChild(imgGit); */

  sectionSignUp.appendChild(tagNav);
  sectionSignUp.appendChild(signUpTitle);
  sectionSignUp.appendChild(formSignUp);

  return sectionSignUp;
};
