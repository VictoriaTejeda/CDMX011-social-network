// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAVJbFPsAT6KyNxGI6GSK-gsczNk_AyIQs',
  authDomain: 'sn-boo-mel-7039f.firebaseapp.com',
  projectId: 'sn-boo-mel-7039f',
  storageBucket: 'sn-boo-mel-7039f.appspot.com',
  messagingSenderId: '791338625683',
  appId: '1:791338625683:web:031f30577bfb6f3f98bb66',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GithubAuthProvider();
export function githubSignin() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
    }).catch((e) => {
      console.log(e);
    });
}
