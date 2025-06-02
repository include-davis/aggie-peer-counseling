import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";
import WhatWeDo from "../_components/home/WhatWeDo/WhatWeDo";
import EmergencyContact from "../_components/home/EmergencyContact/EmergencyContact";
import MeetTheMentors from "../_components/home/MeetTheMentors/MeetTheMentors"
import Program from "../_components/home/Program/Program";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title="Aggie Peer Counseling"
        subtitle="Here for you, Rain or Shine"
      />
      <WhatWeDo></WhatWeDo>
      <EmergencyContact></EmergencyContact>
      <Program />
      <MeetTheMentors></MeetTheMentors>
      <h1>home</h1>
      <p></p>
    </main>
  );
}
