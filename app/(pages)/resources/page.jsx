import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        backgroundImage="/images/noon2.png"
        title="Resources"
        subtitle="Support made just for you"
      />
      <h1>resources</h1>
      <p></p>
    </main>
  );
}