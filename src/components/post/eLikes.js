const db = firebase.firestore();
const userId = () => firebase.auth().currentUser;

export const UpdateLikes = (id) => {
  const likesUser = userId();
  const idstory = id;
  console.log(`este es mi usuario  ${likesUser.uid}`);
  console.log(`El id que estoy pasando es: ${idstory}`);
  return db.collection('stories').doc(id).update({
    likes: firebase.firestore.FieldValue.arrayUnion(likesUser.uid),
  })
    .then(() => {
      console.log('Story successfully updated! Increased');
      return db.collection('stories').doc(id)
        .get().then((doc) => {
          console.log(doc.data());
          return doc.data();
        });
    });
};

export const UpdateUnlikes = (id) => {
  const likesUser = userId();
  console.log(`este es mi usuario  ${likesUser.uid}`);
  console.log(`El id que estoy pasando es: ${id}`);
  return db.collection('stories').doc(id).update({
    likes: firebase.firestore.FieldValue.arrayRemove(likesUser.uid),
  })
    .then(() => {
      console.log('imprimo');
      console.log(id);
      console.log('Story successfully updated! Increased');
      return db.collection('stories').doc(id)
        .get().then((doc) => {
          if (doc.exists) {
            console.log('Document data:', doc.data());
          } else {
          // doc.data() will be undefined in this case
            console.log('No such document!');
          } return doc.data();
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    });
};

export function updatebuttons(divbtn) {
  const storyId = divbtn.getAttribute('id');
  const button = divbtn.querySelector('.like');
  const btnDislike = divbtn.querySelector('.dislike');
  const score = divbtn.querySelector('.score');
  const showLike = divbtn.querySelector('.a-like');
  const hideLike = divbtn.querySelector('.a-disLike');
  // Remover los Listeners de Like
  const newBtnLike = button.cloneNode(true);
  button.parentNode.replaceChild(newBtnLike, button);
  // Remover listeners de Dislike
  const newBtnDislike = btnDislike.cloneNode(true);
  btnDislike.parentNode.replaceChild(newBtnDislike, btnDislike);
  // Agregar listener a boton nuevo
  newBtnLike.addEventListener('click', async () => {
    const like = UpdateLikes(storyId);
    like.then((resUnlike) => {
      console.log('resultado de likes dentro del then');
      console.log(resUnlike.likes.length);
      score.innerHTML = resUnlike.likes.length;
      const divActual = document.getElementById(storyId);
      showLike.hidden = true;
      hideLike.hidden = false;

      updatebuttons(divActual);
    });
  });
  newBtnDislike.addEventListener('click', () => {
    const unLike = UpdateUnlikes(storyId);
    unLike.then((res) => {
      console.log('resultado de likes dentro del then');
      console.log(res);
      score.innerHTML = res.likes.length;
      const divActual = document.getElementById(storyId);
      showLike.hidden = false;
      hideLike.hidden = true;
      updatebuttons(divActual);
    });
  });
}
