import React from "react";
// import img from "./../../Assets/images/lady.png"

export default function Card({ Data }) {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto py-10 px-8">
        <div className="flex flex-wrap gap-4">
          {Data.map((e, i) => {
            return (
              <div key={i} className="max-w-[30%]">
                <div className="p-8 rounded-xl bg-[#F9FAFB] mb-4 ">
                  {e.desc}
                </div>
                <div className="flex gap-3 ">
                  <div className="w-[70px] h-[70px] rounded-full">
                    <img
                      src={e.imageUrl}
                      alt=""
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div className="py-2">
                    <h3 className="font-semibold">{e.name}</h3>
                    <p>Head of SEO</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
