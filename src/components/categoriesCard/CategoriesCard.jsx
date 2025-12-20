"use client";

import React from "react";
import ButtonCategoriesCard from "../../../public/icons/buttonCategoriesCard.svg";
import Inscription from "../../../public/icons/inscription.svg";
import CountBackground from "../../../public/icons/countBackground.svg";

export const CategoriesCard = ({
  image,
  title,
  count,
  openCategoriesModal,
}) => {
  return (
    <div className="relative bg-[url('/icons/categoriesCard.svg')] h-[257px] w-[216px] bg-contain bg-center flex justify-center ">
      <div className="absolute top-[20px] left-0 uppercase text-white font-medium font-main text-[15px]">
        {title}
      </div>
      <div className="flex justify-center items-center h-[257px] w-[216px]">
        {React.cloneElement(image, { height: "138px" })}
      </div>
      <div className="absolute -right-6 top-[80px]">
        <CountBackground />
        <div className="text-white absolute top-1 -rotate-23 flex right-2 gap-[3px] font-price text-[25px]">
          {count}
          <p className="font-main text-[13px] flex justify-center items-center font-medium">
            шт
          </p>
        </div>
      </div>
      <div className="absolute left-2 top-[130px]">
        <Inscription />
      </div>
      <button className="absolute -bottom-8" onClick={openCategoriesModal}>
        <ButtonCategoriesCard />
      </button>
    </div>
  );
};
