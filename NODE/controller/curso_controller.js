import dao from "../services/dao.js";

const controller = {};

controller.addCurso = async (req, res) => {
  const { nombre, precio, hora, fecha, descripcion, profesor } = req.body;
  // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)
  if (!nombre || !precio || !hora || !fecha || !descripcion || !profesor)
    return res.status(400).send("Error al recibir el body");
  // Buscamos el usuario en la base de datos
  try {
    const curso = await dao.getCursoByNombre(nombre);
    // Si existe el usuario respondemos con un 409 (conflict)
    if (curso.length > 0) return res.status(409).send("curso ya registrado");
    // Si no existe lo registramos
    const addCurso = await dao.addCurso(req.body);
    if (addCurso)
      return res.send(`Curso ${nombre} con id: ${addCurso} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getCurso = async (req, res) => {
  try {
    const curso = await dao.getCurso(req.params.id);

    if (curso.length <= 0) return res.status(404).send("El curso no existe");

    return res.send(curso);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getCursoId = async (req, res) => {
  try {
    const curso = await dao.getCursoId(req.params.id);

    if (curso.length <= 0) return res.status(404).send("El curso no existe");

    return res.send(curso[0]);
  } catch (e) {
    console.log(e.message);
  }
};

controller.deleteCurso = async (req, res) => {
  // OBTENER CABECERA Y COMPROBAR SU AUTENTICIDAD Y CADUCIDAD
  const { authorization } = req.headers;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!authorization) return res.sendStatus(401);
  const token = authorization.split(" ")[1];

  try {
    // codificamos la clave secreta
    const encoder = new TextEncoder();
    // verificamos el token con la función jwtVerify. Le pasamos el token y la clave secreta codificada
    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    );

    // Verificamos que seamos usuario administrador
    if (!payload.rol)
      return res.status(409).send("no tiene permiso de administrador");
    // Buscamos si el id del usuario existe en la base de datos
    const user = await dao.getUserById(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (user.length <= 0) return res.status(404).send("el usuario no existe");
    // Si existe, eliminamos el usuario por el id
    await dao.deleteUser(req.params.id);
    // Devolvemos la respuesta
    return res.send(`Usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.cursosDetalle = async (req, res) => {
  const { idusuario } = req.body;
  const { id } = req.params;
  console.log(req.body);

  if (!idusuario || !id)
    return res.status(400).send("Error al recibir el body");
  try {
    const idObj = {
      idcurso: id,
      idusuario,
    };

    const curso = await dao.cursosDetalle(idObj);
    if (curso)
      return res.send(
        `Usuario con id: ${idusuario} apuntado en curso con id: ${id}`
      );
  } catch (e) {
    console.log(e.message);
  }
};

controller.deleteCursoDetalle = async (req, res) => {
  const { idusuario } = req.body;
  if (!idusuario) return res.status(400).send("Error al recibir el body");
  try {
    // Si existe, eliminamos el usuario por el id
    await dao.deleteCursoDetalle(req.params.id, idusuario);
    // Devolvemos la respuesta
    return res.send(`Usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.deleteCurso = async (req, res) => {
  let dataObj = { eliminado: "1" };
  const { id } = req.params;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!id) return res.sendStatus(401);

  try {
    // Actualizamos el usuario
    await dao.deleteCurso(id, dataObj);
    // Devolvemos la respuesta
    return res.send(`Curso con id ${id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.buttonDeleteCurso = async (req, res) => {
  const { id, idusuario } = req.params;

  try {
    const curso = await dao.getCursoId(req.params.id);
    const buttoncurso = await dao.buttonDeleteCurso(id, idusuario);
    if (buttoncurso <= 0) return res.status(404).send("Usuario no apuntado");
    if (curso.length <= 0) return res.status(404).send("El curso no existe");

    return res.send(curso[0]);
  } catch (e) {
    console.log(e.message);
  }
};

// Controlador para modificar un usuario por su id
controller.updateCurso = async (req, res) => {
  const { id } = req.params;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!id) return res.sendStatus(401);

  try {
    // Si no nos llega ningún campo por el body devolvemos un 400 (bad request)
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");
    // Actualizamos el usuario
    await dao.updateCurso(id, req.body);
    const curso = await dao.getCursoId(id);
    // Devolvemos la respuesta
    return res.send(curso[0]);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
