import React, { useState } from 'react';
 import './my-form-page.css'; // Asegúrate de crear este archivo CSS
import Sidebar from '../components/form-sidebar';

export default function MyFormPage() {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="container">
      <header>
        <div className="left">Formularios - "nombre de mi formulario"</div>
        <div className="center">
          <button>Crear</button>
          <button>Configuraciones</button>
          <button>Conectar</button>
          <button>Resultados</button>
          <button>Compartir</button>
        </div>
        <div className="right">
          <button>Guardar</button>
        </div>
      </header>

      <main>
        <Sidebar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        <div className={`content ${selectedSection ? 'expanded' : ''}`}>
          {/* Aquí va el contenido principal */}
        </div>
      </main>
    </div>
  );
}


