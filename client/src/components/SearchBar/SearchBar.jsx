/* eslint-disable no-const-assign */
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
//redux
import { getAllCountries, getCountryByname } from "../../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  function searchCountry() {
    if (searchTerm === "") {
      dispatch(getAllCountries());
    } else {
      dispatch(getCountryByname(searchTerm));
    }
  }

  return (
    <div className={style.containerSB}>
      <input
        type="text"
        name="searchCountry"
        placeholder="Buscar País"
        className={style.inputSB}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={style.buttonSB} onClick={searchCountry}>
        Search
        <div className={style.icon}>
          <svg height="24" width="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
}
