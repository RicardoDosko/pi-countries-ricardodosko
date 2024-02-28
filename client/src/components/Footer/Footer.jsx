import style from './footer.module.css';
import logoGh from '../../assets/GitHub-logo.png'
export default function Footer(){
     return(
          <div className={`${style.footer} ${style.footerBg}`}>
               <div className={`${style.container} ${style.footerDiv}`}>
                    <div className={style.footerInfo}>
                         <p>Proyecto API <span>Countries</span></p>
                    </div>
                    <div className={style.footerInfo}>
                         <p>Ricardo Dosko - teaching Assistant - Henry</p>
                    </div>
                    <div className={style.footerLink}>                     
                         <a href="https://github.com/RicardoDosko">
                              <img src={logoGh} className={style.logoGit} alt="" />
                              RicardoDosko
                         </a>
                    </div>
               </div>
          </div>
     )
}