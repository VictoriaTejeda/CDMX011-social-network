import './globals/firebase.js';
import Mockfirebase from './globals/firestore.js';

global.firebase = Mockfirebase;
// eslint-disable-next-line import/first
import { CreatePost } from '../src/components/post/CreatePost.js';

describe('CrearPost', () => {
  it('deberia poder agregar un post', () => CreatePost('hola mundo').then((data) => {
    console.log(data);
    expect(data).tobe('hola mundo');
  }));
});
