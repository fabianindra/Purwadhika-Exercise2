import React from 'react';
import styles from "../page.module.css";
import Navbar from "../navbar";
import '../globals.css';
import Grid from '@mui/material/Grid';
import Testimonials from '../testimonials';

export default function Product() {
  return (
    <>
      <div className={styles.navbar}>
      <Navbar />
      </div>
      <br />
      <main>
        <div>
          <h1>Rekanagari - Product & Services</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <h3>Products</h3>
              <ul>
                <li><strong>Nagari Housing</strong></li>
                <p>Ready made houses in premiere and comfortable locations</p>
                <li><strong>Reka Commercial Building</strong></li>
                <p>Commercial Property: Office, Store, etc. in strategic locations</p>
              </ul>
              <h3>Services</h3>
              <ul>
                <li><strong>Architectural Design</strong></li>
                <p>Our team of Architects and Civil Engineer will help you design your property that matches your wishes.</p>
                <li><strong>Interior Design</strong></li>
                <p>Our team of Interior Designer will help you design your interior that matches your wishes.</p>
                <li><strong>Construction Work</strong></li>
                <p>Our team of construction workers will help you make the design a reality</p>
              </ul>
              <br />
              <Testimonials />
            </Grid>
            <Grid item xs={12} md={7}>
              <img src="https://cdn.onekindesign.com/wp-content/uploads/2022/09/Spanish-Revival-Home-Renovation-Medium-Plenty-01-1-Kindesign.jpg" alt="#" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </Grid>
        </div>
      </main>
      <div style={{ textAlign: 'right', fontSize: '14px' }}>
        <hr />
        <p>Rekanagari - Your one-stop property solution</p>
      </div>
    </>
  );
}
