import './Card.css';

function Card({ title, value, description }) {

    return (
        <div className="card">

            <h3>{title}</h3>

            <strong>{value}</strong>

            <span>{description}</span>

        </div>
    );
}

export default Card;