import Navbar from "@/components/Navbar";
import CardExample from "./components/Card";
import { AppSidebar } from "./components/App-sidebar";
import "./App.css";

const App = () => {
  return (
    <>
      <AppSidebar className="glass" />
      <div className="min-h-screen w-full bg-sky-500 grid place-items-center relative">
        <div className="fixed top-0 flex w-full py-2 items-center justify-center glass">
          <Navbar className="px-4 py-2 rounded" />
        </div>
        <CardExample />
      </div>
    </>
  );
};

export default App;
