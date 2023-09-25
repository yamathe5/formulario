import React from 'react';
import Sidebar from '../components/sidebar.jsx';
import Card from '../components/card-form.jsx';
import './my-forms-page.css';

export default function MyFormsPage() {
  const [forms, setForms] = React.useState([
    { title: "Mi tutulo 1", respuestas: 1, star: true },
    { title: "Mi tutulo 2", respuestas: 22, star: false }
  ]);

  // Usamos useEffect para realizar acciones cuando el componente se monta
  React.useEffect(() => {
    // Aquí puedes realizar acciones adicionales si es necesario
    // Por ejemplo, podrías cargar los datos de los formularios desde una API
  }, []); // El array vacío indica que este useEffect se ejecutará solo una vez, cuando el componente se monte

  return (
    <div className="main-container">
      <Sidebar />
      <div className='main-content'>
        <h1>Formularios</h1>
        <button>Crear Formulario</button>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            // Mapeamos sobre el estado 'forms' para renderizar cada tarjeta
            forms.map((form, index) => (
              <Card 
                key={index} 
                title={form.title} 
                respuestas={form.respuestas} 
                star={form.star} 
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}