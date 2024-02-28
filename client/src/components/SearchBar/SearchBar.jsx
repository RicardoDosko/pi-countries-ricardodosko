import { useState, useEffect } from "react";
import "./searchBar.css";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";

export const SearchBar = ({ setCurrentPage }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getCountryByName(input));
    console.log(input);
  }, [input]);

  return (
    <div className="search">
      <input
        value={input}
        onChange={onSearch}
        placeholder="Search for your country..."
      ></input>
    </div>
  );
};
