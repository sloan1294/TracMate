import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import SignOn from "./pages/SignOn"


const App = () => {
  const [authUser, setAuthUser] = useState(null);

  const checkUser = () => {
    window.location.href = "http://localhost:3000/SignOn"
  }

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
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
