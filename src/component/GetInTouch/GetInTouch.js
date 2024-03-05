import React from "react";
import img from "./../../Assets/images/abc.png";

export default function GetInTouch() {
  return (
    <div>
      <section className="max-w-full px-8 py-16">
        <div className="flex relative">
          <div className=" w-[50%] h-[90vh] py-8  z-10">
            <img src={img} alt="" className="h-full w-full bg-center" />
          </div>
          <div className=" absolute right-8 w-[53%] h-[95vh] bg-[#F3F4F6] z-0 ">
            <div className="pl-32  pr-16 py-52">
            <h2 className="text-3xl  font-bold mb-4">
            Lorem ipsum dolor sit amet, 
            <br />consectetur adipisicing elit. Tempore, debitis.
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
            <button className="mt-4 px-12 py-2 bg-[#4F46E5] text-white rounded border-2 hover:bg-transparent hover:border-[#4F46E5] hover:text-[#4F46E5]">Get in Touch</button>
            </div>
          </div>
          
            
        </div>
      </section>
    </div>
  );
}
