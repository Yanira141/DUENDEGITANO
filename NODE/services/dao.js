import productQueries from "./mysql_queries/product_queries.js";
import userQueries from "./mysql_queries/user_queries.js";
import cursoQueries from "./mysql_queries/curso_queries.js";
import actuacionQueries from "./mysql_queries/actuacion_queries.js";
import imagenesQueries from "./mysql_queries/imagenes_queries.js";

const dao = {};


dao.getUserByEmail = async (email) => await userQueries.getUserbyEmail(email);

dao.getUserById = async (id) => await userQueries.getUserById(id);

dao.addUser = async (userData) => await userQueries.addUser(userData);

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


//DAO DE ACTUACIONES

dao.getActuacionByLugar = async (lugar) => await actuacionQueries.getActuacionByLugar(lugar);
dao.addActuacion = async (actuacionData) => await actuacionQueries.addActuacion(actuacionData);
dao.getActuacionbyId = async (id) => await actuacionQueries.getActuacionByLugar(id);
dao.getActuacion = async () => await actuacionQueries.getActuacion();


//dao imagenes

dao.getImagenes = async () => await imagenesQueries.getImagenes();
dao.getImagenesId = async (id) => await imagenesQueries.getImagenesId(id);




export default dao;
