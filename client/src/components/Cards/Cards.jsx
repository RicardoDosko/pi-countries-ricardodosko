import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import Card from "../Card/card";
import style from "./cards.module.css";

function Cards() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  useEffect(() => {
    setCurrentPage(1); //
  }, [countries]);

  // Lógica para determinar los índices de las cards a mostrar en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = countries.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(countries.length / cardsPerPage);
  // Lógica para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Verificar si countries es undefined o está vacío
  if (!countries || countries.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.cards__content}>
      {currentCards.map((data, index) => (
        <Card
          key={index}
          id={data.id}
          nombre={data.nombre}
          continente={data.continente}
          img_band={data.img_band}
        />
      ))}
      {/* paginacion */}
      <div>
        <div className={style.pagination}>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastCard >= countries.length}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
