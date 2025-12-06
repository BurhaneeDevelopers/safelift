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
  const [expanded, setExpanded] = useState({});
  const [pageIndex, setPageIndex] = useState({});
  const [categoryData, setCategoryData] = useState(null);

  const productCategory = decodeURIComponent(unslugify(params.productCategory));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsBySubTemp = {};
        const expandedMap = {};
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
          expandedMap[subCat.title] = false;
          pageIndexMap[subCat.title] = 0;
        }

        // Step 3: Fetch products that belong directly to this main category (no subCategory)
        const mainOnlyProducts = await client.fetch(
          `*[_type == "product" && mainCategory->title == $title]`,
          { title: productCategory }
        );

        if (mainOnlyProducts.length > 0) {
          productsBySubTemp["uncategorized"] = mainOnlyProducts;
          expandedMap["uncategorized"] = true;
          pageIndexMap["uncategorized"] = 0;
        }

        setProductsBySub(productsBySubTemp);
        setExpanded(expandedMap);
        setPageIndex(pageIndexMap);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchData();
  }, [productCategory]);

  const toggleExpand = (slug) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const changePage = (slug, direction) => {
    setPageIndex((prev) => ({
      ...prev,
      [slug]: Math.max(0, prev[slug] + direction),
    }));
  };

  return (
    <div>
      <Banner title={productCategory} ImageSource="/Products/Banner.webp" />

      <div className="p-10 sm:p-20">
        {Object.keys(productsBySub).length > 0 ? (
          <>
            {/* Show uncategorized (main-only) products */}
            {productsBySub["uncategorized"] &&
              productsBySub["uncategorized"].length > 0 && (
                <div className="mb-10">
                  <div className="flex flex-wrap justify-center">
                    {productsBySub["uncategorized"].map((item, idx) => (
                      <ProductCards
                        key={idx}
                        title={item.title}
                        series={item?.series ?? ""}
                        productimage={item.productimage}
                        productCategory={productCategory}
                        slug={item.slug.current}
                      />
                    ))}
                  </div>
                </div>
              )}

            {/* Render subcategory sections */}
            {Object.entries(productsBySub)
              .filter(([subId]) => subId !== "uncategorized")
              .map(([subId, products]) => {
                const currentPage = pageIndex[subId] || 0;
                const paginated = products.slice(
                  currentPage * PRODUCTS_PER_PAGE,
                  (currentPage + 1) * PRODUCTS_PER_PAGE
                );

                return (
                  <div key={subId} className="mb-10">
                    <button
                      onClick={() => toggleExpand(subId)}
                      className="text-xl font-bold text-left w-full bg-[#0493cf] hover:bg-[#0493cf]/90 text-white px-6 py-4 rounded-lg transition-all duration-200 flex items-center justify-between shadow-md"
                    >
                      <span>{subId}</span>
                      <span className="text-2xl">{expanded[subId] ? "▲" : "▼"}</span>
                    </button>

                    {expanded[subId] && (
                      <div className="mt-6">
                        {paginated && paginated.length !== 0 ? (
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
                            <div className="flex justify-center gap-4 mt-6">
                              <button
                                onClick={() => changePage(subId, -1)}
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
                                onClick={() => changePage(subId, 1)}
                                disabled={
                                  (currentPage + 1) * PRODUCTS_PER_PAGE >=
                                  products.length
                                }
                                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                                  (currentPage + 1) * PRODUCTS_PER_PAGE >=
                                  products.length
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-[#050742] text-white hover:bg-[#050742]/90"
                                }`}
                              >
                                Next
                              </button>
                            </div>
                          </>
                        ) : (
                          <LargeCaption className="text-center text-gray-500">
                            No products in this sub-category.
                          </LargeCaption>
                        )}
                      </div>
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
