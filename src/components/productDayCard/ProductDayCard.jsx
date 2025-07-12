"use client";

import React from "react";

import BasketYellow from "../../../public/icons/basketYellow.svg";
import Ellipse1 from "../../../public/icons/Ellipse1.svg";
import Ellipse2 from "../../../public/icons/Ellipse2.svg";

export const ProductDayCard = ({
  image,
  backgroundText,
  title,
  description,
  price,
  number,
}) => {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <div className="mb-4 z-20">{image}</div>
        <div className="absolute -z-10">
          <div className="font-price uppercase tracking-[0%] font-normal whitespace-nowrap overflow-hidden text-[71px] text-light-primary">
            {backgroundText}
          </div>
          <div className="uppercase font-main font-medium text-[12px] text-secondary">
            товар дня
          </div>
        </div>
        <div className="absolute z-60 w-full h-full">
          <Ellipse2 className="absolute right-0 bottom-0 " />
          <Ellipse1 className="absolute right-0 bottom-0 h-[85px] " />
          <button className="flex text-white font-main font-medium text-[16px] z-10 items-center gap-2 absolute right-0 bottom-0 w-[190px] h-[90px] justify-center items-center">
            <BasketYellow /> Купить
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <h2 className="font-main mb-2 text-white font-medium uppercase text-[23px]">
            {title}
          </h2>
          <p className="text-white font-medium font-main text-[13px] leading-[20px] pr-[60px]">
            {description}
          </p>
          <div className="flex gap-[7px]">
            <p className="mt-4 text-secondary uppercase text-[30px] tracking-wide font-price font-normal">
              {price}
            </p>
            <p className="text-secondary font-normal font-main text-[20px] my-[18px]">
              ₽
            </p>
          </div>
        </div>
        <div className="bg-white p-[20px] rounded-full text-primary font-price text-[25px] flex items-center h-[50%]">
          0{number}
        </div>
      </div>
    </div>
  );
};
