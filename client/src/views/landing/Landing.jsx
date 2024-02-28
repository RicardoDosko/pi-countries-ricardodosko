import { useState } from "react";
import mapsLogo from "../../assets/earth-realistic.webp";
import style from "./landing.module.css";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

function Landing() {
  const [visitors, setvisitors] = useState(0);
  return (
    <>
      <NavLink
        to="/home"
        rel="noreferrer"
        onClick={() => setvisitors((visitors) => visitors + 1)}
      >
        <img src={mapsLogo} className={style.logo} alt="logo" />
      </NavLink>
      <div>
        <div className="visitors"> visitors: {visitors}</div>
        <h2>
          Cuando te detienes sobre el mundo, todo gira a tu alrededor. Haz clic
          para entrar.
        </h2>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Landing;
