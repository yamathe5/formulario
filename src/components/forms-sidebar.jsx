import { useState } from "react";
import "./forms-sidebar.css";
import { Link } from "react-router-dom";

function FormsSidebar() {
  const [folders, setFolders] = useState([
    { name: "Folder 1" },
    { name: "Folder 2" },
  ]);
  const folder = { name: "Todos mis formularios" };
  const [newFolderName, setNewFolderName] = useState("");

  const handleAddFolder = () => {
    if (newFolderName) setFolders([...folders, { name: newFolderName }]);
    setNewFolderName("");
  };

  const handleDeleteFolder = (index) => {
    const filteredFolders = folders.filter((folder, i) => i != index);
    setFolders(filteredFolders);
  };

  return (
    <div className="sidebar-container">
      <div className="folders-section">
        <h2>Carpetas</h2>
        <ul className="folders">
          <Link to="/my-forms">
            <div className="folder__item">
              <li>{folder.name}</li>
            </div>
          </Link>
          {folders.map((folder, index) => (
            <div key={index} className="folder__item">
              <li>{folder.name}</li>
              <p onClick={() => handleDeleteFolder(index)}>🗑️</p>
            </div>
          ))}
        </ul>
        <input
          className="create-folder-input"
          type="text"
          placeholder="Nueva carpeta"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
        />
        <button onClick={handleAddFolder}>Crear Carpeta</button>
      </div>

      <div className="archived-section">
        <h2>Archivados</h2>
        <Link to="/form-archive">
          <div className="folder__item">
            <p>Formularios Archivados</p>
          </div>
        </Link>
      </div>

      <div className="deleted-section">
        <h2>Eliminados</h2>
        <Link to="/form-trash">
          <div className="folder__item">
            <p>Formularios Eliminados</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FormsSidebar;
