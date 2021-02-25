export type APITrack = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
  url: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getTracks(): Promise<APITrack[]> {
  return await fetchURL<APITrack[]>("/api/tracks");
}

export async function getTrack(id: string): Promise<APITrack> {
  return await fetchURL<APITrack>(`/api/tracks/${id}`);
}

export async function deleteTrack(id: string) {
  await fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
}
