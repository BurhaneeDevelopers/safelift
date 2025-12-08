import ProductList from "./ProductList";
import { getSEOData, generateMetadataFromSEO } from "@/utils/sanity";

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
  "products/slings-for-lifting": {
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

export async function generateMetadata({ params }) {
  const categorySlug = params?.productCategory;
  const pageUrl = `/${categorySlug}`;
  
  // Fetch SEO data from Custom Pages using the page URL
  const seoData = await getSEOData(pageUrl);

  // Fallback metadata from the hardcoded map
  const path = `products/${categorySlug}`;
  const fallbackMeta = metadataMap[path] || {
    title: "Material Handling Equipment Manufacturers & Supplier | Safelift",
    description: "Explore high-quality products at Safelift.",
    alternates: {
      canonical: `https://safelift.in/products/${categorySlug}`,
    },
  };

  return generateMetadataFromSEO(seoData, fallbackMeta);
}

export default function ProductCategoryPage({ params }) {
  return <ProductList params={params} />;
}
