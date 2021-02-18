import Head from "next/head";
import Greeting from "../components/Greeting";
import styles from "../styles/Home.module.css";
import Tracks from "../components/track";
import { useEffect, useState } from "react";
import { APITrack, getTracks } from "../utils/api";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);

  useEffect(() => {
    console.log("Home page is mounted");
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);

  const trackItems = tracks.map((track) => (
    <Tracks
      key={`{$track.artist}-${track.title}`}
      imgSrc={track.imgSrc}
      artist={track.artist}
      title={track.title}
    />
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>PewPewMusicplayer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Greeting name="Fabian" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}
