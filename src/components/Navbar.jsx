import { NavLink } from "react-router-dom"
import styles from "../Styles/Home.module.css";

const links=[
    {
        path:"/",
        title:"Home"
    },
    {
        path:"/products",
        title:"Products"
    },
    {
        path:"/sproduct",
        title:"SingleProduct"
    },
    {
        path:"/errpage",
        title:"ErrPage"
    }
]

export default function Navbar(){
    return(
        <div className={styles.Navbar}>
            { links.map((e)=>(
                    <NavLink 
                      key={e.path} 
                      to={e.path}
                      className={({isActive})=> isActive? styles.isActive:styles.default} 
                      >
                        <h3>{e.title}</h3>
                    </NavLink>
                ))}
           </div>
    )
}