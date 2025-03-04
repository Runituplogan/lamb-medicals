"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import { INavItems, navItems } from "@/app/utils/nav";
import Wrapper from "../Wrapper";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Add scroll padding dynamically
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      document.documentElement.style.scrollPaddingTop = `${navbarHeight}px`;
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleServices = () => {
    setIsExpanded((prev) => !prev); // Toggle the dropdown state
  };

  const handleCloseMobileNav = () => {
    setMenuOpen(false);
    setIsMobileNavOpen(false);
  };

  const handleClickOutSide = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);

    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 top-0 z-50 bg-white py-1 font-work_sans lg:pr-7 border-b xs:border-none border-[#DAE0E6]"
    >
      <Wrapper>
        <div className="flex items-center justify-between px-6 py-3 md:px-8 md:py-4 lg:px-8">
          {/* Desktop Navigation */}
          {/* Logo */}
          <Link href="/">
            <Image
              src="/lamb-logo.svg"
              alt="Lamb logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          {navItems.map((item: INavItems, index) => (
            <span className="hidden lg:flex items-center gap-6" key={index}>
              <NavLink item={item} />
            </span>
          ))}
              {/* <div className="relative group inline-block">
              <button className="flex items-center gap-2 text-[#8E9BAE] px-4 py-2 rounded-md">
                Shop
                <FaChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white max-h-max h-[85vh] min-w-max rounded-md p-8 shadow-lg overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="https://zoskinhealth.com/?practice-ref=1716715&practice-name=Lamb+Medical+Aesthetics" className="block px-4 py-2 hover:bg-gray-200">ZO Skin</Link>
                <Link href="https://lambmedical.brilliantconnections.com/" className="block px-4 py-2 hover:bg-gray-200">SkinMedica</Link>
                <Link href="https://platedskinscience.com/?sca_ref=7318344.Bc0qwtup7w" className="block px-4 py-2 hover:bg-gray-200">Exosomes - (plated)</Link>
              </div>
            </div> */}

           {/* Mobile Hamburger Menu */}
        <div
          className="z-50 cursor-pointer text-3xl lg:hidden"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        >
          {isMobileNavOpen ? (
            <IoMdClose className="transition text-primary" />
          ) : (
            <IoMdMenu className="transition text-primary" />
          )}
        </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileNavOpen && (
          <div
            className="z-50 cursor-pointer text-lg h-screen pt-20 lg:hidden overflow-y-auto space-y-5"
            onClick={toggleMenu}
          >
            {/* {menuOpen ? (
            <IoMdClose className="text-[#3024A9] transition" />
          ) : (
            <IoMdMenu className="text-[#3024A9] transition" />
          )} */}

            {/* Menu Items */}
            <div className="bg-red-500 text-center">
            {navItems.map((item: any) => (
              <div key={item.href} className="text-center">
                <div
                  className="flex flex-col items-center"
                  onClick={() => {
                    if (!item.subItems) {
                      toggleMenu();
                      setIsMobileNavOpen(false);
                    }
                  }}
                >
                  <div
                    className="flex cursor-pointer items-center gap-3"
                    onClick={item.subItems ? toggleServices : undefined}
                  >
                    <Link
                      href={item.href}
                      className={`${
                        pathname === item.href ||
                        pathname.startsWith(item.href + "/")
                          ? "font-semibold text-primary"
                          : "text-[#8E9BAE]"
                      } transition hover:text-primary`}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <FaChevronDown
                        // color="#8E9BAE"
                        className={clsx(
                          "text-sm transition-transform duration-200",
                          isExpanded
                            ? "rotate-180 text-primary"
                            : "rotate-0 text-[#8E9BAE]"
                        )}
                      />
                    )}
                  </div>
                  {item.subItems && isExpanded && (
                    <div className="mt-2 flex flex-col items-center">
                      {item.subItems.map((subItem: any) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={handleCloseMobileNav}
                          className={clsx(
                            "block px-4 py-2 transition hover:text-primary",
                            pathname === subItem.href
                              ? "font-semibold text-primary"
                              : "text-[#8E9BAE]"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  
                </div>
                
              </div>
              
            ))}
              {/* <div className="relative group flex flex-col items-center">
                <button className="flex items-center gap-2 text-[#8E9BAE] px-4 py-2 rounded-md">
                  Shop
                  <FaChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute flex flex-col items-center bottom-0 mt-2 w-48 bg-white max-h-max h-[85vh] min-w-max rounded-md p-8 shadow-lg overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="https://zoskinhealth.com/?practice-ref=1716715&practice-name=Lamb+Medical+Aesthetics" className="block px-4 py-2 hover:bg-blue-500">ZO Skin</Link>
                  <Link href="https://lambmedical.brilliantconnections.com/" className="block px-4 py-2 hover:bg-gray-200">SkinMedica</Link>
                  <Link href="https://platedskinscience.com/?sca_ref=7318344.Bc0qwtup7w" className="block px-4 py-2 hover:bg-gray-200">Exosomes - (plated)</Link>
                </div>
            </div> */}
            </div>
          </div>
        )}
      </Wrapper>
    </nav>
  );
};

const NavLink = ({ item }: { item: INavItems }) => {
  const pathname = usePathname();
  // const firstRow = item.subItems?.slice(0, 6) || [];
  // const secondRow = item.subItems?.slice(6, 12) || [];
  // const thirdRow = item.subItems?.slice(12, 18) || [];
  // const fourthRow = item.subItems?.slice(18, 24) || [];
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsExpanded(false);
    }, 300);
    setHoverTimeout(timeout);
  };

  const closeServices = () => {
    setIsExpanded(false);
  };

  return (
    <div
      key={item.href}
      className="relative"
      onMouseEnter={item.subItems ? handleMouseEnter : undefined}
      onMouseLeave={item.subItems ? handleMouseLeave : undefined}
    >
      <Link
        href={item.href}
        className={clsx(
          "flex items-center gap-1 transition hover:text-primary",
          pathname === item.href
            ? "font-semibold text-primary"
            : "text-[#8E9BAE]"
        )}
      >
        {item.label}
        {item.subItems && (
          <FaChevronDown
            className={clsx(
              "text-sm transition-all duration-200",
              isExpanded ? "rotate-180" : "rotate-0"
            )}
          />
        )}
      </Link>
      {item.subItems && isExpanded && (
        <div className="absolute -left-[120px] top-14 z-50 mt-2 max-h-max h-[85vh] min-w-max rounded-md bg-white p-8 shadow-lg overflow-y-auto">
          <h2 className="mb-6 text-xs text-[#8E9BAE] md:text-base xl:text-[18px]">
            {item.label}
          </h2>
          <div
            className="flex flex-col w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col gap-y-7">
              {item.subItems.map((subItem: any) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  onClick={closeServices}
                  className={clsx(
                    "block px-4 py-2 transition hover:text-primary",
                    pathname === subItem.href
                      ? "font-semibold text-primary"
                      : "text-[#161616]"
                  )}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// {item.subItems && isExpanded && (
//   <div className="w- to fixed left-0 top-24 z-50 mt-2 w-screen min-w-max rounded-md bg-white px-8 py-10 shadow-lg md:px-16 lg:px-32 lg:py-14">
//     <h2 className="mb-6 text-xs text-[#8E9BAE] md:text-base xl:text-[18px]">
//       {item.label}
//     </h2>
//     <div
//       className="grid w-full grid-cols-2 gap-7 md:grid-cols-4 lg:gap-10 xl:gap-16"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="flex flex-col gap-y-7">
//         {firstRow.map((subItem: any) => (
//           <Link
//             key={subItem.href}
//             href={subItem.href}
//             onClick={closeServices}
//             className={clsx(
//               "block py-2 transition hover:text-primary",
//               pathname === subItem.href
//                 ? "font-semibold text-primary"
//                 : "text-[#161616]"
//             )}
//           >
//             {subItem.label}
//           </Link>
//         ))}
//       </div>
//       <div className="flex flex-col gap-y-7">
//         {secondRow.map((subItem: any) => (
//           <Link
//             key={subItem.href}
//             href={subItem.href}
//             onClick={closeServices}
//             className={clsx(
//               "block px-4 py-2 transition hover:text-primary",
//               pathname === subItem.href
//                 ? "font-semibold text-primary"
//                 : "text-[#161616]"
//             )}
//           >
//             {subItem.label}
//           </Link>
//         ))}
//       </div>
//       <div className="flex flex-col gap-y-7">
//         {thirdRow.map((subItem: any) => (
//           <Link
//             key={subItem.href}
//             href={subItem.href}
//             onClick={closeServices}
//             className={clsx(
//               "block px-4 py-2 transition hover:text-primary",
//               pathname === subItem.href
//                 ? "font-semibold text-primary"
//                 : "text-[#161616]"
//             )}
//           >
//             {subItem.label}
//           </Link>
//         ))}
//       </div>
//       <div className="flex flex-col gap-y-7">
//         {fourthRow.map((subItem: any) => (
//           <Link
//             key={subItem.href}
//             href={subItem.href}
//             onClick={closeServices}
//             className={clsx(
//               "block px-4 py-2 transition hover:text-primary",
//               pathname === subItem.href
//                 ? "font-semibold text-primary"
//                 : "text-[#161616]"
//             )}
//           >
//             {subItem.label}
//           </Link>
//         ))}
//       </div>
//     </div>
//   </div>
// )}
