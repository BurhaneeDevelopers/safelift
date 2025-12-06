import { getSEOData, generateMetadataFromSEO } from "@/utils/sanity";
import ProductsClient from "./ProductsClient";

export async function generateMetadata() {
  const seoData = await getSEOData("/products");
  
  return generateMetadataFromSEO(seoData, {
    title: "Products | Material Handling Equipment | Safelift",
    description: "Explore Safelift's complete range of material handling equipment including hoisting equipment, lifting slings, clamps, and more.",
    alternates: {
      canonical: "https://safelift.in/products",
    },
  });
}

export default function Products() {
  return <ProductsClient />;
}
