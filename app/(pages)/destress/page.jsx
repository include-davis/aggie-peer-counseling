import styles from "./page.module.scss";
import Breathe from "../_components/destress/Breathe/Breathe";
import Hero from "../_components/common/Hero/Hero";
import Breathe from "../_components/destress/Breathe/Breathe";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title="De-Stress with Us"
        subtitle="Breath, relax, reset"
      />
      <h1>destress</h1>
      <p></p>

      <Breathe />
    </main>
  );
}