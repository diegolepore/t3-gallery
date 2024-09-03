import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function ImageList() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <>
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id +'-'+ index} className="w-48">
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-4">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in to see images</div>
      </SignedOut>
      <SignedIn>
        <ImageList />
      </SignedIn>
    </main>
  );
}

