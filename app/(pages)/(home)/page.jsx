import ExerciseSection from "../_components/destress/ExerciseSection/ExerciseSection.jsx";
//import styles from "../_components/destress/ExerciseSection/ExerciseSection.module.scss";
import styles from "./page.module.scss";
//import styles from 'app\(pages)\_components\destress\ExerciseSection\ExerciseSectionmodule.scss';

export default function Home() {
  return (
    <>
    <main className={styles.pageContainer}>
      <ExerciseSection />
    </main>
    </>
  );
}