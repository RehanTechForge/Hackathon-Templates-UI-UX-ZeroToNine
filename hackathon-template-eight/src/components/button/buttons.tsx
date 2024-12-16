import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface IButtonProps {
  text: string;
  link: string;
  icon?: React.ReactNode;
}

const MainButton = ({ text, link, icon }: IButtonProps) => {
  return (
    <Link
      href={link}
      className="bg-primary rounded-md px-6 text-[16px] w-max justify-center items-center py-4 flex gap-4 capitalize text-white"
    >
      {text}
      {icon ? icon : ""}
    </Link>
  );
};

export default MainButton;
