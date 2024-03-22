import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";
import './globals.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.card}>
                <Link href="/">Home</Link>
                <Link href="/aboutUs">About Us</Link>
                <Link href="/product">Product & Services</Link>
                <Link href="/teams">Teams</Link>
            </div>
        </div>
    );
}
