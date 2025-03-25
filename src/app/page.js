import AboutUs from "@/components/Home/AboutUs";
import Applications from "@/components/Home/Applications";
import Banner from "@/components/Home/Banner";
import Future from "@/components/Home/Future";
import FAQ from "@/components/Home/FAQ";
import Partner from "@/components/Home/Partner";
import ProductsRange from "@/components/Home/ProductsRange";
import TrustedCompanies from "@/components/Home/TrustedCompanies";
import WhyUs from "@/components/Home/Certification";

export default function Home() {
  return (
    <div className="h-full justify-center items-center overflow-hidden">
      <Banner />

      {/* TRUSTED COMPANIES  */}
      <TrustedCompanies />

      {/* ABOUT US */}
      <AboutUs />

      {/* OUR RANGE OF PRODUCTS  */}
      <ProductsRange />

      {/* CERTIFICATION  */}
      <WhyUs />

      {/* Applications  */}
      <Applications />

      {/* CONTACT  */}
      <Future />

      {/* Partners  */}
      <Partner />

      {/* FAQS  */}
      <FAQ />
    </div>
  );
}
