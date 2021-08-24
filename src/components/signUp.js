// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../index.js';

export const signUp = () => {
  document.body.style.backgroundImage = 'url(../images/signUp.png)';
  const theBody = document.querySelector('body');
  const sectionSignUp = document.createElement('section');
  const signUpTitle = document.createElement('h1');
  // const divForm = document.createElement('div');
  const formSignUp = document.createElement('form');
  const tagNav = document.createElement('nav');
  const tagUl = document.createElement('ul');
  const tagLi = document.createElement('li');
  const tagHrefReturnHome = document.createElement('a');
  const tagI = document.createElement('i');
  const labelEmail = document.createElement('label');
  const labelPassword = document.createElement('label');
  const labelConfirm = document.createElement('label');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const confirmPassword = document.createElement('input');
  const buttonSignup = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  // const divContainerMedal = document.createElement("div");
  // let img = document.createElement("IMG");
  const emailLabel = document.createTextNode('E-mail');
  const passwordLabel = document.createTextNode('Password');
  const confirmLabel = document.createTextNode('Confirm password');

  tagI.classList.add('fas', 'fa-home');
  signUpTitle.classList.add('title_signup');
  tagHrefReturnHome.setAttribute('href', '#');
  tagNav.setAttribute('id', 'signUpNav');
  tagUl.setAttribute('id', 'signUpUl');
  tagLi.setAttribute('id', 'signUpLi');
  theBody.classList.add('signUp-body');
  sectionSignUp.setAttribute('id', 'signUpSection');
  // divForm.setAttribute('id', 'divFormSignUp');
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

  tagHrefReturnHome.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
    // ;
  });

  signUpTitle.textContent = 'Sign Up';
  buttonGoogle.classList.add('btn_google');

  buttonSignup.textContent = 'Sing Up';
  // buttonReturn.textContent = 'Home';
  buttonGoogle.textContent = 'Sign Up with Google';

  // buttonReturn.addEventListener('click', () => onNavigate('/'));

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
  formSignUp.appendChild(buttonGoogle);

  // sectionSignUp.appendChild(buttonReturn);
  sectionSignUp.appendChild(tagNav);
  sectionSignUp.appendChild(signUpTitle);
  sectionSignUp.appendChild(formSignUp);
  // divForm.appendChild(formSignUp);

  return sectionSignUp;
};
