export const wall = () => {
  document.body.style.backgroundImage = 'url(../images/deskHome.png)';
  const wallBody = document.querySelector('body');
  const welcome = document.createElement('p');
  welcome.textContent = 'Haz iniciado sesión';
  welcome.setAttribute('id', 'wall');
  wallBody.classList.add('wall-body');
  return welcome;
};
