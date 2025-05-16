"use client";
import styles from "./page.module.scss";
import ResourceCard from "@/app/(pages)/_components/resources/ResourceCard/ResourceCard";
import Directory from "@/app/(pages)/_components/resources/Directory/Directory";
import { cards } from "./resourcesData"

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>header 1</h1>
      <p>body</p>

      <div className={styles.resourcesContainer}>
        <div className={styles.resourcesBody}>

          <Directory textData={cards} whereToScroll={(id) => {
            const scrollTo = document.getElementById(id);
            scrollTo.scrollIntoView({ behavior: 'smooth' });}}/>

          <div className={styles.cardContainer}>
            <div className={styles.column}>
              {cards.map((card, index) => (
                index % 2 == 0 && 
                <div key={index} id={card.id}>
                  <ResourceCard data={card}/> 
                </div>
              ))}
            </div>
            <div className={styles.column}>
            {cards.map((card, index) => (
                index % 2 == 1 && 
                <div key={index} id={card.id}>
                  <ResourceCard data={card}/> 
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div style={{height: "20rem"}}>Hello</div>
    </main>
  );
}