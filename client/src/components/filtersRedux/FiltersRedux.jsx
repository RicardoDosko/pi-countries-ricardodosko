import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  filterByContinent,
  orderByPopulation,
  resetFilters,
  orderByAlphabetic,
  filterByActivity,
  getActivities,
} from "../../redux/actions";
import "./filters.css";

export const FiltersRedux = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const acts = useSelector((state) => state.allActivities);

  useEffect(() => {
    dispatch(getActivities(acts));
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      dispatch(orderByPopulation(value));
      setCurrentPage(1);
    } else if (name === "filter") {
      dispatch(filterByContinent(value));
      setCurrentPage(1);
    } else if (name === "act") {
      dispatch(filterByActivity(value));
      setCurrentPage(1);
      console.log(value);
    } else {
      dispatch(orderByAlphabetic(value));
      setCurrentPage(1);
    }
  };

  const handleClick = () => {
    dispatch(resetFilters());
    setCurrentPage(1);
  };

  return (
    <div className="filt">
      <select onChange={handleChange} name="order">
        <option>Filter by population</option>
        <option value="Ascendente">Ascendent</option>
        <option value="Descendente">Descendent</option>
      </select>
      <select onChange={handleChange} name="filter">
        <option>Filter by continent</option>
        <option value="All">All</option>
        <option value="Antarctica">Antartida</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select onChange={handleChange}>
        <option>Sort alphabetically</option>
        <option value="Asc">A - Z</option>
        <option value="Desc">Z - A</option>
      </select>
      <select onChange={handleChange} name="act">
        <option>Filter by activity</option>
        <option value="All">All</option>
        {acts.map((a, key) => (
          <option value={a.name} key={key}>
            {a.name}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
};
