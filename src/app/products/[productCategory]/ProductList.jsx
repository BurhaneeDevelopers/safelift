"use client";
import { useEffect, useState } from "react";
import { client } from "../../../../sanityBackend/lib/client";
import Banner from "@/components/Banner";
import { LargeCaption } from "@/components/textComponents/LargeCaption";
import { unslugify, slugify } from "@/utils/slugify";
import PaginatedProducts from "@/components/Product/PaginatedProducts";
import { ProductCards } from "@/components/Product/ProductCards";

const PRODUCTS_PER_PAGE = 6;

const ProductList = ({ params }) => {
  const [categoryType, setCategoryType] = useState(null); // "main" | "sub"
  const [categoryData, setCategoryData] = useState(null);
  const [products, setProducts] = useState([]);
  const [productsBySub, setProductsBySub] = useState({});
  const [expanded, setExpanded] = useState({});
  const [pageIndex, setPageIndex] = useState({});

  const productCategory = decodeURIComponent(unslugify(params.productCategory));

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 1: Try finding as subCategory
        const subCategory = await client.fetch(
          `*[_type == "subCategory" && title == $title][0]`,
          { title: productCategory }
        );

        if (subCategory) {
          setCategoryType("sub");
          setCategoryData(subCategory);

          // Fetch products linked to this subCategory
          const products = await client.fetch(
            `*[_type == "product" && subCategory._ref == $subCatId]`,
            { subCatId: subCategory._id }
          );
          setProducts(products);
          return;
        }

        // Step 2: Else try as mainCategory
        const mainCategory = await client.fetch(
          `*[_type == "mainCategory" && title == $title][0]`,
          { title: productCategory }
        );

        if (mainCategory) {
          setCategoryType("main");
          setCategoryData(mainCategory);

          // Fetch products with mainCategory ref
          const mainProducts = await client.fetch(
            `*[_type == "product" && mainCategory._ref == $mainCatId]`,
            { mainCatId: mainCategory._id }
          );
          setProducts(mainProducts);

          // Group by subCategory
          const grouped = mainProducts.reduce((acc, product) => {
            const sub = product.subCategory?._ref || "uncategorized";
            if (!acc[sub]) acc[sub] = [];
            acc[sub].push(product);
            return acc;
          }, {});

          setProductsBySub(grouped);

          // Set default expanded and pageIndex
          const expandedMap = Object.fromEntries(
            Object.keys(grouped).map((key) => [key, false])
          );
          const pageIndexMap = Object.fromEntries(
            Object.keys(grouped).map((key) => [key, 0])
          );

          setExpanded(expandedMap);
          setPageIndex(pageIndexMap);

          return;
        }

        // Not found
        console.warn("No matching category found");
      } catch (err) {
        console.error("Error fetching category or products:", err);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {categoryType === "sub" ? (
          products.length > 0 ? (
            <PaginatedProducts products={products} />
          ) : (
            <LargeCaption className="text-center text-[#050742]">
              Products Coming Soon...
            </LargeCaption>
          )
        ) : categoryType === "main" ? (
          Object.keys(productsBySub).length > 0 ? (
            <>
              {/* First, show uncategorized products directly */}
              {productsBySub["uncategorized"] &&
                productsBySub["uncategorized"].length > 0 && (
                  <div className="mb-10">
                    <div className="flex flex-wrap justify-center">
                      {productsBySub["uncategorized"].map((item, idx) => (
                        <ProductCards
                          key={idx}
                          title={item.title}
                          productimage={item.productimage}
                          productCategory={productCategory}
                          slug={item.slug.current}
                        />
                      ))}
                    </div>
                  </div>
                )}

              {/* Now render accordions for all other grouped subcategories */}
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
                          {paginated.length > 0 ? (
                            <>
                              <div className="flex flex-wrap justify-center">
                                {paginated.map((item, idx) => (
                                  <ProductCards
                                    key={idx}
                                    title={item.title}
                                    productimage={item.productimage}
                                    productCategory={productCategory}
                                    slug={item.slug.current}
                                  />
                                ))}
                              </div>
                              <div className="flex justify-center gap-4 mt-4">
                                <button
                                  onClick={() => changePage(subId, -1)}
                                  disabled={currentPage === 0}
                                  className="px-4 py-1 bg-gray-300 rounded"
                                >
                                  Prev
                                </button>
                                <button
                                  onClick={() => changePage(subId, 1)}
                                  disabled={
                                    (currentPage + 1) * PRODUCTS_PER_PAGE >=
                                    products.length
                                  }
                                  className="px-4 py-1 bg-gray-300 rounded"
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
              Products Coming Soon...
            </LargeCaption>
          )
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
