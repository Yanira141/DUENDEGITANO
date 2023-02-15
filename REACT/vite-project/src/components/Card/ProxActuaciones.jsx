export default function ProxActuaciones({ actuacion }) {
  return (
    <>
      <div className="card text-bg-dark text-center">
        <img
          src="src/assets/fotos/cristi-rojo.png"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title"><i className="bi bi-geo-alt"></i> {actuacion.lugar}</h5>
          <p className="card-text"><i className="bi bi-pen"></i> {actuacion.descripcion}</p>
          <p className="card-text">
            <small><i className="bi bi-calendar"></i> {actuacion.fecha}</small>
          </p>
          <p className="card-text">
            <small><i className="bi bi-alarm"></i> {actuacion.hora}</small>
          </p>
        </div>
      </div>
    </>
  );
}
