import "./pag.css";

export default function Pagination({
  countriesPerPage,
  totalCountries,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  /*   const onPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    const allPaginate = totalCountries / countriesPerPage;
    if (currentPage) {
      setCurrentPage(currentPage + 1);
    }
  }; */

  /*   const onPage = (e) => {
    addEventListener("click", () => setCurrentPage(e.target.value));
    setCurrentPage(e.target.value);
    console.log("n: ", e.target.value);
    console.log("curr: ", currentPage);
  }; */
  const onPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPage = (e) => {
    setCurrentPage(Number(e.target.value));
    console.log("n: ", e.target.value);
    console.log("curr: ", currentPage);
  };

  return (
    <article className="pagination" key={currentPage}>
      <button
        className={currentPage === 1 ? "is_disabled" : "prevNext"}
        onClick={onPrevPage}
      >
        Prev
      </button>
      {pageNumbers.map((numPag) => (
        <button
          value={numPag}
          key={numPag}
          className={numPag === currentPage ? "is_current" : "num"}
          onClick={onPage} // Pasa el número de página como argumento
        >
          {numPag}
        </button>
      ))}
      <button
        className={
          currentPage >= pageNumbers.length ? "is_disabled" : "prevNext"
        }
        onClick={onNextPage}
      >
        Next
      </button>
    </article>
  );
}
