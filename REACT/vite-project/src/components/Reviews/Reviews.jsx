import "./Reviews.css";

export default function Reviews() {
  return (
    <>
      <div className="pb-5 slidereseñas container">
        <div className="pic-ctn">
          <img src="reseñas/reseña1.png" alt="" className="pic" />
          <img src="reseñas/reseña2.png" alt="" className="pic" />
          <img src="reseñas/reseña3.png" alt="" className="pic" />
          <img src="reseñas/reseña4.png" alt="" className="pic" />
          <img src="reseñas/reseña5.png" alt="" className="pic" />
        </div>
        <div className="">
          <a href="https://www.google.com/search?q=academia+de+danza+cristina+marquez&rlz=1C1VDKB_esES1003ES1003&oq=a&aqs=chrome.0.69i59l3j69i60l4j5.1491j0j7&sourceid=chrome&ie=UTF-8#lrd=0xd72f72ac15b2c4f:0x1dd3c4b148a393c,1,,,,">
            <button className="btn-get-started text-dark text-decoration-none d-flex row">
              VER MÁS
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
