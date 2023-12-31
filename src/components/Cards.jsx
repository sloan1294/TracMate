import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">1 User</h2>
          <p className="text-center text-4xl font-bold">$19.99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">25 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Unlimited Usage</p>
          </div>
          <button className="bg-[#ab0c26] w-[200px] rounded-md text-white font-bold my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">3 Users</h2>
          <p className="text-center text-4xl font-bold">$29.99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">50 GB Storage</p>
            <p className="py-2 border-b mx-8">3 User Allowed</p>
            <p className="py-2 border-b mx-8">Unlimited Usage</p>
          </div>
          <button className="bg-[#ab0c26] w-[200px] rounded-md my-6 mx-auto px-6 py-3 text-white font-bold">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">5 Users</h2>
          <p className="text-center text-4xl font-bold">$49.99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">100 GB Storage</p>
            <p className="py-2 border-b mx-8">5 User Allowed</p>
            <p className="py-2 border-b mx-8">Unlimited Usage</p>
          </div>
          <button className="bg-[#ab0c26] w-[200px] rounded-md text-white font-bold my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
