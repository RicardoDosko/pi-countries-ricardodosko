import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./cards.css";

const Cards = ({ countries }) => {
  return (
    <div className="cards">
      {countries.map((c, key) => {
        let { cca3, nameCommon, continent, flag, population } = c[0];
        return (
          <Card
            key={key}
            id={cca3}
            nameCommon={nameCommon}
            continent={continent}
            flag={flag}
            population={population}
          />
        );
      })}
    </div>
  );
};

export default Cards;
