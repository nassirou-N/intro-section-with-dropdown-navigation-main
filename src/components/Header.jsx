import Feature from "./Feature";
import Company from "./Company";

import Logo from "../assets/images/logo.svg";


import icons1 from "../assets/images/icon-todo.svg";
import icons2 from "../assets/images/icon-calendar.svg";
import icons3 from "../assets/images/icon-reminders.svg";
import icons4 from "../assets/images/icon-planning.svg";

import menuicons from "../assets/images/icon-menu.svg";
import closemenu from "../assets/images/icon-close-menu.svg";

const Header = () => {
  const features = [
    { name: "Todo List", icon: icons1 },
    { name: "Calendar", icon: icons2 },
    { name: "Reminders", icon: icons3 },
    { name: "Planning", icon: icons4 },
  ];

  const company = [{name:"History"},{name:"Our Team"},{name:"Blog"}]
  return (
    <header className="flex justify-between">
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
          <button className="bg-transparent px-3 py-[2px] border border-black border-1 rounded-md hover:shadow shadow-black">register</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
