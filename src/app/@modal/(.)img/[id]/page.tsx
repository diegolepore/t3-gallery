import FullPageImageView from "~/components/full-image-page";
import { Modal } from "./modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  const idAsNumber = parseInt(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid Photo ID");

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}