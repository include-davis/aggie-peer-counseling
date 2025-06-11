'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { LuMenu } from "react-icons/lu"
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isopen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isopen)
    }

    const handleClick = () => {
        if (pathname === '/') {
            document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push('/#program'); // Navigate without animation
        }
    };


    return (
        <>
            <nav className={styles.navbar}>
                <img 
                    src="/images/header/logo.svg" 
                    alt="Logo" 
                    className={styles["nav-logo"]} 
                    style={{opacity: pathname=="/contact" ? 0 : 1}} 
                />

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

                <button onClick={toggle} className={styles.hamburger}>
                    <LuMenu size={40} color="white" />
                </button>
            </nav>

            <div className={`${styles.mobileMenu} ${isopen ? styles.expand : styles.collapse}`}>
                <Link href="/" className={styles.menuLink}>About Us</Link>
                <Link href="/resources" className={styles.menuLink}>Resources</Link>
                <Link href="/destress" className={styles.menuLink}>De-stress</Link>
                <Link href="/contact" className={styles.menuLink}>Contact</Link>
            </div>
        </>
    );
};

export default Navbar;