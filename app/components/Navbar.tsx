import React from 'react'
import Link from "next/link"
import styles from "../page.module.css"
import Search from './Search'
export default function Navbar() {
  return (
    <nav className = {styles.nav}>
        <h1 >
            <Link href = "/" className={styles.link_text}>wikkirocket</Link>
        </h1>
        <Search />
    </nav>
  )
}
