import RelaxingSounds from "../_components/destress/RelaxingSounds/RelaxingSounds.jsx";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <h1>hader 1</h1>
        <p>body</p>
        <h1>Relaxing Sounds</h1>
        <RelaxingSounds />
      </main>
      <div>
        <h1>Relaxing Sounds</h1>
        <RelaxingSounds />
      </div>
    </>
  );
}