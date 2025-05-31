"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { slugify } from "@/utils/slugify";
import { Body } from "./textComponents/Body";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <Sidebar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      {/* <!-- component --> */}
      <nav
        className={`flex justify-between px-5 lg:px-20 4xl:px-40 items-center bg-white mt-16 absolute py-4 z-50 w-full 6xl:7xl:max-w-[1920px] ${
          navbarOpen ? "hidden" : ""
        }`}
      >
        <div className="">
          <Image
            src="/logo.webp"
            alt="Safe Lift"
            width={500}
            height={500}
            className="h-12 w-32 xs:h-20 xs:w-64"
          />
        </div>

        <div className="flex ">
          <div className="hidden xl:flex">
            <Nav />
          </div>

          <button
            className="flex xl:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path
                d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                fill="#000"
              ></path>
            </svg>
          </button>

          {/* <div className="rounded-full bg-gray-200 relative justify-between items-center ml-1 hidden sxm:flex !gap-x-2 w-fit">Name
            <input
              type="text"
              placeholder="Search for Products"
              className="bg-transparent pl-3 text-[12px] py-1 text-black placeholder:text-black rounded-full outline-none"
            />

            <div className="rounded-full px-2 bg-[#197ab3] text-[12px] p-1 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14.55 14.56"
                className="w-3 h-3 fill-white"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M3.45.41h0a5.75,5.75,0,0,0-1.23.7c-.17.13-.34.28-.56.48A5.39,5.39,0,0,0,.42,3.42a5,5,0,0,0-.42,2v.18c0,.14,0,.3,0,.47A5.78,5.78,0,0,0,.74,8.37a5.09,5.09,0,0,0,1.94,1.94l.06,0A6,6,0,0,0,4.22,11a5.61,5.61,0,0,0,2.7,0,5.92,5.92,0,0,0,1.58-.69c.74-.48.4-.34.95.09,0,.75-.35.73.6,1.64.53.51,1.22,1.26,1.75,1.75.38.35.79,1,1.5.77a2.3,2.3,0,0,0,1.2-1.14c.28-.88-.62-1.43-1.31-2.14A23.74,23.74,0,0,0,11.4,9.52c-.52-.29-.87,0-1,0A2.13,2.13,0,0,1,9.94,9c.08-.17.32-.47.43-.65a5.66,5.66,0,0,0,.73-2.56V5.52a2.8,2.8,0,0,0,0-.77v0a5.45,5.45,0,0,0-.18-.8,4.45,4.45,0,0,0-.32-.83,6,6,0,0,0-.31-.53A5.55,5.55,0,0,0,5.55,0a5.31,5.31,0,0,0-2.1.41Zm.47,8.12A3.19,3.19,0,0,1,2.21,6a3.36,3.36,0,0,1,.33-1.59c.07-.08,0,0,.07-.06s0,0,0,.1a.34.34,0,0,1,0,.1c.17,2.4,1.94,3.72,4.26,3.82,0,.15.07,0-.12.15a3.65,3.65,0,0,1-1.26.36A3.45,3.45,0,0,1,4,8.58l-.07-.05ZM5.55.93A4.62,4.62,0,1,1,.93,5.55,4.62,4.62,0,0,1,5.55.93Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const Nav = () => {
  return (
    <div className="flex z-20">
      <NavLink
        navTitle={"Home"}
        dropdownContent={[]}
        directRedirect={"/"}
        icon={false}
      />

      <NavLink
        navTitle={"About"}
        icon={true}
        dropdownContent={[
          {
            navSubTitle: "Career",
            navLink: "/about",
          },
        ]}
        directRedirect={"/about"}
      />

      <NavLink
        navTitle={"Products"}
        icon={true}
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
      />
      <NavLink
        navTitle={"Contact Us"}
        directRedirect={"/contact"}
        dropdownContent={[]}
      />
      <NavLink
        navTitle={"Infra & Manufacturing"}
        dropdownContent={[]}
        directRedirect={"/infra"}
      />
      <NavLink
        navTitle={"Blogs"}
        dropdownContent={[]}
        directRedirect={"/blogs"}
      />
    </div>
  );
};

const NavLink = ({ navTitle, dropdownContent, directRedirect, icon }) => {
  return (
    <span className="group">
      <button className="outline-none focus:outline-none gap-1 px-3 group-hover:bg-gray-200 flex items-center justify-center">
        <Body
          className={
            "group-hover:font-semibold group-hover:text-[#008dd2] uppercase font-normal"
          }
        >
          <Link href={`${directRedirect ? directRedirect : "#"}`} className="">
            {navTitle}
          </Link>
        </Body>
        {icon && (
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
            transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        )}
      </button>

      {/* DropDown Items  */}
      <ul
        className="bg-white transform scale-0 group-hover:scale-100 absolute 
                 transition duration-150 ease-in-out origin-top pt-3"
      >
        {dropdownContent?.map((item, i) => {
          return (
            <Link href={item?.navLink} key={i}>
              <li className="rounded-sm px-3 py-1 hover:bg-gray-200 uppercase text-center font-bold max-w-64">
                {item?.navSubTitle}
              </li>
            </Link>
          );
        })}
      </ul>
    </span>
  );
};
