import type { Metadata } from "next";
import { Kanit, Geist_Mono } from "next/font/google";
import Script from "@/components/Script";

const kanit = Kanit({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-kanit-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guide",
  description: "Perm Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} ${geistMono.variable} antialiased`}>
            {children}
            <div className="night-sky" id="sky"></div>
            <Script />
      </body>
    </html>
  );
}
