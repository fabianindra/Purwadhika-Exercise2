import React from 'react';
import styles from '../page.module.css';
import Navbar from '../navbar';
import '../globals.css';
import Grid from '@mui/material/Grid';

export default function AboutUs() {
  return (
    <>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <br />
      <main>
        <div>
          <h1>Rekanagari - About Us</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src="https://images.adsttc.com/media/images/5e38/828c/3312/fdd4/5200/0122/slideshow/BICUBIK_9268.jpg?1580761728"
                className={styles.image}
              />
            </Grid>
            <Grid item xs={12} md={6} className={styles.textContainer}>
              <h3>Company History</h3>
              <p>
                Founded in 2021, Rekanagari is a Design & Build for Architectural and Interior Project. In the development, Rekanagari also involves in Real Estate, providing houses with great design and affordable house in prime locations. Rekanagari consist of teams from various background, from Architect, Planner, Interior Designer, Construction Worker, and Real Estate Marketer.
              </p>
              <h3>Team</h3>
              <p>
                Our team consists of experienced Planners, Architects, Interior Designers, Civil Engineer, Construction Worker, Carpenter, etc.
              </p>
              <h3>Culture</h3>
              <p>
                Our company strive to fulfill our client's wishes by listening to their aspirations and needs. CLient wishes is our top priority. Flexibility is one of our main qualities, enables us to fit our high quality construction with client's budget.
              </p>
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
