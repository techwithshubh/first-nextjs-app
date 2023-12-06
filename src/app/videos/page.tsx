import Image from "next/image";
import Link from "next/link";
import comingsoonImg from "public/reliability.jpg"

export default function VideosPage() {
  return (
    <>
      <p className="text-white z-10 text-4xl">Coming Soon...</p>
      <Image fill style={{ objectFit:"cover" }} src={comingsoonImg} alt="Coming Soon Image" />
      <Link className="text-white underline z-10" href="/">Back</Link>
    </>
  );
}
