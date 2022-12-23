import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (

<div>
  
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="*">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#">Features</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled">Disabled</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>



</div>

  )
};

export default NavBar;
