import React from "react";
import {
  BellIcon,
  ChipIcon,
  InboxIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

function Header({logout}) {
  return (
    <div className=" w-full py-6 bg-[#F0F5F5] items-center justify-between flex px-12">
   
      <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2   ">
      </div>
      
      <div className="items-center w-full justify-center flex space-x-4">
     
      </div>
      {/* icons */}
      <div className="items-center justify-end space-x-6 flex w-half">
        {/* <BellIcon className="header-icon" />
        <InboxIcon className="header-icon" />
        <UserCircleIcon className="header-icon" /> */}
        <button
									class="w-full px-2 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
									onClick={logout}
								>
                                
Logout
								
								</button>
      </div>
    </div>
  );
}

export default Header;
