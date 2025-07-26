import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductCards } from "./ProductCards";

const PaginatedProducts = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {paginated.map((item, i) => (
          <ProductCards
            key={i}
            title={item?.title}
            productimage={item?.productimage}
            productCategory={item?.category}
            slug={item?.slug.current}
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
