import React from 'react';
import styles from "./page.module.css";
import Navbar from "./navbar";
import './globals.css';
import Testimonials from './testimonials';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <>
      <div className={styles.navbar}>
      <Navbar />
      </div>
      <main className={styles.mainBG}>
        <div>
          <h1>Rekanagari</h1>
          <p>Real Estate - Design & Build - Interior</p>
        </div>
      </main>
      <div className={styles.main}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <h3>Company Overview</h3>
            <p>As a new Commercial Real Estate Developer based in Bandung, we strive to be one of the best in Indonesia. Because land is not getting made anymore, we'll try to make the most of it, for all of us.</p>
          </Grid>
          <Grid item xs={12} md={3}>
            <h3>Products/Services</h3>
            <ul>
              <li>Real Estate Services</li>
              <li>Design & Build</li>
              <li>Interior Design & Build</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={12}>
            <h2 className='quotes'>Because land is not getting made anymore, we'll try to make the most of it, for all of us.</h2>
            <hr />
            <img src="./Rekanagari.PNG" alt="Rekanagari Logo" className='logo' />
          </Grid>
        </Grid>
        <Testimonials />
      </div>
      <div style={{ textAlign: 'right', fontSize: '14px' }}>
        <hr />
        <p>Rekanagari - Your one-stop property solution</p>
      </div>
    </>
  );
}
