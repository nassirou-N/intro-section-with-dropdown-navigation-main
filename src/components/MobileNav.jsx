import React from "react";
import closemenu from "../assets/images/icon-close-menu.svg";
import Company from "./Company";
import Feature from "./Feature";

const MobileNav = ({ company, features,close }) => {
  return (
    <div className=" z-0 flex items-start flex-col relative bg-white  h-full">
      <img src={closemenu} className="h-8 w-8 absolute top-5 right-7" onClick={close} />
      <div className=" mt-24 ml-5">
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
        
      </div>
      <div className="flex items-center justify-center  flex-col  w-full  mt-20 gap-4">
          <div className="cursor-pointer ">Login</div>
          <button className="bg-transparent  w-[80%] px-auto py-[2px] border border-black border-1 rounded-md hover:shadow shadow-black">
            register
          </button>
        </div>
    </div>
  );
};

export default MobileNav;
