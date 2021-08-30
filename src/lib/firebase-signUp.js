import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
//import { onNavigate } from '../main.js';

export const fireBaseSignUp = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // hast aeste punto el usuario ya fue Resgistrado
      const user = userCredential.user;
      // pendiente pendiente el redireccioanmiento al muro timeline...
      // onNavigate('/posts');
      // console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
