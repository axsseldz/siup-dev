import styles from "../styles/searchItems.module.css"
import { FaBorderAll } from 'react-icons/fa'
import { GrList } from 'react-icons/Gr'
import { HiArrowSmDown } from 'react-icons/Hi'
import Card from "./Card"

export default function SearchItems({ data }) {
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <div className={styles.searchField}>
                    <input
                        placeholder='Busca un articulo'
                        className={styles.inputField}
                    />
                    <button>Buscar</button>
                </div>
            </div>
            <div className={styles.itemsCountContainer}>
                <div className={styles.itemsCount}>
                    <p>Mostrando 9 articulos</p>
                </div>
                <div className={styles.sortContainer}>
                    <div className={styles.sort}>
                        <p>Ordenar</p>
                        <HiArrowSmDown />
                    </div>
                    <GrList className={styles.sortIcon1} />
                    <FaBorderAll className={styles.sortIcon2} />
                </div>
            </div>
            <div className={styles.cards}>
                {data.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        cantidad={item.cantidad}
                        descripcion={item.descripcion}
                    />
                ))}
            </div>
        </div>
    )
}
