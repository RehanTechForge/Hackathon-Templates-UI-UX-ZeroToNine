import React from "react";
import MainButton from "../button/buttons";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const MainSection = () => {
  return (
    <section className="px-4 sm:px-10 py-32 bg-[#f1f2f4] grid grid-cols-2">
      <div className="flex justify-center flex-col gap-4">
        <span className="text-secondary text-[14px] uppercase">
          Welcome to chairy
        </span>
        <h1 className="text-secondary text-[60px] font-bold leading-none	 mb-4">
          Best Furniture Collection for your interior.
        </h1>
        <MainButton text="Shop Now" link="/shop" icon={<FaArrowRight />} />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={"/chair.png"}
          alt="Chair"
          width={400}
          height={190}
          quality={100}
          sizes="100"
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default MainSection;
