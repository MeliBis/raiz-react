import React from "react";
import { NavLink} from 'react-router-dom'

import style from "../styles.css/footer.css";
const Footer = () => {
  return <>
<div className="p-relative">

    <div className="container-fuid footer">
      <div className="row pb-2 p-5 bg-dark text-white">

        <div className="col-xs.12 col-md-6 col-lg-3">
          <p className="h3"> Melib´s code</p>
          <p className="text-secondary">Puebla,México</p>
        </div>
        <div className="col-xs.12 col-md-6 col-lg-3">
          <p className="h5 mb-3">Proyectos</p>
          <div className="mb-2">
          <NavLink to="/" className="text-secondary text-decoration-none">1 </NavLink>
          </div>
          <div className="mb-2">
          <NavLink to="/" className="text-secondary text-decoration-none"> 2</NavLink>
          </div>
          <div className="mb-2">
          <NavLink to="/" className="text-secondary text-decoration-none">3 </NavLink>
          </div>
          <div className="mb-2">
          <NavLink to="/" className="text-secondary text-decoration-none">4 </NavLink>
          </div>
          <div className="mb-2">
          <NavLink to="/" className="text-secondary text-decoration-none">5 </NavLink>
          </div>
        </div>
        <div className="col-xs.12 mb-3 col-md-6 col-lg-3">
          <p className="h5">Link</p>
          <div className="mb-2">
          <NavLink to="/" className="text-secondary text-decoration-none">Términos y condiciones </NavLink>
          </div>
          <div className="mb-2">
          <NavLink to="/" className="text-secondary text-decoration-none">Políticas de privacidad </NavLink>
          </div>
        </div>
        <div className="col-xs.12 mb-3  col-md-6 col-lg-3">
          <p className="h5">Contacto</p>
          <div className="mb-2">
          <NavLink to="https://github.com/MeliBis" className="text-secondary text-decoration-none">Github </NavLink>
          </div>
          <div className="mb-2">
          <NavLink to="www.linkedin.com/in/melissa-barrios-melibis" className="text-secondary text-decoration-none">LinkedIn </NavLink>
          </div>
          <div className="mb-2">
          <NavLink to="https://www.facebook.com/MeliB" className="text-secondary text-decoration-none">Facebook </NavLink>
          </div>
          <div className="mb-2">
          <NavLink to="https://www.instagram.com/melib_is/" className="text-secondary text-decoration-none">Instagram </NavLink>
          </div>
          <div className="mb-2">
          <NavLink to="https://twitter.com/MeliB_is" className="text-secondary text-decoration-none">Twitter </NavLink>
          </div>
        </div>
        <div className="col-xs-12 pt-4">
          <p className="text-white text-center">Copyright - Todos los derechos reservados</p>
        </div>
      </div>

    </div>
    </div>





  </>;
};

export default Footer;
