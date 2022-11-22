import React from "react";
import { doctorNavLinks } from "./utils/NavDB";
import { useRecoilState } from "recoil";
import { activeNavItemState } from "../../atoms/ActiveNavBarAtom";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

function NavBar() {
  const [cookies, setCookie, removeCookie] = useCookies({});
  return (
    <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full ">
        {doctorNavLinks.slice(0, 4).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
        <div className="w-full border-t border-gray-200" />
        {doctorNavLinks.slice(4, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
      </div>
     
    </nav>
  );
}
function NavItem({ link }) {
  const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
  
  return (
    <div
      onClick={() => {

        setActiveNav(link.id)
        
      }}
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-gray-900 border-l-4 border-transparent ${
         activeNav === link.id && "border-gray-900 "
       } `}
    >
      <span> {link.icon}</span>
      <h1
        className={`text-gray-600 group-hover:text-black xl:flex hidden ${
          activeNav === link.id && "text-black "
        }} `}
      >
        <Link to={link.path}>
        {link.title}
        </Link>

      </h1>
    </div>
  );
}

export default NavBar;
