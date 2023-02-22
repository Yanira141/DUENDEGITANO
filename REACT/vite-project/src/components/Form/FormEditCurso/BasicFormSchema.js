import * as yup from "yup";



export const BasicFormSchema = yup.object().shape({
  nombre: yup.string(),
  hora: yup.string(),
  fecha: yup.number(),
  profesor: yup.string(),
  precio: yup.string(),
  descripcion: yup.string(),
  
});
