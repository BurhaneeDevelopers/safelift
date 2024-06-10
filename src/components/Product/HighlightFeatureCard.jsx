import Image from "next/image";

export const HighlightFeatureCard = ({ featureTitle, featuredImage }) => {
  return (
    <div className="flex flex-col items-center mx-3 my-3">
      <div className="flex relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 504.14 524.92"
          className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 xl:-top-3 xl:-left-3 w-8 h-8 sm:w-14 sm:h-14 xl:w-20 xlh-20"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <path
              fill="#008DD2"
              d="M504.14 0c-279.29,5.09 -504.14,233.05 -504.14,513.56 0,3.8 0.06,7.58 0.14,11.37l504 0 0 -524.92z"
            />
          </g>
        </svg>

        <div className="rounded-full bg-[#d9dada] flex items-center justify-center w-16 sm:w-24 h-16 sm:h-24 xl:w-32 xl:h-32 z-10">
          {featuredImage && (
            <Image
              src={urlForImage(featuredImage)}
              alt="Product"
              width={500}
              height={500}
              className="object-contain rounded-full w-12 sm:w-20 h-12 sm:h-20 xl:w-28 xl:h-28"
            />
          )}
        </div>
      </div>

      <div className="bg-[#282547] py-1 px-4 mt-4 capitalize text-white text-center font-semibold text-[10px] xl:text-xs w-full">
        {featureTitle}
      </div>
    </div>
  );
};
