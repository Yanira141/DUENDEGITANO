import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Calendar from "../../components/Calendar/Calendar";
import Calendario from "../../components/Calendario/Calendario"

export default function Escuela(){
    return(
        <>
        <Breadcrumbs title={"Escuela"} link={"Escuela"}/>
        <Calendar/>
        <Calendario/>
        </>
    )
}