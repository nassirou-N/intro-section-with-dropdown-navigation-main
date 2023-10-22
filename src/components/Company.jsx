import React, { useState } from "react";
import DownArrow from "../assets/images/icon-arrow-down.svg";
import UpArrow from "../assets/images/icon-arrow-up.svg";

const Company = ({company}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="realtive flex flex-col items-center ">
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex items-center gap-x-3 justify-between bg-transparent border-transparent"
      >
        Company
        {!isOpen ? (
          <img src={DownArrow} className="h-2" />
        ) : (
          <img src={UpArrow} className="h-2" />
        )}
      </button>
      {isOpen && (
        <div className="md:bg-Almost_White md:shadow-xl shadow-slate-900  md:ml-[30px]  md:absolute w-[130px] top-20 flex flex-col gap-y-2 items-start rounded-lg p-2">
         {company.map((company) => (
            <div className="flex py-1 ml-7 w-full md:ml-0 justify-between">
              <di className="ml-3">{company.name}</di>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Company;
