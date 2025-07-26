"use client";
import FooterIcon from "../../../public/icons/footerIcon.svg";

export default function Footer() {
  return (
    <div className="flex mx-[15px] mb-[50px] justify-between items-center">
      <div className="text-white text-[13px] font-medium font-main leading-[20px]">
        <div className="mb-[15px]">
          Все права <br /> защищены
        </div>
        @2025
      </div>
      <FooterIcon />
    </div>
  );
}
