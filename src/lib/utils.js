// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const logOutUser = () => {
  console.log('LogOut');
  firebase
    .auth()
    .signOut()
    .then(() => {
      onNavigate('/');
      // eslint-disable-next-line no-alert
      alert('Vuelve pronto, Duerme tranquilo si puedes!! ');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(` esto es error: ${errorCode}`);
    });
};
