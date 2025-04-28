import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";

export default function Home() {
  return (
    <>
     <Hero
        backgroundImage="/images/night.png"
        title="De-Stress with Us"
        subtitle="Breath, relax, reset"
      />
    <main className={styles.page}>
      <h1>destress</h1>
      <p></p>
    </main>
    </>
  );
}