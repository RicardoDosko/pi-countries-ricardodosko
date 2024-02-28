import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  const [country, setCountry] = useState({});
  const [activities, setActivities] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/countries/id/` + id)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountry(data[0]);
          setActivities(data[1]);
        } else {
          alert("No se encontró un país con ese id");
        }
      })
      .catch((err) => window.alert("No existe pais con ese id"));
  }, [id]);
  console.log(country);
  console.log(activities);

  return (
    <section className="detail">
      <div className="detail2">
        {Object.keys(country).length > 0 && ( // Verifica si el objeto country no está vacío
          <div className="country">
            <div className="left">
              {country.flag && <img src={country.flag} alt="Flag" />}
            </div>
            <div className="right">
              <div className="column">
                {country.nameOfficial && <h1>{country.nameOfficial}</h1>}
                <div>
                  {country.cca3 && (
                    <p>
                      <span>Id: </span>
                      {country.cca3}
                    </p>
                  )}
                  {country.continent && <h2>{country.continent}</h2>}
                  {country.capital && (
                    <p>
                      <span>Capital: </span>
                      {country.capital}
                    </p>
                  )}
                  {country.area && (
                    <p>
                      <span>Area: </span>
                      {country.area}
                    </p>
                  )}
                  {country.subregion && (
                    <p>
                      <span>Subregion: </span>
                      {country.subregion}
                    </p>
                  )}
                  {country.population && (
                    <p>
                      <span>Population: </span>
                      {country.population}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {activities.length > 0 && ( // Verifica si el array activities tiene elementos
          <div className="activities">
            <h3>Activities:</h3>
            <ul>
              {activities.map((activity) => (
                <div>
                  <li className="actName" key={activity.id}>
                    {activity.name} -
                  </li>
                  <li>Duration: {activity.duration}</li>
                  <li>Difficulty: {activity.difficulty}</li>
                  <li>Season: </li>
                  <li>{activity.season}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Detail;
