import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ flag, id, continent, population, nameCommon }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={flag} />
      </div>

      <div className="text">
        <h2>{nameCommon}</h2>
        <p>
          <span>Continent: </span>
          {continent}
        </p>
        <p>
          <span>population: </span>
          {population}
        </p>
        <Link to={`/detail/${id}`}>
          <button>Learn more</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
