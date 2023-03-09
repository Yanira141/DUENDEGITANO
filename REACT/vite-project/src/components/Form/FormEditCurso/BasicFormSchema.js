import * as yup from "yup";



export const BasicFormSchema = yup.object().shape({
  nombre: yup.string(),
  hora: yup.string(),
  fecha: yup.string(),
  profesor: yup.string(),
  precio: yup.string(),
  descripcion: yup.string(),
  
});
