import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (

<div>
  
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <NavLink className="navbar-brand" to="/">MeliB</NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/about">Acerca de</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/formulario">Formulario</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/blog">Blog</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/proyectos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         FreeCodeCamp
        </NavLink>
        <ul className="dropdown-menu">
          <li><NavLink className="dropdown-item" to="/testimonios">Testimonios</NavLink></li>
          <li><NavLink className="dropdown-item" to="#">Segundo Proyecto action</NavLink></li>
          <li><NavLink className="dropdown-item" to="#">Tercer proyecto</NavLink></li>
        </ul>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="#">Iniciar sesión</NavLink>
      </li>
    </ul>
  </div>
</div>

</nav>



</div>

  )
};

export default NavBar;
