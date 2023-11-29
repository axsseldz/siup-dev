import styles from "../../../styles/layout.module.css"
import { GiAbstract084 } from "react-icons/gi";

export default function DashboardPage() {
    return (
        <div className={styles.iconContainer}>
            <GiAbstract084 size={500} />
            <p className={styles.tittle}>Sistema de Préstamos de Laboratorio</p>
        </div>
    )
}
