import { createClient } from "next-sanity";

const client = createClient({
  projectId: "n12km8si",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-03-05",
});

export default client;

// Helper function to fetch SEO data for a specific page by URL
export async function getSEOData(pageUrl) {
  const query = `*[_type == "customPage" && pageUrl == $pageUrl][0]{
    "title": seoTitle,
    "description": seoDescription,
    keywords,
    publisher,
    canonical,
    robots,
    openGraph{
      ogTitle,
      ogDescription,
      "ogImage": ogImage.asset->url,
      ogUrl,
      ogType
    },
    twitter{
      twitterTitle,
      twitterDescription,
      "twitterImage": twitterImage.asset->url,
      twitterCard
    },
    icons{
      "favicon": favicon.asset->url,
      "appleIcon": appleIcon.asset->url
    }
  }`;

  try {
    const seoData = await client.fetch(query, { pageUrl });
    return seoData;
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return null;
  }
}

// Helper function to generate Next.js metadata from Sanity SEO data
export function generateMetadataFromSEO(seoData, fallbackMetadata = {}) {
  if (!seoData) return fallbackMetadata;

  return {
    title: seoData.title || fallbackMetadata.title,
    description: seoData.description || fallbackMetadata.description,
    keywords: seoData.keywords || fallbackMetadata.keywords,
    publisher: seoData.publisher || fallbackMetadata.publisher,
    alternates: {
      canonical: seoData.canonical || fallbackMetadata.alternates?.canonical,
    },
    robots: seoData.robots || fallbackMetadata.robots,
    openGraph: {
      title: seoData.openGraph?.ogTitle || seoData.title || fallbackMetadata.openGraph?.title,
      description: seoData.openGraph?.ogDescription || seoData.description || fallbackMetadata.openGraph?.description,
      url: seoData.openGraph?.ogUrl || fallbackMetadata.openGraph?.url,
      siteName: fallbackMetadata.openGraph?.siteName || "Safelift",
      images: seoData.openGraph?.ogImage
        ? [{ url: seoData.openGraph.ogImage }]
        : fallbackMetadata.openGraph?.images,
      type: seoData.openGraph?.ogType || fallbackMetadata.openGraph?.type || "website",
    },
    twitter: {
      card: seoData.twitter?.twitterCard || fallbackMetadata.twitter?.card || "summary_large_image",
      title: seoData.twitter?.twitterTitle || seoData.title || fallbackMetadata.twitter?.title,
      description: seoData.twitter?.twitterDescription || seoData.description || fallbackMetadata.twitter?.description,
      images: seoData.twitter?.twitterImage
        ? [seoData.twitter.twitterImage]
        : fallbackMetadata.twitter?.images,
    },
    icons: {
      icon: seoData.icons?.favicon || fallbackMetadata.icons?.icon,
      apple: seoData.icons?.appleIcon || fallbackMetadata.icons?.apple,
    },
  };
}

// Helper function to fetch SEO data for blogs by slug
export async function getBlogSEOData(blogSlug) {
  const query = `*[_type == "blogs" && slug.current == $blogSlug][0]{
    "title": seo.metaTitle,
    "description": seo.metaDescription,
    "keywords": seo.keywords,
    "ogImage": seo.ogImage.asset->url,
    title as blogTitle,
    "blogImage": blogImage.asset->url
  }`;

  try {
    const blogData = await client.fetch(query, { blogSlug });
    
    if (!blogData) return null;

    // Transform blog data to SEO format
    return {
      title: blogData.title || blogData.blogTitle,
      description: blogData.description,
      keywords: blogData.keywords,
      publisher: "Safelift",
      openGraph: {
        ogTitle: blogData.title || blogData.blogTitle,
        ogDescription: blogData.description,
        ogImage: blogData.ogImage || blogData.blogImage,
        ogType: "article",
      },
      twitter: {
        twitterTitle: blogData.title || blogData.blogTitle,
        twitterDescription: blogData.description,
        twitterImage: blogData.ogImage || blogData.blogImage,
        twitterCard: "summary_large_image",
      },
    };
  } catch (error) {
    console.error("Error fetching blog SEO data:", error);
    return null;
  }
}

// Helper function to fetch SEO data from SEO Settings document by reference
export async function getSEODataByReference(referenceId, referenceType) {
  const query = `*[_type == "seo" && page._ref == $referenceId][0]{
    title,
    description,
    keywords,
    publisher,
    canonical,
    robots,
    openGraph{
      ogTitle,
      ogDescription,
      "ogImage": ogImage.asset->url,
      ogUrl,
      ogType
    },
    twitter{
      twitterTitle,
      twitterDescription,
      "twitterImage": twitterImage.asset->url,
      twitterCard
    },
    icons{
      "favicon": favicon.asset->url,
      "appleIcon": appleIcon.asset->url
    }
  }`;

  try {
    const seoData = await client.fetch(query, { referenceId });
    return seoData;
  } catch (error) {
    console.error("Error fetching SEO data by reference:", error);
    return null;
  }
}

// Helper function to fetch product SEO data (checks both product's own SEO and SEO Settings)
export async function getProductSEOData(productSlug) {
  const query = `*[_type == "product" && slug.current == $productSlug][0]{
    _id,
    title,
    description,
    "image": image.asset->url
  }`;

  try {
    const productData = await client.fetch(query, { productSlug });
    
    if (!productData) return null;

    // Try to get SEO from SEO Settings document
    const seoSettings = await getSEODataByReference(productData._id, "product");
    
    if (seoSettings) {
      return seoSettings;
    }

    // Fallback to product's basic data
    return {
      title: productData.title,
      description: productData.description,
      publisher: "Safelift",
      openGraph: {
        ogTitle: productData.title,
        ogDescription: productData.description,
        ogImage: productData.image,
        ogType: "product",
      },
      twitter: {
        twitterTitle: productData.title,
        twitterDescription: productData.description,
        twitterImage: productData.image,
        twitterCard: "summary_large_image",
      },
    };
  } catch (error) {
    console.error("Error fetching product SEO data:", error);
    return null;
  }
}
