import styles from "../styles/Trackpage.module.css";

type Props = {
  imgSrc: string;
  title: string;
  artist: string;
};

export default function SingleTrack(props: Props) {
  const singleTrackContent = (
    <div className={styles.overallContainer}>
      <div className={styles.container}>
        <div className={styles.pulse}>
          <img className={styles.imgSrc} src={props.imgSrc} />
        </div>
      </div>

      <div className={styles.title}>{props.title}</div>
      <div className={styles.artist}>{props.artist}</div>
    </div>
  );
  return singleTrackContent;
}
