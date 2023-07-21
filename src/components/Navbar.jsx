import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, Route, Routes } from "react-router-dom";
import Budget from "../pages/Budget";
import Home from "../pages/Home";
import Aboutus from "./Aboutus";
import SignOn from "../pages/SignOn";
import Register from "../pages/Register";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[20px] font-bold text-[#ab0c26] ">
        <Link to="/">
          <h1 className="w-full text-4xl font-bold text-[#ab0c26 font-['Segoe_UI']">
            TracMate.
          </h1>
        </Link>

        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/">
              <h4 className="text-[20px] font-bold font-['Segoe_UI']">Home</h4>
            </Link>
          </li>
          <li className="p-4">
            <Link to="/Budget">
              <h4 className="text-[20px] font-bold font-['Segoe_UI']">
                Budget
              </h4>
            </Link>
          </li>
          <li className="p-4">
            <Link to="/Aboutus">
              <h4 className="text-[20px] font-bold font-['Segoe_UI']">About</h4>
            </Link>
          </li>
          <li className="p-4">
            {authUser ? (
              <Link to="/SignOn">
                <h4
                  className="text-[20px] font-bold font-['Segoe_UI']"
                  onClick={userSignOut}
                >
                  Sign Out
                </h4>
              </Link>
            ) : (
              <Link to="/SignOn">
                <h4
                  className="text-[20px] text-[#000300] font-bold font-['Segoe_UI'] bg-[#ab0c26] rounded-md pb-1 px-1 hover:bg-[var(--green-light)]"
                  onClick={userSignOut}
                >
                  Login
                </h4>
              </Link>
            )}
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#ab0c26] m-4">
            TracMate.
          </h1>
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/Budget">Budget</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/Aboutus">About</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            {authUser ? (
              <Link
                
                onClick={userSignOut}
                to="/SignOn"
              >
                Sign Out
              </Link>
            ) : (
              <Link
               
                onClick={userSignOut}
                to="/SignOn"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Budget" element={<Budget />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/SignOn" element={<SignOn />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Navbar;
