// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

const dbGlobal = firebase.firestore();

// const divCreatePost = document.createElement('div');
// const postForm = divCreatePost.querySelector('#postForm');

const toPost = (title, history) => dbGlobal.collection('stories').doc().set({
  title,
  history,
});

export const CreatePost = () => {
  const divCreatePost = document.createElement('div');
  const postNodes = `
  <div class="curret-User">
    <img id="img-User">
    <p id="idUser">asustame@panteon.com</p>
  </div>
  <form id="postForm">
    <label for="title">Titulo</label>
    <input id="title"><label for="history">Escribe tu historia</label>
    <textarea id="history" rows="22" cols="35"></textarea>
    <button class="btn-post">Publicar</button>
  </form>
`;

  divCreatePost.innerHTML = postNodes;

  divCreatePost.querySelector('.btn-post').addEventListener('click', async (e) => {
    e.preventDefault();
    const postForm = divCreatePost.querySelector('#postForm');

    const title = postForm.title;
    const history = postForm.history;

    await toPost(title.value, history.value);

    postForm.reset();
    title.focus();

    onNavigate('/wall');
  });

  return divCreatePost;
};
