import styles from "./EmergencyContact.module.scss";

export default function EmergencyContact() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Emergency Contact</h2>
      <div className={styles.iconRow}>
        {/* phone SOS */}
        <a href="tel:911" className={styles.iconLink}>
          <div className={styles.iconWrapper}>
            <span className={styles.label}>SOS</span>
          </div>
        </a>

        {/* Chat 988 */}
        <a href="sms:988" className={styles.iconLink}>
          <div className={styles.iconWrapper}>
            <span className={styles.label}>988</span>
          </div>
        </a>
      </div>
    </section>
  );
}
