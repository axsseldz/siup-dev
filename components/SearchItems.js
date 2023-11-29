'use client'

import styles from "../styles/searchItems.module.css"
import React, { useState } from 'react'
import { FaBorderAll } from 'react-icons/fa'
import { GrList } from 'react-icons/Gr'
import { HiArrowSmDown } from 'react-icons/Hi'
import Card from "./Card"

export default function SearchItems({ data }) {
    const [sortedData, setSortedData] = useState(data);
    const [isSortedByQuantity, setIsSortedByQuantity] = useState(false);


    const sortByQuantity = () => {
        if (isSortedByQuantity) {
            setSortedData(data);
        } else {
            const sorted = [...data].sort((a, b) => b.cantidad - a.cantidad);
            setSortedData(sorted);
        }
        setIsSortedByQuantity(!isSortedByQuantity);
    };


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
                    <div className={isSortedByQuantity ? styles.sort2 : styles.sort} onClick={sortByQuantity}>
                        <p>Ordenar</p>
                        <HiArrowSmDown />
                    </div>
                    <GrList className={styles.sortIcon1} />
                    <FaBorderAll className={styles.sortIcon2} />
                </div>
            </div>
            <div className={styles.cards}>
                {sortedData.map((item) => (
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
