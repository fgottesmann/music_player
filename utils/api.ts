export type APITrack = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
};

export function getTracks() {
  return fetch("/api/tracks")
    .then((response) => response.json())
    .then((tracks: APITrack[]) => tracks);
}
