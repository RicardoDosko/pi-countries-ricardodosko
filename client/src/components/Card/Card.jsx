/* eslint-disable react/prop-types */
import style from "./card.module.css";

function Card({ id, nombre, continente, img_band }) {
  return (
    <div id="card1" className={style.card}>
      <img src={img_band} alt="" />
      <div className={style.card__content}>
        <p className={style.card__title}>Pais: {nombre}</p>
        <p className={style.card__description}>Continente: {continente}</p>

        <p className={style.card__description}>id:{id}</p>
      </div>
    </div>
  );
}

export default Card;
