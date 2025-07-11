"use client";
import Profile from "../../../public/icons/profile.svg";
import Like from "../../../public/icons/like.svg";
import Search from "../../../public/icons/search.svg";
import Basket from "../../../public/icons/basket.svg";
import Phone from "../../../public/icons/phone.svg";

export default function Header() {
    return (
        <div className="flex justify-between mx-[15px] my-[20px]">
            <span className="font-logo text-white text-[33px]">Elfen lied</span>
            <div className="flex gap-[18px] items-center">
                <Search/>
                <Like/>
                <Profile/>
                <Basket/>
                <Phone/>
            </div>
        </div>
    )
}