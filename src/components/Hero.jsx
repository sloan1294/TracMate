import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Typed from "react-typed";
import Budget from "../pages/Budget";

const Hero = () => {
  return (
    <div className="text-white pb-[100px] max-[642px]:pt-20">
      <div className="max-w-[800px] mt-[-225px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#ab0c26] font-bold sm:text-xl pb-3 pt-[100px] sm:pt-[200px] md:pt-[200px] lg:pt-[200px] 2xl:pt-[150px]">
          Always be prepared
        </p>
        <p className="text-[#ab0c26] font-bold p-2 md:text-7xl sm:text-6xl text-4xl ">
          Taking Care Of Your
        </p>
        <Typed
          className="md:text-7xl sm:text-4xl text-4xl font-bold md:pl-4 pl-2 text-[#ab0c26] border-b border-4 pb-3"
          strings={["Family", "Business", "Life"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
        <div className="flex justify-center items-center">
          <div classNAme>
            <p className="md:text-5xl sm:text-6xl text-4xl font-bold py-4 pt-[85px]">
              Stay up to date on your budget!
            </p>
          </div>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 pt-[80px] lg:pt-[50px] max-[642px]:pt-2">
          Monitor your data analytics
        </p>

          <Link to="/Budget" className="bg-[#ab0c26] w-[200px] rounded-md font-medium my-6 mx-auto pt-2 text-white hover:bg-[var(--green-light)]">
            <h4 className="text-[20px] font-bold font-['Segoe_UI']">Get Started!</h4>
          </Link>
   
      </div>
      <Routes>

        <Route path="/Budget" element={<Budget />} />

      </Routes>
    </div>
  );
};

export default Hero;
