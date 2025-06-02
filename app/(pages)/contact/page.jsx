import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title=""
        subtitle=""
      />
      <h1>Contact</h1>
      <p></p>
    </main>
  );
}