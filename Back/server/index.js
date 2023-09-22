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

const fs = require("fs");
const path = require("path");

// Define una función para borrar una imagen por su nombre
const deleteImageByName = (imageName) => {
  imageName = imageName.replace(/[^\w.]/gi, "");
  if (imageName.endsWith(".jpg")) {
    imageName = imageName.replace(".jpg", ".jpeg");
  }
  const imagePath = path.join(__dirname, "images/evidencias", imageName);

  // Verifica si el archivo existe
  if (fs.existsSync(imagePath)) {
    // Si existe, intenta eliminarlo
    try {
      fs.unlinkSync(imagePath);
      console.log(`Imagen ${imageName} eliminada con éxito.`);
    } catch (error) {
      console.error(`Error al eliminar la imagen ${imageName}:`, error);
    }
  } else {
    console.log(`La imagen ${imageName} no existe.`);
  }
};

app.use(express.static("images"));

const getImageType = (imageName) => {
  const extension = imageName.split(".").pop().toLowerCase();
  switch (extension) {
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    default:
      return null; // Tipo de imagen no compatible
  }
};

app.get("/get-file/:imageName", (req, res) => {
  try {
    let imageName = req.params.imageName;
    imageName = imageName.replace(/[^\w.]/gi, "");
    if (imageName.endsWith(".jpg")) {
      imageName = imageName.replace(".jpg", ".jpeg");
    }
    const imagePath = path.join(__dirname, "images/evidencias", imageName);

    // Verifica si el archivo existe
    if (fs.existsSync(imagePath)) {
      // Obtén el tipo de imagen
      const imageType = getImageType(imageName);
      console.log(imageType);

      if (imageType) {
        // Configura el tipo de contenido de la respuesta según el tipo de imagen
        res.setHeader("Content-Type", imageType);

        // Envía el archivo como respuesta
        const fileStream = fs.createReadStream(imagePath);
        fileStream.pipe(res);
      } else {
        // Tipo de imagen no compatible
        res.status(415).send("Tipo de imagen no compatible");
      }
    } else {
      // Si el archivo no existe, envía una respuesta de error
      res.status(404).send("Imagen no encontrada");
    }
  } catch (error) {
    console.error("Error interno del servidor:", error);
    res.status(500).send("Error interno del servidor");
  }
});

app.post("/file", upload.single("image"), (req, res) => {});

app.post("/update-file/:nombre", upload.single("image"), (req, res) => {
  const imageNameToDelete = req.params.nombre; // Reemplaza con el nombre de la imagen que deseas eliminar
  deleteImageByName(imageNameToDelete);
});

app.delete("/delete-file/:nombre", (req, res) => {
  const imageNameToDelete = req.params.nombre; // Reemplaza con el nombre de la imagen que deseas eliminar
  deleteImageByName(imageNameToDelete);
});

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
