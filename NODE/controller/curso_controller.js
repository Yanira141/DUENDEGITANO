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
  const { idcurso } = req.body;
  const {id}=req.params
  console.log(req.body);

  if (!id || !idcurso)
    return res.status(400).send("Error al recibir el body");
  try {
    const idObj = {
      idcurso: idcurso,
      idusuario: id,
    };
    console.log(idObj);
    const addCurso = await dao.cursosDetalle(idObj);
    if (addCurso)
      return res.send(
        `Usuario con id: ${id} apuntado en curso con id: ${idcurso}`
      );
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
