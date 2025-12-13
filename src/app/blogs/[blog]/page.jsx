import { getBlogSEOData, generateMetadataFromSEO } from "@/utils/sanity";
import BlogList from "./BlogList";

export async function generateMetadata({ params }) {
  // Await params first
  const resolvedParams = await params;
  const seoData = await getBlogSEOData(resolvedParams?.blog);

  // Fallback metadata
  const fallbackMeta = {
    title: "Blog | Safelift",
    description: "Read our latest blog posts about material handling equipment.",
    alternates: {
      canonical: `https://safelift.in/blogs/${resolvedParams.blog}`,
    },
  };

  return generateMetadataFromSEO(seoData, fallbackMeta);
}

export default async function ProductCategoryPage({ params }) {
  // Await params before passing to BlogList
  const resolvedParams = await params;
  return <BlogList params={resolvedParams} />;
}