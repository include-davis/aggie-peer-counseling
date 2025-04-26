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
        "/destress" : ["navbar-night"],
        "/contact" : ["navbar-contact"],
    }
    const colorClass = routeStyles[pathanme] || "";

return (
    <nav className={`${styles.navbar} navbar ${colorClass}`}>
         <div className={styles["nav-logo"]}>
               <img src="/logo.svg" alt="Logo" />
            </div>
        <ul className="nav-links">
            <li className="nav-link"><Link href="/home">Home</Link></li>
            <li><a href="#program">Program</a></li>
            <li className="nav-link"><Link href="/resources">Resources</Link></li>
            <li className="nav-link"><Link href="/destress">Destress</Link></li>
            <li className="nav-link"><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
);
}

export default Navbar;
