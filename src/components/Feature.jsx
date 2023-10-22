import React, { useState } from "react";
import DownArrow from "../assets/images/icon-arrow-down.svg";
import UpArrow from "../assets/images/icon-arrow-up.svg";

const Feature = ({ features }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="realtive flex flex-col items-center ">
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex gap-x-3 items-center justify-between bg-transparent border-transparent"
      >
        Feature
        {!isOpen ? (
          <img src={DownArrow} className="h-2" />
        ) : (
          <img src={UpArrow} className="h-2" />
        )}
      </button>
      {isOpen && (
        <div className="md:bg-Almost_White md:shadow-xl shadow-slate-900  md:ml-16  md:shadow-xlg  md:absolute w-[130px] top-20 flex flex-col gap-y-3 items-start rounded-lg p-2">
          {features.map((feature) => (
            <div className="flex ml-7 md:ml-[-20px] w-full py-1 justify-between">
              <img src={feature.icon} className="h-5" />
              <di className="ml-2">{feature.name}</di>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feature;
