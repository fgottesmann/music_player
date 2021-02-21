import styles from "../styles/TrackNav.module.css";

export default function TrackNavigation() {
  const TrackNav = (
    <div className={styles.container}>
      <div className={styles.containerbtn}>
        <div className={styles.headtext}>Now playing:</div>
        <section className={styles.rowGradient}>
          <a className={styles.btnBtn2}>Go Back</a>
        </section>
      </div>
    </div>
  );
  return TrackNav;
}
