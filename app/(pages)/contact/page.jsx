import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";

export default function Home() {
  return (
    <>
    <Hero
        backgroundImage="/images/home-hero.jpg"
        title=""
        subtitle=""
      />
    <main className={styles.page}>
      <h1>Contact</h1>
      <p></p>
    </main>
    </>
  );
}