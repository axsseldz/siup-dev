import styles from '../styles/sidebar.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { FaBalanceScale, FaRadiationAlt } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";

export default function SideBar() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src="https://cdn.discordapp.com/attachments/1160427026839257133/1178945243710758962/cimarron.png?ex=6577fd51&is=65658851&hm=a89d804c5fc7bf94a914a6cd04bdcef82ffb0a67cecf3eaf0d12b0d4578bc809&"
                    width={150}
                    height={150}
                    alt="UABC logo"
                />
            </div>
            <div className={styles.iconsContainer}>

                <div className={styles.iconsAndTittle}>
                    <FaBalanceScale size={20} />
                    <Link href={"/dashboard/aparatos"}>
                        <p>Aparatos</p>
                    </Link>
                </div>

                <div className={styles.iconsAndTittle}>
                    <SlChemistry size={20} />
                    <Link href={"/dashboard/cristaleria"}>
                        <p>Cristaleria</p>
                    </Link>
                </div>
                <div className={styles.iconsAndTittle}>
                    <FaRadiationAlt size={20} />
                    <Link href={"/dashboard/reactivos"}>
                        <p>Reactivos</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
