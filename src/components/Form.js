import React, { useState } from "react";
import "../styles/main.css";

function Form() {
  const [name, setName] = useState("");
  function addName(text) {
    setName(text.target.value);
  }
  const [email, setEmail] = useState("");
  function addEmail(text) {
    setEmail(text.target.value);
  }
  const [mensaje, setMensaje] = useState("");
  function addMensaje(text) {
    setMensaje(text.target.value);
  }

  function mostrarDatos(e) {
    e.preventDefault();
    const datos = {
      name: name,
      email: email,
      mensaje: mensaje,
    };
    console.log(datos);
  }

  console.log(name);
  console.log(email);
  console.log(mensaje);
  return (
    <div>
      <form  className="form">
        <label className="label">Nombre</label>
        <input
          onChange={addName}
          type="text"
          name="name"
          autoComplete="off"
        ></input>
        <label className="label">Email</label>
        <input
          onChange={addEmail}
          type="email"
          name="email"
          autoComplete="off"
        ></input>
        <label className="label">Mensaje</label>
        <textarea
          onChange={addMensaje}
          name="mensaje"
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={mostrarDatos}>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
