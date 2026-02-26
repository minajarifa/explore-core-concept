import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <div className="my-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
