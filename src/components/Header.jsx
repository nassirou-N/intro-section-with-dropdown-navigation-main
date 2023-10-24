import Feature from "./Feature";
import Company from "./Company";

import Logo from "../assets/images/logo.svg";

import icons1 from "../assets/images/icon-todo.svg";
import icons2 from "../assets/images/icon-calendar.svg";
import icons3 from "../assets/images/icon-reminders.svg";
import icons4 from "../assets/images/icon-planning.svg";

import menuicons from "../assets/images/icon-menu.svg";

import MobileNav from "./MobileNav";
import { useState } from "react";

const Header = () => {
  const features = [
    { name: "Todo List", icon: icons1 },
    { name: "Calendar", icon: icons2 },
    { name: "Reminders", icon: icons3 },
    { name: "Planning", icon: icons4 },
  ];

  const company = [{ name: "History" }, { name: "Our Team" }, { name: "Blog" }];

  const [mobile, setMobile] = useState(false);
  const CloseToggle = () => setMobile(false);

  return (
    <header className="flex relative justify-between">
      <div className="flex gap-x-14">
        <img src={Logo} />
        <ul className="hidden gap-x-12 md:flex">
          <li className="px-2">
            <Feature features={features} />
          </li>
          <li className="px-2">
            <Company company={company} />
          </li>
          <li className="px-2">Careers</li>
          <li className="px-2">About</li>
        </ul>
      </div>
      <nav className="hidden md:flex ">
        <div className="flex gap-4">
          <div className="cursor-pointer">Login</div>
          <button className="bg-transparent px-3 py-[3px] border border-black border-1 rounded-lg hover:shadow shadow-black">
            register
          </button>
        </div>
      </nav>

      {/**mobile view */}
     
      <img
        src={menuicons}
        onClick={() => {
          setMobile((mobile) => !mobile);
        }}
        className="md:hidden"
      />
   
      {mobile && (
        <div className="md:hidden transition-all duration-1000 ease-out bg-black shadow-2xl shadow-black/30  right-[-30px] absolute w-2/3 a h-[120vh]">
          <MobileNav
            features={features}
            company={company}
            close={CloseToggle}
          />
        </div>
      )}

    </header>
  );
};

export default Header;
