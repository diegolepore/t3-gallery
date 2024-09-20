import FullPageImageView from "~/app/common/full-image-page";
import { Modal } from "./modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView id={photoId} />
    </Modal>
  );
}