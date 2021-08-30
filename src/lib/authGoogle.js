// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCm1YtFKvlQIOhhmcZcHYhHO25Ph07dr8',
  authDomain: 'boo-auth.firebaseapp.com',
  projectId: 'boo-auth',
  storageBucket: 'boo-auth.appspot.com',
  messagingSenderId: '894065158122',
  appId: '1:894065158122:web:7d50dec14abb358c0bb493',
  measurementId: 'G-ENM9S50C4X',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// acceder con una ventana emergente, utilizando signInWithPopup
export const logInWhitGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // eslint-disable-next-line no-alert
      alert('Bienvenido, cuentame tu historia');
      // @type {firebase.auth.OAuthCredential}
      const user = result.user;
      console.log(` Name: ${user.displayName}`);
      console.log(` email: ${user.email}`);
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      console.log(` esto es error: ${errorCode}`);
    });
};

export const logOutUser = () => {
  console.log('LogOut');
  firebase
    .auth()
    .signOut()
    .then(() => {
      // eslint-disable-next-line no-alert
      alert('Vuelve pronto, Duerme tranquilo si puedes!! ');
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(` esto es error: ${errorCode}`);
    });
};
