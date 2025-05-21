"use client";
import Image from "next/image";
import styles from "./RelaxingSounds.module.scss";
import MusicCard from "./musicCard"; 
import { useRef, useState } from "react"; 


function RelaxingSounds() {
    const containerRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            setIsAtStart(container.scrollLeft === 0);
            setIsAtEnd(
                container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
            );
        }
    };

    const scrollNext = () => {
        if(containerRef.current){
            const container = containerRef.current;
            const cardWidth = container.firstChild.offsetWidth;
            container.scrollBy({ left: cardWidth * 4, behavior: "smooth" });
            // Update button visibility after scroll
            setTimeout(checkScrollPosition, 500); // Wait for smooth scroll to complete
        }
    }
    const scrollPrev = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const cardWidth = container.firstChild.offsetWidth;
            container.scrollBy({ left: -cardWidth * 4, behavior: "smooth" });
            // Update button visibility after scroll
            setTimeout(checkScrollPosition, 500); // Wait for smooth scroll to complete
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
                    className={`${styles.scrollButtons} ${isAtStart ? styles.hidden : ''}`}
                />
            <div 
                ref={containerRef} 
                className={styles.cardsTrack}
                onScroll={checkScrollPosition}
            >
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
                    className={`${styles.scrollButtons} ${isAtEnd ? styles.hidden : ''}`}
                />
            </div>
        </div>
        
    )
}
export default RelaxingSounds;

