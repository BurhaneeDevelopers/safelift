import { slugify } from "@/utils/slugify";
import { urlForImage } from "../../../sanityBackend/lib/image";

const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

export const ProductCards = ({
  title,
  series,
  productimage,
  productCategory,
  slug,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center mb-10 mx-4"
      data-aos="fade-up"
    >
      <Link
        href={
          "/products/" +
          `${slugify(productCategory ? productCategory : "")}/` +
          slugify(slug)
        }
        className="w-96 h-96 border-4 border-gray-200"
      >
        <div className="relative flex justify-center items-center h-full transform transition-transform p-2">
          <Image
            src={urlForImage(productimage)}
            alt={productCategory}
            width={500}
            height={500}
            className="w-full h-full object-contain"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
            draggable="false" // Disable dragging
          />
        </div>
      </Link>
      <div className="bg-[#0493cf]/90 p-2 text-center py-4 z-50 w-96 text-white font-semibold text-base xxs:text-lg sm:text-xl min-h-24 max-h-24 mt-2 flex flex-col justify-center items-center">
        <h5 className="line-clamp-1">{title} {series ? "-" : ""}</h5>
        <h5 className="line-clamp-1">{series}</h5>
      </div>
    </div>
  );
};
