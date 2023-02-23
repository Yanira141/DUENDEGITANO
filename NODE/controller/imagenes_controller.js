import dao from "../services/dao.js";

const controller = {};

// controller.addImagenes = async (req, res) => {
//     const { ruta, titulo, id } = req.body;
//     // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)
//     if (!ruta || !titulo || !id )
//       return res.status(400).send("Error al recibir el body");
//     // Buscamos el usuario en la base de datos
//     try {
//       const imagenes = await dao.getCursoByNombre(nombre);
//       // Si existe el usuario respondemos con un 409 (conflict)
//       if (curso.length > 0) return res.status(409).send("curso ya registrado");
//       // Si no existe lo registramos
//       const addCurso = await dao.addCurso(req.body);
//       if (addCurso)
//         return res.send(`Curso ${nombre} con id: ${addCurso} registrado`);
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

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

export default controller;
