// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const fireBaseSignUp = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.email);
      console.log(user);
      onNavigate('/wall');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
