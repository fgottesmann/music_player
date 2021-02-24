import { useRouter } from "next/router";
import { getTrack } from "../../utils/api";
import React, { useEffect, useState } from "react";
import { APITrack } from "../../utils/api";
import TrackNavigation from "../../components/trackNavigation";
import styles from "../../styles/Trackpage.module.css";
import SingleTrack from "../../components/singleTrack";
import Player from "../../components/AudioPlayer1";
import Head from "next/head";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Track() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];

  const [track, setTrack] = useState<APITrack>(null);

  const [favoriteSongs, setFavoriteSongs] = useLocalStorage<string[]>(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSongs.includes(id);

  useEffect(() => {
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
  }, [id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSongs = favoriteSongs.filter(
        (favoriteSong) => favoriteSong !== id
      );
      setFavoriteSongs(newFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, id]);
    }
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  const singleTrack = (
    <SingleTrack
      imgSrc={track.imgSrc}
      title={track.title}
      artist={track.artist}
    />
  );

  return (
    <div>
      <Head>
        <title>{track.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <>
          <TrackNavigation />
          <div className={styles.singletrack}>{singleTrack}</div>
          {/* <Player fileUrl={url} /> */}
        </>
      </main>
      <button className={styles.favbutton} onClick={handleFavoriteClick}>
        {favorite ? "🔥" : "🖤"}
      </button>
      <footer>
        <Player fileUrl={track.url} />
      </footer>
    </div>
  );
}
