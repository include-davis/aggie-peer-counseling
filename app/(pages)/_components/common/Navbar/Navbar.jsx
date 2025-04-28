'use client';
import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathanme = usePathname();

    const routeStyles = {
        "/home" :styles["navbar-morning"],
        "/resources" : styles["navbar-noon"],
        "/destress" : styles["navbar-night"],
        "/contact" : styles["navbar-contact"],
    }
    const colorClass = routeStyles[pathanme] || "";

return (
    <nav className={`${styles.navbar} ${colorClass}`}>
            <div className={styles["nav-logo"]}>
                <img src="images/logo.svg" alt="Logo" />
            </div>
            <ul className={styles["nav-links"]}>
                <li className={styles["nav-link"]}>
                    <Link href="/">About Us</Link>
                </li>
                <li className={styles["nav-link"]}>
                    <a href="#program">Program</a>
                </li>
                <li className={styles["nav-link"]}>
                    <Link href="/resources">Resources</Link>
                </li>
                <li className={styles["nav-link"]}>
                    <Link href="/destress">De-stress</Link>
                </li>
                <li className={`${styles["nav-link"]} ${styles["nav-contact"]}`}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
);
}

export default Navbar;
