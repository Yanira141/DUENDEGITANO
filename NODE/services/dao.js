import productQueries from "./mysql_queries/product_queries.js";
import userQueries from "./mysql_queries/user_queries.js";
import cursoQueries from "./mysql_queries/curso_queries.js";
import actuacionQueries from "./mysql_queries/actuacion_queries.js";
import imagenesQueries from "./mysql_queries/imagenes_queries.js";
import grupoQueries from "./mysql_queries/grupo_queries.js";

const dao = {};


dao.getUserByEmail = async (email) => await userQueries.getUserbyEmail(email);

dao.getUserById = async (id) => await userQueries.getUserById(id);
dao.getUser = async () => await userQueries.getUser();

dao.addUser = async (userData) => await userQueries.addUser(userData);
dao.email = async (userData) => await userQueries.email(userData);

dao.updateUser = async (id, userData) => await userQueries.updateUser(id, userData);
dao.deleteUser = async (id, userData) => await userQueries.deleteUser(id, userData)

dao.addImage = async (imageData) => await productQueries.addImage(imageData);

dao.getImageById = async (id) => await productQueries.getImageById(id);

dao.addProduct = async (productData) => await productQueries.addProduct(productData);

dao.getProduct = async () => await productQueries.getProduct();

dao.getProductId = async (id) => await productQueries.getProductId(id);


//DAO DE CURSOS

dao.getCursoByNombre = async (nombre) => await cursoQueries.getCursoByNombre(nombre);
dao.addCurso = async (cursoData) => await cursoQueries.addCurso(cursoData);
dao.getCursobyId = async (id) => await cursoQueries.getCursoByNombre(id);
dao.getCurso = async () => await cursoQueries.getCurso();
dao.getCursoId = async (id) => await cursoQueries.getCursoId(id);
dao.cursosDetalle = async (cursoData) => await cursoQueries.cursosDetalle(cursoData);
dao.deleteCursoDetalle = async (id, idusuario) => await cursoQueries.deleteCursoDetalle(id,idusuario)
dao.deleteCurso = async (id, cursoData) => await cursoQueries.deleteCurso(id, cursoData)
dao.buttonDeleteCurso = async (id, idusuario) => await cursoQueries.buttonDeleteCurso(id, idusuario)

//DAO DE ACTUACIONES

dao.getActuacionByLugar = async (lugar) => await actuacionQueries.getActuacionByLugar(lugar);
dao.addActuacion = async (actuacionData) => await actuacionQueries.addActuacion(actuacionData);
dao.getActuacionbyId = async (id) => await actuacionQueries.getActuacionByLugar(id);
dao.getActuacion = async () => await actuacionQueries.getActuacion();
dao.deleteActuaciones = async (id, actuacionData) => await actuacionQueries.deleteActuaciones(id, actuacionData)


//dao imagenes

dao.getImagenes = async () => await imagenesQueries.getImagenes();
dao.getImagenesId = async (id) => await imagenesQueries.getImagenesId(id);


dao.getGrupoByNombre = async (nombre) => await grupoQueries.getGrupoByNombre(nombre);
dao.addGrupo = async (grupoData) => await grupoQueries.addGrupo(grupoData);
dao.getGrupobyId = async (id) => await grupoQueries.getGrupobyId(id);
dao.getGrupo = async () => await grupoQueries.getGrupo();
dao.getGrupoId = async (id) => await grupoQueries.getGrupoId(id);
dao.grupoDetalle = async (grupoData) => await grupoQueries.grupoDetalle(grupoData);
dao.deleteGrupoDetalle = async (id, idusuario) => await grupoQueries.deleteGrupoDetalle(id,idusuario)
dao.buttonDeleteGrupo = async (id, idusuario) => await grupoQueries.buttonDeleteGrupo(id, idusuario)
dao.deleteGrupo = async (id, grupoData) => await grupoQueries.deleteGrupo(id, grupoData)

export default dao;
