export type APITrack = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
  url: string;
};

export async function getTracks() {
  const response = await fetch("/api/tracks");
  const tracks = await response.json();
  return tracks;
}
export async function getTrack(id: string) {
  const response = await fetch(`/api/tracks/${id}`);
  const track: APITrack = await response.json();
  return track;
}
