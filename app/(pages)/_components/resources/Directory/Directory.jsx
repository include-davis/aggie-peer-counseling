import styles from "./Directory.module.scss";

export default function Directory({whereToScroll, textData}) {
    return (
        <div>
            <div className={styles.directory}>
                <div className={styles.titleBox}>
                    Directory
                </div>
                <div className={styles.body}>
                    {textData.map((card, index) => (
                        <div className={styles.text} key={index} onClick={() => whereToScroll(card.id)}>
                            {card.id}
                        </div>
                    ))}
                    <div className={styles.accommodationsText}>
                        Accommodations: <a className={styles.link} href="https://sdc.ucdavis.edu/">Student Disability Center</a> located in Cowell Building
                    </div>
                </div>
            </div>
        </div>
    )
}