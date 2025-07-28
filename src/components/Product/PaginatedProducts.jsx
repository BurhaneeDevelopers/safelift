import React, { useState, useEffect } from "react";
import { ProductCards } from "./ProductCards";

const PRODUCTS_PER_PAGE = 6;

const PaginatedProducts = ({ products = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    const start = currentPage * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    setPaginatedProducts(products.slice(start, end));
  }, [products, currentPage]);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {paginatedProducts.map((item, i) => (
          <ProductCards
            key={i}
            title={item?.title}
            productimage={item?.productimage}
            productCategory={item?.category}
            slug={item?.slug?.current}
            item={item}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-1 bg-gray-300 rounded"
          >
            Prev
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev + 1 < totalPages ? prev + 1 : prev
              )
            }
            disabled={currentPage + 1 >= totalPages}
            className="px-4 py-1 bg-gray-300 rounded"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default PaginatedProducts;
