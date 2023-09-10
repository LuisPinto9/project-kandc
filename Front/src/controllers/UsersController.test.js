// import { arrendatarios } from "./UserControllers";

// test("should return users", () => {
//   const users = arrendatarios();
//   expect(users.text).toBe([
//     {
//       id: 4,
//       nombre: "diana",
//       metodo_renta: "pago",
//       extension_dias: 1,
//       telefono: 2147483647,
//       nombre_usuario: "diana",
//       contraseña: "123456",
//       correo: "diana.diaz@gmail.com",
//       tipo: "Arrendatario",
//     },
//     {
//       id: 1002459597,
//       nombre: "luis",
//       metodo_renta: "arriendo",
//       extension_dias: 12,
//       telefono: 2147483647,
//       nombre_usuario: "luis",
//       contraseña: "123",
//       correo: "luis.pinto04@gmail.com",
//       tipo: "Administrador",
//     },
//   ]);
// });
import axios from 'axios';

test('Ejemplo de prueba con Axios', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status).toBe(200);
  console.log(response.data);
  // Realiza más aserciones según tus necesidades
});
