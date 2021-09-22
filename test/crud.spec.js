import MockFirebase from '../node_modules/mock-cloud-firestore/lib/mock-cloud-firestore.js';

const fixtureData = {
  __collection__: {
    stories: {
      __doc__: {
        sid123: {
          title: 'la manita peludita',
          history: 'En un pueblo lejano surgio una mano peluda',
          email: 'test@prueba.com',
        },
        sid1234: {
          title: 'la bruja',
          history: 'En un pueblo lejanoencontraron una bruja',
          email: 'test@prueba.com',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// eslint-disable-next-line import/first
import { CreatePost } from '../src/components/post/CreatePost.js';

describe('CrearPost', () => {
  it('deberia poder agregar un post', () => CreatePost('hola mundo').then((data) => {
    console.log(data);
    expect(data).tobe('hola mundo');
  }));
});
