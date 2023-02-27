import * as yup from "yup";



export const BasicFormSchema = yup.object().shape({

  password: yup.string(),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password incorrecta")
    .required("Requerido"),
  
});
