import styles from "../styles/TrackNav.module.css";

export default function TrackNavigation() {
  const TrackNav = (
    <div className={styles.container}>
      <button className={styles.returnButton}>Go Back</button>
      <div className={styles.headtext}>You are now playing: </div>
    </div>
  );
  return TrackNav;
}
