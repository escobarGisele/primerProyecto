
import React, { Fragment } from "react";
import Characters from "./components/Characters";
import "../src/styles/main.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form";
import Home from "./components/home/Home";
import Usuarios from "./components/Usuarios";

const App = () => {
  return (
    <div className="App">
         <NavBar />
      <Routes>
          <Route
            path="*"
            element={<Characters />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/form"
            element={<Form />}
          />
          <Route
            path="/usuarios"
            element={<Usuarios/>}
          />
        
      </Routes>
   {/* <NavBar/>
  
     <Routes>
     <Route path="/" element={<Characters/>} />
         <Route path="/personajes" element={<Characters/>} />
        <Route path="/home" element={ <Home/>} />
        <Route path="/formulario" element={<Form/>} />
      </Routes>  */}
    </div>
  );
};

export default App;
