import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (

<div>
  
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <NavLink className="navbar-brand" to="/">Meliscript</NavLink>
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
        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Camp
        </NavLink>
        <ul className="dropdown-menu">
          <li><NavLink className="dropdown-item" to="/testimonios">Testimonios</NavLink></li>
          <li><NavLink className="dropdown-item" to="/contador">Contador de clicks</NavLink></li>
          <li><NavLink className="dropdown-item" to="/calculadora">Calculadora</NavLink></li>
          <li><NavLink className="dropdown-item" to="/lista">Lista de tareas</NavLink></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Arturo
        </NavLink>
        <ul className="dropdown-menu">
          <li><NavLink className="dropdown-item" to="/">1</NavLink></li>
          <li><NavLink className="dropdown-item" to="/">2</NavLink></li>
          <li><NavLink className="dropdown-item" to="/">3</NavLink></li>
          <li><NavLink className="dropdown-item" to="/">4  </NavLink></li>
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
