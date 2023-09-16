import Axios from "axios";

const config = {
  headers: {
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAwMjQ1OTU5NywiaWF0IjoxNjk0OTAzMjU2LCJleHAiOjE2OTQ5ODk2NTZ9.0LRoHWtn5ZlxDcZpHTWVw8fiXAkHJj3RZDuVege_ViA",
  },
};

test("Get componentes del usuario", async () => {
  const response = await Axios.get(
    "http://localhost:4000/user-rooms/get-componentes/4",
    config
  );
  expect(response.status).toBe(200);
});

test("Get habitaciones del usuario", async () => {
  const response = await Axios.get(
    "http://localhost:4000/user-rooms/get-habitaciones/4",
    config
  );
  expect(response.status).toBe(200);
});

test("Get zonas del usuario", async () => {
  const response = await Axios.get(
    "http://localhost:4000/user-rooms/get-zona/4",
    config
  );
  expect(response.status).toBe(200);
});
