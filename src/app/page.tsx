import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function ImageList() {
  const images = await getMyImages();

  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="w-48 h-48">
          <Image src={image.url} style={{ objectFit: "contain" }} width={192} height={192} alt={image.name} />
          <div>{image.name}</div>
        </div>
      ))}
    </>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-wrap justify-center gap-4">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in to see images</div>
      </SignedOut>
      <SignedIn>
        <ImageList />
      </SignedIn>
    </main>
  );
}

