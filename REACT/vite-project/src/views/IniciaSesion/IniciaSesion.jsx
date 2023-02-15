import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import FormLogin from "../../components/Form/FormLogin"


export default function IniciaSesion(){
    return(
        <>
        <Breadcrumbs title={"Iniciar sesión"} link={"Iniciar sesión"}/>
            <FormLogin/>
        </>
    )
}