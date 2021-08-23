// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../index.js';

export const logIn = () => {
  const divLogIn = document.createElement('section');
  divLogIn.classList.add('div_login');
  const tagNav = document.createElement('nav');
  const tagUl = document.createElement('ul');
  const tagLi = document.createElement('li');
  const tagHrefReturnHome = document.createElement('a');
  tagHrefReturnHome.setAttribute('href', '#');
  const tagI = document.createElement('i');
  tagI.classList.add('fas', 'fa-home');
  const tagTitle = document.createElement('h1');
  tagTitle.classList.add('title_login');
  const subDiv = document.createElement('div');
  subDiv.classList.add('sub_contenedor');
  const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  const labelPassword = document.createElement('label');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  const buttonLogIn = document.createElement('button');
  buttonLogIn.classList.add('btn_login');
  const buttonReturn = document.createElement('button');
  buttonReturn.classList.add('btn_return');
  const tagOr = document.createElement('h4');
  tagOr.classList.add('tag_or');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('btn_google');
  const divLoginGoogle = document.createElement('div');
  const spanDivLoginGoogle =  document.createElement('span');
  const imagenButton = document.createElement('img');
  imagenButton.setAttribute('src', '../images/logo_google.png');

  tagTitle.textContent = 'Log in';
  labelEmail.textContent = 'E-mail';
  labelPassword.textContent = 'Password';
  buttonReturn.textContent = 'Home';
  buttonLogIn.textContent = 'Log in';
  tagOr.textContent = '-or-';
  spanDivLoginGoogle.textContent = 'Log in  with ';

  // buttonGoogle.addEventListener('click', () => onNavigate('/Signup'));FALTA RUTA DE BOTON GOOGLE
  tagHrefReturnHome.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
    document.body.style.backgroundImage = 'url(../images/deskop-background.png)';
  });

  divLogIn.appendChild(tagNav);
  tagNav.appendChild(tagUl);
  tagUl.appendChild(tagLi);
  tagLi.appendChild(tagHrefReturnHome);
  tagHrefReturnHome.appendChild(tagI);
  // divLogIn.appendChild(returnHome);
  divLogIn.appendChild(tagTitle);
  divLogIn.appendChild(subDiv);
  subDiv.appendChild(labelEmail);
  subDiv.appendChild(inputEmail);
  subDiv.appendChild(labelPassword);
  subDiv.appendChild(inputPassword);
  subDiv.appendChild(buttonLogIn);
  // subDiv.appendChild(buttonReturn);
  subDiv.appendChild(tagOr);
  subDiv.appendChild(buttonGoogle);
  buttonGoogle.appendChild(divLoginGoogle);
  divLoginGoogle.appendChild(spanDivLoginGoogle);
  divLoginGoogle.appendChild(imagenButton);
  document.body.style.backgroundImage = 'url(../images/fondo_secodpage.jpg)';

  return divLogIn;
};
