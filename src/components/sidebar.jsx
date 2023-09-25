export default function Sidebar({ selectedSection, setSelectedSection }) {
    return (
      <div className={`sidebar ${selectedSection ? 'expanded' : ''}`}>
        <button onClick={() => setSelectedSection('elementos')}>Elementos</button>
        <button onClick={() => setSelectedSection('disenio')}>Diseño</button>
        <button onClick={() => setSelectedSection('logica')}>Lógica</button>
        <button onClick={() => setSelectedSection('ai')}>AI</button>
  
        {selectedSection === 'elementos' && <div>Información de Elementos</div>}
        {selectedSection === 'disenio' && <div>Información de Diseño</div>}
        {selectedSection === 'logica' && <div>Información de Lógica</div>}
        {selectedSection === 'ai' && <div>Información de AI</div>}
      </div>
    );
  }
  