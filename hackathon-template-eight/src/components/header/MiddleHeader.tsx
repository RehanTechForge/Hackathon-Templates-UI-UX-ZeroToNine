import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const MiddleHeader = () => {
  return (
    <div className="bg-[#f1f2f4] py-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link href={"/"}>
          <Image
            src={"/Logo.png"}
            alt="Logo"
            height={40}
            width={170}
            sizes="100"
            className="object-cover"
          />
        </Link>
        <div>
          <button className="rounded bg-white px-4 py-2 text-[#272343] flex gap-2 items-center justify-center">
            <span>
              <IoCartOutline />
            </span>
            <span>Cart</span>
            <span className="bg-[#007580] rounded-full h-[20px] w-[20px] flex justify-center items-center text-[10px] p-2 text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
