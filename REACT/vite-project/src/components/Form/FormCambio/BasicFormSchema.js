import * as yup from "yup";



export const BasicFormSchema = yup.object().shape({
  nombre: yup.string(),
  apellido: yup.string(),
  telefono: yup.number(),
  email: yup.string().email("Please enter a valid email"),
  password: yup.string(),
  
});
