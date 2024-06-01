/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 import {auth} from "@clerk/nextjs/server"
 import {db} from "~/server/db/index"
import {images} from "~/server/db/schema"
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const f = createUploadthing();
 
 
// FileRouter for your app, can contain multiple FileRoutes
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount:10 } })
    // Set permissions and file types for this FileRoute
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    .middleware(async ({ req}) => {
      // This code runs on your server before upload
      const user = auth();
 
      // If you throw, the user will not be able to upload
      if (!user.userId) throw new UploadThingError("Unauthorized");
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
 
      await db.insert(images).values({name:file.name,url:file.url,userId:metadata.userId});
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;