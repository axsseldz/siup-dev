import styles from "../styles/card.module.css"
import { ImLab } from 'react-icons/im'

export default function Card({ id, nombre, cantidad, descripcion, icon }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.itemName}>
                <p className={styles.name}>{nombre}</p>
                {icon}
            </div>
            <p>ID: {id}</p>
            <p>Cantidad: {cantidad}</p>
            <p>Descripción: {descripcion}</p>
        </div>
    );
}