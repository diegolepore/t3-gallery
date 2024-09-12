import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function ImageList() {
  const images = await getMyImages();

  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="w-48 h-48">
          <Link href={`/img/${image.id}`}>
            <Image src={image.url} style={{ objectFit: "contain" }} width={192} height={192} alt={image.name} />
          </Link>
          <div className="truncate">{image.name}</div>
        </div>
      ))}
    </>
  );
}

  /**
   * The main page of the app, showing a list of images.
   *
   * If the user is not signed in, it will show a message asking them to sign in.
   * If the user is signed in, it will show the list of images.
   */
export default function HomePage() {
  return (
    <main className="flex flex-wrap justify-center gap-4 p-4">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in to see images</div>
      </SignedOut>
      <SignedIn>
        <ImageList />
      </SignedIn>
    </main>
  );
}

