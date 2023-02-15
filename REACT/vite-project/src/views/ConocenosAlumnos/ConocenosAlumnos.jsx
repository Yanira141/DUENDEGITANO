import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardAlumnas from "../../components/Card/CardAlumnas/CardAlumnas";

export default function ConocenosAlumnos(){
    return(
        <>
        <Breadcrumbs title={"Alumnos"} link={"Alumnos"}/>
        <CardAlumnas/>
        </>
    )
}