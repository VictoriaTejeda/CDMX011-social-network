/**
 * @jest-environment jsdom
 */

import './globals/fibase.js';
import { render } from '../src/main.js';
import { logIn } from '../src/components/logIn.js';
// import { loginWithEmail } from '../src/lib/logInFb.js';

describe('Clic en el boton logIn', () => {
  let rootdiv = document.createElement('div');
  rootdiv.setAttribute('id', 'root');
  document.body.appendChild(rootdiv);
  render();
  document.querySelector('.btn_log_in').click();
  rootdiv = document.getElementById('root');
  test('Test sobre log In', () => {
    const form = document.querySelector('.sub_contenedor');
    expect(form.outerHTML).toMatchSnapshot();
  });

  const fillOutAndSubmitForm = (email, password) => {
    document.getElementById('user').value = email;
    document.getElementById('pass').value = password;
    document.querySelector('.btn_log_in').click();
  };

  it('login al usuario', async () => {
    const email = 'test@prueba.com';
    const password = '12345678';
    const user = { email, uid: 'xxxxxxxx' }; // creamos un objeto ficticio del usuario
    // Haremos uso de mock creando una promesa (exitosa) y retona el usuario ficticio
    const mockSignInWithEmailAndPassword = jest.fn();
    mockSignInWithEmailAndPassword.mockResolvedValue(user);

    // mokeamos los metodos de firebase.auth
    const mockFirebaseAuth = {
      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
      currentUser: user,
      onAuthStateChanged: () => {},
    };
    console.log(mockSignInWithEmailAndPassword.mock);
    // cuando firebese.auth sea invocada retornara el mock creado mockFirebaseAuth
    firebase.auth = () => mockFirebaseAuth;

    render(rootdiv, logIn());
    fillOutAndSubmitForm(email, password);

    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    expect(rootdiv.outerHTML).toContain(email);
  });
});
