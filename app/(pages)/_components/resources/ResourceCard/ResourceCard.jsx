"use client";
import Image from "next/image";
import styles from "./ResourceCard.module.scss";
import { useState, useEffect, useRef } from 'react'

const testData = {
    mainTitle: "awesometitle",
    buttons: [
        {
            heading: "coolbutton",
            text: "Lorem ipsum dolor sit amegna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://www.roblox.com"
        },
        {
            heading: "anothercoolbutton",
            text: "odsfiekwnfoiwefhoiewfhhioecitation ullamco labori",
            link: "https://www.youtube.com"
        }
    ]
}

function ButtonWithDropdown({ titleText, dropdownText, link }) {
    const [clicked, setClicked] = useState(false);
    const [showText, setShowText] = useState(false);
    const dropdownRef = useRef();
    useEffect(() => {
        const handleBackgroundClick = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setClicked(false);
                setShowText(false);
            }
        }
        document.addEventListener('mousedown', handleBackgroundClick);
        return () => document.removeEventListener('mousedown', handleBackgroundClick);
    }, []);
    const handleLinkClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={`${styles.dropdownButton} ${clicked ? styles.open : ''}`} ref={dropdownRef} onClick={() => { setClicked(!clicked); setTimeout(() => setShowText(true), 50) }/*added slight delay for smoother transition*/}> 
            <div className={styles.boxAndSVG}>
                <h1 className={styles.dropdownButtonBox}>
                    {titleText}
                </h1>
                <Image className={`${styles.dropdownSVG} ${clicked ? styles.rotated : ''}`} src='/images/gridicons:dropdown.svg' width={62} height={62} alt="gridicons:dropdown" draggable="false" />
            </div>
            {clicked && (
                <div>
                    {showText && (
                        <div>
                            <p className={styles.expandedText}>
                                {dropdownText}
                            </p>
                            <p className={styles.expandedText}>
                                Link: <a href={link} onClick={handleLinkClick}>{link}</a>
                            </p>
                        </div> )}
                </div>
            )}
        </div>
    )
}

function Card({ data }) {
    return (
        <div className={styles.card}>
            {data.mainTitle}
            {data.buttons.map((buttonData, index) => (
                <ButtonWithDropdown key={index} titleText={buttonData.heading} dropdownText={buttonData.text} link={buttonData.link} />
            ))}
        </div>
    )
}

export default function ResourceCard() {
    return (
        <div>
            <Card data={testData} />
        </div>
    )
}


//add text delay for smoother transiution   