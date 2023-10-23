import React from "react";
import closemenu from "../assets/images/icon-close-menu.svg";
import Company from "./Company";
import Feature from "./Feature";

const MobileNav = ({ company, features,close }) => {
  return (
    <div className="z-20 flex flex-col relative bg-black h-full">
      <img src={closemenu} className="h-8 w-8 absolute top-5 right-7" onClick={close} />
      <div className="absolute top-[6rem] left-6">
        <ul className="flex flex-col gap-5">
          <li className="px-2">
            <Feature features={features} />
          </li>
          <li className="px-2">
            <Company company={company} />
          </li>
          <li className="ml-[-35px]">Careers</li>
          <li className="ml-[-35px]">About</li>
        </ul>
        <div className="flex items-center justify-center  flex-col ml-1/2 w-full  mt-10 gap-4">
          <div className="cursor-pointer ">Login</div>
          <button className="bg-transparent px-10 py-[2px] border border-black border-1 rounded-md hover:shadow shadow-black">
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
