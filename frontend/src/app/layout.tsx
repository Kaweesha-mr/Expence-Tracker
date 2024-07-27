import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import SessionWrapper from "@/components/sessionWrapper";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>

          {children}

        </body>
      </html>
    </SessionWrapper>
  );
}

export default RootLayout;