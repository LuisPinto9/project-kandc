const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT);

const multer = require("multer");
const mimeTypes = require("mime-types");

let url = "";
let nameFile = "";

const storage = multer.diskStorage({
  destination: "images/evidencias/",
  filename: function name(req, file, callback) {
    let filename = file.originalname
      .toLocaleLowerCase()
      .split(".")[0]
      .replace(/[^\w]/gi, "");
    callback(
      "",
      filename + "." + mimeTypes.extension(file.mimetype),
      (url = (
        "/evidencias/" +
        filename +
        "." +
        mimeTypes.extension(file.mimetype)
      ).replaceAll("\\", "/"))
    );
  },
});
const upload = multer({ storage: storage });

app.use(express.static("images"));

app.post("/file", upload.single("image"), (req, res) => {});

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
