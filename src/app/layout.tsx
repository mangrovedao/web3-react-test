import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { Providers } from "@/components/root-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
