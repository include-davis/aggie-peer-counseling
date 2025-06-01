import styles from "./page.module.scss";
import Envelope from "../_components/contact/Envelope/Envelope";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>header 1</h1>
      <p>body</p>
      <Envelope/>
    </main>
  );
}