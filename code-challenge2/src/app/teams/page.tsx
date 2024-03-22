import React from 'react'
import styles from "../page.module.css";
import Navbar from "../navbar";
import '../globals.css';
import RandomUserPage from '../components/teamCard';

export default function Teams() {
  return (
    <>
    <div className={styles.navbar}>
      <Navbar />
    </div>
    <br />
    <main>
      <div className="main">
        <h1>Rekanagari - Teams</h1>
        <RandomUserPage />
      </div>
    </main>
    <div style={{ textAlign: 'right', fontSize: '14px' }}>
        <hr />
        <p>Rekanagari - Your one-stop property solution</p>
    </div>
    </>
  );
}