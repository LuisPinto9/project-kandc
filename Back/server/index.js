const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT);

const userRoutes = require("./routes/UserRoutes.js");
app.use("/user", userRoutes);

const roomsRoutes = require("./routes/HabitacionRoutes.js");
app.use("/habitaciones", roomsRoutes);

const componentsRoutes = require("./routes/ComponentesRoutes.js");
app.use("/componentes", componentsRoutes);

const zonesRoutes = require("./routes/ZonasRoutes.js");
app.use("/zonas", zonesRoutes);

const loginRoutes = require("./routes/LoginRoutes.js");
app.use("/login", loginRoutes);

const userRoomsRoutes = require("./routes/UserRoomsRoutes.js");
app.use("/user-rooms", userRoomsRoutes);

const ComponentesEvidenciaRoutes = require("./routes/ComponenteEvidenciasRoutes.js");
app.use("/componentes-evidencias", ComponentesEvidenciaRoutes);

app.listen(app.get("port"), () => {
  console.log(`Corriendo en el puerto ${app.get("port")}`);
});
