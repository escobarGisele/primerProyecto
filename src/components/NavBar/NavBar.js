import React from "react";
import { Link } from "react-router-dom";

import "../../styles/main.css";

const NavBar = () => {
  return (
    <div className="header">
      <Link to='/' className="headerLink">Home</Link>
      <Link to='/form' className="headerLink">Formulario</Link>
      <Link to='/personajes' className="headerLink">Personajes</Link>
      <Link to='/usuarios' className="headerLink">Usuarios</Link>

    </div>
      
  );
};

export default NavBar;
