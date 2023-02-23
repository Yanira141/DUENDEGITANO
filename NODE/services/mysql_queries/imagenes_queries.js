import db from "../mysql.js";

const imagenesQueries = {};

imagenesQueries.getImagenesId = async (id) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM imagenes WHERE id = ?",
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

imagenesQueries.getImagenes = async () => {
  // Conectamos con la base de datos y buscamos si existe la imagen por el id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM imagenes ",
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

export default imagenesQueries;
