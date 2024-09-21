import { clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";
;
import { deleteImage, getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: string }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImageById(idAsNumber);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  
  return (
  <div className="flex w-full h-full">
    <div className="flex-shrink">
      <img src={image.url} className="flex-shrink object-contain" alt={image.name} />
    </div>

    <div className="flex w-48 flex-col flex-shrink-0">
      <div className="text-xl font-bold p-4 border-b-2 border-b-white">{image.name}</div>

      <div className="flex flex-col p-4 border-b-2 border-b-white">
        <span>Uploaded By</span>
        <span>{uploaderInfo.fullName}</span>
      </div>

      <div className="flex flex-col p-4 border-b-2 border-b-white">
        <span>Created On</span>
        <span>{new Date(image.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        {/* 
        The format of the createdAt date in your image object is ISO 8601. 
        This is a standard format for representing date and time in a human-readable and machine-parsable way. 
        
        Specifically, the string 2024-09-04T10:55:39.099Z is:

        •	2024-09-04: The date in YYYY-MM-DD format.
        •	T: The separator between the date and time.
        •	10:55:39.099: The time in HH:MM:SS.sss format (with milliseconds).
        •	Z: This indicates that the time is in UTC (Coordinated Universal Time). 
        */}
      </div>

      <div className="flex flex-col p-4 border-b-2 border-b-white">
        {/* The reason of putting "use server" is so that we can be sure
           that this functionality gets exposed as post endpoint 
          on whatever Pages this component is mounted on.

          We could break this out somewhere else, but if 
          we put inline like this we get a few magic superpowers
        */}
        <form action={async () => {
          "use server";

          await deleteImage(idAsNumber);

          redirect("/");
        }}>
          <Button type="submit" variant="destructive">Delete</Button>
        </form>
      </div>
    </div>
  </div>
);
}