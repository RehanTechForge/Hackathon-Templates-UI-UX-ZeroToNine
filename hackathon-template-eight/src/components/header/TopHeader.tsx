import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaAngleDown, FaCheck } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className=" bg-[#272443]">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="flex gap-2 text-sm">
          <span>
            <FaCheck />
          </span>
          <span>Free shipping on all orders over $50</span>
        </div>
        <ul className="flex gap-4 justify-center items-center text-sm capitalize">
          <li className="flex gap-1 items-center">
            <span>Eng</span>
            <FaAngleDown />
          </li>
          <li className="flex gap-1 items-center uppercase">faqs</li>
          <li className="flex gap-1 items-center">
            <AiOutlineExclamationCircle />
            <span>need help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
