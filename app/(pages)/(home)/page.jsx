import QuoteBanner from "../_components/destress/QuoteBanner/QuoteBanner.jsx";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
    <main className={styles.page}>
      <div>
      {/* Banner 1 - TOP */}
      <QuoteBanner bannerNumber={1} />


      {/* Banner 2 - BOTTOM */}
      <QuoteBanner bannerNumber={2} />
    </div>
    </main>
    </>
  );
}