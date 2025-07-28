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
  const [subCategories, setSubCategories] = useState([]);
  const [productsBySub, setProductsBySub] = useState({});
  const [mainCategoryProducts, setMainCategoryProducts] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [pageIndex, setPageIndex] = useState({});

  const productCategory = decodeURIComponent(unslugify(params.productCategory));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subCats = await client.fetch(
          `*[_type == "subCategory" && parentCategory->title == $category]{
            title,
            slug
          }`,
          { category: productCategory }
        );

        setSubCategories(subCats);
        setExpanded(
          Object.fromEntries(subCats.map((sc) => [sc.slug.current, false]))
        );
        setPageIndex(
          Object.fromEntries(subCats.map((sc) => [sc.slug.current, 0]))
        );

        if (subCats.length === 0) {
          const result = await client.fetch(
            `*[_type == "product" && mainCategory->title == $category]`,
            { category: productCategory }
          );

          setMainCategoryProducts(result);
        } else {
          let data = {};
          for (const sub of subCats) {
            const products = await client.fetch(
              `*[_type == "product" && subCategory->slug.current == $subSlug]`,
              { subSlug: sub.slug.current }
            );
            data[sub.slug.current] = products;
          }
          setProductsBySub(data);
        }
      } catch (err) {
        console.error("Error fetching:", err);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {subCategories.length === 0 ? (
          mainCategoryProducts.length > 0 ? (
            <PaginatedProducts products={mainCategoryProducts} />
          ) : (
            <LargeCaption className="text-center text-[#050742]">
              Products Coming Soon...
            </LargeCaption>
          )
        ) : (
          subCategories.map((sub) => {
            const slug = sub.slug.current;
            const products = productsBySub[slug] || [];
            const currentPage = pageIndex[slug] || 0;
            const paginated = products.slice(
              currentPage * PRODUCTS_PER_PAGE,
              (currentPage + 1) * PRODUCTS_PER_PAGE
            );

            return (
              <div key={slug} className="mb-10">
                <button
                  onClick={() => toggleExpand(slug)}
                  className="text-lg font-bold text-left w-full bg-blue-200 px-4 py-2 rounded"
                >
                  {sub.title} {expanded[slug] ? "▲" : "▼"}
                </button>

                {expanded[slug] && (
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
                            onClick={() => changePage(slug, -1)}
                            disabled={currentPage === 0}
                            className="px-4 py-1 bg-gray-300 rounded"
                          >
                            Prev
                          </button>
                          <button
                            onClick={() => changePage(slug, 1)}
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
          })
        )}
      </div>
    </div>
  );
};

export default ProductList;
