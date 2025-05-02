"use client";
import { useState, useEffect } from 'react';
import styles from './ExerciseSection.module.scss';
//import styles from 'app\(pages)\_components\destress\ExerciseSection\ExerciseSectionmodule.scss';

export default function ExerciseSection() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const exercises = [
    {
      name: "Side Stretch",
      options: ["Side Stretch"],
      instructions: {
        "Side Stretch": [
          { step: "step 1:", instruction: "start by lying on your back" },
          { step: "step 2:", instruction: "lift both arm and leg up per perpendicular to the ground." },
          { step: "step 3:", instruction: "slowly bring down opposite leg and arm" },
          { step: "step 4:", instruction: "repeat on opposite side!" }
        ]
      },
      imageSrc: "/images/redCow.png"
    },
    {
      name: "Yoga",
      options: ["Yoga Exercise"],
      instructions: {
        "Yoga Exercise": [
          { step: "step 1:", instruction: "start by standing up" },
          { step: "step 2:", instruction: "pick a position you would like and try balancing for 30 seconds." },
          { step: "step 2.5:", instruction: "focus on your breath while balancing!" }
        ]
      },
      imageSrc: "/images/yellowCow.png"
    },
    {
      name: "Stretch",
      options: ["Touch your toes!"],
      instructions: {
        "Touch your toes!": [
          { step: "step 1:", instruction: "start by lying on your back" },
          { step: "step 2:", instruction: "lift both arm and leg up per perpendicular to the ground." },
          { step: "step 3:", instruction: "slowly bring down opposite leg and arm" }
        ]
      },
      imageSrc: "/images/blueCow.png"
    }
  ];

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(`.${styles.dropdown}`)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector(`.${styles.starsContainer}`);
      if (!starsContainer) return;
      starsContainer.innerHTML = '';

      const numberOfStars = 15;
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = styles.star;

        const size = Math.random() * 5 + 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.animationDelay = `${Math.random() * 3}s`;

        starsContainer.appendChild(star);
      }
    };

    createStars();

    window.addEventListener('resize', createStars);
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.starsContainer}></div>

      <div className={styles.container}>
        <h1 className={styles.title}>Check out these Exercises!</h1>

        {exercises.map((exercise, index) => (
          <div key={index} className={styles.dropdown}>
            <button
              className={styles.dropdownBtn}
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(index);
              }}
            >
              {exercise.name}
              <svg
                className={`${styles.chevron} ${openDropdown === index ? styles.rotate : ''}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#5279a2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={`${styles.dropdownContent} ${openDropdown === index ? styles.open : ''}`}>
              {exercise.options.map((option, optIndex) => (
                <div key={optIndex} className={styles.exerciseItem}>
                  <a href="#" className={styles.exerciseTitle}>{option}</a>
                  {exercise.instructions[option] && (
                    <div className={styles.exerciseInstructions}>
                      <div className={styles.exerciseImageContainer}>
                        <img src={exercise.imageSrc} alt={`${exercise.name} Image`} style={{ width: '80px' }} />
                      </div>
                      <div className={styles.instructionSteps}>
                        {exercise.instructions[option].map((step, stepIndex) => (
                          <div key={stepIndex} className={styles.instructionStep}>
                            <span className={styles.stepNumber}>{step.step}</span>
                            <span className={styles.stepText}>{step.instruction}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.grass}></div>
    </div>
  );
}
