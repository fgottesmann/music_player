import Head from "next/head";
import Greeting from "../components/Greeting";
import styles from "../styles/Home.module.css";
import Tracks from "../components/track";

export default function Home() {
  const tracks = [
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YWThl7JxgusUPJAHKy64qAAAAA%26pid%3DApi&f=1",
      title: "Bumblebee",
      artist: "Night Lovell",
    },
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YWThl7JxgusUPJAHKy64qAAAAA%26pid%3DApi&f=1",
      title: "PLEASE DON'T GO",
      artist: "Night Lovell",
    },
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gET8RM4DvcU5NMkXwWSIMQHaHP%26pid%3DApi&f=1",
      title: "Champion of Death",
      artist: "$uicideboy$",
    },
    {
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ES5bYbRDZDRYiVw54m8y-QAAAA%26pid%3DApi&f=1",
      title: "Suicidal Thoughts in the Back of the Cadillac Pt.2",
      artist: "Pouya",
    },
  ];
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
