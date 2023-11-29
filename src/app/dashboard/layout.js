import SideBar from "../../../components/SideBar"
import styles from "../../../styles/layout.module.css"

export default function DashboardLayout({ children }) {
    return <section className={styles.container}>
        <SideBar />
        {children}
    </section>
}