import db from "../mysql.js";
import md5 from "md5";
import utils from "../../utils/utils.js";

const userQueries = {};

userQueries.getUserbyEmail = async (email) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM usuarios WHERE email = ? AND eliminado='0'",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getUserById = async (id) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM usuarios WHERE id = ? AND eliminado='0'",
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

userQueries.addUser = async (userData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    let userObj = {
      nombre: userData.nombre,
      apellido: userData.apellido,
      email: userData.email,
      password: md5(userData.password),
      telefono: userData.telefono,
      idrol: 2,
      //    tsAlta: moment().format("YYYY-MM-DD HH:mm:ss") comentado por que mi tsalta se genera automaticamente con el current
    };
    return await db.query(
      "INSERT INTO usuarios SET ? ",
      userObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.email = async (userData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    let userObj = {
      nombre: userData.nombre,
      email: userData.email,
      mensaje: userData.mensaje,

      //    tsAlta: moment().format("YYYY-MM-DD HH:mm:ss") comentado por que mi tsalta se genera automaticamente con el current
    };
    return await db.query(
      "INSERT INTO consultas SET ? ",
      userObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.deleteUser = async (id, dataObj) => {
  // Conectamos con la base de datos y eliminamos el usuario por su id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "UPDATE usuarios SET ? WHERE id = ?",
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
userQueries.updateUser = async (id, userData) => {
  userData = await utils.removeUndefinedKeys(userData);
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos que nos puede llegar del usuario a modificar en la base de datos.
    // Encriptamos la password con md5 si nos llega por el body, sino la declaramos como undefined
    // y usamos la libreria momentjs para actualizar la fecha.
    let userObj = {
      nombre: userData.nombre,
      apellido: userData.apellido,
      email: userData.email,
      password: userData.password ? md5(userData.password) : undefined,
      descripcion: userData.descripcion,
      telefono: userData.telefono,
    };
    // Eliminamos los campos que no se van a modificar (no llegan por el body)
    userObj = await utils.removeUndefinedKeys(userObj);

    return await db.query(
      "UPDATE usuarios SET ? WHERE id = ?",
      [userObj, id],
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getUser = async () => {
  // Conectamos con la base de datos y buscamos si existe la imagen por el id.
  console.log("not like");
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM usuarios where eliminado = '0' and idrol = '2' and descripcion not like '0'",
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

userQueries.getUserEliminado = async () => {
  // Conectamos con la base de datos y buscamos si existe la imagen por el id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT nombre, apellido, email, telefono, if(eliminado = '0' , 'Activo', 'No activo') as estado  FROM usuarios where idrol = 2",
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

// userQueries.getUser = async () => {
//   // Conectamos con la base de datos y buscamos si existe la imagen por el id.
//   let conn = null;
//   try {
//     conn = await db.createConnection();
//     return await db.query(
//       "SELECT * FROM usuarios where eliminado = '0' and idrol = '2'",
//       [],

//       "select",
//       conn
//     );
//   } catch (e) {
//     throw new Error(e);
//   } finally {
//     conn && (await conn.end());
//   }
// };

export default userQueries;
