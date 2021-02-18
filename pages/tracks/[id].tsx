import { useRouter } from "next/router";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Now playing... {id}</div>;
}
