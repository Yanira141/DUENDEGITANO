import dao from "../services/dao.js";

const controller = {};

controller.addActuacion = async (req, res) => {
  const { hora, fecha, descripcion, lugar, direccion } = req.body;
  // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)
  if (!hora || !fecha || !descripcion || !lugar || !direccion)
    return res.status(400).send("Error al recibir el body");
  // Buscamos el usuario en la base de datos
  try {
    const actuacion = await dao.getActuacionByLugar(lugar);
    // Si existe el usuario respondemos con un 409 (conflict)
    if (actuacion.length > 0)
      return res.status(409).send("actuacion ya registrada");
    // Si no existe lo registramos
    const addActuacion = await dao.addActuacion(req.body);
    if (addActuacion)
      return res.send(
       await dao.getActuacion()
      );
  } catch (e) {
    console.log(e.message);
  }
};

controller.getActuacion = async (req, res) => {
  try {
    const actuacion = await dao.getActuacion(req.params.id);

    if (actuacion.length <= 0)
      return res.status(404).send("La actuacion no existe");

    return res.send(actuacion);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getActuacionId = async (req, res) => {
  try {
    const actuacion = await dao.getActuacionId(req.params.id);

    if (actuacion.length <= 0)
      return res.status(404).send("La actuacion no existe");

    return res.send(actuacion[0]);
  } catch (e) {
    console.log(e.message);
  }
};


controller.deleteActuaciones = async (req, res) => {
  let dataObj = { eliminado: "1" };
  const { id } = req.params;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!id) return res.sendStatus(401);

  try {
    // Actualizamos el usuario
    await dao.deleteActuaciones(id, dataObj);
    // Devolvemos la respuesta
    return res.send(await dao.getActuacion());
  } catch (e) {
    console.log(e.message);
  }
};

// Controlador para modificar un usuario por su id
controller.updateActuacion = async (req, res) => {
  const { id } = req.params;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!id) return res.sendStatus(401);

  try {
    // Si no nos llega ningún campo por el body devolvemos un 400 (bad request)
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");
    // Actualizamos el usuario
    await dao.updateActuacion(id, req.body);
    const actuacion = await dao.getActuacionId(id);
    // Devolvemos la respuesta
    return res.send(actuacion[0]);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
