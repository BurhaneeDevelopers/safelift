import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

const Sidebar = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div
      className={`bg-white h-full overflow-y-auto fixed left-0 top-0 z-50 w-96 ${navbarOpen ? "inline-block" : "hidden"
        }`}
    >
      <button
        className="absolute top-4 right-4 "
        onClick={() => setNavbarOpen(false)}
      >
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
            fill="#050742"
          />
        </svg>
      </button>

      <div className="flex justify-center items-center mt-5">
        <Image
          src="/logo.webp"
          alt="Safe Lift"
          width={500}
          height={500}
          className="h-16 w-60"
        />
      </div>

      <nav className="my-10">
        <Nav setNavbarOpen={setNavbarOpen} />
      </nav>
    </div>
  );
};

export default Sidebar;

const Nav = ({ setNavbarOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (navTitle) => {
    setOpenDropdown(navTitle === openDropdown ? null : navTitle);
  };

  return (
    <div className="flex flex-col z-20">
      <NavLink
        navTitle={"Home"}
        dropdownContent={[]}
        directRedirect={"/"}
        isOpen={openDropdown === "Home"}
        toggleDropdown={toggleDropdown}
        setNavbarOpen={setNavbarOpen}
      />

      <NavLink
        navTitle={"About"}
        dHeight="h-10"
        dropdownContent={[
          {
            navSubTitle: "Career",
            navLink: "/about",
          },
        ]}
        directRedirect={"/about"}
        isOpen={openDropdown === "About"}
        toggleDropdown={toggleDropdown}
        setNavbarOpen={setNavbarOpen}
      />

      <NavLink
        navTitle={"Products"}
        dHeight="h-[36rem]"
        dropdownContent={[
          {
            navSubTitle: "All",
            navLink: "/products",
          },
          {
            navSubTitle: "Hoisting Equipment",
            navLink: `/products/${slugify("Hoisting Equipment")}`,
          },
          {
            navSubTitle: "Polyester Lifting & Lashing Products",
            navLink: `/products/${slugify(
              "Polyester Lifting & Lashing Products"
            )}`,
          },
          {
            navSubTitle: "G 80 Riggings",
            navLink: `/products/${slugify("G 80 Riggings")}`,
          },
          {
            navSubTitle: "G 100 Riggings",
            navLink: `/products/${slugify("G 100 Riggings")}`,
          },
          {
            navSubTitle: "Lifting Clamps",
            navLink: `/products/${slugify("Lifting Clamps")}`,
          },
          {
            navSubTitle: "Lifting Tackles",
            navLink: `/products/${slugify("Lifting Tackles")}`,
          },
          {
            navSubTitle: "Slings",
            navLink: `/products/${slugify("Slings")}`,
          },
          {
            navSubTitle: "Warehouse Management Equipment (Manual)",
            navLink: `/products/${slugify("Warehouse Management Equipment (Manual)")}`,
          },
          {
            navSubTitle: "Warehouse Management Equipment (Electric)",
            navLink: `/products/${slugify("Warehouse Management Equipment (Electric)")}`,
          },
        ]}
        isOpen={openDropdown === "Products"}
        toggleDropdown={toggleDropdown}
        setNavbarOpen={setNavbarOpen}
      // directRedirect={"/products"}
      />
      <NavLink
        navTitle={"Contact Us"}
        directRedirect={"/contact"}
        dropdownContent={[]}
        isOpen={openDropdown === "Contact Us"}
        toggleDropdown={toggleDropdown}
        setNavbarOpen={setNavbarOpen}
      />
      <NavLink
        navTitle={"Infra & Manufacturing"}
        dropdownContent={[]}
        directRedirect={"/infra"}
        isOpen={openDropdown === "Infra & Manufacturing"}
        toggleDropdown={toggleDropdown}
        setNavbarOpen={setNavbarOpen}
      />
    </div>
  );
};

const NavLink = ({
  navTitle,
  dropdownContent,
  directRedirect,
  dHeight,
  isOpen,
  toggleDropdown,
  setNavbarOpen
}) => {
  const handleClick = () => {
    toggleDropdown(navTitle);
  };
  return (
    <li class="bg-gray-200 mt-3 flex flex-col pt-4">
      <Link
        className={`px-4 ${isOpen ? "font-bold text-[#008dd2]" : "font-medium"
          }`}
        onClick={handleClick}
        href={`${directRedirect ? directRedirect : "#"}`}
      >
        {navTitle}
      </Link>

      {/* DropDown Items  */}
      <span
        className={`bg-gray-300 transition-all duration-500 ease-in-out mt-4 ${isOpen ? dHeight || "h-0" : "h-0"
          }`}
      >
        <ul className={`${isOpen ? "flex flex-col -mt-2" : "hidden"}`}>
          {dropdownContent?.map((item, i) => {
            return (
              <li key={i} className="py-3 px-6 font-medium">
                <Link href={item?.navLink} onClick={() => setNavbarOpen(false)}>{item?.navSubTitle}</Link>
              </li>
            );
          })}
        </ul>
      </span>
    </li>
  );
};
