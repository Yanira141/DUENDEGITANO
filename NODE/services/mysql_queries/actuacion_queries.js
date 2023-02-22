import db from "../mysql.js";

const actuacionQueries = {};

actuacionQueries.getActuacionByLugar = async (lugar) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM actuaciones WHERE lugar = ?",
      lugar,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

actuacionQueries.addActuacion = async (actuacionData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    let actuacionObj = {
      
    
      hora: actuacionData.hora,
      fecha: actuacionData.fecha,
      descripcion: actuacionData.descripcion,
      lugar: actuacionData.lugar,
      direccion: actuacionData.direccion,
    };
    return await db.query(
      "INSERT INTO actuaciones SET ? ",
      actuacionObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};



actuacionQueries.getActuacionId = async (id) => {
    // Conectamos con la base de datos y buscamos si existe el usuario por el email.
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        "SELECT * FROM actuaciones WHERE id = ? AND eliminado='0'",
        id,
        "select",
        conn
      );
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };


  
actuacionQueries.getActuacion = async () => {
    // Conectamos con la base de datos y buscamos si existe la imagen por el id.
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        "SELECT * FROM actuaciones WHERE eliminado='0'",[],
        
        "select",
        conn
      );
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };
  




  actuacionQueries.deleteActuaciones = async (id, dataObj) => {
    // Conectamos con la base de datos y eliminamos el usuario por su id.
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        "UPDATE actuaciones SET ? WHERE id = ?",
        [dataObj, id],
        "update",
        conn
      );
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };



// Modificar un usuario por su id
actuacionQueries.updateActuacion = async (id, actuacionData) => {

  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos que nos puede llegar del usuario a modificar en la base de datos.
    // Encriptamos la password con md5 si nos llega por el body, sino la declaramos como undefined
    // y usamos la libreria momentjs para actualizar la fecha.
    let actuacionObj = {
      hora: actuacionData.hora,
      lugar: actuacionData.lugar,
      fecha: actuacionData.fecha,
      descripcion: actuacionData.descripcion,
      direccion: actuacionData.direccion,
    };
    // Eliminamos los campos que no se van a modificar (no llegan por el body)


    return await db.query(
      "UPDATE actuaciones SET ? WHERE id = ?",
      [actuacionObj, id],
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};




export default actuacionQueries;
