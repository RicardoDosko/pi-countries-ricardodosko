import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from './NavBar.module.css';

export default function Nav(){
     return(
          <div className={`${style.navBar} ${style.ContainerNavBar}`}>
               <div className={`${style.container} ${style.navBarDiv}`}>
                    <div>
                         <NavLink to="/" className={style.link}>Countries <span>API</span></NavLink>
                    </div>
                    <div>
                         <NavLink to="/countries" style={({isActive}) => isActive ? {color: '#3CA6A6', fontWeight: '700'} : {color: 'white', fontWeight: '400'}} className={style.link}>Paises</NavLink>
                    </div>
                    <div className={`${style.links}`}>
                         <NavLink to="/addActivity" style={({isActive}) => isActive ? {color: '#3CA6A6', fontWeight: '700'} : {color: 'white', fontWeight: '400'}} className={style.link}>Agregar Actividad</NavLink>
                    </div>
                    <SearchBar className={style.Sbar}/> 
               </div>
               
          </div>
     )
}