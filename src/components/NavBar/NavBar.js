import React from "react";
import { Link } from "react-router-dom";

import "../../styles/main.css";
import Form from "../Form";
const NavBar = () => {
  return (
    <div className="container">
      <header>
        <div className="container">
          {/* <div className="content">
              
                <h1 className= "title">k</h1>
                <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam laudantium doloremque optio accusantium cupiditate et officiis nobis illum distinctio nulla, veritatis neque soluta eius facere delectus, id iusto repellat.
                </p>
            </div> */}
          <nav>
            <ul className="header">
            
              <Link to="/" className="headerLink">
                <li>Home</li>
              </Link>
              <Link to="/form" className="headerLink">
                <li>Formulario</li>
              </Link>
              <Link to="/characters" className="headerLink">
                <li>api </li>
              </Link>
              <Link to="/usuarios" className="headerLink">
                <li>Tabla Usuarios</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
