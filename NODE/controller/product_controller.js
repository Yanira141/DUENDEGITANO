import { currentDir } from "../index.js";
import dao from "../services/dao.js";

// Definimos la constante __dirname donde obtendremos la ruta absoluta
const __dirname = currentDir().__dirname;

const controller = {};

controller.uploadImage = async (req, res) => {
  try {
    // Controlamos cuando el objeto files sea null
    if (req.files === null) return;
    console.log(req.files);
    // Controlamos si nos viene algún tipo de archivo en el objeto files
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No se ha cargado ningún archivo");
    }
    // 1 archivo [{}] , >1 archivo [[{},{},...]]
    // Obtenemos un array de objetos con todas las imagenes
    const images = !req.files.imagen.length
      ? [req.files.imagen]
      : req.files.imagen;
    // Recorremos el array para procesar cada imagen
    images.forEach(async (image) => {
      // Ya podemos acceder a las propiedades del objeto image.
      // Obtenemos la ruta de la imagen.
      let uploadPath ="/public/images/products/" + image.name;
      // Usamos el método mv() para ubicar el archivo en nuestro servidor
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      await dao.addImage({ name: image.name, path: uploadPath });
    });
    return res.send("Imagen subida!");
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

// Controlador para obtener una imagen por su id
controller.getImage = async (req, res) => {
  try {
    // Buscamos si el id de la imagen existe en la base de datos
    const image = await dao.getImageById(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (image.length <= 0) return res.status(404).send("La imagen no existe");
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send({ path: image[0].path });
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.addProduct = async (req, res) => {
  const { nombre, precio, stock } = req.body;

  if (!nombre || !precio || !stock)
    return res.status(400).send("Error al recibir el body");

  const addProduct = await dao.addProduct(req.body);
  if (addProduct) {
    return res.sendStatus(200);
  } else {
    return Error;
  }
};


controller.getProduct = async (req, res) => {
  try {
   
    const product = await dao.getProduct(req.params.id);
    
    if (product.length <= 0) return res.status(404).send("El producto no existe");

    return res.send(product );
  } catch (e) {
    console.log(e.message);
  
  }
};



controller.getProductId = async (req, res) => {
  try {
   
    const product = await dao.getProductId(req.params.id);
    
    if (product.length <= 0) return res.status(404).send("El producto no existe");

    return res.send(product[0] );
  } catch (e) {
    console.log(e.message);
  
  }
};

export default controller;
