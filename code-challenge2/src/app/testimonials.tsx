import React from 'react';
import styles from "./page.module.css";
import './globals.css';
import Grid from '@mui/material/Grid';

export default function Testimonials() {
    return (
        <div> 
            <h2>Testimonials</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <div className={styles.card}>
                        <h2>G.N.</h2>
                        <p>"Rekanagari is such a pleasant company to work with, I definitely recommend their design & build skills to make your dream house come true!"</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={styles.card}>
                        <h2>T.P.</h2>
                        <p>"Our new house is really cool! It has warmth and comfort written all over it! Rekanagari is one of the best places you in Bandung to buy a house from!"</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
