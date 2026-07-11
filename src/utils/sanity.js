import { createClient } from "next-sanity";

const client = createClient({
  projectId: "n12km8si",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-03-05",
});

// Create a client with revalidation for server-side fetching
export const clientWithRevalidation = createClient({
  projectId: "n12km8si",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-03-05",
  // Add token for authenticated requests if needed for draft content
  // token: process.env.SANITY_API_TOKEN,
});

export default client;

// Generic fetch function with revalidation for server components
export async function fetchWithRevalidation(query, params = {}, revalidateTime = 60) {
  try {
    return await client.fetch(query, params, {
      next: { revalidate: revalidateTime }
    });
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return null;
  }
}

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
    const seoData = await client.fetch(query, { pageUrl }, {
      // Revalidate every 60 seconds
      next: { revalidate: 60 }
    });
    return seoData;
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return null;
  }
}

// Helper function to generate Next.js metadata from Sanity SEO data
export function generateMetadataFromSEO(seoData, fallbackMetadata = {}) {
  if (!seoData) return fallbackMetadata;

  // Parse robots string into boolean values
  const robotsString = seoData.robots || fallbackMetadata.robots;
  const robotsConfig = robotsString ? {
    index: robotsString.includes('index') && !robotsString.includes('noindex'),
    follow: robotsString.includes('follow') && !robotsString.includes('nofollow'),
  } : undefined;

  return {
    title: seoData.title || fallbackMetadata.title,
    description: seoData.description || fallbackMetadata.description,
    keywords: seoData.keywords || fallbackMetadata.keywords,
    publisher: seoData.publisher || fallbackMetadata.publisher,
    alternates: {
      canonical: seoData.canonical || fallbackMetadata.alternates?.canonical,
    },
    robots: robotsConfig || fallbackMetadata.robots,
    openGraph: {
      title: seoData.openGraph?.ogTitle || seoData.title || fallbackMetadata.openGraph?.title || fallbackMetadata.title,
      description: seoData.openGraph?.ogDescription || seoData.description || fallbackMetadata.openGraph?.description || fallbackMetadata.description,
      url: seoData.openGraph?.ogUrl || seoData.canonical || fallbackMetadata.openGraph?.url || fallbackMetadata.alternates?.canonical,
      siteName: "Safelift",
      images: seoData.openGraph?.ogImage
        ? [{ url: seoData.openGraph.ogImage }]
        : fallbackMetadata.openGraph?.images || [],
      type: seoData.openGraph?.ogType || fallbackMetadata.openGraph?.type || "website",
    },
    twitter: {
      card: seoData.twitter?.twitterCard || fallbackMetadata.twitter?.card || "summary_large_image",
      title: seoData.twitter?.twitterTitle || seoData.title || fallbackMetadata.twitter?.title || fallbackMetadata.title,
      description: seoData.twitter?.twitterDescription || seoData.description || fallbackMetadata.twitter?.description || fallbackMetadata.description,
      images: seoData.twitter?.twitterImage
        ? [seoData.twitter.twitterImage]
        : fallbackMetadata.twitter?.images || [],
    },
    icons: {
      icon: seoData.icons?.favicon || fallbackMetadata.icons?.icon || "/favicon.ico",
      apple: seoData.icons?.appleIcon || fallbackMetadata.icons?.apple || "/apple-icon.png",
    },
  };
}

// Helper function to fetch SEO data for blogs by slug (enhanced to check SEO Settings first)
export async function getBlogSEOData(blogSlug) {
  const query = `*[_type == "blogs" && slug.current == $blogSlug][0]{
    _id,
    "title": seo.metaTitle,
    "description": seo.metaDescription,
    "keywords": seo.keywords,
    "ogImage": seo.ogImage.asset->url,
    "blogTitle": title,
    "blogImage": blogImage.asset->url
  }`;

  try {
    const blogData = await client.fetch(query, { blogSlug }, {
      next: { revalidate: 60 }
    });
    
    if (!blogData) return null;

    // Try to get SEO data from SEO Settings that references this blog
    const seoSettings = await getSEODataByReference(blogData._id, "blogs");
    
    // If SEO Settings exist, use them; otherwise, use blog's built-in SEO
    if (seoSettings) {
      return seoSettings;
    }

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
    const seoData = await client.fetch(query, { referenceId }, {
      next: { revalidate: 60 }
    });
    return seoData;
  } catch (error) {
    console.error("Error fetching SEO data by reference:", error);
    return null;
  }
}

// Helper function to fetch category SEO data (checks both mainCategory and subCategory)
export async function getCategorySEOData(categorySlug) {
  // First try to find in mainCategory
  const mainCategoryQuery = `*[_type == "mainCategory" && slug.current == $categorySlug][0]{
    _id,
    title,
    "categoryImage": categoryImage.asset->url,
    "metaTitle": seo.metaTitle,
    "metaDescription": seo.metaDescription,
    "keywords": seo.keywords,
    "publisher": seo.publisher,
    "canonical": seo.canonical,
    "robots": seo.robots,
    "openGraph": seo.openGraph{
      ogTitle,
      ogDescription,
      "ogImage": ogImage.asset->url,
      ogUrl,
      ogType
    },
    "twitter": seo.twitter{
      twitterTitle,
      twitterDescription,
      "twitterImage": twitterImage.asset->url,
      twitterCard
    },
    "icons": seo.icons{
      "favicon": favicon.asset->url,
      "appleIcon": appleIcon.asset->url
    }
  }`;

  // Try subCategory if not found in mainCategory
  const subCategoryQuery = `*[_type == "subCategory" && slug.current == $categorySlug][0]{
    _id,
    title,
    "metaTitle": seo.metaTitle,
    "metaDescription": seo.metaDescription,
    "keywords": seo.keywords,
    "publisher": seo.publisher,
    "canonical": seo.canonical,
    "robots": seo.robots,
    "openGraph": seo.openGraph{
      ogTitle,
      ogDescription,
      "ogImage": ogImage.asset->url,
      ogUrl,
      ogType
    },
    "twitter": seo.twitter{
      twitterTitle,
      twitterDescription,
      "twitterImage": twitterImage.asset->url,
      twitterCard
    },
    "icons": seo.icons{
      "favicon": favicon.asset->url,
      "appleIcon": appleIcon.asset->url
    }
  }`;

  try {
    // Try mainCategory first
    let categoryData = await client.fetch(mainCategoryQuery, { categorySlug }, {
      next: { revalidate: 60 }
    });
    
    // If not found, try subCategory
    if (!categoryData) {
      categoryData = await client.fetch(subCategoryQuery, { categorySlug }, {
        next: { revalidate: 60 }
      });
    }
    
    if (!categoryData) return null;

    // Also check if there's a separate SEO Settings document referencing this category
    const seoSettings = await getSEODataByReference(categoryData._id, "mainCategory");
    
    if (seoSettings) {
      return seoSettings;
    }

    // Transform category SEO data to the expected format
    return {
      title: categoryData.metaTitle || categoryData.title,
      description: categoryData.metaDescription,
      keywords: categoryData.keywords,
      publisher: categoryData.publisher || "Safelift",
      canonical: categoryData.canonical,
      robots: categoryData.robots,
      openGraph: categoryData.openGraph ? {
        ogTitle: categoryData.openGraph.ogTitle || categoryData.metaTitle || categoryData.title,
        ogDescription: categoryData.openGraph.ogDescription || categoryData.metaDescription,
        ogImage: categoryData.openGraph.ogImage || categoryData.categoryImage,
        ogUrl: categoryData.openGraph.ogUrl,
        ogType: categoryData.openGraph.ogType || "website",
      } : undefined,
      twitter: categoryData.twitter ? {
        twitterTitle: categoryData.twitter.twitterTitle || categoryData.metaTitle || categoryData.title,
        twitterDescription: categoryData.twitter.twitterDescription || categoryData.metaDescription,
        twitterImage: categoryData.twitter.twitterImage || categoryData.categoryImage,
        twitterCard: categoryData.twitter.twitterCard || "summary_large_image",
      } : undefined,
      icons: categoryData.icons,
    };
  } catch (error) {
    console.error("Error fetching category SEO data:", error);
    return null;
  }
}

// Helper function to fetch product SEO data (checks both product's own SEO and SEO Settings)
export async function getProductSEOData(productSlug) {
  const query = `*[_type == "product" && slug.current == $productSlug][0]{
    _id,
    title,
    "description": series,
    "image": productimage.asset->url,
    "mainCategorySlug": mainCategory->slug.current,
    "subCategorySlug": subCategory->slug.current,
    "subCategoryMasterSlug": subCategory->masterSlug.current
  }`;

  try {
    const productData = await client.fetch(query, { productSlug }, {
      next: { revalidate: 60 }
    });
    
    if (!productData) return null;

    // Determine the category slug to use in the URL
    // Priority: subCategory masterSlug > subCategory slug > mainCategory slug
    const categorySlug = productData.mainCategoryMasterSlug || productData.subCategoryMasterSlug

    // Generate the correct canonical URL based on actual category
    const correctCanonical = categorySlug ? `https://safelift.in/products/${categorySlug}/${productSlug}` : undefined;

    // Try to get SEO from SEO Settings document
    const seoSettings = await getSEODataByReference(productData._id, "product");
    
    if (seoSettings) {
      // Always override canonical URL with the correct one based on actual category
      seoSettings.canonical = correctCanonical;
      return seoSettings;
    }

    // Fallback to product's basic data with dynamic canonical
    return {
      title: productData.title,
      description: productData.description,
      publisher: "Safelift",
      canonical: correctCanonical,
      openGraph: {
        ogTitle: productData.title,
        ogDescription: productData.description,
        ogImage: productData.image,
        ogType: "website",
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
