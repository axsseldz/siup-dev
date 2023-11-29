import styles from '../styles/registation.module.css'
import Header from "./HeaderLandingPage"
import Form from "./Form"
import { ImLab } from "react-icons/im";


export default function Registation({ signup, message }) {
    return (
        <div>
            <Header />
            <main className={styles.mainContainer}>
                <div className={styles.registationContainer}>
                    <div className={styles.register}>
                        <p>{message}</p>
                    </div>
                    <Form signup={signup} />
                </div>
                <div className={styles.iconsContainer}>
                    <ImLab size={720} className={styles.labIcon} />
                </div>
            </main>
        </div>
    )
}
