import React from "react";
import logo from "../../Assets/images/logo.svg"

const Navbar = () => {
  return (
    <><nav className="w-full fixed top-0 z-50 bg-white border-b-2">
      <div className="max-w-screen-xl mx-auto bg-white flex py-4 justify-between px-3 align-middle text-black font-semibold   ">
        <div className="flex align-middle gap-2">
          <img src={logo} alt="" />
          <span className="text-2xl">GeekFood</span>
        </div>
        <div className="flex ">
          <ul  className=" gap-6 sm:flex hidden ">
            <li className="text-blue-600">Home</li>
            <li>Quote</li>
            <li>Resturent</li>
            <li>Foods</li>
            <li>Contact</li>
          </ul>
          
        </div>
        <div><button className="py-1 px-4 bg-blue-600 text-white font-semibold border-none rounded-lg">Get started</button>
        <span className=" ml-2 text-xl sm:hidden"><i class="ri-menu-line"></i> </span>
        </div>
        
      </div>
      </nav>
    </>
  );
};
export default Navbar;
