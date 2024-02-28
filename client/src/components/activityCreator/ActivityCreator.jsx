import { useEffect, useState } from "react";
import { Validation } from "./Validation";
import "./activity.css";
import { useDispatch } from "react-redux";
import { postActivity } from "../../redux/actions";

const ActivityCreator = () => {
  const dispatch = useDispatch();
  // ? --------------------------------------------------------------------ESTADOS

  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const select = async () => {
      const api = await fetch("http://localhost:3001/countries");
      const data = await api.json();
      setPaises(data);
    };
    select();
  }, []);

  const [act, setAct] = useState({
    name: "",
    difficulty: "",
    season: "",
    duration: "",
    countries: [],
  });

  const [error, setError] = useState({
    name: "",
    duration: "",
  });

  // ? --------------------------------------------------------------------CONTROLADORES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAct({ ...act, [name]: value });
    setError(
      Validation({
        ...act,
        [name]: value,
      })
    );
  };

  const changecountries = (e) => {
    const { value } = e.target;
    setAct({ ...act, countries: [...act.countries, value] });
  };

  const deletecountries = (i) => {
    setAct({
      ...act,
      countries: act.countries.filter((c) => c !== i),
    });
  };

  const changeSeason = (e) => {
    const { value } = e.target;
    setAct({ ...act, season: value });
  };

  const changeDifficulty = (e) => {
    const { value } = e.target;
    setAct({ ...act, difficulty: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !act.name ||
      !act.difficulty ||
      !act.duration ||
      !act.countries ||
      !act.season
    ) {
      alert("Ningún campo puede estar vacío");
    } else {
      await dispatch(postActivity(act));
      setAct({
        name: "",
        duration: "",
        season: "",
        difficulty: "",
        countries: [],
      });
      alert("La actividad fue creada exitosamente!");
    }
  };

  // ? --------------------------------------------------------------------RENDERIZADO

  return (
    <section className="act">
      <h1>Create your activity!</h1>
      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input
          className={error.name ? "bad" : "good"}
          name="name"
          type="text"
          value={act.name}
          onChange={handleChange}
        ></input>
        {error.name && <p>{error.name}</p>}

        <label>Duration:</label>
        <input
          className={error.duration ? "bad" : "good"}
          name="duration"
          type="text"
          value={act.duration}
          onChange={handleChange}
        ></input>
        {error.duration && <p>{error.duration}</p>}

        <div className="selects">
          <select name="season" value={act.season} onChange={changeSeason}>
            <option value="Select a season">Select a season</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>

          <select
            name="difficulty"
            value={act.difficulty}
            onChange={changeDifficulty}
          >
            <option value="Select a difficulty">Select a difficulty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="seleccionados">
          {act.countries.map((e, key) => (
            <div key={key} className="contenedores">
              <button
                key={e.cca3}
                name="countries"
                onClick={() => deletecountries(e)}
              >
                X
              </button>
              <span>{e}</span>
            </div>
          ))}
        </div>
        <div className="selectcountries">
          <select
            className="countries"
            name="countries"
            type="text"
            value={act.countries}
            onChange={changecountries}
          >
            {paises.map((e, key) => (
              <option
                className="paises"
                key={key}
                multiple={true}
                value={e[0].nameCommon}
              >
                {e[0].nameCommon}
              </option>
            ))}
          </select>
        </div>

        <div className="create">
          <button type="submit">Create</button>
        </div>
      </form>
    </section>
  );
};

export default ActivityCreator;
