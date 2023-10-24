import React from "react";

import mobile_hero from "../assets/images/image-hero-mobile.png";
import desktop_hero from "../assets/images/image-hero-desktop.png";

import databiz from "../assets/images/client-databiz.svg";
import maker from "../assets/images/client-maker.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";

const Home = () => {
  return (
    <div className="flex absolute z-0 overflow-hidden flex-col-reverse md:flex-row  md:mx-14  items-center justify-center">
      {/**left */}
      <div className="flex flex-col md:items-start items-center  mx-auto   md:mr-[10rem] ">
        <h1 className="hidden md:block text-start text-6xl font-bold w-full">
          Make <br />
          remote work
        </h1>
        <h1 className="md:hidden text-start px-auto md:tracking-wider text-4xl align-top font-bold md:text-[4rem] md:w-[100%]">
          Make remote work
        </h1>
        <p className=" my-10 md:text-left md:w-96 text-xl text-black/40">
          Get your taeam in sync. no matter your location.Streamline
          processes.create team rituals. and watch productivity soar.
        </p>
        <button className="py-3 px-8 bg-black text-white rounded-xl border border-black hover:bg-transparent hover:text-black  my-7">
          Learn more
        </button>
        <div className="flex gap-4 my-4">
          <img className="h-5 " src={databiz} />
          <img className="h-5 " src={audiophile} />
          <img className="h-5 " src={meet} />
          <img className="h-5 " src={maker} />
        </div>
      </div>
      {/**right */}
      <div className="my-20 md:w-[600px] md:h-[600px]">
        <img src={mobile_hero} className="md:hidden" />
        <img src={desktop_hero} className="hidden md:block " />
      </div>
    </div>
  );
};

export default Home;
