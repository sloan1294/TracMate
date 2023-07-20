import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, Route, Routes } from "react-router-dom";
import "./auth.css";

const Signout = () => {
  const [authUser, setAuthUser] = useState(null);

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
  const handleClick1 = () => {
    return window.location.reload();
  };
  return (
    <div>
      {authUser ? (
        <div>
          <button
            className="text-white hover:bg-orange-400 font-bold py-2 px-8 my-3 rounded-lg"
            onClick={userSignOut}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div onClick={handleClick1}>
          {" "}
          <button className="bunk text-white hover:bg-orange-400 font-bold py-2 px-8 mt-3 rounded-lg ">
            <Link to={"/"}>Log in</Link>
          </button>
        </div>
      )}
    </div>
  );
};
