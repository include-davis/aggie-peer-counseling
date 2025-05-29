'use client';
import React from 'react';
import styles from './Hero.module.scss';

const Hero = ({ backgroundImage, title, subtitle }) => (
  <section className={styles.hero}>
    <img src={backgroundImage} alt="Background" className={styles.bgImage} />
    <div className={styles.content}>
      <h1 className = {styles.h1}>{title}</h1>
      <p className = {styles.p}>{subtitle}</p>
    </div>
  </section>
);

export default Hero;