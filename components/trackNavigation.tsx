import styles from "../styles/TrackNav.module.css";

export default function TrackNavigation() {
  const goBack = () => {
    history.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerbtn}>
        <div className={styles.headtext}>Now playing:</div>
        <section className={styles.rowGradient}>
          <a className={styles.btnBtn2} onClick={goBack}>
            ✖
          </a>
        </section>
      </div>
    </div>
  );
}
