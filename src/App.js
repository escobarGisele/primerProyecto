
import React, { Fragment } from "react";
import Characters from "./components/Characters";
import "../src/styles/main.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div className="App">
   <NavBar/>
      <Routes>
     
        <Route path="/" component={<Home/>} />
        <Route path="/characters" component={<Characters/>} />
        <Route path="/formulario" component={<Form/>} />
      </Routes>
    </div>
  );
};

export default App;
