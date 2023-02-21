import db from "../mysql.js";

const grupoQueries = {};

grupoQueries.getGrupobyId = async (nombre) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM grupos WHERE nombre = ?",
      nombre,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

grupoQueries.addGrupo = async (grupoData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    let grupoObj = {
      nombre: grupoData.nombre,
      descripcion: grupoData.descripcion,
      horario: grupoData.horario,
     
    };
    return await db.query("INSERT INTO grupos SET ? ", grupoObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

grupoQueries.grupoDetalle = async (grupoData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    return await db.query(
      "INSERT INTO grupodetalle SET ? ",
      grupoData,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
grupoQueries.getGrupoId = async (id) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM grupos WHERE id = ? AND eliminado='0'",
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

grupoQueries.getGrupo = async () => {
  // Conectamos con la base de datos y buscamos si existe la imagen por el id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM grupos WHERE eliminado='0'",
      [],

      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};



grupoQueries.deleteGrupoDetalle = async (id, idusuario) => {
  // Conectamos con la base de datos y eliminamos el usuario por su id.
  let conn = null
  try {
      conn = await db.createConnection()
      return await db.query('DELETE FROM grupodetalle WHERE idusuario = ? AND idgrupo = ?',[idusuario, id], 'delete', conn)         
  } catch (e) {
      throw new Error(e)
  } finally {
      conn && await conn.end();
  }
};




grupoQueries.buttonDeleteGrupo = async (id, idusuario) => {
  // Conectamos con la base de datos y eliminamos el usuario por su id.
  let conn = null
  try {
      conn = await db.createConnection()
      return await db.query('SELECT * FROM grupodetalle WHERE idusuario = ? AND idgrupo = ?',[idusuario, id], 'select', conn)         
  } catch (e) {
      throw new Error(e)
  } finally {
      conn && await conn.end();
  }
};





grupoQueries.deleteGrupo = async (id, dataObj) => {
  // Conectamos con la base de datos y eliminamos el usuario por su id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "UPDATE grupos SET ? WHERE id = ? AND eliminado='0'",
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






export default grupoQueries;
