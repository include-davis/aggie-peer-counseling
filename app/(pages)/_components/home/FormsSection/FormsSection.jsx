import Image from 'next/image';
import styles from "./FormsSection.module.scss";

export default function FormsSection() {
    return (
        <main>
            <Image width={0} height={0} className={styles.backgroundImage} src="./images/FormsSection/background.svg" alt="hello"/>
        </main>
    )
}