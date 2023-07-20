import SignIn from "../components/auth/SignIn";
import AuthDetails from "../components/AuthDetails";
import "./pages.css";

function App() {
  return (
    <main className="flex flex-col">
      <div className="">
        <div className="pt-[5%]">
          <SignIn />
        </div>
        <div className="py-[-30px]">
          <AuthDetails />
        </div>
      </div>
    </main>
  );
}

export default App;
