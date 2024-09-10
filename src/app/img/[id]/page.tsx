import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  const idAsNumber = parseInt(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid Photo ID");

  return <FullPageImageView id={idAsNumber} />;
}