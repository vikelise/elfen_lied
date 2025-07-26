"use client";
import Profile from "../../../public/icons/profile.svg";
import Like from "../../../public/icons/like.svg";
import Search from "../../../public/icons/search.svg";
import Basket from "../../../public/icons/basket.svg";
import Phone from "../../../public/icons/phone.svg";
import React, { useState } from "react";
import Login from "@/components/login/Login.jsx";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between mx-[15px] my-[20px]">
        <span className="font-logo text-white text-[33px]">Elfen lied</span>
        <div className="flex gap-[18px] items-center">
          <Search />
          <Like />
          <Profile
            onClick={() => {
              setIsProfileOpen(true);
            }}
          />
          <Basket />
          <Phone />
        </div>
      </div>
      {isProfileOpen && (
        <Login
          close={() => {
            setIsProfileOpen(false);
          }}
        />
      )}
    </div>
  );
}
