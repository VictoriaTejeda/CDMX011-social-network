export const dbGlobal = firebase.firestore();
export const GetAllStories = (setupPosts) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dbGlobal
        .collection('stories')
        .orderBy('fecha', 'desc')
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
        });
    } else {
      setupPosts([]);
    }
  });
};

export const GetUserStories = (setupPosts) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dbGlobal
        .collection('stories').where('email', '==', user.email)
        .orderBy('fecha', 'desc')
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
        });
    } else {
      setupPosts([]);
    }
  });
};
