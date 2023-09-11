import Axios from "axios";

const config = {
  headers: {
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAwMjQ1OTU5NywiaWF0IjoxNjk0MzY4OTM3LCJleHAiOjE2OTQ0NTUzMzd9.wU_iYK8nqDJvnJl3xY-3NKjJPHAxUdTZOQZHtS8qiSA",
  },
};

test("Get usuarios", async () => {
  const response = await Axios.get(
    "http://localhost:4000/user/get-users",
    config
  );
  expect(response.status).toBe(200);
});

test("Post usuarios", async () => {
  let status = 404;
  await Axios.post(
    "http://localhost:4000/user/create",
    {
      IDUsuario: 3,
      Nombre: "lui",
      MetodoRenta: "asdsda",
      ExtensionDias: 23,
      Telefono: 123,
      NombreUsuario: "asd",
      Contraseña: "asd",
      Correo: "asd",
      TipoUsuario: "arrendatario",
    },
    config
  ).then((data) => {
    status = data.status;
  });
  expect(status).toBe(200);
});

test("Put usuarios", async () => {
  let status = 404;
  await Axios.put(
    "http://localhost:4000/user/update",
    {
      IDUsuario: 3,
      Nombre: "luiasdasd",
      MetodoRenta: "asdsda",
      ExtensionDias: 23,
      Telefono: 123,
      NombreUsuario: "asd",
      Contraseña: "asd",
      Correo: "asd",
      TipoUsuario: "arrendatario",
    },
    config
  ).then((data) => {
    status = data.status;
  });
  expect(status).toBe(200);
});

test("Delete usuarios", async () => {
  let status = 404;
  await Axios.delete(`http://localhost:4000/user/delete/${3}`, config).then(
    (data) => {
      status = data.status;
    }
  );
  expect(status).toBe(200);
});
