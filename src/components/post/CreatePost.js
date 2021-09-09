// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

const dbGlobal = firebase.firestore();

const toPost = (title, history) => dbGlobal.collection('stories').doc().set({
  title,
  history,
});

export const CreatePost = () => {
  const divCreatePost = document.createElement('div');
  const postNodes = `
  <div class="curret-User">
    <img id="img-User">
    <p id="idUser"></p>
  </div>
  <div class="emptyPost"></div>
  <form id="postForm">
    <label for="title">Título</label>
    <input id="title"><label for="history">Cuenta tu historia</label>
    <textarea id="history" rows="22" cols="35" placeholder="Escribe sin límite"></textarea>
    <button class="btn-post">Publicar</button>
  </form>
`;

  divCreatePost.innerHTML = postNodes;

  divCreatePost.querySelector('.btn-post').addEventListener('click', async (e) => {
    e.preventDefault();
    const postForm = divCreatePost.querySelector('#postForm');

    const title = postForm.title;
    const history = postForm.history;
    if (title.value === '' || history.value === '') {
      divCreatePost.querySelector('.emptyPost').innerHTML = 'escribe algo';
    } else {
      await toPost(title.value, history.value);
      postForm.reset();
      title.focus();
      onNavigate('/wall');
    }
  });

  return divCreatePost;
};
