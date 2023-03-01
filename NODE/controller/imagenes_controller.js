import { currentDir } from "../index.js";
import dao from "../services/dao.js";
import { jwtVerify } from "jose";
const __dirname = currentDir().__dirname;

const controller = {};

controller.addImagenes = async (req, res) => {
  // Buscamos el usuario en la base de datos
  console.log(req.files);
  try {
    if (req.files === null) return;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No se ha cargado ningún archivo");
    }

    const images = !req.files.imagen.length
      ? [req.files.imagen]
      : req.files.imagen;
    images.forEach(async (image) => {
      let uploadPath = __dirname + "/public/images/" + image.name;
      let BBDDPath = "images/" + image.name;
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      // Si no existe lo registramos
      await dao.addImagenes({
        titulo: req.body.titulo,
        ruta: BBDDPath,
      });
    });
    return res.send(`imagen subida`);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getImagenes = async (req, res) => {
  try {
    const imagenes = await dao.getImagenes(req.params.id);

    if (imagenes.length <= 0)
      return res.status(404).send("Las imagenes no existen");

    return res.send(imagenes);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getImagenesId = async (req, res) => {
  try {
    const imagenes = await dao.getImagenesId(req.params.id);

    if (imagenes.length <= 0)
      return res.status(404).send("Las imagenes no existen");

    return res.send(imagenes[0]);
  } catch (e) {
    console.log(e.message);
  }
};

controller.deleteImagenes = async (req, res) => {
  // OBTENER CABECERA Y COMPROBAR SU AUTENTICIDAD Y CADUCIDAD
  const { authorization, token } = req.body;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!authorization) return res.sendStatus(401);

  try {
    // codificamos la clave secreta
/*     const encoder = new TextEncoder(); */
    // verificamos el token con la función jwtVerify. Le pasamos el token y la clave secreta codificada
  /*   const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    ); */

    // Verificamos que seamos usuario administrador
  /*   if (!payload.rol){
      return res.status(409).send("no tiene permiso de administrador");
    } */
    // Buscamos si el id del usuario existe en la base de datos
    const imagen = await dao.getImagenesId(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (imagen.length <= 0) return res.status(404).send("la imagen no existe");
    // Si existe, eliminamos el usuario por el id
    await dao.deleteImagenes(req.params.id);
    // Devolvemos la respuesta
    return res.send(await dao.getImagenes());
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
