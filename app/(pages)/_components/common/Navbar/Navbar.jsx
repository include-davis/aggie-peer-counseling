'use client';
import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import NavHamburger from './menu';
import { usePathname, useRouter } from 'next/navigation';


const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const routeStyles = {
        "/home": styles["navbar-morning"],
        "/resources": styles["navbar-noon"],
        "/destress": styles["navbar-night"],
        "/contact": styles["navbar-contact"],
    };

    const colorClass = routeStyles[pathname] || "";

    const handleClick = () => {
        if (pathname === '/') {
            document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push('/#program'); // Navigate without animation
        }
    };


    return (
        <nav className={`${styles.navbar} ${colorClass}`}>
            <img 
                src="/images/header/logo.svg" 
                alt="Logo" 
                className={styles["nav-logo"]} 
                style={{opacity: pathname=="/contact" ? 0 : 1}} 
            />

            <NavHamburger className={styles.hamburger} />

            <ul className={styles["nav-links"]}>
                <li className={styles["nav-link"]}>
                    <Link href="/">About Us</Link>
                </li>
                <li className={styles["nav-link"]}>
                    <a onClick={handleClick} style={{ cursor: 'pointer' }}>Program</a>
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