import * as yup from "yup";



export const BasicFormSchema = yup.object().shape({
  descripcion: yup.string().max(150, "El comentario no puede superar los 150 caracteres"),
 
  
});
