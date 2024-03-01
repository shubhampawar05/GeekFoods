import React from "react";
import { Data } from "../Data/Data";
const Quotes = () => {
  return (
    <div  className="flex flex-col gap-20 my-10 ">
     {
        Data.map((item,i)=>{
            return(
                <div className="bg-white max-w-screen-xl w-full mx-auto border border-slate-300 shadow shadow-black px-5 py-5 text-center rounded-lg  ">
                <h2 className="text-3xl font-bold">
                 {item.disc}
                </h2>
                <p className="my-5">{item.author}</p>
              </div>
            )
        })
     }
    </div>
  );
};

export default Quotes;
