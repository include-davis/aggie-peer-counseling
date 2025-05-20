import React from "react";
import styles from "./QuoteBanner.module.scss";

const QuoteBanner = ({ bannerNumber }) => {
  const isBanner1 = bannerNumber === 1;

  const basePath = isBanner1
    ? "/images/ExercisePageBanner1/ExercisePageBanner1"
    : "/images/ExercisePageBanner2/ExercisePageBanner2";

  const vectors = [1, 2, 3, 4, 5].map(
    (num) => `${basePath}/vector${num}.png`
  );

  return (
    <div className={styles.banner}>
      <img
        src={`${basePath}/background.png`}
        alt="background"
        className={styles.background}
      />
      {isBanner1 && (
        <img
          src={`${basePath}/stars.png`}
          alt="stars"
          className={styles.stars}
        />
      )}
      {!isBanner1 && (
        <img
          src={`${basePath}/star.png`}
          alt="star"
          className={styles.singleStar}
        />
      )}
      <img
        src={`${basePath}/text.png`}
        alt="text"
        className={styles.text}
      />
      {vectors.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`vector${index + 1}`}
          className={`${styles.vector} ${styles[`vector${index + 1}`]}`}
        />
      ))}
    </div>
  );
};

export default QuoteBanner;
