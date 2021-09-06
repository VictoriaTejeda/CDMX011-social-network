/* eslint-disable import/no-cycle */
import { logOutUser } from '../lib/utils.js';

export const wall = () => {
  document.body.style.backgroundImage = 'url(../images/post-background.jpeg)';
  const wallBody = document.querySelector('body');
  wallBody.classList.add('wall-body');
  const container = document.createElement('div');
  const header = `
  <header id='headerWall'>
    <nav class='navigation'>
      <span id='Boo!'>Boo!</span>
      <a href='#' class='log_out'>
        <img src='./images/outline_logout_white_24dp.png' alt='logOut'>
      </a>
    </nav>
  </header>
  <section id='publish'>
  <div id=curretUser>
    <img id=imgUser>
    <p id=idUser></p>
  </div>
  <button class= modalPost>Cuéntanos tu aterradora historia</button>
  </section>
  <div class='modal'>
    <span class='close'>&times;</span>
    <form id= 'post'>
      <label for='title'>Título</label>
      <input id='title' type='text'>
      <label for='anecdote'>Historia</label>
      <textarea id='anecdote' maxlength="1000" rows=22 cols=35>Aquí escribe tu historia.</textarea>
      <input type='submit' value='Publicar'>
    </form>
  </div>
`;
  container.innerHTML = header;

  container.querySelector('.log_out').addEventListener('click', (e) => {
    e.preventDefault();
    logOutUser();
  });
  container.querySelector('.modalPost').addEventListener('click', () => {
    container.querySelector('.modal').style.display = 'block';
  });
  container.querySelector('.close').addEventListener('click', () => {
    container.querySelector('.modal').style.display = 'none';
  });

  return container;
};
