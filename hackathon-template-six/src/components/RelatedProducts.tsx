import React from "react";
import Card from "./Card";
import Link from "next/link";

const RelatedProducts = () => {
  return (
    <section className="px-10">
      <h1 className="font-poppins text-4xl font-medium text-center my-4">
        Related Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            desc={card.desc}
            price={card.price}
            curPrice={card.curPrice}
            discount={card.discount}
            isNew={card.isNew}
            image={card.image}
          />
        ))}
      </div>
      <div className="flex justify-center my-14">
        <button className="px-16 py-3 border-2 font-bold border-primary text-primary hover:bg-[#fff3e3]  transition duration-300">
          <Link href={"/shop"}>Show More</Link>
        </button>
      </div>
    </section>
  );
};
const cardData = [
  {
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: "3.500.000",
    curPrice: "2.500.000",
    discount: "-32%",
    image: "/cards/c1.png",
  },
  {
    title: "Leviosa",
    desc: "Stylish cafe chair",
    curPrice: "2.500.000",
    image: "/cards/c2.png",
  },
  {
    title: "Lolito",
    desc: "Luxury big sofa",
    price: "14.000.000",
    curPrice: "7.000.000",
    discount: "-32%",
    image: "/cards/c3.png",
  },
  {
    title: "Respira",
    desc: "Outdoor bar table and stool",
    isNew: true,
    curPrice: "500.000",
    image: "/cards/c4.png",
  },
];
export default RelatedProducts;