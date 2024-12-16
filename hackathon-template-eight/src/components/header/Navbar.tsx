"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-primary" : " text-[14px] text-gray-500"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-primary"
                : " text-[14px] text-gray-500"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className={`${
              pathname === "/shop"
                ? "text-primary"
                : " text-[14px] text-gray-500"
            }`}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={`${
              pathname === "/products"
                ? "text-primary"
                : " text-[14px] text-gray-500"
            }`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "text-primary"
                : " text-[14px] text-gray-500"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
