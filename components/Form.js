'use client'

import styles from '../styles/form.module.css'
import Link from 'next/link'

export default function Form({ signup }) {

    const handleClick = (e) => {
        e.preventDefault()

    }


    return (
        <form className={styles.formContainer}>
            {signup && (
                <input
                    className={styles.inputStyle}
                    type="text"
                    placeholder="Ingrese su nombre"
                />
            )}
            <input
                className={styles.inputStyle}
                type="text"
                placeholder="Ingrese su matricula"
            />
            <input
                className={styles.inputStyle}
                type="password"
                placeholder="Ingrese una contraseña"
            />
            <div>
                <p>{signup ? 'Ya tienes cuenta?' : 'No tienes cuenta?'}</p>
                <Link href={signup ? '/login' : '/signup'}>
                    <p className={styles.linkToLogin}>{signup ? 'Inicia sesion' : 'Registrate'}</p>
                </Link>
            </div>
            <button onClick={e => handleClick(e)}>
                <Link href={"/dashboard"}>
                    <p className={styles.testing}>Enviar</p>
                </Link>
            </button>
        </form>
    )
}
