//component
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
//style
import style from "./home.module.css";
function Home() {
  return (
    <div className={style.Home__container}>
      <NavBar className={style.NavBar}></NavBar>
      <Cards className={style.Cards}></Cards>
      <Footer className={style.Footer}></Footer>
    </div>
  );
}

export default Home;
