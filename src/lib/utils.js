// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

// Este método se dispara cada ves que cambia la autentificación, Es para mostra el muro
export const authStateChanged = () => firebase.auth().onAuthStateChanged((user) => {
  console.log('Entro a funcion para ver si estoy logueado en google');
  if (user) {
    console.log('logueado desde authStateChanged');
    return true;
  }
  console.log('no logueado desde authStateChanged');
  return false;
});

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
