import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Certification from "@/components/Home/Certification";
import OurDealers from "@/components/Home/OurDealers";
import OurTeam from "@/components/Home/OurTeam";
import ProductsRange from "@/components/Home/ProductsRange";
import TrustedCompanies from "@/components/Home/TrustedCompanies";
import StickyContact from "@/components/StickyContact";

export default function Home() {
  return (
    <div className="h-full justify-center items-center overflow-hidden">
      <div className="">
        <Banner />
      </div>

      {/* TRUSTED COMPANIES  */}
      <TrustedCompanies />

      {/* ABOUT US */}
      <AboutUs />

      {/* Our Team  */}
      <OurTeam />

      {/* OUR RANGE OF PRODUCTS  */}
      <ProductsRange />

      {/* OUR DEALERS  */}
      <OurDealers />

      {/* CERTIFICATION  */}
      <Certification />
    </div>
  );
}
