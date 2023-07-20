import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import SignUp from "./auth/SignUp";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [visible, setVisible] = useState(false)

  const isVisible = () => {
    if(!visible){
        return null;
    }else if(visible){
        <div ><SignUp /></div>
    }
  }

  const handleToggle = () => {
    setVisible((current) => !current);
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
        console.log("sign in successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mx-auto my-auto text-center">
      {authUser ? (
        <div className="mt-[-4%]">
          <form className="form py-[-10px]">
            <p className="text-center mx-auto font-bold text-2xl text-white">{`Signed in as ${authUser.email}`}</p>
            <button
              className="btn w-1/2 btn-block font-serif p-2 rounded-full text-xl font-bold text-white"
              onClick={userSignOut}
            >
              Sign Out
            </button>
          </form>
        </div>
      ) : (
        <div className="mt-[-4%]">
          <form className="form py-[-10px]">
            <p className="text-center mx-auto font-bold text-2xl text-white">
              No User signed in
            </p>
            <button
              className="btn font-serif mx-auto py-auto rounded-full font-bold text-white"
              onClick={handleToggle}
            >
              <h2 className="pt-2 text-white font-bold text-2xl">
                Need to sign up?
              </h2>
            </button>
          </form>
        </div>
      )}
      <div>{isVisible()}</div>
    </div>
  );
};

export default AuthDetails;
