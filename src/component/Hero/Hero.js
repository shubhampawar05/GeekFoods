import React from "react";

const Hero = () => {
  return (
    <>
      <section className="h-[100vh]  bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-no-repeat bg-center">
        <div className="mx-auto max-w-screen-xl pt-48 px-4 lg:px-8 lg:h-screen">
          <div className="max-w-lg pt-5">
            <h1 className="text-5xl font-extrabold text-center">
              Let us find your <br />
              <span className="text-[#BE123C] pl-6">Forever Food.</span>
            </h1>
            <p className="mt-5 text-xl text-center  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
              Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>
          </div>
          <div className="mt-10">
            <a
              href="google.com"
              className="mt-5 border-3 border-black rounded px-10 py-2 bg-[#BE123C] text-white"
            >
              Search Now
            </a>{" "}
            <a
              href="google.com"
              className="ml-4 border-3 border-black rounded px-10 py-2 text-[#BE123C] bg-white"
            >
              Know more
            </a>
          </div>
        </div>
      </section>

 
    </>
  );
};

export default Hero;
