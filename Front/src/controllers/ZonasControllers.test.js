import Axios from "axios";

const config = {
  headers: {
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAwMjQ1OTU5NywiaWF0IjoxNjk0OTAzMjU2LCJleHAiOjE2OTQ5ODk2NTZ9.0LRoHWtn5ZlxDcZpHTWVw8fiXAkHJj3RZDuVege_ViA",
  },
};

test("Get zonas", async () => {
  const response = await Axios.get(
    "http://localhost:4000/zonas/get-zonas",
    config
  );
  expect(response.status).toBe(200);
});

test("Post zonas", async () => {
  let status = 404;
  await Axios.post(
    "http://localhost:4000/zonas/create",
    {
      Id: 3345,
      Nombre: "preuba",
      Descripcion: "preuba",
      Precio: 233,
      Acceso: "preuba",
    },
    config
  ).then((data) => {
    status = data.status;
  });
  expect(status).toBe(200);
});

test("Delete zonas", async () => {
  let status = 404;
  await Axios.delete(`http://localhost:4000/zonas/delete/${3345}`, config).then(
    (data) => {
      status = data.status;
    }
  );
  expect(status).toBe(200);
});
