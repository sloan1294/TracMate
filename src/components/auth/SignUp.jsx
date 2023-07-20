import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import "./auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    return window.location.href = "/SignOn"
  }
  
  return (
    <div className="form sign-in-container">
      <form onSubmit={signUp}>
        <h2 className="font-bold text-center text-white">Create Account!</h2>
        <input
          type="email"
          className="form-input font-bold"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <input
          type="password"
          className="form-input"
          placeholder="Enter your email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-block text-lg font-bold font-serif p-2 rounded-lg"  onClick={handleClick}>Sign up</button>
      </form>
    </div>
  );
};


export default Signup