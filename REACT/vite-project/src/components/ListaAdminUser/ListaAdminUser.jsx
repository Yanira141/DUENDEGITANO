export default function ListaAdminUser({usuarios}){
    return(
        <>

  
      <td scope="col">{usuarios.nombre}</td>
      <td scope="col">{usuarios.apellido}</td>
      <td scope="col">{usuarios.email}</td>
      <td scope="col">{usuarios.telefono}</td>
      <td scope="col">{usuarios.estado}</td>

       
        </>
    )
}