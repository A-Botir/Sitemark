import React from "react";

const Hero = () => {
  return (
    <section className="m-auto mt-40 w-[70%]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-[60px] font-semibold ">
          Our latest{" "}
          <span className="font-semibold leading-[67px]  text-[#0959aa] ">
            products
          </span>
        </h1>
        <p className="text-center text-[15px] leading-[23px] text-[#4c5967]">
          Explore our cutting-edge dashboard, delivering high-quality solutions
          tailored to your needs. Elevate your experience with top-tier features
          and services.
        </p>
        <form className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="rounded-[10px] border border-[#D6E2EB] px-[14px] py-[6px] outline-4 outline-[#9CCCFC] active:border-[#0A66C2] active:outline"
          />
          <button className="rounded-xl bg-gradient-to-b from-[#0A66C2]  to-[#064079] px-4 py-[6px] text-[13px] font-medium text-[#F0F7FF] hover:bg-[#2879ca] active:px-3 active:py-1">
            Start now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
