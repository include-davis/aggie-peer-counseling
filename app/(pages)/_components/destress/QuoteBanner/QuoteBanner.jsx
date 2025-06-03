import React from 'react';
import styles from './QuoteBanner.module.scss';

const QuoteBanner = ({ bannerNumber }) => {
  if (bannerNumber === 1) {
    return (
      <div className={`${styles.banner} ${styles.banner1}`}>
        <div className={styles.content}>
          <h2 className={styles.quote}>You are worthy of happiness</h2>
          <h2 className={styles.quote}>and peace of mind</h2>
        </div>
        
        <img 
          src="/images/ExercisePageBanner1/ExercisePageBanner1/background.png" 
          alt="background" 
          className={styles.background}
        />
        <img 
          src="/images/ExercisePageBanner1/ExercisePageBanner1/topLeftVector1.svg" 
          alt="top left vector" 
          className={styles.topLeftVector}
        />
        <img 
          src="/images/ExercisePageBanner1/ExercisePageBanner1/bottomRightVector1.svg" 
          alt="bottom right vector" 
          className={styles.bottomRightVector}
        />
        <img 
          src="/images/ExercisePageBanner1/ExercisePageBanner1/bigStar.svg" 
          alt="big star" 
          className={styles.bigStar}
        />
        <img 
          src="/images/ExercisePageBanner1/ExercisePageBanner1/smallStar.svg" 
          alt="small star" 
          className={styles.smallStar}
        />
      </div>
    );
  }

  return (
    <div className={styles.banner}>
      <img
        src={`${basePath}/background.svg`}
        alt="background"
        className={styles.background}
      />
      {isBanner1 ? <p className={styles.text}>Sometimes the most productive thing you can do is relax and recharge</p> :  <p className={styles.text}>You are worthy of happiness and peace of mind</p>}
    </div>
  );
};

export default QuoteBanner;