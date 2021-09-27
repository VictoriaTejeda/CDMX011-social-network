const firestore = () => ({
  collecion: (stories) => ({
    return: {
      doc: () => ({
        set: (objData) => new Promise((resolve) => {
          resolve('el post fue agregado');
          console.log(stories, objData);
        }),
      }),
    },
  }),
});

const firebase = {
  firestore,
};

export default jest.fn(() => firebase);
