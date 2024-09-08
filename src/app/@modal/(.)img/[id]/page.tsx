import { getImageById } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  const idAsNumber = parseInt(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid Photo ID");

  const image = await getImageById(idAsNumber);

  return (
    <div>
      <img src={image.url} className="w-96" alt={image.name} />
    </div>
  );
}