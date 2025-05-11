import styles from "./page.module.scss";
import Breathe from "../_components/destress/Breathe/Breathe";

export default function Home() {
  return (
    <main className={styles.page}>

      <Breathe />
    </main>
  );
}