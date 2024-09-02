import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/4fcc0d4f-cd7f-47ce-8a80-38678d3f6aa4-pvznd0.jpg',
  'https://utfs.io/f/d8c0d61b-f972-44a3-937e-247202d4aa3b-f7juxs.jpg',
  'https://utfs.io/f/b7335055-bc52-4808-bcdc-01624d526156-qhrpig.jpg',
  'https://utfs.io/f/6d640669-c226-4eb0-886a-38a2a604c73c-pmowwb.jpg',
]

const mockImages = mockUrls.map((url, index) => ({
 id: index + 1,
 url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex flex-wrap gap-4">
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
        <div key={image.id +'-'+ index} className="w-48">
          <img src={image.url} />
        </div>
      ))}
    </main>
  );
}
