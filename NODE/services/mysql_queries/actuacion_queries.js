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



actuacionQueries.getActuacionById = async (id) => {
    // Conectamos con la base de datos y buscamos si existe el usuario por el email.
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        "SELECT * FROM actuaciones WHERE id = ?",
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
        "SELECT * FROM actuaciones ",[],
        
        "select",
        conn
      );
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };
  

export default actuacionQueries;
