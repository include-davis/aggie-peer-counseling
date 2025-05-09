"use client";
import Image from "next/image";
import styles from "./ResourceCard.module.scss";
import { useState, useEffect, useRef } from 'react';

function ButtonWithDropdown({ titleText, dropdownText }) {
    const [clicked, setClicked] = useState(false);
    const [height, setHeight] = useState("8.625rem");
    const dropdownRef = useRef();
    useEffect(() => { //for background click
        const handleBackgroundClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setClicked(false);
            }
        }
        document.addEventListener('mousedown', handleBackgroundClick);
        return () => document.removeEventListener('mousedown', handleBackgroundClick);
    }, []);
    useEffect(() => { //for modifying height of dropdown div and adding a delay for showing text (for smoothness)
        if (clicked && dropdownRef.current) {
            setHeight(dropdownRef.current.scrollHeight);
        } else {
            setHeight("8.625rem");
        }
    }, [clicked]);


    return (
        <div className={styles.dropdownButton} style={{ height: height }} ref={dropdownRef} onClick={() => { setClicked(!clicked) }} >
            <div className={styles.boxAndSVG}>
                <div className={styles.dropdownButtonBox}>
                    <div className={styles.dropdownButtonBoxText}>
                        {titleText}
                    </div>
                </div>
                <Image className={`${styles.dropdownSVG} ${clicked ? styles.rotated : ''}`} src='/images/dropdown.svg' width={62} height={62} alt="gridicons:dropdown" draggable="false" />
            </div>
            {clicked && (
                <div className={styles.expandedText}>
                    {dropdownText}
                </div>
            )}
        </div>
    )
}

export default function ResourceCard({ data }) {
    return (
        <div className={styles.card}>
            {data.mainTitle}
            {data.buttons.map((buttonData, index) => (
                <ButtonWithDropdown key={index} titleText={buttonData.heading} dropdownText={buttonData.text} />
            ))}
        </div>
    )
}