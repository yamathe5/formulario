import React, { useState } from 'react';
import './forms-sidebar.css';

function FormsSidebar() {
  const [folders, setFolders] = useState(['Mis Formularios']);
  const [newFolderName, setNewFolderName] = useState('');

  const handleAddFolder = () => {
    if (newFolderName) setFolders([...folders, newFolderName]);
    setNewFolderName(''); // Clear the input after adding
  };

  return (
    <div className="sidebar-container">
      <div className="folders-section">
        <h2>Carpetas</h2>
        <ul>
          {folders.map((folder, index) => (
            <li key={index}>{folder}</li>
          ))}
        </ul>
        <input 
          type="text" 
          placeholder="Nueva carpeta" 
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)} 
        />
        <button onClick={handleAddFolder}>Crear Carpeta</button>
      </div>
      
      <div className="archived-section">
        <h2>Archivados</h2>
        {/* Aquí podrías listar los formularios archivados */}
      </div>
      
      <div className="deleted-section">
        <h2>Eliminados</h2>
        {/* Aquí podrías listar los formularios eliminados */}
      </div>
    </div>
  );
}

export default FormsSidebar;
