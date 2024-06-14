import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import Topnav from "./_components/Topnav";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "../components/ui/sonner"
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata = {
  title: "theo",
  description: "yassinkr",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <CSPostHogProvider>
    <html lang="en" className={`${GeistSans.variable} dark`}>
    <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
      <body>
        <div  className="h-screen  grid grid-rows[auto,1fr] ">
         <Topnav/>
        <main>{children}</main>
        
        </div>
        {modal}
        <div id="modal-root"/>
        <Toaster />
        </body>
    </html>
    </CSPostHogProvider>
    </ClerkProvider>
  );
}
