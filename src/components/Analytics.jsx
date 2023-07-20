import React from "react";
import Laptop from "../assets/laptop.jpg";
import { Link, Route, Routes } from "react-router-dom";
import Budget from "../pages/Budget"

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#ab0c26] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm-text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            voluptatum laboriosam esse ad distinctio, maxime minus nemo neque,
            possimus iusto ipsum voluptatibus, aspernatur repellendus.
            Consequuntur velit rem nostrum magnam ea?
          </p>
          <Link to="/Budget" className="bg-[#ab0c26] text-white w-[200px] text-center rounded-md font-medium my-6 mx-auto pt-2 hover:bg-[var(--green-light)]">
            <h4 className="text-[20px] font-bold font-['Segoe_UI']">Get Started!</h4>
          </Link>
        </div>
      </div>
      <Routes>

        <Route path="/Budget" element={<Budget />} />

      </Routes>
    </div>
  );
};

export default Analytics
