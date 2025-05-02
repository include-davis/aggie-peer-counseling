import Image from "next/image";
import styles from "./musicCard.module.scss";
import { useState, useRef } from "react";

export default function MusicCard({ imagePath, altText }) {
    const [currentImagePath, setCurrentImagePath] = useState("/images/destress_relaxing_sounds/playbutton.svg"); // Initial image path
    const audioRef = useRef(null); // Store the Audio object

    const playAudio = () => {
        if (typeof window !== "undefined") {
            if (!audioRef.current) {
                // Initialize the Audio object only once
                audioRef.current = new Audio("/sound/dummy_mp3.mp3");
            }
            audioRef.current.play();
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const player = () => {
        if (currentImagePath === "/images/destress_relaxing_sounds/playbutton.svg") {
            setCurrentImagePath("/images/destress_relaxing_sounds/pausebutton.svg"); // Update to pause button
            playAudio();
        } else {
            setCurrentImagePath("/images/destress_relaxing_sounds/playbutton.svg"); // Reset to play button
            pauseAudio();
        }
    };

    return (
        <div className={styles.cardContainer}>
            <Image 
                src={`/images/destress_relaxing_sounds/${imagePath}MusicCard.svg`} // Use the imagePath prop for the main image
                alt={altText} 
                width={281}
                height={387}
                className={styles.largeImage}
            />

            <Image
                src={currentImagePath} // Use the dynamic currentImagePath for the play/pause button
                alt={"play/pause button"} 
                width={40}
                height={40}
                className={styles.overlayImage}
                onClick={player} // Call the player function on click
            />
        </div>
    );
}
