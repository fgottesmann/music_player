import { useRouter } from "next/router";
import { getTrack } from "../../utils/api";
import { useEffect, useState } from "react";
import { APITrack } from "../../utils/api";

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
  }, []);

  if (!track) {
    return <div>Loading...</div>;
  }
  return (
    <li>
      <img src={track.imgSrc} alt="" />
      <div>Title: {track.title}</div>
      <div>Artist: {track.artist}</div>
    </li>
  );
}
