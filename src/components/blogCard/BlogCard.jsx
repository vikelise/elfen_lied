"use client";

import BlogCardTime from "../../../public/icons/blogCardTime.svg";

export const BlogCard = ({ image, title, number, time }) => {
  return (
    <div className="relative mb-[150px]">
      <div className="bg-[url('/icons/blogBackground.svg')] bg-no-repeat grid grid-cols-2 gap-[25px] p-[10px] min-w-[340px] text-white mt-[35px]">
        <div>
          <div className="flex justify-between">
            <div className="font-main font-medium text-[13px]">0{number}</div>
            <div className="font-main font-medium text-[13px] text-right">
              Laura <br /> Busche
            </div>
          </div>
          <div className="text-left font-main font-medium text-[15px] uppercase mt-[30px]">
            {title}
          </div>
          <div className="font-main font-medium text-[12px] uppercase text-left mt-[30px]">
            14 Января <br />
            2023
          </div>
        </div>
        <div className="min-w-[140px]">{image}</div>
      </div>
      <div className="absolute bottom-[25px] left-[75px] z-6">
        <BlogCardTime className="z-0 absolute" />
        <div className="text-white font-price font-normal text-[25px] z-1 absolute left-[25px] top-[5px] -rotate-15">
          {time}
          <p className="font-main font-medium text-[12px] z-1 absolute top-[25px] -left-[5px]">
            мин
          </p>
        </div>
      </div>
    </div>
  );
};
