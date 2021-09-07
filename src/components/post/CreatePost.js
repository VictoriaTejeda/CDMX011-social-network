export const CreatePost = () => {
  const divCreatePost = document.createElement('div');
  const curretUser = document.createElement('div');
  const imgUser = document.createElement('img');
  const idUser = document.createElement('p');
  const formPost = document.createElement('form');
  const labelTitle = document.createElement('label');
  const tittle = document.createElement('input');
  const labelText = document.createElement('label');
  const textArea = document.createElement('textarea');
  const btnPost = document.createElement('button');

  divCreatePost.classList.add('create-Post');
  curretUser.classList.add('curret-User');
  btnPost.classList.add('btn-post');

  imgUser.setAttribute('id', 'img-User');
  idUser.setAttribute('id', 'idUser');
  formPost.setAttribute('id', 'postForm');
  labelTitle.setAttribute('for', 'title');
  tittle.setAttribute('id', 'title');
  labelText.setAttribute('for', 'history');
  textArea.setAttribute('id', 'history');
  textArea.setAttribute('rows', '22');
  textArea.setAttribute('cols', '35');
  // maxlength="1000" rows=22 cols=35

  labelTitle.textContent = 'Titulo';
  labelText.textContent = 'Escribe tu historia';
  btnPost.textContent = 'Publicar';

  formPost.appendChild(labelTitle);
  formPost.appendChild(tittle);
  formPost.appendChild(labelText);
  formPost.appendChild(textArea);
  formPost.appendChild(btnPost);
  curretUser.appendChild(imgUser);
  curretUser.appendChild(idUser);
  divCreatePost.appendChild(curretUser);
  divCreatePost.appendChild(formPost);

  // textArea.setAttribute('placeholder', 'Escribe el post');
  // button.innerText = 'Publicar';
  btnPost.addEventListener('click', () => {
    console.log('Algo');
    console.log('recibi: ', textArea.value);
  });

  // divCreatePost.appendChild(textArea);
  // divCreatePost.appendChild(button);
  return divCreatePost;
};
const dBase = firebase.firestore();
