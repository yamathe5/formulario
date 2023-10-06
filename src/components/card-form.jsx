import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import PropTypes from 'prop-types';

import './card-form.css';

export default function Card({ id, title, respuestas, star }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú desplegable
  const [starBtn, setStarBtn] = useState(star) 
  const handleCardClick = () => {
    navigate(`/my-form/${id}`);
  };
  const handleCardFavoriteToggleClick = () => {
    setStarBtn((starBtn)=>!starBtn)
  };
  
  const toggleMenu = (e) => {
    e.stopPropagation(); // Detiene la propagación del evento click
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="card">
      <div onClick={handleCardFavoriteToggleClick}>

        {starBtn ? <div className="star">⭐</div> : <div className="star">#</div>}
      </div>
      <div className="title" onClick={handleCardClick}>{title}</div> {/* Asigna handleCardClick aquí */}
      <div className="bottom">
        <div className="responses">Respuestas: {respuestas}</div>
        <div className="options" onClick={toggleMenu}>⋮
          {menuOpen && (
            <div className="menu">
              <div className="menu-item" onClick={handleCardClick}>Editar</div>
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
Card.propTypes = {
  id: PropTypes.number.isRequired, // Assuming that id is a number
  title: PropTypes.string.isRequired, // title should be a string
  respuestas: PropTypes.number, // Assuming that respuestas is a number
  star: PropTypes.bool, // Assuming that star is a boolean
};
