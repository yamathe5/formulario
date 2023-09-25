
export default function Card({ title, respuestas, star }) {
    return (
      <div className="card">
        {star && <div className="star">⭐</div>}
        <div className="title">{title}</div>
        <div className="bottom">
          <div className="responses">Respuestas: {respuestas}</div>
          <div className="options">⋮</div>
        </div>
      </div>
    );
  }
  