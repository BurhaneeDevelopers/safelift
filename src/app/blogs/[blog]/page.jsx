import { slugify } from "@/utils/slugify";
import { client } from "../../../../sanityBackend/lib/client";
import BlogList from "./BlogList";

async function getSEOData(slug) {
  return client.fetch(
    `*[_type == "blogs" && page->slug.current == $slug][0] {
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
  const seoData = await getSEOData(params?.blog);

  return {
    title: seoData?.title || "",
    description: seoData?.description || "",
    alternates: {
      canonical:
        seoData?.canonical ||
        `https://safelift.in/product/${slugify(params.blog)}`,
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
  return <BlogList params={params} />;
}
