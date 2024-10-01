import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ToastProvider } from "@/context/ToastContext/provider";

const montserrat = Montserrat({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "My Redeem App - Juanma Aerolab Challenge",
  description: "An application to redeem products with points",
  metadataBase: new URL("https://juanma-aerolab-challenge.netlify.app/"),
  openGraph: {
    title: "Juanma Aerolab Challenge",
    description: "An application to redeem products with points",
    url: "https://juanma-aerolab-challenge.netlify.app/",
    siteName: "Juanma Aerolab Challenge",
    images: [
      {
        url: "https://juanma-aerolab-challenge.netlify.app/meta.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juanma Aerolab Challenge",
    description: "An application to redeem products with points",
    images: [
      {
        url: "https://juanma-aerolab-challenge.netlify.app/meta.png",
        width: 1200,
        height: 630,
      },
    ],
    creator: "@JuanmaPiojoso",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} `}>
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
