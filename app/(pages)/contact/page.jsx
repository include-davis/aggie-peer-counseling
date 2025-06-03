import styles from "./page.module.scss";
import Envelope from "../_components/contact/Envelope/Envelope";
import Hero from "../_components/common/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title=""
        subtitle=""
      />
      <Envelope />
      <h1>Contact</h1>
      <p></p>
    </main>
  );
}