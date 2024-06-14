"use client"
import {  SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {SimpleUploadButton} from "./simple-upload-button"
export default function Topnav (){
    return (
        <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold  border-b-black">
            <div> Gallery</div>
            <div className="flex flex-row gap-4items-center"> 
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn >
                    <div className="flex justify-between gap-4">
                <SimpleUploadButton/>        
                 <UserButton/>
                    </div>
                </SignedIn>
            </div>
        </nav>
    )
}