
import "../../assets/css/main.css";
import { Link } from "react-router-dom";
import ButtonWhatssap from "../ButtonWhatssap/ButtonWhatssap";

export default function Footer(){
    return(
        <>
        <div >
        <footer id="footer" className="footer">
      
          <div className="footer-content position-relative d-flex ">
            <div className="container">
              <div className="row justify-content-between">
      
                <div className="col-lg-4 col-md-6">
                  <div className="footer-info">
                    <h3>Duende Gitano</h3>
                    <p>
                    C. Manuel Giménez Lombardo, 1, 29014 Málaga
                    </p>
                    <p>Siguenos en Instagram y Facebook:</p>
                    <div className="social-links d-flex mt-3">
                      <a href="https://www.facebook.com/profile.php?id=100075474896383" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
                      <a href="https://www.instagram.com/academia_eduandanza/" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
                    </div>
                  </div>
              
                </div>
                 
                <ButtonWhatssap/>
      
  

      
              </div>
            </div>
          </div>
      
          <div className="footer-legal text-center position-relative">
            <div className="container">
              <div className="copyright">
                &copy; Copyright <strong><span><Link className="text-decoration-none text-dark linkcopy" to="/">Duende Gitano</Link></span></strong>. All Rights Reserved
              </div>
              <div className="credits">
               
                Designed by Yanira González
              </div>
            </div>
          </div>
      
        </footer>
        <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</div>

        </>
    )
}