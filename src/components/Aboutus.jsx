import React from "react";
import Laptop from "../assets/laptop.jpg";
import Footer from "./Footer";

const Aboutus = () => {
  return (
    <div className="">
      <div className=" bg-white py-[150px] px-4 border-solid border-8 border-[#ab0c26]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="mx-auto my-auto text-left ">
            <p className="text-[#ab0c26] text-6xl font-['Segoe_UI']">About Us</p>
            <p className="font-bold text-xl text-[#a11d32] font-['Segoe_UI']"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="font-['Segoe_UI'] text-[#ab0c26] font-bold text-left ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              commodi placeat vero veniam, laborum, assumenda iusto eligendi
              magnam, vitae temporibus non voluptates incidunt ullam eius
              blanditiis hic! Rei elit. Nihil commodi placeat vero
              veniam,  eligendi magnam, vitae temporibus
              non voluptates incidunt ullam eius blanditiis hic! Reiciendis,
              facilis ratione! 
            </p>
            <button className="bg-[#ab0c26] w-[200px] rounded-md font-medium mx-auto py-3 flex justify-center mb-5 font-['Segoe_UI'] text-white">Read More</button>
          </div>
          <img className="w-[500px] h-[300px] mx-auto my-auto rounded-lg" src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="/" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Aboutus;
