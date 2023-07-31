const express = require("express");
const app = express();
const cors = require("cors");
const crudRoutes = require("./routes/UserRoutes.js");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT);

app.use("/user", crudRoutes);

app.listen(app.get("port"), () => {
  console.log(`Corriendo en el puerto ${app.get("port")}`);
});
