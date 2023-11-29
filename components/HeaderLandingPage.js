import styles from '../styles/headerLandingPage.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.tittleContainer}>
                <Image
                    src="https://cdn.discordapp.com/attachments/1160427026839257133/1178950886643474473/uabc-logo.png?ex=65780293&is=65658d93&hm=46cf354de5b0f86faeaa4ac529af71cf4a1224d8b77ae13ee51176d6ed50a7d4&"
                    width={160}
                    height={80}
                    alt="uabc icono"
                />
                <p>Sistema de Préstamos de Laboratorio </p>
            </div>
            <nav className={styles.navBar}>
                <Link href={"/signup"}>
                    <p>Sign Up</p>
                </Link>
                <Link href={"/login"}>
                    <p>Log In</p>
                </Link>
            </nav>
        </header>
    )
}
