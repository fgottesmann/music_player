import styles from "../styles/AudioPlayer.module.css";

type AudioOutput = {
  fileUrl: string;
};
//"fileUrl":
export default function Player(props: AudioOutput) {
  const fileAudio = (
    <div className={styles.audioplayerDiv}>
      <audio
        className={styles.audioplayer}
        controls
        src={props.fileUrl}
      ></audio>
    </div>
  );
  return fileAudio;
}
