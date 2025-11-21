import AboutUs from "@/components/Home/AboutUs";
import Applications from "@/components/Home/Applications";
import Banner from "@/components/Home/Banner";
import Future from "@/components/Home/Future";
import FAQ from "@/components/Home/FAQ";
import Partner from "@/components/Home/Partner";
import ProductsRange from "@/components/Home/ProductsRange";
import TrustedCompanies from "@/components/Home/TrustedCompanies";
import WhyUs from "@/components/Home/Certification";
import { getSEOData, generateMetadataFromSEO } from "@/utils/sanity";

// Dynamic SEO metadata from Sanity
export async function generateMetadata() {
  const seoData = await getSEOData("/"); // Home page URL
  
  // Fallback metadata if Sanity data is not available
  const fallbackMetadata = {
    title: "Material Handling Equipment Manufacturers & Supplier | Safelift",
    description:
      "Safelift is a leading premium material handling equipment manufacturer & supplier in India. We offer quality material handling products like hoisting, lifting, slings, etc.",
    keywords: [
      "material handling equipment",
      "material handling equipment manufacturer",
      "warehouse material handling equipment",
      "lifting equipment",
      "hoisting equipment",
      "industrial equipment supplier",
      "material handling solutions",
      "bulk material handling",
      "Safelift",
    ],
    publisher: "Safelift",
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

  return generateMetadataFromSEO(seoData, fallbackMetadata);
}

export default function Home() {
  return (
    <div className="h-full justify-center items-center overflow-hidden">
      <Banner />

      {/* TRUSTED COMPANIES  */}
      <TrustedCompanies />

      {/* ABOUT US */}
      <AboutUs />

      {/* OUR RANGE OF PRODUCTS  */}
      <ProductsRange />

      {/* CERTIFICATION  */}
      <WhyUs />

      {/* Applications  */}
      <Applications />

      {/* CONTACT  */}
      <Future />

      {/* Partners  */}
      <Partner />

      {/* FAQS  */}
      <FAQ />
    </div>
  );
}
