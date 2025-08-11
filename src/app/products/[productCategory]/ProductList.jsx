"use client";
import { useEffect, useState } from "react";
import { client } from "../../../../sanityBackend/lib/client";
import Banner from "@/components/Banner";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import { unslugify, slugify } from "@/utils/slugify";
import PaginatedProducts from "@/components/Product/PaginatedProducts";
import { ProductCards } from "@/components/Product/ProductCards";

const PRODUCTS_PER_PAGE = 20;

const ProductList = ({ params }) => {
  const [productsBySub, setProductsBySub] = useState({});
  const [expanded, setExpanded] = useState({});
  const [pageIndex, setPageIndex] = useState({});

  const productCategory = decodeURIComponent(unslugify(params.productCategory));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsBySubTemp = {};
        const expandedMap = {};
        const pageIndexMap = {};

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
      <Banner title="Products" ImageSource="/Products/Banner.webp" />
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
                      className="text-lg font-bold text-left w-full bg-blue-200 px-4 py-2 rounded"
                    >
                      {subId} {expanded[subId] ? "▲" : "▼"}
                    </button>

                    {expanded[subId] && (
                      <div className="mt-4">
                        {paginated && paginated.length !== 0 ? (
                          <>
                            <div className="flex flex-wrap justify-center">
                              {paginated &&
                                paginated.length !== 0 &&
                                paginated?.map((item, idx) => (
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
                            <div className="flex justify-center gap-4 mt-4">
                              <button
                                onClick={() => changePage(subId, -1)}
                                disabled={currentPage === 0}
                                className={`px-4 py-1 rounded ${
                                  currentPage === 0
                                    ? "bg-indigo-400 opacity-50"
                                    : "bg-indigo-400 text-white"
                                }`}
                              >
                                Prev
                              </button>
                              <button
                                onClick={() => changePage(subId, 1)}
                                disabled={
                                  (currentPage + 1) * PRODUCTS_PER_PAGE >=
                                  products.length
                                }
                                className={`px-4 py-1 rounded ${
                                  (currentPage + 1) * PRODUCTS_PER_PAGE >=
                                  products.length
                                    ? "bg-indigo-400 opacity-50"
                                    : "bg-indigo-400 text-white"
                                }`}
                              >
                                Next
                              </button>
                            </div>
                          </>
                        ) : (
                          <LargeCaption className="text-center">
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
    </div>
  );
};

export default ProductList;
