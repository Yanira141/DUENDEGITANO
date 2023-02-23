import dao from "../services/dao.js";

const controller = {};

controller.addGrupo = async (req, res) => {
  const { nombre, descripcion, horario } = req.body;
  // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)
  if (!nombre || !descripcion || !horario)
    return res.status(400).send("Error al recibir el body");
  // Buscamos el usuario en la base de datos
  try {
    const grupo = await dao.getGrupoByNombre(nombre);
    // Si existe el usuario respondemos con un 409 (conflict)
    if (grupo.length > 0) return res.status(409).send("grupo ya registrado");
    // Si no existe lo registramos
    const addGrupo = await dao.addGrupo(req.body);
    if (addGrupo)
      return res.send(`Grupo ${nombre} con id: ${addGrupo} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getGrupo = async (req, res) => {
  try {
    const grupo = await dao.getGrupo(req.params.id);

    if (grupo.length <= 0) return res.status(404).send("El grupo no existe");

    return res.send(grupo);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getGrupoId = async (req, res) => {
  try {
    const grupo = await dao.getGrupoId(req.params.id);

    if (grupo.length <= 0) return res.status(404).send("El grupo no existe");

    return res.send(grupo[0]);
  } catch (e) {
    console.log(e.message);
  }
};

controller.grupoDetalle = async (req, res) => {
  const { idusuario } = req.body;
  const { id } = req.params;
  console.log(req.body);

  if (!idusuario || !id)
    return res.status(400).send("Error al recibir el body");
  try {
    const idObj = {
      idgrupo: id,
      idusuario,
    };

    const grupo = await dao.grupoDetalle(idObj);
    if (grupo)
      return res.send(
        `Usuario con id: ${idusuario} apuntado en grupo con id: ${id}`
      );
  } catch (e) {
    console.log(e.message);
  }
};

controller.deleteGrupoDetalle = async (req, res) => {
  const { idusuario } = req.body;
  if (!idusuario) return res.status(400).send("Error al recibir el body");
  try {
    // Si existe, eliminamos el usuario por el id
    await dao.deleteGrupoDetalle(req.params.id, idusuario);
    // Devolvemos la respuesta
    return res.send(`Usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.buttonDeleteGrupo = async (req, res) => {
  const { id, idusuario } = req.params;

  try {
    const grupo = await dao.getGrupoId(req.params.id);
    const buttongrupo = await dao.buttonDeleteGrupo(id, idusuario);
    if (buttongrupo <= 0) return res.status(404).send("Usuario no apuntado");
    if (grupo.length <= 0) return res.status(404).send("El grupo no existe");

    return res.send(grupo[0]);
  } catch (e) {
    console.log(e.message);
  }
};

controller.deleteGrupo = async (req, res) => {
  let dataObj = { eliminado: "1" };
  const { id } = req.params;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!id) return res.sendStatus(401);

  try {
    // Actualizamos el usuario
    await dao.deleteGrupo(id, dataObj);
    // Devolvemos la respuesta
    return res.send(`Grupo con id ${id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};

// Controlador para modificar un usuario por su id
controller.updateGrupo = async (req, res) => {
  const { id } = req.params;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!id) return res.sendStatus(401);

  try {
    // Si no nos llega ningún campo por el body devolvemos un 400 (bad request)
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");
    // Actualizamos el usuario
    await dao.updateGrupo(id, req.body);
    const grupo = await dao.getGrupoId(id);
    // Devolvemos la respuesta
    return res.send(grupo[0]);
  } catch (e) {
    console.log(e.message);
  }
};





controller.getGrupoApuntado = async (req, res) => {
  try {
    const grupo = await dao.getGrupoApuntado(req.params.id);

    if (grupo.length <= 0) return res.status(404).send("El grupo no existe");

    return res.send(grupo);
  } catch (e) {
    console.log(e.message);
  }
};






export default controller;
