import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Certification from "@/components/Home/Certification";
import Contact from "@/components/Home/Contact";
import OurDealers from "@/components/Home/OurDealers";
import OurTeam from "@/components/Home/OurTeam";
import ProductsRange from "@/components/Home/ProductsRange";
import TrustedCompanies from "@/components/Home/TrustedCompanies";

export default function Home() {
  return (
    <div className="h-full justify-center items-center overflow-hidden">
      <Banner />

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

      {/* CONTACT  */}
      {/* <div id="contactUs"> */}
      <Contact />
      {/* </div> */}
    </div>
  );
}
