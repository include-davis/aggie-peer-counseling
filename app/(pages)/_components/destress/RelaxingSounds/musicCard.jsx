import Image from "next/image";
import styles from "./musicCard.module.scss";
import { useState, useRef } from "react";

export default function MusicCard({ imagePath, altText }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const playAudio = () => {
        if (typeof window !== "undefined") {
            if (!audioRef.current) {
                if (altText === "Rain sound") {
                    audioRef.current = new Audio("/sound/rain.mp3");
                }
                if (altText === "piano sound") {
                    audioRef.current = new Audio("/sound/piano.mp3");
                }
                if (altText === "ocean sound") {
                    audioRef.current = new Audio("/sound/ocean.mp3");
                }
            }
            audioRef.current.play();
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const togglePlayer = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            playAudio();
        } else {
            setIsPlaying(false);
            pauseAudio();
        }
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={`/images/destress_relaxing_sounds/${imagePath}MusicCard.svg`}
                        alt={altText} 
                        width={192}
                        height={192}
                        className={styles.largeImage}
                    />
                </div>
                <div className={styles.cardInfo}>
                    <h3 className={styles.soundTitle}>{altText}</h3>
                    <div className={styles.progressRow}>
                        <div className={styles.progressBar}></div>
                    </div>
                    <div className={styles.circlesRow}>
                        <div className={styles.sideCircle}></div>
                        <div className={styles.sideCircle}></div>
                    </div>
                    <div className={styles.controls}>
                        <Image 
                            src={isPlaying ? '/images/destress_relaxing_sounds/pauseButton.svg' : '/images/destress_relaxing_sounds/playbutton.svg'}
                            alt={isPlaying ? "Pause" : "Play"}
                            width={40}
                            height={40}
                            className={styles.playButton}
                            onClick={togglePlayer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
