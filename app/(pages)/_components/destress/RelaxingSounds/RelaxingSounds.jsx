
"use client";
import Image from "next/image";
import styles from "./RelaxingSounds.module.scss";
import MusicCard from "./musicCard"; 
import { useRef } from "react"; 


function RelaxingSounds() {
    const containerRef = useRef(null);
    const scrollNext = () => {
        if(containerRef.current){
            const container = containerRef.current;
            const cardWidth = container.firstChild.offsetWidth;
            container.scrollBy({ left: cardWidth * 3, behavior: "smooth" });
        }
    }
    const scrollPrev = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const cardWidth = container.firstChild.offsetWidth;
            container.scrollBy({ left: -cardWidth * 3, behavior: "smooth" });
        }
    };
    return (
        <div className={styles.background}>
            <div>
                <h1 className={styles.title}>Relaxing Sounds</h1>
            </div>          
            <div className={styles.musicCardContainer}>
                <Image
                    onClick={scrollPrev}
                    src="/images/destress_relaxing_sounds/leftScroll.svg"
                    alt="scroll left"
                    width={281}
                    height={387}
                    className={styles.scrollButtons}
                />
            <div ref={containerRef} className={styles.cardsTrack}>
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
                <MusicCard 
                    imagePath = "piano"
                    altText = "piano sound"
                />
                <MusicCard
                    imagePath = "rain"
                    altText = "rain sound"
                />
                <MusicCard
                    imagePath = "ocean"
                    altText = "ocean sound"
                />
            </div>
                <Image
                    onClick={scrollNext}
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

