import Image from "next/image";
import styles from "./RelaxingSounds.module.scss";
import MusicCard from "./musicCard";            

function RelaxingSounds() {
    return (
        <div className={styles.background}>
            <div>
                <h1 className={styles.title}>Relaxing Sounds</h1>
            </div>
            <div>
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
            </div>
        </div>
    )
}
export default RelaxingSounds;

