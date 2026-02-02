import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Enggal Studio - Creative Studio for Tourism & Media",
  description: "Enggal Studio specializes in creative media for tourism: animation, design, website, and interactive solutions.",
  icons: {
    icon: "/assetenggal/icon1.ico", // pastikan folder public/assetenggal ada
  },
  openGraph: {
    title: "Enggal Studio - Creative Studio",
    description: "Enggal Studio specializes in creative media for tourism: animation, design, website, and interactive solutions.",
    url: "https://enggalstudio.com",
    siteName: "Enggal Studio",
    images: ["/assetenggal/og-image.png"], // optional
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enggal Studio - Creative Studio",
    description: "Enggal Studio specializes in creative media for tourism.",
    images: ["/assetenggal/og-image.png"], // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
