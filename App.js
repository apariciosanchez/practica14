import React, { useState } from 'react';

function App() {
  // Estado para el nombre y el mensaje
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("Hola Bienvenidos");

  // Función para manejar cambios en el campo de texto
  const manejarCambios = (e) => {
    setNombre(e.target.value);
  };

  // Función para obtener el saludo según la hora
  const obtenerSaludo = () => {
    const hora = new Date().getHours(); // Se corrige la forma de obtener la hora
    if (hora < 12) return "¡Buenos días!";
    else if (hora < 18) return "¡Buenas tardes!";
    else return "¡Buenas noches!";
  };

  // Función para actualizar el mensaje de saludo
  const actualizarMensaje = () => {
    const saludo = obtenerSaludo();
    setMensaje(`${saludo}, ${nombre}!`);
  };

  return (
    <div style={{textAlign: 'center', padding: '20px'}}>
      <h1>{mensaje}</h1>

      <imput 
      type="text"
      placeholder="imgresa tu nombre" 
      value={nombre} 
      onChange={manejarCambios} 
      style={{padding: '8px', fontSize: '16px'}}
      />

      <button onClick={actualizarMensaje}
      style={{marginLeft: '10px', padding: '8px', fontSize: '16px'}}
      >
      saludar
      </button>

      {nombre === "" && <p style={{fontStyle: 'italic'}}>¡Espero tengas un gran dia</p>}
      
    </div>
  )
  
}

export default App;
