const singUp = () => {
  const view = `
    <div class="singUp">
      <label for="">Email</label>
      <input type="text">
      <label for="">Contraseña</label>
      <input type="password">
      <label for="">Confirmar contraseña</label>
      <input type="password">
      <input type="button" value="Sing Up">
    </div>
  `;
  return view;
};

export default singUp;
