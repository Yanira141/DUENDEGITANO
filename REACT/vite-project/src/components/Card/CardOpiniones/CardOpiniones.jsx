export default function CardOpiniones({ descripcion }) {
  console.log(descripcion);
  return (
    <>
      <div className="container pt-5">
        <div className="notice d-flex flex-column">
          <p>
            <i className="bi bi-pencil"></i>
            {descripcion}
          </p>
        </div>
      </div>
    </>
  );
}
