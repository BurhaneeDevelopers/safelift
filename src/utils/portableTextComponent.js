import Image from "next/image";

export const components = {
  marks: {
    em: ({ children }) => <em className="italic">&apos;{children}&apos;</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("https")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "dofollow"}
          className="text-[#283B7F] underline"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => (
      <Image
        alt="Blog Image"
        src={value.imageUrl}
        width={500}
        height={500}
        className="w-[32rem] h-80 object-cover"
      />
    ),
  },
  block: {
    normal: ({ children }) => <p style={{whiteSpace: "pre-line"}} className="mt-2 mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="my-10 text-4xl">{children}</h1>,
    h2: ({ children }) => <h1 className="my-10 text-3xl">{children}</h1>,
    h3: ({ children }) => <h1 className="my-5 text-2xl">{children}</h1>,
    h4: ({ children }) => <h1 className="my-4 text-xl">{children}</h1>,
    h5: ({ children }) => <h1 className="my-4 text-lg">{children}</h1>,
    h6: ({ children }) => <h1 className="my-4 text-md">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="mt-2 mb-4 border-l-purple-500">{children}</blockquote>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="my-3 ml-7 list-disc">{children}</li>,
    number: ({ children }) => <li className="my-3 ml-7 list-decimal">{children}</li>,
    checkmarks: ({ children }) => <li className="mt-4 mb-2">✅ {children}</li>,
  },
};
