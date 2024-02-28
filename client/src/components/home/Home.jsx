import Cards from "../cards/Cards";
import Pagination from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FiltersRedux } from "../filtersRedux/FiltersRedux";
import { SearchBar } from "../searchBar/SearchBar";
import { setAllCountries } from "../../redux/actions";
import "../filtersRedux/filters.css";

const Home = () => {
  // ? ----------------------------------------------------FILTROS

  const countriesFilt = useSelector((state) => state.countries);
  const countries = useSelector((state) => state.allCountries);

  const dispatch = useDispatch();
  const totalPagCountries = countriesFilt.length;
  const [countriesPerPage, setCountriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(setAllCountries());
    setCurrentPage(1);
  }, [dispatch]);

  let currentCountries;
  let totalCountries;

  if (countriesFilt.length >= 1) {
    totalCountries = countries.length;
    const lastIndex = currentPage * countriesPerPage;
    const firstIndex = lastIndex - countriesPerPage;
    currentCountries = countriesFilt.slice(firstIndex, lastIndex);
  } else {
    totalCountries = countries.length;
    const lastIndex = currentPage * countriesPerPage;
    const firstIndex = lastIndex - countriesPerPage;
    currentCountries = countries.slice(firstIndex, lastIndex);
  }

  return (
    <section className="home container">
      <SearchBar setCurrentPage={setCurrentPage}></SearchBar>
      <FiltersRedux setCurrentPage={setCurrentPage}></FiltersRedux>
      <Cards countries={currentCountries}></Cards>
      <Pagination
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCountries={totalPagCountries}
      ></Pagination>
    </section>
  );
};

export default Home;
