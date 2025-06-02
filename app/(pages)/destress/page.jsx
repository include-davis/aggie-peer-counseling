import styles from "./page.module.scss";
import Breathe from "../_components/destress/Breathe/Breathe";
import Hero from "../_components/common/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title="De-Stress with Us"
        subtitle="Breath, relax, reset"
      />
      <Breathe />
    </main>
  );
}