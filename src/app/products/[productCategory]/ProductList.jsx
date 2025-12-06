"use client";
import { useEffect, useState } from "react";
import { client } from "../../../../sanityBackend/lib/client";
import Banner from "@/components/Banner";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import { unslugify } from "@/utils/slugify";
import { ProductCards } from "@/components/Product/ProductCards";
import { PortableText } from "@portabletext/react";
import { DynamicBody } from "@/components/textComponents/DynamicBody";
import { components } from "@/utils/portableTextComponent";
import Container from "@/components/constants/Container";

const PRODUCTS_PER_PAGE = 20;

const ProductList = ({ params }) => {
  const [productsBySub, setProductsBySub] = useState({});
  const [activeTab, setActiveTab] = useState("");
  const [pageIndex, setPageIndex] = useState({});
  const [categoryData, setCategoryData] = useState(null);

  const productCategory = decodeURIComponent(unslugify(params.productCategory));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsBySubTemp = {};
        const pageIndexMap = {};

        // Step 0: Get the main category data with content
        const mainCategory = await client.fetch(
          `*[_type == "mainCategory" && title == $title][0] {
            _id,
            title,
            description,
            content,
            "categoryImage": categoryImage.asset->url
          }`,
          { title: productCategory }
        );

        setCategoryData(mainCategory);

        // Step 1: Get subcategories under this main category (via title)
        const subCategories = await client.fetch(
          `*[_type == "subCategory" && parentCategory->title == $title]`,
          { title: productCategory }
        );

        // Step 2: Fetch products for each subcategory
        for (const subCat of subCategories) {
          const subProducts = await client.fetch(
            `*[_type == "product" && subCategory._ref == $subCatId]`,
            { subCatId: subCat._id }
          );

          productsBySubTemp[subCat.title] = subProducts;
          pageIndexMap[subCat.title] = 0;
        }

        // Step 3: Fetch products that belong directly to this main category (no subCategory)
        const mainOnlyProducts = await client.fetch(
          `*[_type == "product" && mainCategory->title == $title]`,
          { title: productCategory }
        );

        if (mainOnlyProducts.length > 0) {
          productsBySubTemp["All Products"] = mainOnlyProducts;
          pageIndexMap["All Products"] = 0;
        }

        setProductsBySub(productsBySubTemp);
        setPageIndex(pageIndexMap);
        
        // Set the first tab as active
        const tabs = Object.keys(productsBySubTemp);
        if (tabs.length > 0) {
          setActiveTab(tabs[0]);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchData();
  }, [productCategory]);

  const changePage = (slug, direction) => {
    setPageIndex((prev) => ({
      ...prev,
      [slug]: Math.max(0, prev[slug] + direction),
    }));
  };

  const subcategories = Object.keys(productsBySub).filter(key => key !== "All Products");
  const hasSubcategories = subcategories.length > 0;

  return (
    <div>
      <Banner title={productCategory} ImageSource="/Products/Banner.webp" />

      <div className="p-10 sm:p-20">
        {Object.keys(productsBySub).length > 0 ? (
          <>
            {/* Tab Navigation - Only show if there are subcategories */}
            {hasSubcategories && (
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 border-b-2 border-gray-200">
                  {Object.keys(productsBySub).map((tabName) => (
                    <button
                      key={tabName}
                      onClick={() => setActiveTab(tabName)}
                      className={`px-6 py-3 font-semibold text-lg transition-all duration-200 ${
                        activeTab === tabName
                          ? "bg-[#0493cf] text-white border-b-4 border-[#050742]"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tabName}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Content */}
            {Object.entries(productsBySub).map(([tabName, products]) => {
              const currentPage = pageIndex[tabName] || 0;
              const paginated = products.slice(
                currentPage * PRODUCTS_PER_PAGE,
                (currentPage + 1) * PRODUCTS_PER_PAGE
              );

              // Show content only if it's the active tab (or if no subcategories exist)
              if (hasSubcategories && activeTab !== tabName) return null;

              return (
                <div key={tabName}>
                  {paginated && paginated.length > 0 ? (
                    <>
                      <div className="flex flex-wrap justify-center">
                        {paginated.map((item, idx) => (
                          <ProductCards
                            key={idx}
                            title={item?.title}
                            series={item?.series ?? ""}
                            productimage={item?.productimage}
                            productCategory={productCategory}
                            slug={item?.slug?.current}
                          />
                        ))}
                      </div>

                      {/* Pagination */}
                      {products.length > PRODUCTS_PER_PAGE && (
                        <div className="flex justify-center items-center gap-4 mt-10">
                          <button
                            onClick={() => changePage(tabName, -1)}
                            disabled={currentPage === 0}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                              currentPage === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-[#050742] text-white hover:bg-[#050742]/90"
                            }`}
                          >
                            Previous
                          </button>
                          <span className="px-4 py-2 text-[#050742] font-semibold">
                            Page {currentPage + 1} of {Math.ceil(products.length / PRODUCTS_PER_PAGE)}
                          </span>
                          <button
                            onClick={() => changePage(tabName, 1)}
                            disabled={(currentPage + 1) * PRODUCTS_PER_PAGE >= products.length}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                              (currentPage + 1) * PRODUCTS_PER_PAGE >= products.length
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-[#050742] text-white hover:bg-[#050742]/90"
                            }`}
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <LargeCaption className="text-center text-gray-500 py-10">
                      No products available in this category.
                    </LargeCaption>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <LargeCaption className="text-center text-[#050742]">
            Loading...
          </LargeCaption>
        )}
      </div>

      {/* Category Rich Text Content - Moved to Bottom */}
      {categoryData?.content && categoryData.content.length > 0 && (
        <div className="bg-gray-50 py-10">
          <Container>
            <DynamicBody>
              <PortableText value={categoryData.content} components={components} />
            </DynamicBody>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ProductList;
