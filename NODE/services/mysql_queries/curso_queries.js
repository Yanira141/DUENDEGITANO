import db from "../mysql.js";

const cursoQueries = {};

cursoQueries.getCursoByNombre = async (nombre) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM curso WHERE nombre = ?",
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

cursoQueries.addCurso = async (cursoData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    let cursoObj = {
      nombre: cursoData.nombre,
      precio: cursoData.precio,
      hora: cursoData.hora,
      fecha: cursoData.fecha,
      descripcion: cursoData.descripcion,
      profesor: cursoData.profesor,
    };
    return await db.query("INSERT INTO curso SET ? ", cursoObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

cursoQueries.cursosDetalle = async (cursoData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    return await db.query(
      "INSERT INTO cursosdetalle SET ? ",
      cursoData,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

cursoQueries.getCursoId = async (id) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM curso WHERE id = ?",
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

cursoQueries.getCurso = async () => {
  // Conectamos con la base de datos y buscamos si existe la imagen por el id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM curso ",
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

export default cursoQueries;
