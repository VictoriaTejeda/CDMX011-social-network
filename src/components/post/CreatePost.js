const dbGlobal = firebase.firestore();

// const divCreatePost = document.createElement('div');
// const postForm = divCreatePost.querySelector('#postForm');

const toPost = (title, history) => dbGlobal.collection('stories').doc().set({
  title,
  history,
});

const getPosts = () => dbGlobal.collection('stories').get();

export const CreatePost = () => {
  const divCreatePost = document.createElement('div');
  const postNodes = `
  <div class="curret-User">
    <img id="img-User">
    <p id="idUser"></p>
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
  });

  divCreatePost.querySelector('.btn-post').addEventListener('click', async () => {
    const querySnapshot = await getPosts();
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());

      const postIt = doc.data();
      // console.log(doc.data());
      const newPost = document.createElement('div');

      newPost.innerHTML += `
      <section>
        <div class="data-user">
          <img src="" alt="">
          <p class="name-user"></p>
        </div>
        <div class="data-post">
          <h3 class="data-title">${postIt.title}</h3>
          <p class="data-history">${postIt.history}</p>
        </div>
        <div class="btn-post">
          <button class="btn-like"></button>
          <span id="score"></span>
          <button class="btn-edit"></button>
          <button class="btn-delate"></button>
        </div>
      </section>
      `;
      divCreatePost.appendChild(newPost);
    });
  });

  return divCreatePost;
};
