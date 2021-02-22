import styles from "../styles/Tracks.module.css";

type Props = {
  imgSrc: string;
  title: string;
  artist: string;
};

export default function Tracks({ imgSrc, title, artist }: Props) {
  return (
    <div className={styles.homepage}>
      <li className={styles.trackItem}>
        <img className={styles.img} src={imgSrc} alt="" />
        <div title={title} className={styles.title}>
          {title}
        </div>
        <div title={artist} className={styles.artist}>
          {artist}
        </div>
      </li>
    </div>
  );
}
