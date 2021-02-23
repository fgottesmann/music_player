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
      <div>
        <svg className={styles.equilizer} viewBox="0 0 128 128">
          <g>
            <title>Audio Equilizer</title>
            <rect
              className={styles.bar}
              transform="translate(0,0)"
              y="15"
            ></rect>
            <rect
              className={styles.bar}
              transform="translate(25,0)"
              y="15"
            ></rect>
            <rect
              className={styles.bar}
              transform="translate(50,0)"
              y="15"
            ></rect>
            <rect
              className={styles.bar}
              transform="translate(75,0)"
              y="15"
            ></rect>
            <rect
              className={styles.bar}
              transform="translate(100,0)"
              y="15"
            ></rect>
          </g>
        </svg>
      </div>

      <div className={styles.title}>{props.title}</div>
      <div className={styles.artist}>{props.artist}</div>
    </div>
  );
  return singleTrackContent;
}
