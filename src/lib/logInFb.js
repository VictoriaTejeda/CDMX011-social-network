// acceder con una ventana emergente, utilizando signInWithPopup
export const logInWhitGoogle = (onNavigate) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(` Name: ${user.displayName}`);
      console.log(` email: ${user.email}`);
      console.log(` email verificado: ${user.emailVerified}`);
      console.log(user.photoURL);
      onNavigate('/wall');
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      console.log(` esto es error: ${errorCode}`);
    });
};

export function githubSignin(onNavigate) {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(` Name: ${user.displayName}`);
      console.log(` email: ${user.email}`);
      console.log(` email verificado: ${user.emailVerified}`);
      onNavigate('/wall');
    }).catch((e) => {
      console.log(e);
      alert(e.message);
    });
}

export const loginWithEmail = (onNavigate, email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('estoy logueada');
      onNavigate('/wall');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`esto pasa cuando pongo mal el password ${errorMessage}`);
    });
};
