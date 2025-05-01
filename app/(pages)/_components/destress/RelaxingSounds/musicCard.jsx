import Image from "next/image";
import styles from "./musicCard.module.scss";

var audio = new Audio("/sound/dummy_mp3.mp3");
export default function RelaxingSounds({ imagePath, altText }) {
    return (
        <div className={styles.cardContainer}>
            <Image 
            src={`/images/destress_relaxing_sounds/${imagePath}MusicCard.svg`}
            alt={altText} 
            width={281}
            height={387}
            className={styles.largeImage}
            />

            <Image
            src={"/images/destress_relaxing_sounds/playbutton.svg"}
            alt={"play button"} 
            width={40}
            height={40}
            className={styles.overlayImage}
            onClick={() => audio.play()}
            />

        </div>
    )
}
