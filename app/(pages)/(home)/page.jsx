import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";
import Program from "../_components/home/Program/Program";

export default function Home() {
  return (
    <>
    <Hero
        backgroundImage="/images/morning.png"
        title="Aggie Peer Counseling"
        subtitle="Here for you, Rain or Shine"
      />
    <Program />
    <main className={styles.page}>
      <h1>home</h1>
      <p></p>
    </main>
    </>
  );
}