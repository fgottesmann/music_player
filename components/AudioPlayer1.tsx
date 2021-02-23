import { useEffect, useRef, useState } from "react";
import styles from "../styles/AudioPlayer.module.css";

type Props = {
  fileUrl: string;
};
export default function Player({ fileUrl }: Props) {
  const audioRef = useRef(new Audio(fileUrl));
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioElement = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
      intervalRef.current = setInterval(() => {
        setProgress(audioElement.currentTime);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
      audioElement.pause();
    }
  }, [isPlaying]);

  return (
    <div className={styles.audioPlayer}>
      <input
        className={styles.duration}
        type="range"
        min="0"
        max={audioElement.duration}
        value={progress}
      />
      <button className={styles.btn} onClick={() => setIsPlaying(!isPlaying)}>
        <img src={isPlaying ? "/pause.svg" : "/play.svg"} />
      </button>
    </div>
  );
}
