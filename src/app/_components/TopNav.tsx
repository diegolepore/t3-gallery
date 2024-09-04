"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full justify-between items-center p-4 border-b text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" onClientUploadComplete={() => { 
            // It basically reruns the current route you're on, on the server, 
            // and sends you down the necessary parts to update the page's content.
            // So now when the upload is completed we'll refresh this on the client side.
            router.refresh(); 
          }} />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}