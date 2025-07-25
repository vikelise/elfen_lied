"use client";
import "swiper/css";
import "swiper/css/navigation";
import Points from "../../../public/icons/points.svg";
import { BlogCard } from "@/components/blogCard/BlogCard.jsx";
import BlogPhoto1 from "../../../public/photos/blogPhoto1.svg";
import BlogPhoto2 from "../../../public/photos/blogPhoto2.svg";
import BlogPhoto3 from "../../../public/photos/blogPhoto3.svg";
import Line from "../../../public/icons/line.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

export default function BlogSlider() {
  const cards = [
    {
      image: <BlogPhoto1 />,
      title: (
        <>
          напольные <br />
          зеркала
        </>
      ),
      number: "1",
      time: "3",
    },
    {
      image: <BlogPhoto2 />,
      title: (
        <>
          торшеры <br /> и лампы
        </>
      ),
      number: "2",
      time: "3",
    },
    {
      image: <BlogPhoto3 />,
      title: (
        <>
          кресла <br /> и стулья
        </>
      ),
      number: "3",
      time: "3",
    },
  ];

  const [number, setNumber] = useState(1);

  return (
    <div className="mt-[200px] mx-[15px] ">
      <div className="flex justify-between text-white font-main font-medium text-[23px] uppercase">
        <div className="flex items-center gap-[10px]">
          <Points />
          Блог
        </div>
        <div className="flex items-center font-price text-[23px] font-normal gap-[20px] tracking-[0.04em] mt-[5px]">
          0{number}
          <Line />
          03
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        onSlideChange={(swiper) => {
          setNumber(swiper.realIndex + 1);
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <BlogCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
