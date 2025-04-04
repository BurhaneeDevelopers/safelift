import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import App from "@/components/App/App";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Material Handling Equipment Manufacturers & Supplier | Safelift",
  description:
    "Safelift is a leading premium material handling equipment manufacturer & supplier in India. We offer quality material handling products like hoisting, lifting, slings, etc.",
  alternates: {
    canonical: "https://safelift.in/",
  },
  openGraph: {
    title: "Material Handling Equipment Manufacturers & Supplier | Safelift",
    description:
      "Safelift is a leading premium material handling equipment manufacturer & supplier in India. We offer quality material handling products like hoisting, lifting, slings, etc.",
    url: "https://safelift.in/",
    siteName: "Safelift",
    images: [
      {
        url: "https://safelift.in/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Safelift - Material Handling Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@safelift",
    title: "Material Handling Equipment Manufacturers & Supplier | Safelift",
    description:
      "Safelift is a leading premium material handling equipment manufacturer & supplier in India. We offer quality material handling products like hoisting, lifting, slings, etc.",
    images: ["https://safelift.in/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`7xl:max-w-[1920px] mx-auto ${montserrat.className}`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
