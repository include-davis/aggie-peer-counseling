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
    <div className={`${styles.banner} ${styles.banner2}`}>
      <div className={styles.content}>
        <h2 className={styles.quote}>Sometimes the most productive</h2>
        <h2 className={styles.quote}>thing you can do is relax and</h2>
        <h2 className={styles.quote}>recharge</h2>
      </div>
      
      <img 
        src="/images/ExercisePageBanner2/ExercisePageBanner2/background.png" 
        alt="background" 
        className={styles.background}
      />
      <img 
        src="/images/ExercisePageBanner2/ExercisePageBanner2/topRightVector2.svg" 
        alt="top right vector" 
        className={styles.topRightVector}
      />
      <img 
        src="/images/ExercisePageBanner2/ExercisePageBanner2/bottomLeftVector2.svg" 
        alt="bottom left vector" 
        className={styles.bottomLeftVector}
      />
      <img 
        src="/images/ExercisePageBanner2/ExercisePageBanner2/bigStar.svg" 
        alt="big star" 
        className={styles.bigStar}
      />
      <img 
        src="/images/ExercisePageBanner2/ExercisePageBanner2/smallStar.svg" 
        alt="small star" 
        className={styles.smallStar}
      />
    </div>
  );
};

export default QuoteBanner;