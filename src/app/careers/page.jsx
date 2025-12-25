import Banner from "@/components/Banner";
import CareersContent from "@/components/Careers/CareersContent";
import { getSEOData, generateMetadataFromSEO } from "@/utils/sanity";

export async function generateMetadata() {
  const seoData = await getSEOData("/careers");
  
  return generateMetadataFromSEO(seoData, {
    title: "Careers | Join Our Team | Safelift",
    description: "Explore exciting career opportunities at Safelift. Join our team of professionals in material handling equipment manufacturing and make a difference.",
    alternates: {
      canonical: "https://safelift.in/careers",
    },
  });
}

const Careers = () => {
  return (
    <div className="overflow-hidden">
      <Banner title={"Careers"} ImageSource={"/AboutUs/Banner.webp"} />
      <CareersContent />
    </div>
  );
};

export default Careers;