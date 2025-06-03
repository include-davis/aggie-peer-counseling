"use client"
import styles from "./Footer.module.scss"; // Importing CSS module for styling
import React from "react"; // Importing React library
import {FaRegCopyright} from "react-icons/fa6"; // Importing icon from react-icons library
import { IoMail } from "react-icons/io5"; // Importing icon from react-icons library
import { FaInstagram } from "react-icons/fa"; // Importing icon from react-icons library


export default function Footer({variant = "Home"}) {

    let footerBg = styles.HomeFooter; // Default background (Home & Contact)
    // let footerImg = "/HomeBg.svg"; // Default image (Home & Contact)

    if (variant == "Resources") {
        footerBg = styles.ResourcesFooter;
        // footerImg = "/ResourcesBg.svg";
    } else if (variant === "De-Stress") {
        footerBg = styles.DeStressFooter;
        // footerImg = "/DeStressBg.svg"; 
    } 

    {/* Array of all sections for the footer, left to right */}
    const footerSections = [
        {
            heading: 'Home',
            href: 'https://docs.google.com/document/d/1A33hGguKK-yHYc7Mr-kdqZvfAaVtTMvB2YKb7ly4Xlw/edit?usp=sharing',
            links: [
                { text: 'Emergency Contact', href: '#' },
                { text: 'Our Mission', href: '#' },
                { text: 'What We Do', href: '#' },
                { text: 'Mentor Mentee Program', href: '#' },
                { text: 'Meet the Mentors', href: '#' },
                { text: 'Application Forms', href: '#' }
            ]
        },

        {
            heading: 'Resources',
            href: 'https://docs.google.com/document/d/1A33hGguKK-yHYc7Mr-kdqZvfAaVtTMvB2YKb7ly4Xlw/edit?usp=sharing',
            links: [
                { text: 'On-Campus', href: '#' },
                { text: 'Partner Units', href: '#' },
                { text: 'Important Additional Resources', href: '#' },
                { text: '24/7 Emergency Resources', href: '#' },
                { text: 'Referring Mentees', href: '#' },
                { text: 'Academic Resources', href: '#' }
            ]
        },

        {
            heading: 'De-Stress',
            href: 'https://docs.google.com/document/d/1A33hGguKK-yHYc7Mr-kdqZvfAaVtTMvB2YKb7ly4Xlw/edit?usp=sharing',
            links: [
                { text: 'Activities', href: '#' },
                { text: 'Sounds', href: '#' },
                { text: 'Yoga Videos', href: '#' }
            ]
        }

    ];
    // Rendering the footer component 
    return (
        <>
            <footer className={`${styles.FooterContainer} ${footerBg}`}>
                <div className={styles.Footer}> 
                {/* Main footer section w/ mission & logo*/}
                    <div className={styles.FooterMain}>
                        <h1>Aggie Peer Counseling</h1>
                        <p>A by-student, for-students initiative to create a safe space for conversation, encouragement, and connection.</p>
                    </div>
                    <div className={styles.FooterColumnsWrapper}>
                {/* Footer section with links */}
                {footerSections.map((section,index) => (
                    <div key={index} className={styles.FooterColumn}>
                        <h2><a href={section.href}>{section.heading}</a></h2>
                        <ul>
                            {section.links.map((link,i) => (
                                <li key={i}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div> 
                ))}
                    </div>
                </div>
            </footer>

            {/* Footer's Footer */}
            <div className={styles.FooterBottom}>
                <p><FaRegCopyright/> 2025 Aggie Peer Counselling</p>
                <div className={styles.FooterIcons}>
                    <a href='#'> <IoMail/></a>
                    <a href='#' target="_blank" rel='noopener noreferrer'> <FaInstagram/></a>
                </div>
            </div>
        </>
    );
}