import React from "react";
import { Messenger, SearchNormal1, HambergerMenu } from "iconsax-react";
import "./Navbar.css"; // Import the CSS file where you define custom styles

function Navbar() {
  return (
    <div className="bg-[#252037] h-16 flex flex-row items-center justify-center">
      <div className="flex flex-row justify-between w-full px-5">
        <div>
          <HambergerMenu size="32" color="#FF8A65" />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-[#4c446b] hover:bg-[#E03A6A] p-1 rounded-full">
            <SearchNormal1 size="18" color="#FFFFFF" />
          </div>
          <div className="bg-[#4c446b] hover:bg-[#E03A6A] p-1 rounded-full">
            <Messenger size="18" color="#FFFFFF" />
          </div>
          <div className="hover:text-white text-[#E03A6A] border border-[#E03A6A] hover:border-transparent cursor-pointer px-4 text-base rounded-2xl py-1 font-semibold">
            Sign Up
          </div>
          <div className="text-white hover:text-[#E03A6A] bg-[#E03A6A] hover:bg-transparent cursor-pointer px-4 text-base rounded-2xl py-1 font-semibold">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
