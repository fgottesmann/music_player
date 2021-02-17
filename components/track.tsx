import styles from "../styles/greeting.module.css";

type Props = {
  imgSrc: string;
  title: string;
  artist: string;
};

export default function Tracks(props: Props) {
  return (
    <div className={styles.trackcard}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YWThl7JxgusUPJAHKy64qAAAAA%26pid%3DApi&f=1"
        alt="Two guys with Horse masks playing accordion"
      />
      <ol>
        <li>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.artist}>{props.artist}</p>
        </li>
      </ol>
    </div>
  );
}
