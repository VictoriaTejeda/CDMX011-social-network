// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const logOutUser = () => {
  console.log('LogOut');
  firebase
    .auth()
    .signOut()
    .then(() => {
      onNavigate('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(` esto es error: ${errorCode}`);
    });
};
