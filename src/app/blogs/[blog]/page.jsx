import { slugify } from "@/utils/slugify";
import { client } from "../../../../sanityBackend/lib/client";
import BlogList from "./BlogList";

async function getBlogSEOData(slug) {
  // First, get the blog to find its _id
  const blog = await client.fetch(
    `*[_type == "blogs" && slug.current == $slug][0] {
      _id,
      title,
      "description": seo.metaDescription,
      "keywords": seo.keywords,
      "blogImage": blogImage.asset->url
    }`,
    { slug }
  );

  if (!blog) return null;

  // Then, try to get SEO data from SEO Settings that references this blog
  const seoSettings = await client.fetch(
    `*[_type == "seo" && page._ref == $blogId][0] {
      title,
      description,
      keywords,
      publisher,
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
    { blogId: blog._id }
  );

  // If SEO Settings exist, use them; otherwise, use blog's built-in SEO
  if (seoSettings) {
    return seoSettings;
  }

  // Fallback to blog's own SEO data
  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    publisher: "Safelift",
    openGraph: {
      ogTitle: blog.title,
      ogDescription: blog.description,
      ogImage: blog.blogImage,
      ogType: "article",
    },
    twitter: {
      twitterTitle: blog.title,
      twitterDescription: blog.description,
      twitterImage: blog.blogImage,
      twitterCard: "summary_large_image",
    },
  };
}

export async function generateMetadata({ params }) {
  const seoData = await getBlogSEOData(params?.blog);

  if (!seoData) {
    return {
      title: "Blog | Safelift",
      description: "Read our latest blog posts about material handling equipment.",
    };
  }

  return {
    title: seoData.title || "Blog | Safelift",
    description: seoData.description || "",
    keywords: seoData.keywords || [],
    publisher: seoData.publisher || "Safelift",
    alternates: {
      canonical:
        seoData.canonical ||
        `https://safelift.in/blogs/${params.blog}`,
    },
    openGraph: {
      title: seoData.openGraph?.ogTitle || seoData.title,
      description: seoData.openGraph?.ogDescription || seoData.description,
      url: seoData.openGraph?.ogUrl || `https://safelift.in/blogs/${params.blog}`,
      siteName: "Safelift",
      images: seoData.openGraph?.ogImage
        ? [
            {
              url: seoData.openGraph.ogImage,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      locale: "en_US",
      type: seoData.openGraph?.ogType || "article",
    },
    twitter: {
      card: seoData.twitter?.twitterCard || "summary_large_image",
      title: seoData.twitter?.twitterTitle || seoData.title,
      description: seoData.twitter?.twitterDescription || seoData.description,
      images: seoData.twitter?.twitterImage
        ? [seoData.twitter.twitterImage]
        : [],
    },
    icons: {
      icon: seoData.icons?.favicon || "/favicon.ico",
      apple: seoData.icons?.appleIcon || "/apple-icon.png",
    },
    robots: {
      index: seoData.robots?.includes("index") ?? true,
      follow: seoData.robots?.includes("follow") ?? true,
    },
  };
}

export default function ProductCategoryPage({ params }) {
  return <BlogList params={params} />;
}
