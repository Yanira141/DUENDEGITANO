import dao from "../services/dao.js";


const controller = {};


controller.addActuacion = async (req, res) => {
    const {  hora, fecha ,descripcion, lugar, direccion } = req.body;
    // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)
    if (!hora || !fecha || !descripcion || !lugar || !direccion)
      return res.status(400).send("Error al recibir el body");
    // Buscamos el usuario en la base de datos
    try {
      const actuacion = await dao.getActuacionByLugar(lugar);
      // Si existe el usuario respondemos con un 409 (conflict)
      if (actuacion.length > 0) return res.status(409).send("actuacion ya registrada");
      // Si no existe lo registramos
      const addActuacion = await dao.addActuacion(req.body);
      if (addActuacion)
        return res.send(`Actuacion en ${lugar} con id: ${addActuacion} registrada`);
    } catch (e) {
      console.log(e.message);
    }
  };
  



  controller.getActuacion = async (req, res) => {
    try {
     
      const actuacion = await dao.getActuacion(req.params.id);
      
      if (actuacion.length <= 0) return res.status(404).send("La actuacion no existe");
  
      return res.send(actuacion );
    } catch (e) {
      console.log(e.message);
    
    }
  };
  

  controller.getActuacionId = async (req, res) => {
    try {
     
      const actuacion = await dao.getActuacionId(req.params.id);
      
      if (actuacion.length <= 0) return res.status(404).send("La actuacion no existe");
  
      return res.send(actuacion[0] );
    } catch (e) {
      console.log(e.message);
    
    }
  };
  
controller.deleteActuacion = async (req, res) => {
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
      const user = await dao.getUserbyId(req.params.id);
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
  


  controller.deleteActuaciones = async (req, res) => {

    let dataObj={ eliminado: "1"}
    const { id } = req.params;
    // Si no existe el token enviamos un 401 (unauthorized)
    if (!id) return res.sendStatus(401);
  
    try {
      // Actualizamos el usuario
      await dao.deleteActuaciones(id, dataObj);
      // Devolvemos la respuesta
      return res.send(`Actuacion con id ${id} modificada`);
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
    const actuacion = await dao.getActuacionId(id)
    // Devolvemos la respuesta
    return res.send(actuacion[0]);
  } catch (e) {
    console.log(e.message);
  }
};




  
export default controller;
