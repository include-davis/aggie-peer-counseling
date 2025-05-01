import RelaxingSounds from "../_components/destress/RelaxingSounds/RelaxingSounds.jsx";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <RelaxingSounds />
      </main>
    </>
  );
}