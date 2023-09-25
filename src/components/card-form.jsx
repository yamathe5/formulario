import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './card-form.css';

export default function Card({ id, title, respuestas, star }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú desplegable
  
  const handleCardClick = () => {
    navigate(`/my-form/${id}`);
  };
  
  const toggleMenu = (e) => {
    e.stopPropagation(); // Detiene la propagación del evento click para que no se dispare handleCardClick
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="card" onClick={handleCardClick}>
      {star ? <div className="star">⭐</div> : <div className="star">#</div>}
      <div className="title">{title}</div>
      <div className="bottom">
        <div className="responses">Respuestas: {respuestas}</div>
        <div className="options" onClick={toggleMenu}>⋮
          {menuOpen && (
            <div className="menu">
              <div className="menu-item">Editar</div>
              <div className="menu-item">Mover a</div>
              <div className="menu-item">Duplicar</div>
              <div className="menu-item">Respuestas</div>
              {/* Más opciones del menú según sea necesario */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
