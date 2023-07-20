import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form sign-in-container">
      <form onSubmit={signIn}>
        <h2 className="font-bold text-center text-white">
          Log into your Account
        </h2>
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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-block text-xl font-bold font-serif p-2 rounded-lg text-white"
        >
          Log in
        </button>
      </form>
    </div>
  );
};
export default SignIn;
