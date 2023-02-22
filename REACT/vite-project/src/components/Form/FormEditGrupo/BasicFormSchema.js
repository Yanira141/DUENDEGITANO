import * as yup from "yup";



export const BasicFormSchema = yup.object().shape({
  nombre: yup.string(),
  horario: yup.string(),
  descripcion: yup.string(),
 
  
});
