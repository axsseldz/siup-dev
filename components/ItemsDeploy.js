import styles from "../styles/itemsDeploy.module.css"
import { MdOutlineSort, MdNotificationsActive } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import SearchItems from "./SearchItems";
import { APARATOS } from "../data/Aparatos";
import { CRISTALERIA } from "../data/Cristaleria";
import { REACTIVOS } from "../data/Reactivos"

export default function ItemsDeploy({ type }) {

    const dataMap = {
        aparatos: APARATOS,
        cristaleria: CRISTALERIA,
        reactivos: REACTIVOS
    };

    const data = dataMap[type.toLowerCase()] || null;


    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <div className={styles.navBar}>
                    <MdOutlineSort size={40} />
                    <p>Busqueda de Articulos</p>
                </div>
                <div className={styles.userIcons}>
                    <MdNotificationsActive size={30} className={styles.icon} />
                    <FaUserAstronaut size={30} className={styles.icon} />
                    <p>Luis Suaste</p>
                </div>
            </div>
            <SearchItems data={data} />
        </div>
    )
}
