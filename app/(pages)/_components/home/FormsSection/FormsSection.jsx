import Image from 'next/image';
import styles from "./FormsSection.module.scss";

function Form ({ text , image }) {
    return (
        <main className={styles.form_background} style={{background-image: image}}>
            <div className={styles.form_text}>
                {text}
            </div>
        </main>
    )
}

export default function FormsSection() {
    return (
        <main className={styles.forms_section}>
            <div className={styles.wrapper}>
                <Form text={"hi"}/>
            </div>
        </main>
    )
}