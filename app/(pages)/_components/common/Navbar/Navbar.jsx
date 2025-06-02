'use client';
import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavHamburger from './menu';


const Navbar = () => {
    const pathname = usePathname(); 

    const routeStyles = {
        "/home": styles["navbar-morning"],
        "/resources": styles["navbar-noon"],
        "/destress": styles["navbar-night"],
        "/contact": styles["navbar-contact"],
    };

    const colorClass = routeStyles[pathname] || "";

    return (
        <nav className={`${styles.navbar} ${colorClass}`}>
            {pathname !== "/contact" && (
                <img src="/images/header/logo.svg" alt="Logo" className={styles["nav-logo"]} />
            )}

            <NavHamburger className={styles.hamburger} />

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