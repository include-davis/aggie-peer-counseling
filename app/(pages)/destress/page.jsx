import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title="De-Stress with Us"
        subtitle="Breath, relax, reset"
      />
      <h1>destress</h1>
      <p></p>
    </main>
  );
}