import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import Topnav from "./_components/Topnav";
export const metadata = {
  title: "theo",
  description: "yassinkr",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-4">
         <Topnav/>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
