'use client'

import styles from "../styles/searchItems.module.css"
import React, { useState } from 'react'
import { FaBorderAll } from 'react-icons/fa'
import { GrList } from 'react-icons/gr'
import { HiArrowSmDown } from 'react-icons/hi'
import Card from "./Card"

export default function SearchItems({ data, dataSize, icon }) {
    const [sortedData, setSortedData] = useState(data);
    const [isSortedByQuantity, setIsSortedByQuantity] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    const sortByQuantity = () => {
        if (isSortedByQuantity) {
            setSortedData(data);
        } else {
            const sorted = [...data].sort((a, b) => b.cantidad - a.cantidad);
            setSortedData(sorted);
        }
        setIsSortedByQuantity(!isSortedByQuantity);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = sortedData.filter(item =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <div className={styles.searchField}>
                    <input
                        placeholder='Busca un articulo'
                        className={styles.inputField}
                        onChange={handleSearchChange}
                        value={searchTerm}
                    />
                    <button>Buscar</button>
                </div>
            </div>
            <div className={styles.itemsCountContainer}>
                <div className={styles.itemsCount}>
                    <p>Mostrando {dataSize} articulos</p>
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
                {filteredData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        cantidad={item.cantidad}
                        descripcion={item.descripcion}
                        icon={icon}
                    />
                ))}
            </div>
        </div>
    )
}
