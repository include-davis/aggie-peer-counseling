import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";

export default function Home() {
  return (
    <>
    <Hero
        backgroundImage="/images/noon.png"
        title=""
        subtitle=""
      />
    <main className={styles.page}>
      <h1>resources</h1>
      <p></p>
    </main>
    </>
  );
}