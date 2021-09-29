// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

const dbGlobal = firebase.firestore();
let usuario = '';
const userFb = () => firebase.auth().currentUser;

const toPost = (title, history, email) => {
  const saveUser = userFb();
  dbGlobal.collection('stories').doc().set({
    title,
    history,
    email,
    uid: [
      saveUser.email,
      saveUser.uid,
    ],
    likes: [],
    fecha: new Date(),
  });
};

export const CreatePost = () => {
  const divCreatePost = document.createElement('div');
  const crtUser = userFb();
  const avatar = './images/avatarBoo.png';
  const postNodes = `
  <nav class= "return">
    <a class="btn-return">
      <img src='./images/outline_return_black.png' alt='return'>
    </a>
  </nav>
  <div class="curret-User">
    <img id="img-User" class= "photo" src=${crtUser.photoURL ? crtUser.photoURL : avatar}>
    <p id="idUser">${crtUser.email}</p>
  </div>
  <div class="emptyPost"></div>
  <form id="postForm">
    <label for="title">Título</label>
    <input id="title"><label for="history">Cuenta tu historia</label>
    <textarea id="history" rows="22" cols="35" placeholder="Escribe sin límite"></textarea>
    <button class="btns-post">Publicar</button>
  </form>
`;

  divCreatePost.innerHTML = postNodes;

  divCreatePost.querySelector('.btn-return').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/wall');
  });

  divCreatePost.querySelector('.btns-post').addEventListener('click', (e) => {
    e.preventDefault();
    const postForm = divCreatePost.querySelector('#postForm');
    const title = postForm.title;
    const history = postForm.history;
    if (title.value === '' || history.value === '') {
      divCreatePost.querySelector('.emptyPost').innerHTML = 'No se puede dejar este campo en blanco, compartenos tu historia.';
    } else {
      toPost(title.value, history.value, usuario.email);
      postForm.reset();
      title.focus();
      onNavigate('/wall');
    }
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      usuario = user;
    }
  });

  return divCreatePost;
};
