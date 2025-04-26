'use client';
import React from 'react';
import styles from './Hero.module.scss';

const Hero = ({ backgroundImage, title, subtitle }) => (
  <section
    className={styles.hero}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className={styles.content}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </section>
);

export default Hero;