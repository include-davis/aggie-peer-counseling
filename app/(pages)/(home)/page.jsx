import styles from "./page.module.scss";
import WhatWeDo from "../_components/home/WhatWeDo/WhatWeDo";
import EmergencyContact from "../_components/home/EmergencyContact/EmergencyContact";
import MeetTheMentors from "../_components/home/MeetTheMentors/MeetTheMentors"
export default function Home() {
  return (
    <main className={styles.page}>
      <WhatWeDo></WhatWeDo>
      <EmergencyContact></EmergencyContact>
      <MeetTheMentors></MeetTheMentors>
    </main>
  );
}
