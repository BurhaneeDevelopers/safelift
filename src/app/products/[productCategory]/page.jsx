import { slugify, unslugify } from "@/utils/slugify";
import ProductList from "./ProductList";
import { client } from "../../../../sanityBackend/lib/client";

const metadataMap = {
  "products/hoisting-equipment": {
    title: "Hoisting Equipment Manufacturers & Suppliers | Safelift",
    description:
      "Safelift is a top hoisting equipment manufacturer & supplier, offering electric & gear trolleys, magnet lifters, chain pulleys & more for construction needs.",
  },
  "products/polyester-lifting-&-lashing-products": {
    title: "Polyester Lifting & Lashing Products Manufacturers | Safelift",
    description:
      "Safelift is top polyester lifting & lashing products manufacturers in India. We offer best quality lifting products like round & duplex sling, protector, etc.",
  },
  "products/g-80-riggings": {
    title: "G80 Lifting Rigging Suppliers & Manufacturers | Safelift",
    description:
      "Safelift is top G80 lifting rigging suppliers & manufacturers in India. We offer best quality rigging products like self-locking & lifting hook and many more.",
  },
  "products/g-100-riggings": {
    title: "G100 Lifting Rigging Suppliers & Manufacturers | Safelift",
    description:
      "Safelift is top G100 lifting rigging suppliers & manufacturers in India. We offer best quality rigging products like sling hook, G100 chain, and master link.",
  },
  "products/lifting-clamps": {
    title: "Horizontal & Vertical Plate Lifting Clamp Suppliers | Safelift",
    description:
      "Safelift is top horizontal & vertical plate lifting clamp suppliers in India. We offer best quality plate lifting clamp products at affordable prices.",
  },
  "products/lifting-tackles": {
    title: "Lifting Tackles, Tools & Accessories Suppliers | Safelift",
    description:
      "Safelift provides top-quality lifting tools & tackles for industries, including rope pulley blocks, lifting machines & more. Reliable & efficient solutions!",
  },
  "products/slings": {
    title: "Lifting Slings Suppliers & Manufacturers in India | Safelift",
    description:
      "Safelift is top lifting slings suppliers & manufacturers in India. We offer best quality full line lifting slings products for any of your applications.",
  },
  "products/hydraulic-lifting-equipments": {
    title:
      "Hydraulic Lifting & Material Handling Equipment Suppliers | Safelift",
    description:
      "Safelift is top hydraulic lifting equipment suppliers in India. We offer best quality handling products including hand stacker, drum trolley, lifting table, etc.",
  },
};

async function getSEOData(slug) {
  return client.fetch(
    `*[_type == "seo" && page->slug.current == $slug][0] {
      title,
      description,
      canonical,
      robots,
      openGraph {
        ogTitle,
        ogDescription,
        "ogImage": ogImage.asset->url,
        ogUrl,
        ogType
      },
      twitter {
        twitterTitle,
        twitterDescription,
        "twitterImage": twitterImage.asset->url,
        twitterCard
      },
      icons {
        "favicon": favicon.asset->url,
        "appleIcon": appleIcon.asset->url
      }
    }`,
    { slug }
  );
}

export async function generateMetadata({ params }) {
  const seoData = await getSEOData(params.slug);

  const path = params.productCategory
    ? `products/${params.productCategory}`
    : params.slug || "";

  const meta = metadataMap[path] || {
    title: "Material Handling Equipment Manufacturers & Supplier | Safelift",
    description: "Explore high-quality products at Safelift.",
  };

  return {
    title: seoData?.title || meta.title,
    description: seoData?.description || meta.description,
    alternates: {
      canonical:
        seoData?.canonical ||
        `https://safelift.in/products/${slugify(params.productCategory)}`,
    },

    openGraph: {
      title: seoData?.openGraph?.ogTitle || seoData?.title,
      description: seoData?.openGraph?.ogDescription || seoData?.description,
      url: seoData?.openGraph?.ogUrl || "https://safelift.in/",
      siteName: "Safelift",
      images: seoData?.openGraph?.ogImage
        ? [
            {
              url: seoData.openGraph.ogImage.asset.url,
              width: 800,
              height: 600,
            },
          ]
        : [],
      locale: "en_US",
      type: seoData?.openGraph?.ogType || "website",
    },
    twitter: {
      card: seoData?.twitter?.twitterCard || "summary_large_image",
      title: seoData?.twitter?.twitterTitle || seoData?.title,
      description: seoData?.twitter?.twitterDescription || seoData?.description,
      images: seoData?.twitter?.twitterImage
        ? [seoData.twitter.twitterImage.asset.url]
        : [],
    },
    icons: {
      icon: seoData?.icons?.favicon
        ? seoData.icons.favicon.asset.url
        : "/favicon.ico",
      apple: seoData?.icons?.appleIcon
        ? seoData.icons.appleIcon.asset.url
        : "/apple-icon.png",
    },
    robots: {
      index: seoData?.robots?.includes("index"),
      follow: seoData?.robots?.includes("follow"),
    },
  };
}

export default function ProductCategoryPage({ params }) {
  return <ProductList params={params} />;
}
