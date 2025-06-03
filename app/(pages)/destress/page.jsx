import ExerciseSection from "../_components/destress/ExerciseSection/ExerciseSection.jsx";
import styles from "./page.module.scss";
import Breathe from "../_components/destress/Breathe/Breathe";
import Hero from "../_components/common/Hero/Hero";
import RelaxingSounds from "../_components/destress/RelaxingSounds/RelaxingSounds.jsx";


export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title="De-Stress with Us"
        subtitle="Breath, relax, reset"
      />
      <Breathe />
      <RelaxingSounds/>
      <ExerciseSection/>
      <p></p>
    </main>
  );
}