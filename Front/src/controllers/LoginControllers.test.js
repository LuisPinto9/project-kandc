import Axios from "axios";

test("Post login", async () => {
  let status = 404;
  await Axios.post("http://localhost:4000/login/credenciales", {
    NombreUsuario: "luis",
    Contraseña: 123,
  }).then((data) => {
    status = data.status;
  });
  expect(status).toBe(200);
});
