import * as yup from "yup";



export const BasicFormSchema = yup.object().shape({
  hora: yup.string(),
  fecha: yup.string(),
  direccion: yup.string(),
  lugar: yup.string(),
  descripcion: yup.string(),
  
});
