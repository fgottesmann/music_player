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
        {/* <svg
          className={styles.playbutton}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 14.752 16.859"
          fill="#b8235a"
        >
          <path d="M14.752,8.44a2.429,2.429,0,0,1-.5,1.5,8.137,8.137,0,0,1-.587.656l-.126.123a31.932,31.932,0,0,1-8.361,5.572,7.323,7.323,0,0,1-1.949.574H3.143A2.644,2.644,0,0,1,.817,15.468a11.51,11.51,0,0,1-.5-1.864A37.151,37.151,0,0,1,0,8.419,32.059,32.059,0,0,1,.356,3.073a13.448,13.448,0,0,1,.377-1.5A2.688,2.688,0,0,1,1.907.307,3,3,0,0,1,3.227,0,7.256,7.256,0,0,1,4.966.471a32.083,32.083,0,0,1,8.549,5.654c.293.287.608.637.691.717a2.549,2.549,0,0,1,.545,1.6" />
        </svg> */}

        {/* <svg
          className={styles.pausebutton}
          width="30"
          height="30"
          viewBox="0 0 511.448 511.448"
          xmlns="http://www.w3.org/2000/svg"
          fill="#b8235a"
        >
          <path d="m436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.666 95.851 213.666 213.667-95.85 213.666-213.666 213.666z" />
          <path d="m298.39 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z" />
          <path d="m213.057 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z" />
        </svg> */}
      </button>
    </div>
  );
}
