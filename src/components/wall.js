/* eslint-disable import/no-cycle */
import { logOutUser } from '../lib/utils.js';
import { onNavigate } from '../main.js';

const dbGlobal = firebase.firestore();
export const wall = () => {
  document.body.style.backgroundImage = 'url(../images/post-background.jpg)';
  const wallBody = document.querySelector('body');
  wallBody.classList.add('wall-body');
  const container = document.createElement('div');
  const header = `
  <header id='headerWall'>
    <nav class='navigation'>
      <span id='Boo!'>Boo!</span>
      <a href='#' class='log_out'>
        <img src='./images/outline_logout_black_24dp.png' alt='logOut'>
      </a>
    </nav>
  </header>
  <section id='publish'>
  <div id=curretUser>
    <img id=imgUser>
    <p id=idUser></p>
  </div>
    <button class= modalPost>
      <img src='./images/outline_post_add_black_24dp.png' alt='addPost'>
      <p> 'Comparte tu historia' </p>
    </button>
  </section>
`;
  container.innerHTML = header;

  container.querySelector('.log_out').addEventListener('click', (e) => {
    e.preventDefault();
    logOutUser();
  });
  container.querySelector('.modalPost').addEventListener('click', () => {
    onNavigate('/add');
  });

  const newPost = document.createElement('div');
  const setupPosts = (data) => {
    if (data.length) {
      let html = '';
      data.forEach((doc) => {
        const post = doc.data();
        // console.log(post);
        const templatePost = `
          <section id="container-post">
            <div class="data-user">
              <p class="name-user">${post.email}</p>
            </div>
            <div class="data-post">
              <h3 class="data-title">${post.title}</h3>
              <div class="data-history">${post.history}</div>
            </div>
            <div class="btn-post">
              <button class="btn-like"></button>
              <span id="score"></span>
              <button class="btn-edit"></button>
              <button class="btn-delate"></button>
            </div>
          </section>
          `;
        // console.log();
        html += templatePost;
        newPost.innerHTML = html;
      });
    } else {
      newPost.innerHTML = '';
    }
    container.appendChild(newPost);
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(` Name: ${user.displayName}`);
      console.log(` email: ${user.email}`);
      dbGlobal.collection('stories')
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
        });
    } else {
      console.log('signout');
      setupPosts([]);
    }
  });

  return container;
};
