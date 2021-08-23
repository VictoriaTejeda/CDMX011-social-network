// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../index.js';

export const signUp = () => {
  const theBody = document.querySelector('body');
  const sectionSignUp = document.createElement('section');
  const divForm = document.createElement('div');
  const formSignUp = document.createElement('form');
  const tagNav = document.createElement('nav');
  const tagUl = document.createElement('ul');
  const tagLi = document.createElement('li');
  const tagHrefReturnHome = document.createElement('a');
  const tagI = document.createElement('i');
  const br = document.createElement('br');
  const labelEmail = document.createElement('label');
  const labelPassword = document.createElement('label');
  const labelConfirm = document.createElement('label');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const confirmPassword = document.createElement('input');
  const buttonSignup = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  const emailLabel = document.createTextNode('E-mail');
  const passwordLabel = document.createTextNode('Password');
  const confirmLabel = document.createTextNode('Confirm password');

  tagI.classList.add('fas', 'fa-home');
  tagHrefReturnHome.setAttribute('href', '#');
  theBody.classList.add('signUp-body');
  sectionSignUp.setAttribute('id', 'signSection');
  divForm.setAttribute('id', 'divFormSignUp');
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
    // document.body.style.backgroundImage = 'url(../images/deskop-background.png)';
  });

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

  // sectionSignUp.appendChild(buttonReturn);
  sectionSignUp.appendChild(tagNav);
  sectionSignUp.appendChild(divForm);
  divForm.appendChild(formSignUp);

  return sectionSignUp;
};
