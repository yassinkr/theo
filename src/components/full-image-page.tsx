import { clerkClient } from "@clerk/nextjs/server";
import {getImage} from "~/server/db/queries"



export default async function FullPageImageView(props :{id :number}){
      
    const image = await getImage(props.id);
    const uploaderInfo = await clerkClient.users.getUser(image.userId);
    return <div className="flex h-full w-full ">
       <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} alt={image.name} className="flex-shrink object-contain"/> 
        </div>
    <div className="w-48 flex flex-col flex-shrink-0 border-l ">
        <div className="text-xl font-bold border-b text-center p-2"> {image.name}</div>
        <div className="flex flex-col p-2">
            <span> Uploaded By:</span>
            <span>{uploaderInfo.fullName}</span></div>
            <div className="flex flex-col p-2">
            <span> created on:</span>
            <span>{new Date(image.createdAt).toLocaleDateString()}</span></div>
    </div>
    </div>
    
}