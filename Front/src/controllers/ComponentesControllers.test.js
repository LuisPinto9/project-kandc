import Axios from "axios";

const config = {
  headers: {
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAwMjQ1OTU5NywiaWF0IjoxNjk0OTAzMjU2LCJleHAiOjE2OTQ5ODk2NTZ9.0LRoHWtn5ZlxDcZpHTWVw8fiXAkHJj3RZDuVege_ViA",
  },
};

test("Get componentes", async () => {
  const response = await Axios.get(
    "http://localhost:4000/componentes/get-componentes",
    config
  );
  expect(response.status).toBe(200);
});

test("Post componentes", async () => {
  let status = 404;
  await Axios.post(
    "http://localhost:4000/componentes/create",
    {
      Id: 3345,
      Nombre: "prueba",
      Marca: "prueba",
      Cantidad: 1,
      Costo: 1,
      Estado: "prueba",
      Descripcion: "prueba",
      Observacion: "prueba",
      Habitacion: 3,
    },
    config
  ).then((data) => {
    status = data.status;
  });
  expect(status).toBe(200);
});

test("Delete componentes", async () => {
  let status = 404;
  await Axios.delete(
    `http://localhost:4000/componentes/delete/${3345}`,
    config
  ).then((data) => {
    status = data.status;
  });
  expect(status).toBe(200);
});
