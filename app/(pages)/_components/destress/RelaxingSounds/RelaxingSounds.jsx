import Image from "next/image";
import styles from "./RelaxingSounds.module.scss";
import MusicCard from "./musicCard";            

function RelaxingSounds() {
    return (
        <div className={styles.background}>
            <div>
                <h1 className={styles.title}>Relaxing Sounds</h1>
            </div>
            <div className={styles.musicCardContainer}>
                <MusicCard 
                    imagePath = "rain"
                    altText = "Rain sound"
                    />
                <MusicCard
                    imagePath = "piano"
                    altText = "piano sound"
                    />
                <MusicCard
                    imagePath = "ocean"
                    altText = "ocean sound"
                    />
                <Image
                    src="/images/destress_relaxing_sounds/rightScroll.svg"
                    alt="scroll right"
                    width={281}
                    height={387}
                    className={styles.scrollButtons}
                />
            </div>
        </div>
    )
}
export default RelaxingSounds;

