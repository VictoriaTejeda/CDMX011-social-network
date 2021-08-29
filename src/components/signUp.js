/* eslint-disable import/no-cycle */
import { githubSignin } from '../lib/Auth-GitHub.js';
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
  const o = document.createElement('p');
  const btnGoogleSignUp = document.createElement('button');
  const imgGoogle = document.createElement('IMG');
  const btnGitSignUp = document.createElement('button');
  const imgGit = document.createElement('IMG');

  const passwordLabel = document.createTextNode('Contraseña');
  const confirmLabel = document.createTextNode('Confirmar contraseña');
  const emailLabel = document.createTextNode('Correo electrónico');

  tagHrefReturnHome.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
    // ;
  });
  btnGitSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    githubSignin();
  });

  theBody.classList.add('signUp-body');
  tagI.classList.add('fas', 'fa-home');
  signUpTitle.classList.add('title_signup');

  tagHrefReturnHome.setAttribute('href', '#');
  tagNav.setAttribute('id', 'signUpNav');

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
  btnGitSignUp.setAttribute('id', 'btnGit');
  imgGit.setAttribute('src', '../images/github.png');

  labelEmail.setAttribute('for', 'emailSigUp');
  labelPassword.setAttribute('for', 'idSignUp');
  labelConfirm.setAttribute('for', 'idConfirmSignUp');

  signUpTitle.textContent = 'Regístrate';
  buttonSignup.textContent = 'Regístrate';
  o.textContent = '-- o --';
  btnGoogleSignUp.textContent = 'Regístrate con';
  btnGitSignUp.textContent = 'Regístrate con';

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
  formSignUp.appendChild(btnGitSignUp);

  btnGoogleSignUp.appendChild(imgGoogle);
  btnGitSignUp.appendChild(imgGit);

  sectionSignUp.appendChild(tagNav);
  sectionSignUp.appendChild(signUpTitle);
  sectionSignUp.appendChild(formSignUp);

  return sectionSignUp;
};
