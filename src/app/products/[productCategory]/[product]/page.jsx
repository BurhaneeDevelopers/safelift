import { getProductSEOData, generateMetadataFromSEO } from "@/utils/sanity";
import ProductClient from "./ProductClient";

export async function generateMetadata({ params }) {
  // Await params to get the actual values
  const resolvedParams = await params;
  const productSlug = resolvedParams?.product;
  
  // Fetch SEO data from SEO Settings or product data
  const seoData = await getProductSEOData(productSlug);
  
  // Fallback metadata
  const fallbackMeta = {
    title: "Product | Safelift",
    description: "High-quality material handling equipment and lifting solutions.",
    alternates: {
      canonical: `https://safelift.in/products/${resolvedParams.productCategory}/${productSlug}`,
    },
  };

  return generateMetadataFromSEO(seoData, fallbackMeta);
}

const Product = async ({ params }) => {
  // Await params to get the actual values
  const resolvedParams = await params;
  
  return <ProductClient params={resolvedParams} />;
};

export default Product;