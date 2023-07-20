import SignUp from "../components/auth/SignUp";
import AuthDetails from "../components/AuthDetails";

import "./pages.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <main>
      <form>
        <SignUp />
      </form>
    </main>
  );
}

export default App;
