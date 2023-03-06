export default function Blockquote({frase, nombre}){
    return(
        <>
        <figure>
  <blockquote className="blockquote">
    <p>{frase}</p>
  </blockquote>
  <figcaption className="blockquote-footer">
     <cite title="Source Title">{nombre}</cite>
  </figcaption>
</figure>
        </>
    )
}