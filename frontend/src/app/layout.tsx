import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import { UserProvider } from '@auth0/nextjs-auth0/client';

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
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

export default RootLayout;