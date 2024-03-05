import React from "react";
import footerlogo from "../../Assets/images/footerlogo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-300 w-full">
      <div  className="max-w-7xl mx-auto px-2  text-center border ">
      <div className="px-3">
        <div className="flex justify-center py-10  text-teal-600">
          <img src={footerlogo} alt="" className="w-[200px] text-center text-red-500" />
        </div>
        <div className="py-7">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          <p>Velit laborum alias et veritatis! Ipsum, quas.</p>
        </div>
        <div className="flex justify-center ">
          <ul className="flex gap-5 sm:gap-10 flex-wrap justify-center align-middle">
            <li> About</li>
            <li>Careers</li>
            <li>History</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="text-2xl  flex justify-around max-w-40 py-6 mx-auto">
          <i class="ri-facebook-circle-fill"></i>
          <i class="ri-instagram-line"></i>
          <i class="ri-twitter-fill"></i>
          <i class="ri-github-fill"></i>
        </div>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
