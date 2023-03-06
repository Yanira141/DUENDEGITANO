export default function Blockquote({frase, nombre}){
    return(
        <>
        <figure>
  <blockquote class="blockquote">
    <p>{frase}</p>
  </blockquote>
  <figcaption class="blockquote-footer">
     <cite title="Source Title">{nombre}</cite>
  </figcaption>
</figure>
        </>
    )
}