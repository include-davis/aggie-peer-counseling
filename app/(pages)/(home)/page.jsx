import ExerciseSection from "../_components/destress/ExerciseSection/ExerciseSection.jsx";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.pageContainer}>
        <ExerciseSection />
      </main>
    </>
  );
}
