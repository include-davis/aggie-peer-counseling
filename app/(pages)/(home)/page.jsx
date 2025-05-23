import styles from "./page.module.scss";
import Footer from "../_components/common/Footer/Footer"
export default function Home() {
  return (
    <main className={styles.page}>
      <h1>header 1</h1>
      <p>body</p>
      <Footer />
    </main>
  );
}