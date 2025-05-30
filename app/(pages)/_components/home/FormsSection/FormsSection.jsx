"use client";
import Image from 'next/image';
import styles from "./FormsSection.module.scss";

function Form ({ text , image , link }) {
    return (
        <main className={styles.form_background} style={{backgroundImage: `url(${image})`}} onClick={() => {window.open(link, 'blank', 'noopener,noreferrer')}}>
            <h1 className={styles.form_text}>
                {text}
            </h1>
        </main>
    )
}

export default function FormsSection() {
    return (
        <main className={styles.forms_section}>
            <div className={styles.wrapper}>
                <Form text={"Intake Form"} image={'./images/FormsSection/intake_form.svg'} link={'https://roblox.com'}/>
                <Form text={"Mentor Preference"} image={'./images/FormsSection/mentor_preference.svg'} link={'https://roblox.com'}/>
                <Form text={"Mentor Applications"} image={'./images/FormsSection/mentor_applications.svg'} link={'https://roblox.com'}/>
            </div>
        </main>
    )
}