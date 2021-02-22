import { useRouter } from "next/router";
import { getTrack } from "../../utils/api";
import React, { useEffect, useState } from "react";
import { APITrack } from "../../utils/api";
import TrackNavigation from "../../components/trackNavigation";
// import Tracks from "../../components/tracks";
import styles from "../../styles/Trackpage.module.css";
import SingleTrack from "../../components/singleTrack";
import Player from "../../components/audioPlayer";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
  }, [id]);

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
  const url = track.url;
  return (
    <>
      <TrackNavigation />
      <div className={styles.singletrack}>{singleTrack}</div>
      <Player fileUrl={url} />
    </>
  );
}
