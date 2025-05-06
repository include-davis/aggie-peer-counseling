'use client';
import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname(); // ✅ you had this misspelled as pathanme earlier

    const routeStyles = {
        "/home": styles["navbar-morning"],
        "/resources": styles["navbar-noon"],
        "/destress": styles["navbar-night"],
        "/contact": styles["navbar-contact"],
    };

    const colorClass = routeStyles[pathname] || "";

    return (
        <nav className={`${styles.navbar} ${colorClass}`}>
            <div className={styles["nav-logo"]}>
                {/* ✅ Hide only the image, not the div to keep layout stable */}
                {pathname !== "/contact" && (
                    <img src="images/logo.svg" alt="Logo" />
                )}
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
};

export default Navbar;