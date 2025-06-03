export default function Mission() {
    return (
        <section className={StyleSheet.MissionSection}>
            {/* Background*/}
            <img 
            src= "/images/MissionBg.svg"
            alt = ""
            className={StyleSheet.MissionBackground} aria-hiden="true"/> 

            <div className={styles.MissionContent}>
                <div className={styles.MissionCard}>
                    <img 
                    src="/images/LogoMain.svg"
                    alt="Aggie Peer Counselling Logo"/>
                </div>

                <div className={styles.MissionText}>
                    <h1>Our Mission</h1>
                    <p> 
                        Aggie Peer Counseling is a student-led initiative dedicated to uplifting UC Davis students, fostering a sense of belonging, and creating a safe space for open conversations about mental health.
                    </p>
                    <p>
                        We aim to combat the isolation and anxiety many students face by by building strong support systems and advocating for mental well-being across our campus community.
                    </p>
                </div>
            </div>
        </section>
    )
}