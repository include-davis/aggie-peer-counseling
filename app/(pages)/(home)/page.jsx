import styles from "./page.module.scss";
import MeetTheMentors from "../_components/home/MeetTheMentors/MeetTheMentors"

export default function Home() {
  return (
    <main className={styles.page}>
      <MeetTheMentors />
    </main>
  );
}