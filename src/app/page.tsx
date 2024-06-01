import { SignedIn, SignedOut } from "@clerk/nextjs";
import {getMyImages} from "../server/db/queries"
import Image from "next/image"
export const dynamic= "force-dynamic"

async function  Images(){
     const images = await getMyImages();
  return( 
  <div className="w-[80%] flex justify-around items-start gap-4 flex-wrap">
  {images.map((image,id)=>(
    <div key= {id} className="flex h-48 w-48 flex-col">
      <Image src={image.url} style={{objectFit:"cover"}} 
      height={150} width={200} 
      alt={image.name}/>
    </div>
  ))}
</div>

  )
}

export default async function HomePage() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
     <SignedOut>
      <div className="w-full h-full text-2xl text-center">
      sign in to seee the images
      </div>
     </SignedOut>
     <SignedIn>
     <Images/>
     </SignedIn>
    </main>
  );
}
