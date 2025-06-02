import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";
import WhatWeDo from "../_components/home/WhatWeDo/WhatWeDo";
import EmergencyContact from "../_components/home/EmergencyContact/EmergencyContact";
import MeetTheMentors from "../_components/home/MeetTheMentors/MeetTheMentors"
import Program from "../_components/home/Program/Program";
import EmergencyContact from "../_components/home/EmergencyContact/EmergencyContact";
import WhatWeDo from "../_components/home/WhatWeDo/WhatWeDo";
import FormsSection from "../_components/home/FormsSection/FormsSection";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title="Aggie Peer Counseling"
        subtitle="Here for you, Rain or Shine"
      />
      <EmergencyContact />
      <WhatWeDo />
      <Program />
      <MeetTheMentors></MeetTheMentors>
      <FormsSection />
      <h1>home</h1>
      <p></p>
    </main>
  );
}