import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import App from "@/components/App/App";
import Script from "next/script";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W7L99G9Q');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`7xl:max-w-[1920px] mx-auto ${montserrat.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7L99G9Q"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <App>{children}</App>
      </body>
    </html>
  );
}
