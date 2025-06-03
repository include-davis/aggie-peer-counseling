import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";
import Program from "../_components/home/Program/Program";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title="Aggie Peer Counseling"
        subtitle="Here for you, Rain or Shine"
      />
      <Program />
      <h1>home</h1>
      <p></p>
    </main>
  );
}
