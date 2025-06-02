"use client"

import { LuMenu } from "react-icons/lu"
import Link from "next/link"
import { useState } from "react"
import styles from './Navbar.module.scss';

export default function NavHamburger() {
    const [isopen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isopen)
    }

  return (
    <div className={styles.hamburgerDiv}>
        <button onClick={toggle} className={styles.hamburger}>
            <LuMenu size={30} color="white" />
        </button>
        {isopen && <div className={styles.menuLinks}>
            <Link href="/" className={styles.menuLink}>About Us</Link>
            <Link href="/resources" className={styles.menuLink}>Resources</Link>
            <Link href="/destress" className={styles.menuLink}>De-stress</Link>
            <Link href="/contact" className={styles.menuLink}>Contact</Link>
        </div>}
    </div>
  )
}