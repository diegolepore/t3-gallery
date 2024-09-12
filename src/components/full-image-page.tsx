import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);
  return (
  <div className="flex w-full h-full">
    <div className="flex-shrink">
      <img src={image.url} className="flex-shrink object-contain" alt={image.name} />
    </div>

    <div className="flex w-48 flex-col flex-shrink-0">
      <div className="text-xl font-bold">{image.name}</div>
    </div>
  </div>
);
}