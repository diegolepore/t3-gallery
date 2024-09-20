import FullPageImageView from "~/app/common/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <FullPageImageView id={photoId} />;
}